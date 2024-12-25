import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "@/assets/images/logo.svg";
import closeIcon from "@/assets/images/close.svg";
import menuIcon from "@/assets/images/menu.svg";
import { CursorVariantContext } from "@/context/CursorVariantProvider";

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { setCursorVariantNone, setCursorVariantDefault } =
    useContext(CursorVariantContext);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`shadow-md w-full flex xs:flex-col md:flex-row ${isOpen ? "xs:h-screen" : ""} md:h-full justify-between items-center pr-6 bg-secondary-dark relative z-50`}
    >
      <div className="flex flex-row justify-between xs:w-full md:w-auto items-center">
        <Link
          to="/"
          className="cursor-pointer sm:px-0 md:px-6"
          onMouseEnter={setCursorVariantNone}
          onMouseLeave={setCursorVariantDefault}
        >
          <img src={Logo} className="w-[10rem]" alt="logo" />
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 text-white cursor-pointer md:hidden"
        >
          {isOpen ? (
            <img src={closeIcon} alt="close" />
          ) : (
            <img src={menuIcon} alt="menu" />
          )}
        </button>
      </div>
      <ul
        className={`
          md:flex pl-0 justify-start md:justify-center md:items-center md:pb-0 md:z-auto left-0 xs:justify-center xs:gap-y-12
          ${isOpen ? "flex flex-col grow" : "hidden"}
        `}
        onMouseEnter={setCursorVariantNone}
        onMouseLeave={setCursorVariantDefault}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className={`
            group font-regular text-white text-center md:my-0 md:ml-8 transition-all hover:text-primary
            `}
          >
            <Link to={link.path} onClick={handleLinkClick}>
              {link.name}
            </Link>
            <span
              className={`block group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary rounded ${
                location.pathname
                  .toLowerCase()
                  .includes(link.path.toLowerCase())
                  ? "w-full"
                  : "max-w-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
