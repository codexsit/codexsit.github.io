import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "@/assets/images/logo.svg";
import closeIcon from "@/assets/images/close.svg";
import menuIcon from "@/assets/images/menu.svg";

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-md w-full flex flex-wrap justify-between items-center px-6 bg-secondary-dark relative">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="logo" />
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

      <ul
        className={`
          pl-0 justify-start md:justify-center
          md:flex md:items-center md:w-auto w-full md:pb-0 pb-12 md:static
          absolute md:bg-transparent bg-secondary-dark md:z-auto z-50 left-0 
          transition-all duration-500 ease-in ${isOpen ? "top-full" : "top-[-490px]" }
        `}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className="md:ml-8 md:my-0 my-7 font-semibold relative"
          >
            <Link
              to={link.path}
              className={`
                text-white text-center block px-3 py-2 relative
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                after:bg-red-500 after:transition-all after:duration-300 after:scale-x-0 after:origin-left
                hover:after:scale-x-100
                ${
                  location.pathname
                    .toLowerCase()
                    .includes(link.path.toLowerCase())
                    ? "w-full"
                    : "max-w-0"
                }
              `}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
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
