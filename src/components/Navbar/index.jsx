// import React from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";

const links = [
  { name: "About Us", path: "#" },
  { name: "Our Team", path: "#" },
  { name: "Gallery", path: "#" },
  { name: "Contact", path: "#" },
  { name: "Projects", path: "#" },
];
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-black ">
        <div className="flex text-2x1 cursor-pointer items-center gap-2">
          {/* <logo/> */}
          <img src={Logo} alt="logo" className="w-22 h-22" />
        </div>
        {/*Menu*/}
        <div
          onClick={() => setisOpen(!isOpen)}
          className="w-7 h-7 text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/*links*/}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-12" : "top-[-490px]"}`}
        >
          {links.map((link, index) => (
            // <li
            //   key={index}
            //   className={`font-semibold my-7 md:my-0 md:ml-8   ${activeLink === index ? "hover:border-b-2 border-red-500" : ""}`}
            // >
            //   <Link to={link.path} className="hover:border-b-2 border-white transition-all duration-300 ease-in-out" onClick={() => setActiveLink(index)}>{name}</Link>
            // </li>
            <li>links</li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
