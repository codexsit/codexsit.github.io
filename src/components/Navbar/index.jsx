import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "@/assets/images/logo.svg";
import closeIcon from "@/assets/images/close.svg";
import menuIcon from "@/assets/images/menu.svg";

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className=" shadow-md w-full flex justify-between items-center px-6 bg-secondary-dark">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="logo" />
      </Link>

      <ul
        className={`
          md:flex pl-0 justify-start md:justify-center md:items-center md:pb-0 md:z-auto left-0 
          transition-all duration-500 ease-in
          ${isOpen ? "flex flex-col " : "hidden"}
        `}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className={`
              font-semibold text-white md:my-0 md:ml-8
              border-b-2 
              ${
                location.pathname .toLowerCase().includes(link.path.toLowerCase()) 
                  ? "border-red-500 hover:border-red-700" 
                  : "border-transparent hover:border-red-500"
              }
            `}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-7 h-7 text-white cursor-pointer md:hidden"
      >
        {isOpen ? (
          <img src={closeIcon} alt="close"  />
        ) : (
          <img src={menuIcon} alt="menu" />
        )}
      </button>
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
