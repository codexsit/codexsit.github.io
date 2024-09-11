import baffle from "baffle";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Loader({ onLoadComplete }) {
  useEffect(() => {
    const target = baffle(".loader");
    target.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      speed: 120,
      reveal: 0,
    });
    target.start();
    target.reveal(3000, 0);

    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-secondary-dark bg-opacity-100 transition-opacity duration-1000">
      <div className="loader text-secondary-light font-medium font-poppins text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
        Welcome to CodeX
      </div>
    </div>
  );
}

Loader.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default Loader;
