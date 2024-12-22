import { useContext } from "react";
import Heading from "@/components/Heading";
import { CursorVariantContext } from "@/context/CursorVariantProvider";
import PageTransition from "@/components/PageTransition";
import EventsHighlight from "../../components/EventsHighlight";
import SkewButton from "../../components/SkewButton";

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
      <Heading text="What do we do?" />
      <EventsHighlight />
      <div className="h-[50vh] mt-[50vh">
        <SkewButton link="/events" text="See all events" />
      </div>
    </PageTransition>
  );
}

export default Home;
