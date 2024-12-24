import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Card from "@/components/Card";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const images1 = [
    {
      src: "/CodeX-Website/gallery/AIML SESSION/aiml6.jpg",
      alt: "AIML Session",
      key: 0,
    },
    {
      src: "/CodeX-Website/gallery/Community Session/cs1.jpg",
      alt: "Community Session",
      key: 1,
    },
    {
      src: "/CodeX-Website/gallery/Generative ai session/gas3.jpg",
      alt: "Generative AI Session",
      key: 2,
    },
    {
      src: "/CodeX-Website/gallery/HackTober Fest/htf2_1.jpg",
      alt: "HackTober Fest Session",
      key: 3,
    },
    {
      src: "/CodeX-Website/gallery/Laser Lock/ll7.jpg",
      alt: "Laser Lock",
      key: 4,
    },
    {
      src: "/CodeX-Website/gallery/RUST SESSION/rs1.JPG",
      alt: "image1-6",
      key: 5,
    },
    {
      src: "/CodeX-Website/gallery/AIML SESSION/aiml5.jpg",
      alt: "image1-7",
      key: 6,
    },
  ];

  const images2 = [
    {
      src: "/CodeX-Website/gallery/Community Session/cs2.jpg",
      alt: "Community Session",
      key: 0,
    },
    {
      src: "/CodeX-Website/gallery/Generative ai session/gas1.jpg",
      alt: "Gen AI Session",
      key: 1,
    },
    {
      src: "/CodeX-Website/gallery/HackTober Fest/htf3_1.jpg",
      alt: "HackTober Fest Session",
      key: 2,
    },
    {
      src: "/CodeX-Website/gallery/Laser Lock/ll9.jpg",
      alt: "Laser Lock Event",
      key: 3,
    },
    {
      src: "/CodeX-Website/gallery/HackTober Fest/htf4_1.jpg",
      alt: "HackTober Fest Session",
      key: 4,
    },
    {
      src: "/CodeX-Website/gallery/AIML SESSION/aiml2.jpg",
      alt: "AIML Session",
      key: 5,
    },
    {
      src: "/CodeX-Website/gallery/AIML SESSION/aiml3.jpg",
      alt: "AIML Session",
      key: 6,
    },
  ];

  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Split all text nodes while preserving the special span
    const splitText = (node) => {
      if (node.nodeType === 3) {
        // Text node
        const words = node.textContent.split(" ");
        const fragments = words.map((word) => {
          const span = document.createElement("span");
          span.className = "inline-block letter-span";
          span.innerHTML = `${word}&nbsp;`;
          return span;
        });
        node.replaceWith(...fragments);
      } else if (node.classList?.contains("text-primary")) {
        // For highlighted text, split but add special class
        const words = node.textContent.split(" ");
        const fragments = words.map((word) => {
          const span = document.createElement("span");
          span.className = "inline-block letter-span highlighted";
          span.innerHTML = `${word}&nbsp;`;
          return span;
        });
        node.replaceWith(...fragments);
      } else {
        [...node.childNodes].forEach((child) => splitText(child));
      }
    };

    // Clone the paragraph to preserve original structure
    const clone = paragraph.cloneNode(true);
    splitText(clone);
    paragraph.innerHTML = clone.innerHTML;

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    // Animate regular text
    tl.fromTo(
      paragraph.querySelectorAll(".letter-span:not(.highlighted)"),
      { color: "transparent" },
      {
        color: "#B7AB98",
        stagger: 0.02,
      },
      0, // Start at the beginning of the timeline
    );

    // Animate highlighted text
    tl.fromTo(
      paragraph.querySelectorAll(".highlighted"),
      { color: "transparent" },
      {
        color: "#E76941",
        stagger: 0.02,
      },
      0, // Start at the same time as regular text
    );
  }, []);

  return (
    <>
      <section className="relative min-h-fit bg-background-dark text-white py-12 md:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-4 -left-1 w-8 h-8 bg-white rounded-full opacity-100" />
        <div className="absolute -top-2 right-20 w-20 h-20 bg-primary-dark rounded-full opacity-100 z-10" />
        <div className="max-w-full mx-auto relative z-20">
          <h1
            className="text-secondary-dark shadow-black font-poppins font-extrabold text-4xl md:text-6xl lg:text-8xl mb-12 relative z-20"
            style={{
              WebkitTextStroke: "2px #737373",
            }}
          >
            ABOUT US
          </h1>

          <div className="mb-16 max-w-full relative">
            <p
              ref={paragraphRef}
              className="text-xl md:text-4xl md:leading-snug font-poppins font-semibold"
            >
              CodeX is the coding club at
              <span className="text-primary">
                Symbiosis Institute of Technology
              </span>
              that brings together students passionate about technology and
              programming. Our club is committed to creating an engaging
              environment where members can learn, collaborate, and grow their
              coding expertise through a variety of activities and events.
            </p>
            <Link to="/about-us">
              <button
                type="button"
                className="absolute -bottom-6 right-0 text-xl underline text-primary hover:text-text-light transition-colors"
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="relative space-y-8 max-w-full px-0 overflow-hidden">
        <div className="absolute bottom-96 -right-2 w-24 h-24 bg-white rounded-full opacity-100" />
        <Marquee
          gradient
          gradientColor={[28, 28, 28]}
          speed={40}
          className="overflow-hidden w-full"
        >
          {images1.map((image) => (
            <Card
              key={image.key}
              className="mx-4 overflow-hidden bg-zinc-800 border-zinc-700"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </Marquee>

        <Marquee
          gradient
          gradientColor={[28, 28, 28]}
          speed={40}
          direction="right"
          className="overflow-hidden w-full"
        >
          {images2.map((image) => (
            <Card
              key={image.key}
              className="mx-4 overflow-hidden bg-zinc-800 border-zinc-700"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </Marquee>
      </div>
    </>
  );
}
