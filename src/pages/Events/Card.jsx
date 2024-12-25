import { useMemo } from "react";
import PropTypes from "prop-types";
import { images } from "../Gallery/Gallery";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.3)`; // Add transparency for the glassmorphism effect
};

function Card({ object }) {
  const imageSrc = object?.src || images[0]?.src;
  const imageAlt = object?.caption || images[0]?.caption;

  const randomColor = useMemo(() => getRandomColor(), []);

  return (
    <div className="relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[300px] overflow-hidden rounded-xl shadow-lg">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover object-bottom rounded-t-xl"
      />
      <div
        className="absolute bottom-0 w-full h-1/3 flex items-center justify-center backdrop-blur-md rounded-b-xl"
        style={{ backgroundColor: randomColor }}
      >
        <p className="text-white">{imageAlt}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  object: PropTypes.shape({
    src: PropTypes.string,
    caption: PropTypes.string,
  }).isRequired,
};

export default Card;
