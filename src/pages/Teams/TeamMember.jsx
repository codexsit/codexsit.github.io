import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinkedInIcon from "@/assets/images/Teams/linkedin.svg";
import GithubIcon from "@/assets/images/Teams/github.svg";
import InstagramIcon from "@/assets/images/Teams/instagram.svg";

function TeamMember({ member }) {
  const { name, position, image, description, linkedin, instagram, github } =
    member;

  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer bg-zinc-700 rounded-3xl shadow-2xl shadow-background overflow-hidden p-2 space-y-4 align-middle aspect-ratio aspect-ratio-1/1">
      <div className="border-8xl border-4 bg-zinc-700 rounded-3xl overflow-hidden p-3 space-y-4 align-middle aspect-ratio aspect-ratio-1/1">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full mx-auto"
        />
        <h2 className="text-3xl font-sans font-semi-bold text-center text-white">
          {name}
        </h2>
        <p className="text-l font-sans text-center font-bold text-white">
          {position}
        </p>
        <p className="font-sans text-center text-wrap text-white">
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
