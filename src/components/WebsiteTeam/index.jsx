import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamMember from "@/components/WebsiteTeam/TeamMember";
import teamMembersData from "./teamsdata.json";

gsap.registerPlugin(ScrollTrigger);

function WebsiteTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const rows = sectionRef.current.querySelectorAll(".team-row");

    rows.forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const teamMembers = teamMembersData.map((member) => (
    <TeamMember member={member} className="flex-1 team-row" key={member.name} />
  ));

  return (
    <div
      className="min-h-fit bg-background-dark scroll-smooth mb-12"
      ref={sectionRef}
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-wrap lg:flex-row gap-4 justify-center items-center p-6">
            <div className="md:min-w-[450px] flex-1 lg:ml-16 text-center xl:text-left text-xl sm:text-2xl md:text-3xl lg:text-[2.7rem] font-poppins space-y-2 ">
              <div className="leading-[1.3]">
                <span className="text-text-websiteteamlight font-thin">
                  Special Thanks
                </span>
                <br />
                <span className="text-text-websiteteamlight font-thin">
                  {" "}
                  to the
                </span>
                <span className="text-primary font-semibold">
                  {" "}
                  Awesome Team
                </span>
              </div>
              <div className="leading-[1.3]">
                <span className="text-text-websiteteamlight font-thin">
                  {" "}
                  Who Helped Create
                  <br /> this
                </span>
                <span className="text-text-websiteteamyellow font-semibold">
                  {" "}
                  Amazing Website
                </span>
              </div>
            </div>
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between md:justify-center w-full md:w-min">
              {teamMembers.slice(0, 2)}
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center xl:justify-between w-full gap-4 px-6">
            {teamMembers.slice(2, 6)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteTeam;
