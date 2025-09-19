import { useState } from "react";
import PropTypes from "prop-types";
import PageTransition from "@/components/PageTransition";
import TraitorsGambitLogo from "../../assets/images/Traitors_Gambit/logo.png";
import RobberBackground from "../../assets/images/Traitors_Gambit/robberbg.jpeg";
import RobberImage from "../../assets/images/Traitors_Gambit/robber1.jpeg";
import DetectiveBackground from "../../assets/images/Traitors_Gambit/detectivebg.jpeg";
import DetectiveImage from "../../assets/images/Traitors_Gambit/detective.jpeg";

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

GradientTextSVG.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GradientTextSVG.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function TraitorsGambit() {
  const gradientFontSize = 80;

  // Hashtags (hidden until revealed)
  const hashtags = [
    "#£~+hee37!;bd",
    "#dontclickonme😱",
    "#thisisasecretlmao",
    "#pacodexaammp",
    "#Tibmagsrotiart",
    "#coder",
    "#event",
    "#foryou",
    "#foryoupage",
    "#trending",
    "#explorepage",
    "#nextbigthing",
  ];

  // Map of words to hashtags (randomly assigned)
  const wordHashtagMap = {
    vanish: hashtags[2], // #thisisasecretlmao
    chaos: hashtags[0], // #£~+hee37!;bd
    riddles: hashtags[1], // #dontclickonme😱
    circuits: hashtags[3], // #pacodexaammp
    beams: hashtags[4], // #Tibmagsrotiart
    crew: hashtags[5], // #coder
    grid: hashtags[6], // #event
    patterns: hashtags[7], // #foryou
    signals: hashtags[8], // #foryoupage
    shadows: hashtags[9], // #trending
    stash: hashtags[10], // #explorepage
    seconds: hashtags[11], // #nextbigthing
  };

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [popupHashtag, setPopupHashtag] = useState("");

  // Handler for word click
  const handleWordClick = (hashtag) => {
    setPopupHashtag(hashtag);
    setShowPopup(true);
  };

  // Helper to wrap words in a span if they are in the map
  const highlightWords = (text) => {
    const wordInstanceCount = {};
    return text.split(/(\b)/).map((word) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, "");
      if (wordHashtagMap[cleanWord]) {
        wordInstanceCount[cleanWord] = (wordInstanceCount[cleanWord] || 0) + 1;
        return (
          <span
            key={`hashtag-${cleanWord}-${wordInstanceCount[cleanWord]}`}
            className="cursor-pointer"
            onClick={() => handleWordClick(wordHashtagMap[cleanWord])}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                handleWordClick(wordHashtagMap[cleanWord]);
            }}
          >
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <PageTransition>
      <div className="text-white overflow-hidden">
        {/* Section 1 - Event Details */}
        <div
          className="flex flex-col items-center justify-center p-10 w-full bg-background-dark"
          style={{ minHeight: "100vh" }}
        >
          <div className="mb-8">
            <GradientTextSVG
              text="SYMBITECH 2025"
              width={9 * gradientFontSize}
              height={gradientFontSize}
              fontSize={gradientFontSize}
              gradientColors={["#FD4445", "#F2C849"]}
            />
          </div>

          <div className="mb-8">
            <img
              src={TraitorsGambitLogo}
              alt="Traitor's Gambit Logo"
              className="max-w-md w-full h-auto"
            />
          </div>

          <div className="text-center space-y-4">
            <div className="text-xl font-orbitron">
              Date: 19th - 20th September, 2025
            </div>
            <div className="text-xl font-orbitron">
              Venue: Computer Lab 9 - 10, 4th floor, B wing
            </div>
            <div className="text-xl font-orbitron">
              Timings: 10:30 am to 4:00 pm
            </div>
          </div>
        </div>

        {/* Section 2 - Robbers */}
        <div
          className="w-full relative flex items-center justify-center"
          style={{
            minHeight: "100vh",
          }}
        >
          <img
            src={RobberBackground}
            alt="Robber Background"
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
            style={{ pointerEvents: "none" }}
          />
          <div className="flex items-center justify-center w-full max-w-6xl px-16 relative z-10">
            <div className="flex flex-col items-center mr-20">
              <h2
                className="text-6xl font-bold mb-8 text-white text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Robbers:
              </h2>
              <img
                src={RobberImage}
                alt="Robber"
                className="w-72 h-80 object-cover"
              />
            </div>

            <div className="flex-1 max-w-xl">
              <div className="space-y-6 text-white">
                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Slip through codes, chase hidden signals, dodge beams, and leave chaos in your wake.",
                  )}
                </p>

                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Your mission? Find the stash before anyone else does.",
                  )}
                </p>

                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Bring your crew of 3 - 4, think fast, move faster, and remember: every second counts.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 - Detectives */}
        <div
          className="w-full relative flex items-center justify-center"
          style={{
            minHeight: "100vh",
          }}
        >
          <img
            src={DetectiveBackground}
            alt="Detective Background"
            className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
            style={{ pointerEvents: "none" }}
          />
          <div className="flex items-center justify-center w-full max-w-6xl px-16 relative z-10">
            <div className="flex flex-col items-center mr-20">
              <h2
                className="text-6xl font-bold mb-8 text-white text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Detectives:
              </h2>
              <img
                src={DetectiveImage}
                alt="Detective"
                className="w-72 h-80 object-cover"
              />
            </div>
            <div className="flex-1 max-w-xl">
              <div className="space-y-6 text-white">
                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Follow trails that vanish in plain sight, piece together fractured patterns, and outsmart shifting circuits.",
                  )}
                </p>

                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Your mission? Track down the stash before it's too late.",
                  )}
                </p>

                <p className="text-xl font-orbitron leading-relaxed">
                  {highlightWords(
                    "Assemble your crew of 3-4, crack the riddles, guard the grid, and stop the shadows.",
                  )}
                </p>
              </div>
            </div>
          </div>
          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
              <div className="bg-white rounded-lg shadow-lg p-8 text-black text-2xl font-bold flex flex-col items-center">
                <span className="mb-4">{popupHashtag}</span>
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 font-semibold"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
