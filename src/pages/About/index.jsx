// import React from "react";
import Heading from "@/components/Heading/index";
import Oval from "@/assets/images/About/oval.svg";
import PageTransition from "../../components/PageTransition";

function About() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
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

        {/* Our Vision Section */}
        <section className="bg-background-light text-text-dark py-12 px-4 md:px-8 relative">
          <Heading
            text="OUR VISION"
            className="mb-8"
            frontTextStyle="text-primary"
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-base md:text-lg mb-8">
              To be a leading coding club that inspires students, driving
              excellence in programming and technology at Symbiosis Institute of
              Technology and beyond.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-background-light text-text-dark py-12 px-4 md:px-8 relative">
          <Heading
            text="OUR MISSION"
            className="mb-8"
            frontTextStyle="text-primary"
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-center text-base md:text-lg mb-8">
              To empower students (from beginner coders to advanced) with coding
              skills and knowledge through hands-on learning experiences,
              webinars and workshops fostering a community of innovative
              thinkers and problem-solvers.
            </p>
          </div>
          <img
            src={Oval}
            alt="Oval"
            className="w-full absolute bottom-0 left-0 z-0"
          />
        </section>

        {/* What We Do Section */}
        <section className="bg-secondary-dark text-text-light py-12 px-4 md:px-8 relative">
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
