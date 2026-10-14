import { useRef, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import ScrollContext from '../context/ScrollContext';

export default function Spaceship() {
  const { scene } = useGLTF('/Spaceship_RaeTheRedPanda.gltf');
  const shipRef = useRef();
  const { progress } = useContext(ScrollContext);

  useFrame((state) => {
    // Gentle floating wave
    const basePositionY = -0.5 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.08;
    shipRef.current.position.y = basePositionY;

    // Slight continuous roll to show off the wings
    const baseRotationZ = Math.cos(state.clock.getElapsedTime() * 1.0) * 0.03;
    
    // Scroll driven rotation
    const p = progress.current;
    
    // As p goes from 0 to 1, rotate the ship away noticeably
    const scrollRotationY = -0.4 - (p * 1.5); // Turns sideways away from camera
    const scrollRotationX = 0.3 + (p * 0.8);  // Pitches up
    
    shipRef.current.rotation.set(scrollRotationX, scrollRotationY, baseRotationZ);
  });

  return (
    <primitive
      object={scene}
      ref={shipRef}
      position={[0, -0.5, 0]}
      scale={0.4}
    />
  );
}

useGLTF.preload('/Spaceship_RaeTheRedPanda.gltf');
