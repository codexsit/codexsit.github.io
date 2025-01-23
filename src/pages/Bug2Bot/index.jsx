import PageTransition from "@/components/PageTransition";
import { useEffect, useState } from "react";
import MazeImage from "../../assets/images/Bug2Bot/mazeImage.png";
import Bug2BotLogo from "../../assets/images/Bug2Bot/bug2botLogo.svg";
import Background1 from "../../assets/images/Bug2Bot/background1.png";
import Background2 from "../../assets/images/Bug2Bot/background2.png";
import Card1Background from "../../assets/images/Bug2Bot/card1_debug.png";
import Card2Background from "../../assets/images/Bug2Bot/card2_build.png";
import Card3Background from "../../assets/images/Bug2Bot/card3_conquer.png";
import React from "react";

const targetDate = new Date("2025-01-24T12:00:00");

/**
 * GradientTextSVG component
 * @param {Object} props
 * @param {string} props.text - Text to display
 * @param {number} props.width - Width of the SVG
 * @param {number} props.height - Height of the SVG
 * @param {number} props.fontSize - Font size of the text
 * @param {string[]} props.gradientColors - Array of two colors for gradient
 */
function GradientTextSVG({ text, width, height, fontSize, gradientColors }) {
  return (
    <svg height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientColors[0]} />
          <stop offset="100%" stopColor={gradientColors[1]} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight="bold"
        fill="transparent"
        stroke="url(#textGradient)"
        strokeWidth="2"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-poppins w-max"
      >
        {text}
      </text>
    </svg>
  );
}

export default function Bug2Bot() {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    const now = new Date(); // Current date and time
    const diff = targetDate.getTime() - now.getTime(); // Difference in milliseconds

    if (diff <= 0) {
      setRemainingTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return; // Stop updating if the target time is reached
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setRemainingTime({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const gradientFontSize = 100;
  return (
    <PageTransition>
      <div className="text-white">
        {/* Section 1 START ====== */}
        <div
          className="flex flex-col items-center pt-10 w-full justify-center"
          style={{
            minHeight: "95vh",
            backgroundImage: `url(${Background1})`,
            backgroundPosition: "center",
          }}
        >
          <div>
            <GradientTextSVG
              text="SYMBITECH 2025"
              width={9 * gradientFontSize}
              height={gradientFontSize}
              fontSize={gradientFontSize}
              gradientColors={["#FD4445", "#F2C849"]}
            />
          </div>
          <div className="text-2xl font-orbitron">Presenting You</div>
          <img src={Bug2BotLogo} alt="bug2botLogo" />
          <div className="text-3xl font-orbitron">Event Starts in:</div>
          <div
            className="text-3xl font-orbitron"
            style={{
              WebkitTextStroke: "0.5px red",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(to right, #FD4445, #F2C849)",
            }}
          >
            {remainingTime.days} Days {remainingTime.hours} Hours{" "}
            {remainingTime.minutes} Mins
          </div>
          <div className="font-orbitron">Date: 24th & 25th January</div>
          <div className="font-orbitron">Venue: CL9 & 10</div>
          <div className="font-orbitron">(DBMS & Applied AI Lab)</div>
        </div>
        {/* Section 1 END ====== */}
        {/* Section 2, 3 Container START ===== */}
        <div
          style={{
            backgroundImage: `url(${Background2})`,
            backgroundSize: "cover",
          }}
        >
          {/* Section 2 START ====== */}
          <div
            className="w-full flex flex-col items-center p-10"
            style={{ backgroundImage: `url(${Background2})` }}
          >
            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 lg:container md:container">
              {/* Col 1 */}
              <div>
                <div className="font-orbitron font-bold">
                  Join the Challenge!
                </div>
                <div className="font-orbitron sm">
                  Unleash your tech prowess in this ultimate challenge where
                  coding precision meets hands-on ingenuity. Teams will tackle
                  gripping puzzles to unlock a path toward an innovative and
                  competitive build. Navigate through tasks designed to test
                  your creativity, strategy, and teamwork!
                </div>
              </div>
              {/* Col 2 */}
              <div className="mt-20">
                {/* Maze Image */}
                <img src={MazeImage} alt="Maze" />
                <div className="mt-20 font-orbitron text-3xl">
                  TIMINGS: 12PM - 4PM
                </div>
              </div>
            </div>
          </div>
          {/* Section 2 END ====== */}

          {/* Section 3 Rules START ====== */}
          <div className="flex flex-col p-10 text-white lg:items-center md:items-center">
            <div className="lg:container md:container">
              <div className="text-3xl font-orbitron font-bold mb-6">
                GUIDELINES
              </div>
              <div className="flex flex-col gap-6">
                {/* DEBUG Card */}
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-80 bg-cover"
                  style={{
                    backgroundImage: `url(${Card1Background})`,
                  }}
                >
                  <div className="text-2xl font-orbitron mb-4 font-bold">
                    DEBUG
                  </div>
                  <ol className="list-decimal list-inside">
                    <li className="font-orbitron">Form a team of 4 - 5</li>
                    <li className="font-orbitron">Find Qr, scan it</li>
                    <li className="font-orbitron">Find PC number</li>
                    <li className="font-orbitron">Debugging challenges</li>
                    <li className="font-orbitron">Programming languages</li>
                  </ol>
                </div>
                {/* BUILD Card */}
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-80 self-end bg-cover"
                  style={{
                    backgroundImage: `url(${Card2Background})`,
                  }}
                >
                  <div className="text-2xl font-bold mb-4 font-orbitron">
                    BUILD
                  </div>
                  <ol className="list-decimal list-inside">
                    <li className="font-orbitron">Get the components</li>
                    <li className="font-orbitron">
                      Assemble the RC car and race!
                    </li>
                    <li className="font-orbitron">Total Time - 15 Minutes</li>
                  </ol>
                </div>
                {/* CONQUER Card */}
                <div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-80 bg-cover"
                  style={{
                    backgroundImage: `url(${Card3Background})`,
                  }}
                >
                  <div className="text-2xl mb-4 font-orbitron font-bold">
                    CONQUER
                  </div>
                  <ol className="list-decimal list-inside">
                    <li className="font-orbitron">
                      Navigate through the race track
                    </li>
                    <li className="font-orbitron">Outsmart the traps</li>
                    <li className="font-orbitron">reach the finish line</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Section 3 END ====== */}
        </div>
        {/* Section 2, 3 Container END ===== */}
      </div>
    </PageTransition>
  );
}
