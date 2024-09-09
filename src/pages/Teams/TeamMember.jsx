import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinkedInIcon from "@/assets/images/Teams/linkedin.svg";
import GithubIcon from "@/assets/images/Teams/github.svg";
import InstagramIcon from "@/assets/images/Teams/instagram.svg";

function TeamMember({ member }) {
  const { name, position, image, description, linkedin, instagram, github } =
    member;

  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 hover:drop-shadow-2xl drop-shadow-background cursor-pointer bg-gradient-to-br from-gradient-light to-gradient-dark rounded-3xl shadow-2xl shadow-background overflow-hidden p-2 align-middle max-w-[350px]">
      <div className="py-12 border-8xl border-4 h-full border-secondary-light bg-gradient-to-br from-gradient-light to-gradient-dark rounded-3xl overflow-hidden p-3 align-middle">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-xl mt-8 font-poppins font-thin text-center tracking-wide text-text-light">
          {name}
        </h2>
        <p className="text-sm mt-2 font-poppins text-center font-semibold tracking-wide text-text-light">
          {position}
        </p>
        <p className="text-sm font-poppins my-4 text-center text-wrap text-secondary-light">
          {description}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to={linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white font-sans"
          >
            <img src={LinkedInIcon} alt="Linkedin" className="w-10 h-10 p-2" />
          </Link>
          <Link
            to={github}
            target="_blank"
            rel="noreferrer"
            className="text-white font-sans"
          >
            <img src={GithubIcon} alt="Github" className="w-10 h-10 p-2" />
          </Link>
          <Link
            to={instagram}
            target="_blank"
            rel="noreferrer"
            className="text-white font-sans"
          >
            <img src={InstagramIcon} alt="GitHub" className="w-10 h-10 p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMember;
