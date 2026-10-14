import { useRef, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioContext } from '../context/AudioContext';
import './SteeringDialSection.css';

export default function SteeringDialSection({ setIsMissionUnlocked }) {
  const { playPowerUp } = useContext(AudioContext);
  const dialRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const [stage, setStage] = useState(0); // Sequence from 0 to 3 (4 total targets)

  // Helper to ensure the next target is at least 3 slots away from the current one
  const getNextTarget = (current) => {
    let next;
    do {
      next = Math.floor(Math.random() * 16);
    } while (
      next === current ||
      Math.abs(next - current) < 4 ||
      Math.abs(next - current) > 12 // (16 - 4) prevents wrap-around closeness
    );
    return next;
  };

  // Pick initial target
  const [targetLedIndex, setTargetLedIndex] = useState(() => Math.floor(Math.random() * 16));
  const targetAngle = (targetLedIndex * 360) / 16;

  const calculateAngle = (clientX, clientY) => {
    if (!dialRef.current) return 0;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    let deg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    deg = (deg + 360 + 90) % 360;
    return deg;
  };

  const handlePointerDown = (e) => {
    if (isLocked) return;
    setIsDragging(true);
    setAngle(calculateAngle(e.clientX, e.clientY));
  };

  const handlePointerMove = (e) => {
    if (isLocked || !isDragging) return;
    setAngle(calculateAngle(e.clientX, e.clientY));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => window.removeEventListener('pointerup', handlePointerUp);
  }, []);

  // Check alignment
  useEffect(() => {
    if (isLocked) return;

    let diff = Math.abs(angle - targetAngle);
    if (diff > 180) diff = 360 - diff;

    // Tolerance of ±5 degrees
    if (diff <= 5) {
      if (stage < 3) {
        // Move to next target in the sequence
        setTargetLedIndex(prev => getNextTarget(prev));
        setStage(s => s + 1);
      } else {
        // Sequence complete
        setIsLocked(true);
        setAngle(targetAngle); // Snap exactly to final target
        setStage(4);

        // --- CINEMATIC AUTO-ADVANCE EFFECT ---

        // 1. Trigger the white flash and global screen shake
        setShowFlash(true);
        const pageRoot = document.querySelector('.hailmary-page');
        pageRoot?.classList.add('screen-shake');

        // 2. Play the power up sound and wait for it to finish
        if (playPowerUp) {
          playPowerUp().then(() => {
            // 3. Audio finished! Stop flash and shake.
            setShowFlash(false);
            pageRoot?.classList.remove('screen-shake');

            // 4. Reveal the bottom sections
            if (setIsMissionUnlocked) setIsMissionUnlocked(true);

            // 5. Scroll down to them smoothly
            setTimeout(() => {
              const target = document.getElementById('mission-specs');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          });
        }
      }
    }
  }, [angle, targetAngle, isLocked, stage]);

  // Generate 16 LED dots
  const leds = Array.from({ length: 16 }).map((_, i) => {
    const ledAngle = (i * 360) / 16;
    const isTargetLed = i === targetLedIndex;

    // We need to keep transform logic separate for each LED.
    // CSS uses string interpolation for transforms
    const transformString = `rotate(${ledAngle}deg) translateY(-135px)`;

    // When locked, ALL LEDs turn green, but we also pulse them or scale them
    return (
      <div
        key={ledAngle}
        className={`dial-led ${isTargetLed ? 'target' : ''} ${isLocked ? 'locked' : ''}`}
        style={{
          transform: isLocked ? `${transformString} scale(1.5)` : transformString
        }}
      />
    );
  });

  return (
    <section className="dial-section">
      <div className="dial-header">
        <h2 className="dial-title">MANUAL OVERRIDE</h2>
        <p className="dial-subtitle">ALIGN THE NAVIGATION DIAL</p>
      </div>

      <div className="dial-container">
        <div
          className={`dial-ring ${isLocked ? 'success' : ''}`}
          ref={dialRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          style={{ touchAction: 'none' }} // Crucial for mobile dragging
        >
          <div className="dial-leds">{leds}</div>
          <div className="dial-hub" />

          <div
            className="dial-needle-container"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="dial-needle" />
          </div>
        </div>
      </div>

      <div className="dial-status">
        {isLocked ? (
          <span className="status-locked">ALIGNMENT LOCKED ✓</span>
        ) : (
          <span className="status-pending">CALIBRATING... [ {stage} / 4 ]</span>
        )}
      </div>

      <AnimatePresence>
        {showFlash && (
          <motion.div
            className="cinematic-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

SteeringDialSection.propTypes = {
  setIsMissionUnlocked: PropTypes.func.isRequired,
};
