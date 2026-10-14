import { useContext, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import ScrollContext from '../context/ScrollContext';
import Spaceship from './Spaceship';
import PlanetSystem from './PlanetSystem';
import StarField from './StarField';

function CameraController() {
  const { progress } = useContext(ScrollContext);
  const targetPosition = useMemo(() => new THREE.Vector3(), []);
  
  useFrame(({ camera, pointer }) => {
    const p = progress.current;
    // Base scroll targets
    const scrollTargetY = THREE.MathUtils.lerp(0, -8, p);
    const scrollTargetZ = THREE.MathUtils.lerp(14, 10, p);
    
    // Target positions combining mouse pointer and scroll
    // Gentle multiplier (0.8) for a subtle tilt effect as requested
    const targetX = pointer.x * 0.8;
    const targetY = (pointer.y * 0.8) + scrollTargetY;
    
    // Smooth damp camera (exactly as requested style)
    targetPosition.set(targetX, targetY, scrollTargetZ);
    camera.position.lerp(targetPosition, 0.05);
    
    // Always looking at origin is what creates the cool tilting 3D rotation effect!
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function SpaceCanvas() {
  const { progress } = useContext(ScrollContext);
  const scrollContextValue = useMemo(() => ({ progress }), [progress]);

  return (
    <Canvas 
      camera={{ position: [0, 0, 14], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <ScrollContext.Provider value={scrollContextValue}>
        <PerformanceMonitor />
        
        <color attach="background" args={['#030308']} />
        <fog attach="fog" args={['#030308', 10, 60]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[0, -1, -2]} intensity={3} color="#ffb300" />
        
        <StarField />
        <Spaceship />
        <PlanetSystem />
        
        <CameraController />
      </ScrollContext.Provider>
    </Canvas>
  );
}
