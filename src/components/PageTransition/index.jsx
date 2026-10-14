import { motion } from "framer-motion";
import PropTypes from "prop-types";

function PageTransition({ children, overlayClassName }) {
  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: ["-100%", "0%", "-100%"] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${overlayClassName} absolute h-screen w-full bg-primary top-0 left-0`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {children}
      </motion.div>
    </>
  );
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  overlayClassName: PropTypes.string,
};

PageTransition.defaultProps = {
  overlayClassName: "z-50",
};

export default PageTransition;
