import PropTypes from "prop-types";
import LinkedInIcon from "@/assets/images/Teams/linkedin.svg";
import GithubIcon from "@/assets/images/Teams/github.svg";
import InstagramIcon from "@/assets/images/Teams/instagram.svg";
import RectangleRed from "@/assets/images/Website_Team/RectangleRed.png";
import RectangleGreen from "@/assets/images/Website_Team/RectangleGreen.png";
import RectangleYellow from "@/assets/images/Website_Team/RectangleYellow.png";
import MiranFirdausiImage from "@/assets/images/Website_Team/MiranFirdausi.png";
import AchyutShuklaImage from "@/assets/images/Website_Team/AchyutShukla.png";
import MitikshaPaliwalImage from "@/assets/images/Website_Team/MitikshaPaliwal.png";
import AnkushDuttaImage from "@/assets/images/Website_Team/AnkushDutta.png";
import AbhishekPatawariImage from "@/assets/images/Website_Team/AbhishekPatawari.png";
import JayTrivediImage from "@/assets/images/Website_Team/JayTrivedi.png";

const images = {
  1: MiranFirdausiImage,
  2: AchyutShuklaImage,
  3: MitikshaPaliwalImage,
  4: AnkushDuttaImage,
  5: AbhishekPatawariImage,
  6: JayTrivediImage,
};

const bgimages = {
  1: RectangleRed,
  2: RectangleGreen,
  3: RectangleYellow,
  4: RectangleGreen,
  5: RectangleRed,
  6: RectangleYellow,
};
function TeamMember({ member }) {
  const { name, batch, description, linkedin, instagram, github, id } = member;
  const image = images[id];

  return (
    <div className="relative group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer overflow-hidden p-8 align-middle max-w-[700px]">
      <div className="overflow-hidden p-4 align-middle">
        <div className="relative">
          <img
            src={bgimages[id]}
            alt="background"
            className="absolute bottom-1 left-1/2 rounded-md transform -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src={image}
            alt={name}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-cover z-10 filter grayscale transition duration-500 group-hover:filter-none group-hover:duration-500 group-hover:ease-in-out group-hover:delay-150 group-hover:scale-110"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl mt-10 font-poppins font-semibold text-center tracking-wide text-text-light">
          {name}
        </h2>
        <p className="text-lg sm:text-xl mt-3 font-poppins text-center font-semibold tracking-wide text-text-light">
          {batch}
        </p>
        <p className="text-lg sm:text-xl font-poppins my-5 text-center text-wrap text-secondary-light">
          {description}
        </p>
        <div className="mr-2 absolute -left-2 top-[40%] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:left-[0.5rem] sm:top-[30%] md:-left-[0.5rem] md:top-[40%] lg:-left-[0.5rem] lg:top-[40%] xl:-left-[0.5rem] xl:top-[40%]">
          <div className="flex flex-col space-y-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            >
              <img
                src={LinkedInIcon}
                alt="Linkedin"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 p-2"
              />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-white font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
            >
              <img
                src={GithubIcon}
                alt="Github"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 p-2"
              />
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="text-white font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    batch: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default TeamMember;
