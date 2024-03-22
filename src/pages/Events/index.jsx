import { useState, useEffect } from "react";
import Card from "./card";
import events from "./events.json";

function EventPage() {
  const borderStyle = {
    color: "transparent",
    WebkitTextStrokeWidth: "0.5px",
    WebkitTextStrokeColor: "white",
  };
  const [events, setEvent] = useState([]);

  useEffect(() => {
    setEvent(events);
  }, []);
  return (
    <div className="">
      <div className=" flex flex-row flex-nowrap w-full  overflow-hidden ">
        <p
          className="text-white text-7xl py-10 font-extrabold inline-block px-1 words"
          style={borderStyle}
        >
          EVENTS
        </p>
        <p className="text-white text-7xl py-10 font-extrabold inline-block px-2 words">
          {" "}
          EVENTS
        </p>
        <p
          className="text-white text-7xl py-10 font-extrabold inline-block px-2 words"
          style={borderStyle}
        >
          EVENTS
        </p>
        <p className="text-white text-7xl py-10 font-extrabold inline-block px-2 words">
          {" "}
          EVENTS
        </p>
        <p
          className="text-white text-7xl py-10 font-extrabold inline-block px-2 words"
          style={borderStyle}
        >
          EVENTS
        </p>
      </div>
      <div className=" flex flex-wrap gap-10 justify-center align-items py-10">
        {/* Add enough content to exceed the width of the container */}
        {events.map((event) => (
          <Card key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventPage;
