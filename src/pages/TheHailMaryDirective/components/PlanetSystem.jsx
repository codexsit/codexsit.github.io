import { useRef, useContext, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import ScrollContext from '../context/ScrollContext';

const planetFiles = [
  '/Planet_1.gltf',
  '/Planet_6.gltf',
  '/Planet_7.gltf',
  '/Planet_8.gltf',
  '/Planet_9.gltf',
  '/Planet_10.gltf',
  '/Planet_11.gltf',
];

planetFiles.forEach((file) => useGLTF.preload(file));

const SPACING = 30;
const TOTAL_PLANETS = planetFiles.length;
const TOTAL_WIDTH = TOTAL_PLANETS * SPACING;

function Planet({ file, index, scale, offsetZ, offsetY }) {
  const { scene } = useGLTF(file);
  const planetRef = useRef();
  const { progress } = useContext(ScrollContext);

  // Randomize rotation speeds
  const rotSpeedX = useMemo(() => (Math.random() - 0.5) * 0.005, []);
  const rotSpeedY = useMemo(() => (Math.random() - 0.5) * 0.005 + 0.003, []);
  const rotSpeedZ = useMemo(() => (Math.random() - 0.5) * 0.002, []);

  useFrame((state) => {
    const p = progress.current;
    
    // We want the planets to fly by multiple times during the scroll.
    // 3 full loops across the whole scroll length.
    const scrollX = p * TOTAL_WIDTH * 3; 

    const startX = index * SPACING;
    
    const currentXRaw = startX - scrollX;

    let currentX = ((currentXRaw % TOTAL_WIDTH) + TOTAL_WIDTH) % TOTAL_WIDTH;
    currentX -= (TOTAL_WIDTH / 2); 
    
    // Create a majestic curved path around the spaceship instead of a straight line
    const normalizedX = currentX / (TOTAL_WIDTH / 2); // -1 to 1
    const curveZ = Math.cos(normalizedX * Math.PI) * 12; // bulge out in the middle
    const curveY = Math.sin(normalizedX * Math.PI) * 4;

    if (planetRef.current) {
      // Lerp for ultra smooth positioning
      const targetX = currentX;
      const targetY = offsetY + curveY + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.8;
      const targetZ = offsetZ + curveZ;

      planetRef.current.position.x += (targetX - planetRef.current.position.x) * 0.1;
      planetRef.current.position.y += (targetY - planetRef.current.position.y) * 0.1;
      planetRef.current.position.z += (targetZ - planetRef.current.position.z) * 0.1;

      planetRef.current.rotation.x += rotSpeedX;
      planetRef.current.rotation.y += rotSpeedY;
      planetRef.current.rotation.z += rotSpeedZ;
    }
  });

  return (
    <primitive 
      ref={planetRef} 
      object={scene} 
      scale={scale}
      // Set initial position far away so they lerp in smoothly
      position={[index * SPACING, offsetY, offsetZ]} 
    />
  );
}

Planet.propTypes = {
  file: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  offsetZ: PropTypes.number.isRequired,
  offsetY: PropTypes.number.isRequired,
};

export default function PlanetSystem() {
  const planetsData = useMemo(
    () => planetFiles.map((file, index) => ({
      file,
      index,
      scale: 1.5 + Math.random() * 2,
      offsetY: (Math.random() - 0.5) * 12,
      offsetZ: -25 - Math.random() * 15,
    })),
    [],
  );

  return (
    <group>
      {planetsData.map((p) => (
        <Planet 
          key={p.file}
          file={p.file} 
          index={p.index}
          scale={p.scale}
          offsetY={p.offsetY}
          offsetZ={p.offsetZ}
        />
      ))}
      {/* Additional ambient lighting tailored for the planets */}
      <pointLight position={[15, 10, -15]} intensity={3} color="#00f0ff" distance={120} />
      <pointLight position={[-15, -10, -25]} intensity={3} color="#ff2a2a" distance={120} />
      <pointLight position={[0, 0, -30]} intensity={1.5} color="#ffb300" distance={150} />
    </group>
  );
}
