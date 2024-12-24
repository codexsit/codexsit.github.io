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
    <div key={member.name} className="team-row">
      <TeamMember member={member} />
    </div>
  ));

  return (
    <div
      className="min-h-fit bg-background-dark scroll-smooth"
      ref={sectionRef}
    >
      <div className="flex justify-center items-center">
        <div className="flex-grow mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center p-6">
            <div className="text-left text-xl sm:text-3xl md:text-3xl lg:text-4xl font-poppins px-2 space-y-2">
              <div>
                <span className="text-text-websiteteamlight font-thin">
                  Special Thanks
                </span>
                <span className="text-text-websiteteamlight font-thin">
                  {" "}
                  to the
                </span>
                <span className="text-primary font-semibold">
                  {" "}
                  Awesome Team
                </span>
              </div>
              <div>
                <span className="text-text-websiteteamlight font-thin">
                  {" "}
                  Who Helped Create this
                </span>
                <span className="text-text-websiteteamyellow font-semibold">
                  {" "}
                  Amazing Website
                </span>
              </div>
            </div>
            {teamMembers}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteTeam;
