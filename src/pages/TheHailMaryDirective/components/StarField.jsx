import { useRef, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import ScrollContext from '../context/ScrollContext';

export default function StarField() {
  const groupRef = useRef();
  const { progress } = useContext(ScrollContext);

  useFrame((state) => {
    const p = progress.current;
    
    // Slow rotation over time
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
      
      // Parallax effect based on scroll
      groupRef.current.position.y = p * 20;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base dense starfield */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}
