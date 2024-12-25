import Marquee from "react-fast-marquee";
import Card from "./Card";
import { images } from "../Gallery/Gallery";

function EventPage() {
  return (
    <div>
      <Marquee gradient={false} speed={50}>
        <p className="font-bold text-white mr-8">events</p>
        <p className="font-bold text-white mr-8">events</p>
        <p className="font-bold text-white mr-8">events</p>
        <p className="font-bold text-white mr-8">events</p>
        <p className="font-bold text-white mr-8">events</p>
      </Marquee>
      <div className="my-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <Card key={image.caption} object={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
