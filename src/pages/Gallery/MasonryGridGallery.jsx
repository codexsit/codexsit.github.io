import React, { useState } from 'react';
import Paper from '@mui/material/Paper';



export function MasonryGridGallery({ images }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <>
    <h1 style={{textAlign:"center" , fontSize:"5vw"}}>Gallery</h1>
    <hr className='container mt-3'/>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{margin:"5%" }}>      

                <div class="grid gap-4">
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" onClick={() => openModal(0)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" onClick={() => openModal(1)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" onClick={() => openModal(2)}/>                  
                    </Paper>
                </div>
                <div class="grid gap-4">
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" onClick={() => openModal(3)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" onClick={() => openModal(4)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" onClick={() => openModal(5)}/>
                    </Paper>
                </div>
                <div class="grid gap-4">
                    <Paper elevation={5}>         
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" onClick={() => openModal(6)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" onClick={() => openModal(7)}/>
                    </Paper>
                    <Paper elevation={5}>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" onClick={() => openModal(8)}/>
                    </Paper>
                </div>

                {modalOpen && images.map((image, index) => (
                  <div key={index}  style={{position:"relative" , marginTop:"0%" , backgroundColor:"black"}}>           
                           {modalOpen && selectedImageIndex === index && (
       
                               <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                                 <div className="relative">
                                   <button className="absolute top-0 right-0 m-4 text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 border border-gray-700 rounded" onClick={closeModal}>
                                     <span className="sr-only">X</span>
                                     <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                     </svg>
                                   </button>
                                   <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                     <button className=" hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 border border-gray-700 rounded-3xl ml-5" onClick={goToPrevious}>
                                     <i class="fa-solid fa-angles-left text-black hover:text-white" ></i>
                                     </button>
                                   </div>
                                   <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                     <button className=" hover:bg-gray-700 hover:text-white text-white font-bold py-2 px-4 border border-gray-700 rounded-3xl mr-5" onClick={goToNext}>
                                     <i className="fa-solid fa-angles-right text-black hover:text-white" ></i>
                                     </button>
                                   </div>
                                   <img
                                     className="max-w-full rounded-lg"
                                     src={images[selectedImageIndex]?.src}
                                     alt={`gallery-photo-${selectedImageIndex}`}
                                     onKeyDown={handleKeyDown}
                                     tabIndex="0"
                                   />
                                 </div>
       
                             </div>
                           )}
                  </div>
                ))}

    </div>
    </>
  );
}
