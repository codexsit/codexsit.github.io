import Heading from "@/components/Heading/index";
import Logo from "@/assets/images/logo.svg";
import instagramIcon from "@/assets/images/Teams/instagram.svg";
import linkedinIcon from "@/assets/images/Teams/linkedin.svg";
import githubIcon from "@/assets/images/Teams/github.svg";
import SitLogo from "@/assets/images/Teams/sitlogo.svg";

function Footer() {
  return (
    <footer className="bg-secondary-dark text-white py-6">
      {/* Heading orange */}
      <div className="text-center relative bg-primary">
        <Heading
          text="MADE WITH LOVE BY"
          className="my-6"
          frontTextStyle="text-text-light"
        />
      </div>

      {/* Connect Us */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold uppercase">Connect With Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-y-6 md:gap-x-8">
          {/* SIT Logo */}
          <img
            src={SitLogo}
            alt="Symbiosis Institute of Technology"
            className="w-20 md:w-24"
          />
          <div className="hidden md:block h-12 w-[1px] bg-gray-500" />
          {/* Codex Logo */}
          <img src={Logo} alt="Codex Logo" className="w-20 md:w-24" />
        </div>
      </div>

      {/* Social media */}
      <div className="mt-6 flex justify-center gap-x-6">
        <a
          href="https://www.linkedin.com/company/codex-sit-pune/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 md:w-10" />
        </a>
        <a
          href="https://github.com/codeXsit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="w-8 md:w-10" />
        </a>
        <a
          href="https://www.instagram.com/codex_sit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-8 md:w-10" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-gray-500 pt-6">
        <p className="text-sm">
          &copy; 2024 <span className="font-bold">Codex</span> | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
