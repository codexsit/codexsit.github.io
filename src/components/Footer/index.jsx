import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/images/logo.svg";
import SitLogo from "@/assets/images/Teams/sitlogo.svg";

function Footer() {
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="min-h-screen bg-secondary-dark text-text-light flex flex-col">
      {/* Orange Banner */}
      <div className="bg-primary relative flex justify-center items-center py-12 flex-1">
        <div className="relative text-center font-black uppercase tracking-tighter">
          <div className="text-2xl xs:text-4xl sm:text-6xl lg:text-8xl text-outlined text-transparent">
            MADE WITH LOVE BY
          </div>
          <div className="text-text-light text-xl xs:text-2xl sm:text-4xl lg:text-6xl absolute w-full leading-none bottom-[-10%]">
            TEAM CODEX
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-20 text-center sm:text-left">
          <div className="space-y-6 flex flex-col justify-between items-center sm:items-start">
            <p className="text-secondary-light leading-relaxed">
              Our club is committed to creating an engaging environment where
              members can learn, collaborate, and grow their coding expertise
              through a variety of activities and events.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:w-full">
              <img src={SitLogo} alt="Symbiosis Logo" className="h-12" />
              <div className="hidden sm:block w-px h-12 bg-secondary-light"></div>
              <img
                src={Logo}
                alt="CodeX Logo"
                className="h-16 md:h-20 self-center"
              />
            </div>
          </div>

          <div className="flex flex-row  gap-8 text-center justify-center  sm:text-left ">
            {/* Quick Links */}
            <div className="flex-1">
              <h4 className="text-lg font-medium mb-4 text-secondary-light relative inline-block sm:block">
                QUICK LINKS
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-light" />
              </h4>
              <ul className="space-y-2 text-text-light text-sm sm:text-base">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about-us" },
                  { name: "Our Team", path: "/teams" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Events", path: "/events" },
                  { name: "Contact", path: "/contact" },
                  { name: "SymbiTech2025", path: "/symbitech2025" },
                ].map((link) => (
                  <li
                    key={link.name}
                    className={`cursor-pointer ${
                      location.pathname === link.path
                        ? "text-secondary-light"
                        : ""
                    }`}
                  >
                    <Link to={link.path} onClick={handleLinkClick}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col flex-1 md:flex-[2] md:flex-row gap-4">
              {/* Social Links */}
              <div className="flex-1">
                <h4 className="text-lg font-medium mb-4 text-secondary-light relative inline-block sm:block ">
                  SOCIAL
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-light" />
                </h4>
                <ul className="space-y-2 text-text-light text-sm sm:text-base">
                  <li className="cursor-pointer">
                    <a href="https://www.instagram.com/codex_sit/">Instagram</a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="https://www.linkedin.com/company/codex-sit-pune/">
                      LinkedIn
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="https://github.com/codeXsit">Github</a>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="col-span-2 sm:col-span-1 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left">
                <div className="relative bottom-0 left-0 w-full">
                  <h4 className="text-lg font-medium mb-4 text-secondary-light relative inline-block sm:block">
                    CONTACT
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-light" />
                  </h4>
                </div>
                <ul className="space-y-2 text-text-light text-sm sm:text-base">
                  <li>
                    <a href="mailto:codexsit@gmail.com" className="underline">
                      Drop us a Message
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-light">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-center text-sm sm:text-base text-secondary-light">
            © 2024 CodeX | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
