import { motion } from 'framer-motion';
import './DetailsSection.css';

export default function DetailsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  return (
    <section id="mission-specs" className="details-section">
      <div className="details-header">
        <motion.h2
          className="details-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MISSION SPECS
        </motion.h2>
      </div>

      <motion.div
        className="details-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
      >
        {/* Card 1: Rules & Scoring */}
        <motion.div className="detail-card" variants={cardVariants}>
          <div className="card-icon">▣</div>
          <h3 className="card-title">RULES & SCORING</h3>
          <ul className="card-list">
            <li>Squad of 8 members: split into Astronauts (4) & Mission Control (4)</li>
            <li>No direct line of sight between the two teams</li>
            <li>Time penalties applied for abrupt manual rotations</li>
            <li>Final score calculated via completion time + puzzle accuracy</li>
          </ul>
        </motion.div>

        {/* Card 2: Mission Objective */}
        <motion.div className="detail-card" variants={cardVariants}>
          <div className="card-icon">◈</div>
          <h3 className="card-title">MISSION OBJECTIVE</h3>
          <ul className="card-list">
            <li>Intercept asteroid HM-2026 before atmospheric entry</li>
            <li>Re-establish encrypted comms with Mission Control</li>
            <li>Decrypt and override manual navigation protocols</li>
            <li>Execute evasive maneuvers to prevent planetary impact</li>
          </ul>
        </motion.div>

        {/* Card 3: Contact */}
        <motion.div className="detail-card" variants={cardVariants}>
          <div className="card-icon">◬</div>
          <h3 className="card-title">COMMAND CENTER</h3>
          <ul className="card-list">
            <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span>PRESIDENT: Ankush Dutta</span>
              <a href="mailto:ankush.dutta.btech2023@sitpune.edu.in" className="mail-btn">MAIL ME</a>
            </li>
            <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span>VICE-PRESIDENT: Mitiksha Paliwal</span>
              <a href="mailto:mitiksha.paliwal.btech2023@sitpune.edu.in" className="mail-btn">MAIL ME</a>
            </li>
            <li>
              <a href="mailto:codex@sitpune.edu.in" target="_blank" rel="noreferrer" className="contact-link">
                @codex_email
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="ignition-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            INITIATE LAUNCH
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
