import { useContext } from "react";
import { CursorVariantContext } from "@/context/CursorVariantProvider";
import PageTransition from "@/components/PageTransition";
import EventsHighlight from "../../components/EventsHighlight";
import SkewButton from "../../components/SkewButton";
import AboutSection from "@/components/AboutUs";
import TeamMember from "../Teams/TeamMember";
import teamMembersData from "../Teams/teamsdata.json";
import Heading from "@/components/Heading";
import WebsiteTeam from "@/components/WebsiteTeam";
import stars from "@/assets/images/Christmas stars.png";
import "./Home.css";

function Home() {
  const { setCursorVariantText, setCursorVariantDefault } =
    useContext(CursorVariantContext);

  return (
    <PageTransition>
      <div className="bg-background-dark h-[calc(100vh-4.6rem)] flex">
        <div className="absolute top-0 left-0 z-[0] overflow-hidden h-screen w-full">
          <img
            onMouseOver={setCursorVariantText}
            onMouseLeave={setCursorVariantDefault}
            className="absolute top-[67%] md:top-[53%] -left-[10%] w-[300px] md:w-[35vw]"
            src="/images/hero2.png"
            alt="codex-team - laser lock"
          />
          <img
            onMouseOver={setCursorVariantText}
            onMouseLeave={setCursorVariantDefault}
            className="absolute top-[13%] -right-[10%] w-[300px] md:w-[35vw]"
            src="/images/hero1.png"
            alt="codex guest session"
          />
          <div className="bubble bubble1" />
          <div className="bubble bubble2" />
          <div className="bubble bubble3" />
        </div>
        <div className="m-auto relaive z-[1]">
          <div
            onMouseOver={setCursorVariantText}
            onMouseLeave={setCursorVariantDefault}
            className="text-7xl md:text-9xl lg:text-[11rem] text-primary text-center font-gothic uppercase"
          >
            Codex, SIT
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl mt-4 text-text-light text-center">
            Embracing Coding Culture
          </div>
        </div>
      </div>
      <div className="bg-[#B7AB98] h-16 mt-12 flex flex-row gap-8 justify-between items-center text-2xl uppercase font-bold overflow-hidden">
        <span>Learn</span>
        <img src={stars} alt="star-icon" />
        <span>Code</span>
        <img src={stars} alt="star-icon" />
        <span>Collaborate</span>
        <img src={stars} alt="star-icon" />
        <span>Build</span>
        <img src={stars} alt="star-icon" />
        <span>Solve</span>
        <img src={stars} alt="star-icon" />
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
      <WebsiteTeam />
    </PageTransition>
  );
}

export default Home;
