import PropTypes from "prop-types";

function Heading({ headingText }) {
  return (
    <div className="relative text-center font-black uppercase tracking-tighter">
      <div className="xs:text-5xl text-[6.5rem] text-outlined text-transparent  ">
        {headingText}
      </div>
      <div className="xs:text-2xl text-[3.75rem] text-foreground absolute w-full bottom-0">
        {headingText}
      </div>
    </div>
  );
}

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Heading;
