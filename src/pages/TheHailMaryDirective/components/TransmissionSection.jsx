import { useState, useEffect, useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import { AudioContext } from '../context/AudioContext';
import './TransmissionSection.css';
import radioNoise from '../assets/Sound effects/radionoise.mp3';
import radioNoiseCaptions from '../assets/Sound effects/radio-noise-captions.vtt';

const loreText = `SITUATION REPORT:
A massive rogue asteroid has breached our defensive perimeter and is on a direct collision course with Earth. Impact imminent. 
Primary communications are down. Standard protocols have failed.
The 'Hail Mary Directive' has been initiated.

CodeX has assembled two elite squads:
> Astronauts: Dispatched to intercept and neutralize the threat.
> Mission Control: Ground team providing critical navigation and intel.

Your objective is clear: Find. Fix. Connect. Proceed.
Failure is not an option. Humanity is depending on you.`;

export default function TransmissionSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [connectionEstablished, setConnectionEstablished] = useState(false);
  const [hasFinishedTyping, setHasFinishedTyping] = useState(false);
  
  const { pauseAtmosphere, resumeAtmosphere } = useContext(AudioContext);
  
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  
  // Track visibility continuously so we can fade out if the user scrolls past
  const isInView = useInView(sectionRef, { margin: "-20%" });

  // Handle typing effect independently
  useEffect(() => {
    if (!connectionEstablished || hasFinishedTyping) return undefined;

    setIsTyping(true);

    let typingSpeed = 25;
    const audioDuration = audioRef.current?.duration;
    if (!Number.isNaN(audioDuration) && audioDuration > 0) {
      typingSpeed = Math.max(1, ((audioDuration * 1000) - 200) / loreText.length);
    }

    let characterIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(loreText.substring(0, characterIndex));
      characterIndex += 1;

      if (characterIndex > loreText.length) {
        clearInterval(intervalId);
        setIsTyping(false);
        setHasFinishedTyping(true);
        resumeAtmosphere();
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [connectionEstablished, hasFinishedTyping, resumeAtmosphere]);

  // Handle Audio playback and fading
  useEffect(() => {
    let fadeInterval;
    const audio = audioRef.current;
    
    if (!audio || !connectionEstablished) return undefined;

    if (isInView && !hasFinishedTyping) {
      // In view and typing -> ensure playing and volume is up
      audio.volume = 0.8;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => null);
      }
    } else if (!audio.paused) {
      // Scrolled away OR typing finished -> fade out
      fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.pause();
          clearInterval(fadeInterval);
        }
      }, 150);
    }

    return () => {
      if (fadeInterval) clearInterval(fadeInterval);
    };
  }, [isInView, connectionEstablished, hasFinishedTyping]);

  let terminalStatus = 'AWAITING CONNECTION...';
  if (connectionEstablished) {
    terminalStatus = isTyping ? 'RECEIVING TRANSMISSION...' : 'TRANSMISSION COMPLETE';
  }

  return (
    <section className="transmission-section" ref={sectionRef}>
      {/* Removed loop so it doesn't sound repetitive */}
      <audio ref={audioRef} src={radioNoise}>
        <track
          kind="captions"
          src={radioNoiseCaptions}
          srcLang="en"
          label="Sound effects"
          default
        />
      </audio>
      
      <motion.div 
        className="terminal-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="scan-overlay" />
        
        <div className="terminal-header">
          <span className="terminal-title">[ SECURE TERMINAL ]</span>
          <span className="terminal-status">
            {terminalStatus}
          </span>
        </div>
        
        {!connectionEstablished ? (
          <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
            <button 
              type="button"
              onClick={() => {
                setConnectionEstablished(true);
                pauseAtmosphere();
              }}
              style={{
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid var(--c-cyan)',
                color: 'var(--c-cyan)',
                padding: '12px 24px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(0, 240, 255, 0.2)';
                e.target.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(0, 240, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              ESTABLISH CONNECTION
            </button>
          </div>
        ) : (
          <div 
            className={`terminal-body ${isTyping ? 'body-glitch' : ''}`}
            data-text={displayedText}
          >
            {displayedText.split('\n').map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <span className="terminal-cursor" />
          </div>
        )}
      </motion.div>
    </section>
  );
}
