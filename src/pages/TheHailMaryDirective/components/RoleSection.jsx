import { useRef, useState, Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, PresentationControls, Bounds, Sparkles } from '@react-three/drei';
import './RoleSection.css';

function AstronautModel({ isHovered }) {
  const { scene } = useGLTF('/Astronaut.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Faster rotation on hover
      modelRef.current.rotation.y += isHovered ? 0.02 : 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <primitive object={scene} ref={modelRef} />
    </Float>
  );
}

function DomeModel({ isHovered }) {
  const { scene } = useGLTF('/GeodesicDome.gltf');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      // Rotate opposite direction
      modelRef.current.rotation.y -= isHovered ? 0.02 : 0.005;
      // Slight tilt bob
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>
      <primitive object={scene} ref={modelRef} />
    </Float>
  );
}

AstronautModel.propTypes = {
  isHovered: PropTypes.bool.isRequired,
};

DomeModel.propTypes = {
  isHovered: PropTypes.bool.isRequired,
};

// Background terminal effect for Mission Control
function TerminalBackground() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Initial lines
    const newLines = Array.from({ length: 15 }).map(() => `> INIT_SEC_0x${Math.floor(Math.random() * 16777215).toString(16).toUpperCase()}... OK`);
    setLines(newLines);

    // Scroll effect
    const interval = setInterval(() => {
      setLines(prev => {
        const next = [...prev.slice(1)];
        next.push(`> SYS_OP_${Math.random().toString(36).substring(2, 8).toUpperCase()}: RUNNING`);
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-bg-container">
      <div className="terminal-bg-text">
        {lines.map((line) => (
          <div key={line} className="terminal-line">{line}</div>
        ))}
      </div>
    </div>
  );
}

// Ensure models are preloaded
useGLTF.preload('/Astronaut.glb');
useGLTF.preload('/GeodesicDome.gltf');

export default function RoleSection() {
  const [hoveredRole, setHoveredRole] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const activeRole = hoveredRole || expandedCard;

  const isActive = (role) => activeRole === role;
  const isDimmed = (role) => activeRole !== null && activeRole !== role;

  return (
    <section className="role-section">
      <div className="role-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CHOOSE YOUR DIVISION
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Only cohesive units will survive the impact.
        </motion.p>
      </div>

      <div className="role-container">
        {/* Astronauts Card */}
        <motion.div
          className={`role-card astronaut-card ${isActive('astronaut') ? 'active' : ''} ${isDimmed('astronaut') ? 'dimmed' : ''}`}
          onMouseEnter={() => setHoveredRole('astronaut')}
          onMouseLeave={() => setHoveredRole(null)}
          onClick={() => setExpandedCard(expandedCard === 'astronaut' ? null : 'astronaut')}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="role-canvas-container">
            <Canvas dpr={[1, 1.25]} style={{ position: 'relative', zIndex: 1 }} camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} color="#ff2a2a" intensity={2} />
              <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1} />

              {isActive('astronaut') && (
                <Sparkles count={60} scale={5} size={2.5} speed={0.4} opacity={0.6} color="#ff2a2a" />
              )}

              <Suspense fallback={null}>
                <PresentationControls
                  global={false}
                  cursor
                  snap
                  speed={1}
                  zoom={1}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <Bounds fit clip observe margin={1.2}>
                    <AstronautModel isHovered={isActive('astronaut')} />
                  </Bounds>
                </PresentationControls>
                <Environment preset="night" />
              </Suspense>
            </Canvas>
          </div>

          <div className="role-content">
            <h3 className="role-title">ASTRONAUTS</h3>
            <p className="role-desc">
              The vanguard. You will deploy into the field, navigating physical obstacles,
              executing precise maneuvers, and retrieving critical components before time runs out.
            </p>
            <ul className="role-skills">
              <li>SPEED & AGILITY</li>
              <li>PHYSICAL ENDURANCE</li>
              <li>FIELD EXECUTION</li>
            </ul>
          </div>
        </motion.div>

        {/* Mission Control Card */}
        <motion.div
          className={`role-card control-card ${isActive('control') ? 'active' : ''} ${isDimmed('control') ? 'dimmed' : ''}`}
          onMouseEnter={() => setHoveredRole('control')}
          onMouseLeave={() => setHoveredRole(null)}
          onClick={() => setExpandedCard(expandedCard === 'control' ? null : 'control')}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="role-canvas-container">
            {isActive('control') && <TerminalBackground />}

            <Canvas dpr={[1, 1.25]} style={{ position: 'relative', zIndex: 1 }} camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} color="#00f0ff" intensity={2} />
              <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1} />
              <Suspense fallback={null}>
                <PresentationControls
                  global={false}
                  cursor
                  snap
                  speed={1}
                  zoom={1}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <Bounds fit clip observe margin={1.2}>
                    <DomeModel isHovered={isActive('control')} />
                  </Bounds>
                </PresentationControls>
                <Environment preset="night" />
              </Suspense>
            </Canvas>
          </div>

          <div className="role-content">
            <h3 className="role-title">MISSION CONTROL</h3>
            <p className="role-desc">
              The brains of the operation. You will remain at base, decrypting intel,
              solving complex puzzles, and guiding the Astronauts through the chaos.
            </p>
            <ul className="role-skills">
              <li>CRYPTOGRAPHY</li>
              <li>PUZZLE SOLVING</li>
              <li>STRATEGIC COMMAND</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
