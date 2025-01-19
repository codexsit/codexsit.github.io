import { useState, useEffect } from "react";
import Heading from "@/components/Heading/index";
import PageTransition from "../../components/PageTransition";

export const images = [
  {
    src: "/CodeX-Website/gallery/RUST SESSION/rs1.JPG",
    caption: "Rust Session - Introduction to Rust",
    date: "2023-10-7",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml1.jpg",
    caption: "AI/ML Session - Getting Started with AI",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml2.jpg",
    caption: "AI/ML Session - Basics of Machine Learning",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml3.jpg",
    caption: "AI/ML Session - Basic of Deep Learning Concepts",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml4.jpg",
    caption: "AI/ML Session - Hands-on Workshop",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml5.jpg",
    caption: "AI/ML Session - Hands-on Workshop",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/AIML SESSION/aiml6.jpg",
    caption: "AI/ML Session - Q&A and Networking",
    date: "2023-10-14",
  },
  {
    src: "/CodeX-Website/gallery/Community Session/cs1.jpg",
    caption: "Community Session - Open Source Introduction",
    date: "2024-02-24",
  },
  {
    src: "/CodeX-Website/gallery/Community Session/cs2.jpg",
    caption: "Community Session - Collaborative Development",
    date: "2024-02-24",
  },
  {
    src: "/CodeX-Website/gallery/Community Session/cs3.jpg",
    caption: "Community Session - Hackathon Prep",
    date: "2024-02-24",
  },
  {
    src: "/CodeX-Website/gallery/Community Session/cs4.jpg",
    caption: "Community Session - Project Showcase",
    date: "2024-02-24",
  },
  {
    src: "/CodeX-Website/gallery/Generative ai session/gas1.jpg",
    caption: "Generative AI Session - AI Art",
    date: "2024-02-03",
  },
  {
    src: "/CodeX-Website/gallery/Generative ai session/gas2.jpg",
    caption: "Generative AI Session - Text Generation with AI",
    date: "2024-02-03",
  },
  {
    src: "/CodeX-Website/gallery/Generative ai session/gas3.jpg",
    caption: "Generative AI Session - AI for Text",
    date: "2024-02-03",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll4.jpg",
    caption: "Laser Lock Session - Laser Team Group Pic",
    date: "2023-09-11",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll5.jpg",
    caption: "Laser Lock Session - Laser Safety Protocols",
    date: "2023-09-11",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll6.jpg",
    caption: "Laser Lock Session - Hands-on Demonstration",
    date: "2023-09-11",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll7.jpg",
    caption: "Laser Lock Session - Opening Ceremony ",
    date: "2023-09-11",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll8.jpg",
    caption: "Laser Lock Session - Setup for Lacer Lock",
    date: "2023-09-10",
  },
  {
    src: "/CodeX-Website/gallery/Laser Lock/ll9.jpg",
    caption: "Laser Lock Session - Closing Ceremony",
    date: "2023-09-12",
  },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to open the modal and set the selected image index
  const openModal = (index = 0) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to navigate to the previous image
  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  // Function to navigate to the next image
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Function to handle keydown events for modal navigation
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowLeft") {
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      goToNext();
    }
  };

  // Add event listener for keydown events when modal is open
  useEffect(() => {
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <PageTransition>
      <Heading
        text="Gallery"
        className="text-center absolute top-0 left-0 right-0 mt-4 md:mt-8 lg:mt-12 mb-4 md:mb-8 lg:mb-12"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-[5%]">
        {images.map((image, index) => (
          <div
            role="button"
            aria-label="Open"
            onClick={() => openModal(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(index);
              }
            }}
            tabIndex={0} // Makes the div focusable
            key={image.src}
            className="cursor-pointer"
          >
            <img
              className="h-auto max-w-full rounded-lg aspect-square object-cover"
              src={image.src}
              alt={`Gallery img ${index + 1}`}
            />
          </div>
        ))}

        {modalOpen ? (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
            <div className="relative max-h-screen max-w-screen-lg p-4 bg-white rounded-lg  flex flex-col items-center justify-center">
              <img
                className="max-h-[80vh] rounded-lg mb-4"
                src={images[selectedImageIndex].src}
                alt={`Selected gallery img ${selectedImageIndex + 1}`}
              />
              <div className="text-center max-w-[80vw]">
                <h3 className="text-lg font-semibold truncate">
                  {images[selectedImageIndex].caption}
                </h3>
                <p className="text-sm text-gray-500">
                  Date: {images[selectedImageIndex].date}
                </p>
              </div>
              <div className="flex justify-between w-full mt-4 md:hidden">
                <button
                  className="text-white bg-gray-500 hover:bg-gray-300 font-bold py-2 px-4 border border-gray-300 rounded-3xl transform hover:scale-105 transition-transform"
                  onClick={goToPrevious}
                  aria-label="Previous Image"
                  type="button"
                >
                  &lt;&lt;
                </button>
                <button
                  className="text-white bg-gray-500 hover:bg-gray-300 font-bold py-2 px-4 border border-gray-300 rounded-3xl transform hover:scale-105 transition-transform"
                  onClick={goToNext}
                  aria-label="Next Image"
                  type="button"
                >
                  &gt;&gt;
                </button>
              </div>
            </div>
            <button
              type="button"
              className="absolute top-2 right-2 text-white bg-gray-500 hover:bg-gray-300 font-bold py-2 px-4 border border-gray-300 rounded transform hover:scale-105 transition-transform"
              onClick={closeModal}
              aria-label="Close"
            >
              x
            </button>
            <button
              className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 hover:bg-gray-300 font-bold py-2 px-4 border border-gray-300 rounded-3xl hover:scale-105 transition-transform"
              onClick={goToPrevious}
              aria-label="Previous Image"
              type="button"
            >
              &lt;&lt;
            </button>
            <button
              className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 hover:bg-gray-300 font-bold py-2 px-4 border border-gray-300 rounded-3xl hover:scale-105 transition-transform"
              onClick={goToNext}
              aria-label="Next Image"
              type="button"
            >
              &gt;&gt;
            </button>
          </div>
        ) : null}
      </div>
    </PageTransition>
  );
}
