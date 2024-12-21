import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import SymbiosisLogo from "@/assets/images/symbiosis-logo.png";
import CodexLogo from "@/assets/images/codex-logo.png";
import { CursorVariantContext } from "@/context/CursorVariantProvider";
import Heading from "@/components/Heading/index";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { setCursorVariantNone, setCursorVariantDefault } =
    useContext(CursorVariantContext);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <footer className="bg-primary py-6 mt-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white font-bold">CONNECT WITH US</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={SymbiosisLogo}
              alt="Symbiosis Institute of Technology"
              className="h-8"
            />
            <p className="text-white font-bold">MADE WITH LOVE BY</p>
            <img src={CodexLogo} alt="Team Codex" className="h-8" />
          </div>
          <p className="text-center text-white">
            © 2024 CODEX | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
