// Todo: use font awesome icons or google icons
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types";
import Logo from "@/assets/images/logo.svg";

function Navbar({ links }) {
  // Todo: implement active link

  return (
    <nav className="shadow-md w-full flex justify-between items-center px-6 bg-secondary-dark">
      <Link to="/" className="cursor-pointer">
        <img src={Logo} alt="logo" className="cursor-pointer" />
      </Link>

      <ul className="md:flex md:items-center md:pb-0 pb-12  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
        {/* <Link to="/" className="w-7 h-7 text-white cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </Link> */}
        {links.map((link) => (
          <li
            key={link.name}
            className="font-semibold text-white md:my-0 md:ml-8 border-b-2 border-transparent hover:border-red-500"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(string).isRequired,
};

export default Navbar;
