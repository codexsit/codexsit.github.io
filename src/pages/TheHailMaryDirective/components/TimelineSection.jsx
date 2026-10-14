import { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useInView } from 'framer-motion';
import './TimelineSection.css';

const checkpoints = [
  { id: 1, codename: 'BRIEFING ALPHA', desc: 'Assess the wall. Decode the objective.' },
  { id: 2, codename: 'MANUAL OVERRIDE', desc: 'The instructions are encrypted. Crack them.' },
  { id: 3, codename: 'SIGNAL LOST', desc: 'The circuit is incomplete. The message is in dashes and dots.' },
  { id: 4, codename: 'GHOST FREQUENCY', desc: 'Debug the node. Aim the invisible beam.' },
  { id: 5, codename: 'FINAL APPROACH', desc: 'Steer through the light. Align for re-entry.' }
];

function TimelineNode({ cp, index }) {
  const nodeRef = useRef(null);
  
  // Magic scroll hook! Trigger when node is perfectly in the center of the viewport
  const isInView = useInView(nodeRef, { margin: "-50% 0px -50% 0px", once: false });
  
  // Track if the card has scrolled into the lower 20% of the screen for the initial fly-in
  const hasBeenSeen = useInView(nodeRef, { margin: "-20%", once: true });

  const isEven = index % 2 === 1; // index 1, 3 are right side

  return (
    <div className="timeline-node" ref={nodeRef}>
      
      {/* 1. The Connector Point */}
      <div className="timeline-point-container">
        {/* Adds 'active' class exactly when the laser line hits it */}
        <div className={`timeline-point ${isInView ? 'active' : ''}`} />
      </div>
      
      {/* 2. The Branching Line */}
      <motion.div 
        className="timeline-connector"
        initial={{ width: 0 }}
        animate={{ width: hasBeenSeen ? "4rem" : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* 3. The 3D Hover Card */}
      <div className="timeline-card-wrapper">
        <motion.div 
          className="timeline-card"
          initial={{ opacity: 0, x: isEven ? 80 : -80, rotateY: isEven ? -25 : 25 }}
          animate={hasBeenSeen ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
        >
          <span className="node-number">{`0${cp.id} //`}</span>
          <h3 className="node-title">{cp.codename}</h3>
          <p className="node-desc">{cp.desc}</p>
        </motion.div>
      </div>
    </div>
  );
}

TimelineNode.propTypes = {
  cp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    codename: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function TimelineSection() {
  const containerRef = useRef(null);
  
  // Connect a framer-motion progress value directly to the scroll depth of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="timeline-section" ref={containerRef}>
      <div className="timeline-header">
        <motion.h2 
          className="timeline-title"
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MISSION TIMELINE
        </motion.h2>
      </div>

      <div className="timeline-container">
        {/* Background track */}
        <div className="timeline-track">
          <div className="morse-code-pulse">··· ——— ···</div>
        </div>
        
        {/* The scrolling laser beam! */}
        <motion.div 
          className="timeline-progress" 
          style={{ scaleY: scrollYProgress }}
        />

        <div className="timeline-nodes">
          {checkpoints.map((cp, idx) => (
            <TimelineNode key={cp.id} cp={cp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
