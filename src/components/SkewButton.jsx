import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SkewButton({ text, link }) {
  return (
    <div className="flex justify-center mt-8">
      <Link to={link}>
        <button
          type="button"
          className="transform hover:-translate-y-1 transition motion-reduce:transition-none motion-reduce:hover:transform-none bg-background-light text-text-dark font-poppins font-extrabold px-4 py-2 -skew-x-12"
        >
          {text}
        </button>
      </Link>
    </div>
  );
}

SkewButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkewButton;
