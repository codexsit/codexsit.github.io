import { useRef, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import ScrollContext from '../context/ScrollContext';

export default function Asteroid() {
  const { scene } = useGLTF('/Rock_3.gltf');
  const rockRef = useRef();
  const lightRef = useRef();
  const { progress } = useContext(ScrollContext);

  useFrame(() => {
    const p = progress.current;
    
    // Spin the asteroid
    rockRef.current.rotation.x += 0.002;
    rockRef.current.rotation.y += 0.003;

    // Grow and move closer as scroll progresses
    // Scale: lerp 0.3 -> 2.5 (per PRD)
    const targetScale = THREE.MathUtils.lerp(0.3, 2.5, p);
    rockRef.current.scale.set(targetScale, targetScale, targetScale);

    // Position: start distant [8, 3, -20], move closer but stay off to the right
    rockRef.current.position.x = THREE.MathUtils.lerp(8, 4, p); 
    rockRef.current.position.y = THREE.MathUtils.lerp(3, -6, p); 
    rockRef.current.position.z = THREE.MathUtils.lerp(-20, -10, p);
    
    // Adjust ominous glow
    if (lightRef.current) {
        lightRef.current.intensity = THREE.MathUtils.lerp(1, 10, p);
    }
  });

  return (
    <group ref={rockRef}>
      <primitive object={scene} />
      <pointLight ref={lightRef} color="#ff2a2a" distance={40} />
    </group>
  );
}

useGLTF.preload('/Rock_3.gltf');
