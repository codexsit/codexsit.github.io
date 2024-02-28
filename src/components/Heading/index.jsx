import PropTypes from "prop-types";

function Heading({ text }) {
  return (
    <div className="relative text-center font-black uppercase tracking-tighter m-4">
      <div className="xs:text-4xl sm:text-6xl lg:text-8xl text-outlined text-transparent leading-[145%]">
        {text}
      </div>
      <div className="xs:text-2xl sm:text-4xl lg:text-6xl text-text-light absolute w-full leading-none bottom-[-20%]">
        {text}
      </div>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
