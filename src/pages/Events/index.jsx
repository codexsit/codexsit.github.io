import Marquee from "react-fast-marquee";
import EventsCard from "./EventsCard";
import events from "./events";
import PageTransition from "@/components/PageTransition";

function EventsPage() {
  return (
    <PageTransition>
      <Marquee gradient={false} speed={50}>
        <div className="flex flex-row gap-8 mr-8 overflow-hidden">
          <span className="text-outlined uppercase text-6xl md:text-8xl font-black text-transparent whitespace-nowrap">
            Events
          </span>
          <span className="text-text-light uppercase text-6xl md:text-8xl font-black whitespace-nowrap">
            Events
          </span>
          <span className="text-outlined uppercase text-6xl md:text-8xl font-black text-transparent whitespace-nowrap">
            Events
          </span>
          <span className="text-text-light uppercase text-6xl md:text-8xl font-black whitespace-nowrap">
            Events
          </span>
        </div>
      </Marquee>
      <div className="my-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mx-12">
          {events.map((event) => (
            <EventsCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default EventsPage;
