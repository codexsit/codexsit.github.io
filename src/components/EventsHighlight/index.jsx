import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function EventsHighlight() {
  const containerRef = useRef(null);

  const images = [
    {
      key: 0,
      url: "/gallery/Community Session/cs1.jpg",
      alt: "Image 1",
      side: "left",
    },
    {
      key: 1,
      url: "/gallery/AIML SESSION/aiml1.jpg",
      alt: "Image 2",
      side: "right",
    },
    {
      key: 2,
      url: "/gallery//AIML SESSION/aiml6.jpg",
      alt: "Image 3",
      side: "left",
    },
    {
      key: 3,
      url: "/gallery/Community Session/cs3.jpg",
      alt: "Image 4",
      side: "right",
    },
    {
      key: 4,
      url: "/gallery/HackTober Fest/htf1_1.jpg",
      alt: "Image 5",
      side: "left",
    },
    {
      key: 5,
      url: "/gallery/Laser Lock/ll1.jpg",
      alt: "Image 6",
      side: "right",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set up each image animation
    images.forEach((_, index) => {
      const imageSection = containerRef.current.children[index];

      gsap.fromTo(
        imageSection,
        {
          opacity: 1,
          y: "20vh",
        },
        {
          opacity: 1,
          y: "-100vh",
          ease: "none",
          scrollTrigger: {
            trigger: imageSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            markers: false,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed description */}
      <div className="sticky top-1/2 z-0 text-center">
        <h2 className="xs:text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-4 text-white mt-[48vh] tracking-tighter font-black font-poppins">
          Events Highlight
        </h2>
      </div>

      {/* Images container */}
      <div ref={containerRef} className="relative">
        {images.map((image) => (
          <div
            key={image.key}
            className={`relative h-[50vh] flex items-center justify-center ${
              image.side === "left" ? "ml-12 md:ml-24" : "mr-12 md:mr-24"
            }`}
          >
            <div
              className={`absolute ${
                image.side === "left" ? "left-0 z-100" : "right-0"
              } xs:w-[20rem] md:w-[30rem]`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsHighlight;
