import { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 150);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 150);
  return `rgba(${r}, ${g}, ${b}, 0.3)`;
};

function ImageCarousel({
  images,
  interval = 3000,
  onManualChange,
  className,
  isModal,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if ((isHovered || isModal) && !onManualChange) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [images.length, interval, onManualChange, isHovered, isModal]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentIndex(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={className}
      />
      {images.length > 1 && (
        <>
          {isModal && (
            <>
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 rounded-full text-white hover:bg-black/50"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 rounded-full text-white hover:bg-black/50"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((image, idx) => (
              <div
                key={image}
                className={`h-1.5 w-1.5 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function EventsCard({ event }) {
  const [showModal, setShowModal] = useState(false);
  const randomColor = useMemo(() => getRandomColor(), []);

  const truncateText = (text, length) =>
    text.length > length ? `${text.slice(0, length)}...` : text;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setShowModal(true)}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") setShowModal(true);
        }}
        className="w-full"
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <div className="relative inline-block w-full h-[400px] md:h-[350px] overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform">
            <ImageCarousel
              images={event.images}
              className="w-full h-full object-cover object-bottom rounded-t-xl"
            />
            <div
              className="absolute bottom-0 w-full flex flex-col justify-center backdrop-blur-md rounded-b-xl p-4"
              style={{ backgroundColor: randomColor }}
            >
              <h3 className="text-white font-semibold mb-1 text-ellipsis whitespace-nowrap overflow-hidden">
                {event.title}
              </h3>
              <p className="text-white text-xs mb-1">{event.date}</p>
              <p className="text-white text-sm">
                {truncateText(event.description, 100)}
              </p>
            </div>
          </div>
        </Tilt>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="h-64">
              <ImageCarousel
                images={event.images}
                interval={5000}
                onManualChange
                className="w-full h-full object-contain object-bottom rounded-t-xl"
                isModal
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
  interval: PropTypes.number,
  onManualChange: PropTypes.func,
  className: PropTypes.string,
  isModal: PropTypes.bool,
};

ImageCarousel.defaultProps = {
  interval: 3000,
  onManualChange: null,
  className: "",
  isModal: false,
};

EventsCard.propTypes = {
  event: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventsCard;
