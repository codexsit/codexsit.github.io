import { useRef, useState } from 'react';
import './UVTorchSection.css';

export default function UVTorchSection() {
  const sectionRef = useRef(null);
  // Start off-screen or centered
  const [pos, setPos] = useState({ x: 50, y: -200 });
  const [isActive, setIsActive] = useState(false);

  const handlePointerMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();

    // Calculate percentage relative to the element
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
    setIsActive(true);
  };

  const handlePointerLeave = () => {
    setIsActive(false);
  };

  return (
    <section className="uv-section">
      <div className="uv-header">
        <h2 className="uv-title">CLASSIFIED INTEL</h2>
        <p className="uv-subtitle">USE UV TO REVEAL</p>
      </div>

      <div
        className="uv-container"
        ref={sectionRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ touchAction: 'pan-y' }}
      >
        <div className="uv-paper-blank">
          <p className="uv-decoy-text">NO SIGNAL DETECTED. SECTOR CLEAR.</p>
        </div>

        {/* The hidden layer revealed by the mask */}
        <div
          className="uv-paper-revealed"
          style={{
            '--mx': `${pos.x}%`,
            '--my': `${pos.y}%`,
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div className="uv-secret-content">
            <h3 className="uv-secret-title">TOP SECRET // EYES ONLY</h3>
            <p className="uv-secret-text">
              THE STARS ALIGN AT CHECKPOINT THREE.<br /><br />
              A rogue transmission was intercepted on a ghost frequency.<br />
              The coordinates match the impact trajectory.<br />
              Do not trust the primary navigation system.<br />
              Use the manual override immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
