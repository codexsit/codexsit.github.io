import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Oval from "@/assets/images/About/oval.svg";
import PageTransition from "../../components/PageTransition";
import Heading from "@/components/Heading/index";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0); // 0: Vision, 1: Mission

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate which section should be active
      const newActiveSection = Math.floor(
        (scrollPosition - 150) / viewportHeight,
      );

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="flex flex-col">
        {/* About Us Section */}
        <section className="bg-secondary-dark text-text-light py-8 px-4 md:px-8">
          <Heading
            text="ABOUT US"
            className="mb-8"
            frontTextStyle="text-text-light"
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-base md:text-lg mb-8">
              Codex is the coding club at Symbiosis Institute of Technology that
              brings together students passionate about technology and
              programming. Our club is committed to creating an engaging
              environment where members can learn, collaborate, and grow their
              coding expertise through a variety of activities and events
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <img
                src="/CodeX-Website/gallery/Laser Lock/ll4.jpg"
                alt="About Us 1"
                className="w-full md:w-1/2 max-w-md mx-auto rounded-2xl h-auto object-cover"
              />
              <img
                src="/CodeX-Website/gallery/Laser Lock/ll5.jpg"
                alt="About Us 2"
                className="w-full md:w-1/2 max-w-md mx-auto rounded-2xl h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <div
          ref={sectionRef}
          className="h-[130vh] relative bg-background-light text-text-dark"
        >
          {/* Vision Section */}
          <div
            className={`sticky top-1/2 mt-[50vh] transition-section ${activeSection === 0 ? "visible" : ""}`}
          >
            <Heading
              text="OUR VISION"
              className="mb-8"
              frontTextStyle="text-primary"
            />
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-base md:text-lg mb-8 px-6">
                To be a leading coding club that inspires students, driving
                excellence in programming and technology at Symbiosis Institute
                of Technology and beyond.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div
            className={`mt-[20vh] md:mt-[10vh] transition-section ${activeSection === 1 ? "visible" : ""}`}
          >
            <Heading
              text="OUR MISSION"
              className="mb-8"
              frontTextStyle="text-primary"
            />
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-base md:text-lg mb-8 px-6">
                To empower students (from beginner coders to advanced) with
                coding skills and knowledge through hands-on learning
                experiences, webinars and workshops fostering a community of
                innovative thinkers and problem-solvers.
              </p>
            </div>
          </div>

          <img
            src={Oval}
            alt="Oval"
            className="w-full absolute bottom-0 left-0 z-0"
          />
        </div>

        {/* What We Do Section */}
        <section className="min-h-screen bg-secondary-dark text-text-light py-12 px-4 md:px-8 relative">
          <Heading
            text="WHAT WE DO?"
            className="mb-8"
            frontTextStyle="text-text-light"
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-base md:text-lg mb-12">
              We organize coding workshops, competitions, collaborative projects
              and webinars to help students enhance their programming abilities.
              We also host guest lectures and webinars with industry experts to
              provide valuable insights and career guidance. Through our
              activities, we aim to build a supportive coding community.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <img
                src="/CodeX-Website/gallery/Community Session/cs4.jpg"
                alt="What We Do 1"
                className="w-full md:w-1/2 max-w-md mx-auto rounded-lg h-auto object-cover"
              />
              <img
                src="/CodeX-Website/gallery/AIML SESSION/aiml2.jpg"
                alt="What We Do 2"
                className="w-full md:w-1/2 max-w-md mx-auto rounded-lg h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default About;
