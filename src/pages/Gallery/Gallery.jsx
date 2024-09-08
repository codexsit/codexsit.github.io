import { useState, useEffect } from "react";
import Heading from "@/components/Heading/index";
import PageTransition from "../../components/PageTransition";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next image
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
        className="text-center absolute top-0 left-0 right-0 mb-24"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-[5%]">
        {images.map((image, index) => (
        <div
        role="button"
        aria-label="Open"
        onClick={() => openModal(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            openModal(index);
          }
        }}
        tabIndex={0} // Makes the div focusable
        key={image}
        className="cursor-pointer"
      >
        <img
          className="h-auto max-w-full rounded-lg aspect-square"
          src={image}
          alt={`Gallery img ${index + 1}`}
        />
      </div>
      
        ))}

        {modalOpen ? (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
            <div className="relative max-h-screen max-w-screen-lg">
              <button
                type="button"
                className="absolute top-0 right-0 m-4 text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 border border-gray-700 rounded"
                onClick={closeModal}
                aria-label="Close"
              >
                x
                <i className="fa-solid fa-xmark" />
              </button>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-4 border border-black rounded-3xl ml-5"
                onClick={goToPrevious}
                aria-label="Previous Image"
                type="button"
              >
                &lt;&lt;
                <i className="fa-solid fa-backward" />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-4 border border-black rounded-3xl mr-5"
                onClick={goToNext}
                aria-label="Next Image"
                type="button"
              >
                &gt;&gt;
                <i className="fa-solid fa-forward" />
              </button>
              <img
                className="max-h-screen max-w-full rounded-lg"
                src={images[selectedImageIndex]}
                alt={`Selected gallery img ${selectedImageIndex + 1}`}
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </PageTransition>
  );
}
