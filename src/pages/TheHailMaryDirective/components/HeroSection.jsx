import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Calendar, MapPin, Users } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';
import './HeroSection.css';

const targetDate = new Date('2026-10-16T09:00:00+05:30');

export default function HeroSection() {
  const [isGlitching, setIsGlitching] = useState(true);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  // Loop the glitch forever in bursts
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 800); // Glitch burst duration
    }, 3500); // Time between bursts

    // Stop the initial glitch after 1.5s
    const initialTimer = setTimeout(() => {
      setIsGlitching(false);
    }, 1500);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(initialTimer);
    };
  }, []);

  // Formatting digits to 2 places
  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section className="hero-section">
      {/* Title */}
      <motion.div
        className="glitch-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glitch-title">
          THE HAIL MARY
          <span className={`glitch-directive ${isGlitching ? 'glitch-active' : ''}`}>
            DIRECTIVE
          </span>
        </h1>
      </motion.div>

      {/* Countdown */}
      <motion.div
        className="countdown-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="countdown-label">IMPACT IN</span>
        <div className="countdown-timer">
          <div className="countdown-box">
            <span className="countdown-digit">{pad(days)}</span>
            <span className="countdown-unit">DAYS</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-box">
            <span className="countdown-digit">{pad(hours)}</span>
            <span className="countdown-unit">HRS</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-box">
            <span className="countdown-digit">{pad(minutes)}</span>
            <span className="countdown-unit">MIN</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-box pulse">
            <span className="countdown-digit">{pad(seconds)}</span>
            <span className="countdown-unit">SEC</span>
          </div>
        </div>
      </motion.div>

      {/* HUD Cards */}
      <motion.div
        className="hero-hud"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="hero-hud-header">
          <span className="badge-live">
            <ShieldAlert size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }} />
            LIVE MISSION BRIEFING
          </span>
          <span className="organizer">CODEX PRESENTS FOR SYMBITECH 2026</span>
        </div>

        <div className="specs-grid">
          <div className="spec-item">
            <Calendar className="spec-icon" size={24} />
            <div>
              <span className="spec-label">MISSION DATES</span>
              <span className="spec-value">16th – 17th Oct 2026</span>
              <span className="spec-sub">9:00 AM Onwards</span>
            </div>
          </div>

          <div className="spec-item">
            <MapPin className="spec-icon" size={24} />
            <div>
              <span className="spec-label">LOCATION</span>
              <span className="spec-value">CL 3 & 4, 4th Floor</span>
              <span className="spec-sub">SIT Pune Campus</span>
            </div>
          </div>

          <div className="spec-item">
            <Users className="spec-icon" size={24} />
            <div>
              <span className="spec-label">SQUAD DIVISION</span>
              <span className="spec-value">4 Members / Team</span>
              <span className="spec-sub">Astronauts vs Mission Control</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>SCROLL FOR TRANSMISSION LOGS</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
}
