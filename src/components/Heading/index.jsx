import PropTypes from "prop-types";

function Heading({ headingText }) {
  return (
    <div className="relative text-center font-black uppercase tracking-tighter">
      <div className="xs:text-4xl sm:text-6xl lg:text-[6.5rem] text-outlined text-transparent  ">
        {headingText}
      </div>
      <div className="xs:text-2xl sm:text-4xl lg:text-[3.75rem] text-foreground absolute w-full xs:bottom-[-10px] sm:bottom-[-18px] lg:bottom-[-12px]">
        {headingText}
      </div>
    </div>
  );
}

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Heading;
