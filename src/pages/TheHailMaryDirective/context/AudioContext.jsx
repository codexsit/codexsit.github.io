import { createContext, useRef, useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import atmosphereAudio from '../assets/Sound effects/spaceatmosphere.mp3';
import clickAudio from '../assets/Sound effects/uiclickeffect.mp3';
import powerUpAudio from '../assets/Sound effects/rescopicsound-sci-fi-weapon-power-on-charge-up-processed-pulse-233851.mp3';

export const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const bgAudioRef = useRef(null);
  const clickAudioRef = useRef(null);
  const powerUpAudioRef = useRef(null);
  // Default to true so it tries to play as soon as the user interacts with the page
  const [isAtmospherePlaying, setIsAtmospherePlaying] = useState(true);

  useEffect(() => {
    // Preload audio
    bgAudioRef.current = new Audio(atmosphereAudio);
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 1.0;

    clickAudioRef.current = new Audio(clickAudio);
    clickAudioRef.current.volume = 1.0;

    powerUpAudioRef.current = new Audio(powerUpAudio);
    powerUpAudioRef.current.volume = 1.0;

    const startAtmosphere = () => {
      if (isAtmospherePlaying && bgAudioRef.current && bgAudioRef.current.paused) {
        bgAudioRef.current.play().then(() => {
          // Once successfully playing, remove these broad listeners to save performance
          ['click', 'scroll', 'keydown', 'mousemove', 'touchstart', 'wheel'].forEach(evt => {
            window.removeEventListener(evt, startAtmosphere);
          });
        }).catch(() => null);
      }
    };

    const handleGlobalClick = () => {
      // Play click effect on every click
      if (clickAudioRef.current) {
        // Reset time to allow rapid clicking
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => null);
      }
    };

    window.addEventListener('click', handleGlobalClick);

    // Add broad listeners to start background music as early as possible
    ['click', 'scroll', 'keydown', 'mousemove', 'touchstart', 'wheel'].forEach(evt => {
      window.addEventListener(evt, startAtmosphere, { passive: true });
    });

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      ['click', 'scroll', 'keydown', 'mousemove', 'touchstart', 'wheel'].forEach(evt => {
        window.removeEventListener(evt, startAtmosphere);
      });
      if (bgAudioRef.current) bgAudioRef.current.pause();
    };
  }, []);

  // React to explicit play/pause commands from components
  useEffect(() => {
    if (!bgAudioRef.current) return;

    if (isAtmospherePlaying) {
      // We catch the error because if they haven't interacted yet, this will throw
      bgAudioRef.current.play().catch(() => { });
    } else {
      bgAudioRef.current.pause();
    }
  }, [isAtmospherePlaying]);

  const pauseAtmosphere = useCallback(() => setIsAtmospherePlaying(false), []);
  const resumeAtmosphere = useCallback(() => setIsAtmospherePlaying(true), []);

  const playPowerUp = useCallback(() => new Promise((resolve) => {
      if (powerUpAudioRef.current) {
        powerUpAudioRef.current.currentTime = 0;

        powerUpAudioRef.current.onended = () => {
          resolve();
        };

        powerUpAudioRef.current.play().catch(() => resolve());
      } else {
        resolve();
      }
    }), []);

  const audioContextValue = useMemo(() => ({
    pauseAtmosphere,
    resumeAtmosphere,
    playPowerUp,
  }), [pauseAtmosphere, resumeAtmosphere, playPowerUp]);

  return (
    <AudioContext.Provider value={audioContextValue}>
      {children}
    </AudioContext.Provider>
  );
}

AudioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
