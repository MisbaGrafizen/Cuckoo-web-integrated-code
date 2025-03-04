import React ,{forwardRef, useState}from "react";


import other1 from "../../../public/holidaypack/other1.avif";
import other2 from "../../../public/holidaypack/other2.avif";

import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
const IMAGE_DATA = [
  other1,
  other2,
  other1,

  other2,
  other1,
  
  other2,
];



 const Reviews = forwardRef((props, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Open the lightbox at a specific image
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  // Go to previous image
  const prevImage = () => {
    setCurrentIndex((prev) => {
      // Wrap around to last image if at first image
      return prev === 0 ? IMAGE_DATA.length - 1 : prev - 1;
    });
  };

  // Go to next image
  const nextImage = () => {
    setCurrentIndex((prev) => {
      // Wrap around to first image if at last image
      return prev === IMAGE_DATA.length - 1 ? 0 : prev + 1;
    });
  };


  return (
    <>
      <div  ref={ref} className=" w-[100%] mx-auto p-6">
        <div className="bg-white rounded-lg border p-6 shadow-sm">
          {/* Header with Profile and Rating */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={other1}
                  alt="Sachin Sharma"
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sachin Sharma</h3>
                <p className="text-sm text-gray-500">Reviewed: 30 Aug 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <span className="text-green-500 font-medium">5.0</span>
              <span className="text-gray-400">/5</span>
            </div>
          </div>

          {/* Booked Package */}
          <div className="mb-3">
            <span className="text-gray-600">Booked: </span>
            <a
              href="#"
              className="text-gray-900 hover:underline inline-flex items-center gap-1"
            >
              Wonders of Dubai | Journey through Jewels of the Emirates
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mb-4">
            Everything was very well planned and every service provided was
            great whether its transport or property.I loved this trip and wish
            to travel always with   first.
          </p>

          {/* Photo Grid */}
          <div className="md:grid  hidden grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {IMAGE_DATA.slice(0, 6).map((imageSrc, i) => (
              <div
                key={i}
                className="rounded-lg w-fit overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={imageSrc}
                  alt={`Trip photo ${i + 1}`}
                  className="object-cover w-[150px] h-[150px]"
                />
              </div>
            ))}
            <div className=" rounded-lg w-fit  overflow-hidden relative group"   onClick={() => openLightbox(5)} >
              <img
                src={other1}
                alt="More photos"
                className="object-cover w-[150px] h-[150px] "
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-semibold">(20+)</span>
                <span className="text-sm">View All</span>
              </div>
            </div>
          </div>
          <div className="md:grid  flex overflow-x-auto  md:hidden grid-cols-5 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {IMAGE_DATA.slice(0, 4).map((imageSrc, i) => (
              <div
                key={i}
                className="rounded-lg w-fit flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={imageSrc}
                  alt={`Trip photo ${i + 1}`}
                  className="object-cover w-[150px] h-[150px]"
                />
              </div>
            ))}
            <div className=" rounded-lg w-fit  overflow-hidden relative group"   onClick={() => openLightbox(5)} >
              <img
                src={other1}
                alt="More photos"
                className="object-cover w-[150px] h-[150px] "
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-semibold">(20+)</span>
                <span className="text-sm">View All</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-5 text-white hover:text-gray-300"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-5 text-white hover:text-gray-300"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Fullscreen Image */}
          <img
            src={IMAGE_DATA[currentIndex]}
            alt={`Trip photo ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
})
export default Reviews;