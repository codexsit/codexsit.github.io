import { useState } from 'react';
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const { progress } = useProgress();
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence>
      {!started && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loading-content">
            {progress < 100 ? (
              <>
                <h2 className="loading-title">BOOTING MISSION SYSTEMS...</h2>
                <div className="loading-bar-container">
                  <motion.div
                    className="loading-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
                  />
                </div>
                <p className="loading-percentage">{Math.round(progress)}%</p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="enter-container"
              >
                <h2 className="loading-title" style={{ color: 'var(--c-cyan)', marginBottom: '1.5rem' }}>SYSTEMS READY</h2>
                <button
                  type="button"
                  className="enter-button"
                  onClick={() => setStarted(true)}
                >
                  INITIATE LAUNCH
                </button>
              </motion.div>
            )}
          </div>
          <div className="scan-line" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
