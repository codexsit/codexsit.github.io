import { useContext } from "react";
import { CursorVariantContext } from "@/context/CursorVariantProvider";
import PageTransition from "@/components/PageTransition";
import EventsHighlight from "../../components/EventsHighlight";
import SkewButton from "../../components/SkewButton";
import AboutSection from "@/components/AboutUs";
import TeamMember from "../Teams/TeamMember";
import teamMembersData from "../Teams/teamsdata.json";
import Heading from "@/components/Heading";

function Home() {
  const { setCursorVariantText, setCursorVariantDefault } =
    useContext(CursorVariantContext);

  return (
    <PageTransition>
      <div className="bg-background-dark h-[calc(100vh-4.6rem)] flex">
        <div className="m-auto">
          <div
            onMouseOver={setCursorVariantText}
            onMouseLeave={setCursorVariantDefault}
            className="text-7xl md:text-9xl lg:text-[11rem] text-primary text-center font-gothic uppercase"
          >
            Codex, SIT
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl mt-4 text-text-light text-center">
            Coding Club
          </div>
        </div>
      </div>
      <AboutSection />
      <div className="min-h-screen mt-32">
        <div className="flex justify-center items-center">
          <div className="flex-grow mx-auto pr-5 pl-5 space-x-30 py-8">
            <Heading
              text="MEET OUR TEAM"
              className="text-center absolute top-0 left-0 right-0"
            />
            <div className="flex flex-row flex-wrap gap-8 md:gap-16 justify-center items-center mt-12">
              {teamMembersData.slice(0, 3).map((member) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
            <SkewButton text="SEE ALL" link="/teams" className="mt-16" />
          </div>
        </div>
      </div>
      <EventsHighlight />
      <div className="h-[50vh]">
        <SkewButton link="/events" text="See all events" />
      </div>
    </PageTransition>
  );
}

export default Home;
