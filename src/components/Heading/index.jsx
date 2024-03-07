import PropTypes from "prop-types";

function Heading({ text,className,bgTextStyle,frontTextStyle }) {
  return (
    <div className={`relative text-center font-black uppercase tracking-tighter ${className}`}>
      <div className={`${bgTextStyle} xs:text-4xl sm:text-6xl lg:text-8xl text-outlined text-transparent`}>
        {text}
      </div>
      <div className={`${frontTextStyle} xs:text-2xl sm:text-4xl lg:text-6xl absolute w-full leading-none bottom-[-20%]`}>
        {text}
      </div>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  bgTextStyle: PropTypes.string,
  frontTextStyle: PropTypes.string,
};

Heading.defaultProps = {
  className: "",
  bgTextStyle: "",
  frontTextStyle: "text-text-light",
};

export default Heading;
