import TeamMember from "@/pages/Teams/TeamMember";
import SkewButton from "@/components/SkewButton";

const teamMembers = [
  {
    name: "Aditya Desai",
    position: "PRESIDENT",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEfAUzWvBYdVg/profile-displayphoto-shrink_800_800/0/1663487119730?e=1714608000&v=beta&t=q9xS0ojSlWeXtvYbYAGKC-POp7f0TXCfrTSkoP1yMLA",
    description:
      "Praesent vestibulum libero non diam Praesent vestibulum libero non diam ",
    linkedin: "https://linkedin.com/in/john-doe",
    instagram: "https://instagram.com/john_doe",
    github: "https://github.com/john-doe",
  },
  {
    name: "Dr. Rupali Gangarde",
    position: "FACULTY ADVISOR",
    image:
      "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/362246050_985287035952930_3222687059276313181_n.jpg?ccb=11-4&oh=01_AdQzhJX4u0dIpMxNBjPYbrW4sfwKKQ4xbLc3kW69swB3Wg&oe=65EA2552&_nc_sid=e6ed6c&_nc_cat=106",
    description:
      "Praesent vestibulum libero non diam Praesent vestibulum libero non diam ",
    linkedin: "https://linkedin.com/in/jane-doe",
    instagram: "https://instagram.com/jane_doe",
    github: "https://github.com/jane-doe",
  },
  {
    name: "Saksham Gupta",
    position: "VICE-PRESIDENT",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFf0M0m5SBEsw/profile-displayphoto-shrink_800_800/0/1661514280105?e=1714608000&v=beta&t=OU8Rye-qRguvPyAsyJ19wMr3toD5PtIFWEwjORVlohc",
    description:
      "Praesent vestibulum libero non diam Praesent vestibulum libero non diam ",
    linkedin: "https://linkedin.com/in/john-doe",
    instagram: "https://instagram.com/john_doe",
    github: "https://github.com/john-doe",
  },
  // Your team members data here
];

function Teams() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className="flex-grow container mx-auto pr-20 pl-20 space-x-30 py-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ gridAutoRows: "minmax(auto, max-content)" }}
        >
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
        <SkewButton text="SEE ALL" link="/all-members" />
      </div>
    </div>
  );
}

export default Teams;
