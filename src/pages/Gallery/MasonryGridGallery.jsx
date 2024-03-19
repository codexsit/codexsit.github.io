import { useState } from "react";

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


export function MasonryGridGallery() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index = 0) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
    // You can add more key handlers here as needed
  };


  return (
    <div>
      

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ margin: "5%" }}>
      {images.map((image, index) => (
        <div
          role="button"
          aria-label="Open"
          onClick={() => openModal(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          tabIndex={0}
          key={image}
          className="cursor-pointer"
        >
          <img
            className="h-auto max-w-full rounded-lg aspect-square"
            src={image}
            alt={`Gallery image ${index + 1}`}
          />
        </div>
      ))}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <button
              type="button"
              className="absolute top-0 right-0 m-4 text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 border border-gray-700 rounded"
              onClick={closeModal}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"/> 

            </button>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-4 border border-black rounded-3xl ml-5"
              onClick={goToPrevious}
              aria-label="Previous Image"
              type="button"
            >
              <i className="fa-solid fa-backward"/>

            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-4 border border-black rounded-3xl mr-5"
              onClick={goToNext}
              aria-label="Next Image"
              type="button"
            >
              <i className="fa-solid fa-forward"/>

            </button>
            <img
              className="max-w-full rounded-lg"
              src={images[selectedImageIndex]}
              alt={`Selected gallery image ${selectedImageIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>

    </div>
  );
}


export default MasonryGridGallery;
