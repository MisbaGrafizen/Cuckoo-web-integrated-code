import React, { useEffect, useState } from 'react'
import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ApiGet } from '../../helper/axios';
export default function Memories() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await ApiGet("/admin/images");
        console.log('response of image', response)
        setImages(response.image);
      } catch (error) {
        console.error("Error fetching visa packages:", error);
      }
    };

    fetchImages();
  }, []);

  console.log("images", images)


    const memories = [
        {
          id: 1,
          src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
          alt: "Santorini, Greece - Stunning white buildings and blue sea",
          size: "medium",
        },
        {
          id: 2,
          src: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
          alt: "Eiffel Tower, France - Paris at sunset",
          size: "small",
        },
        {
          id: 3,
          src: "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg",
          alt: "Kyoto, Japan - Traditional red Torii gates",
          size: "tall",
        },
        {
          id: 4,
          src: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
          alt: "Great Wall of China - Historical landmark",
          size: "wide",
        },
        {
          id: 5,
          src: "https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg",
          alt: "Venice, Italy - Beautiful canals and gondolas",
          size: "tall",
        },
        {
          id: 6,
          src: "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg",
          alt: "Machu Picchu, Peru - Ancient Incan city",
          size: "large",
        },
        // {
        //   id: 7,
        //   src: "https://images.pexels.com/photos/164046/pexels-photo-164046.jpeg",
        //   alt: "Sydney, Australia - Opera House view",
        //   size: "small",
        // },
         {
          id: 8,
          src: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
          alt: "Dubai, UAE - Modern skyscrapers",
          size: "large",
        },
        {
          id: 9,
          src: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
          alt: "New York City, USA - Times Square lights",
          size: "tall",
        },
        {
          id: 10,
          src: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
          alt: "Rio de Janeiro, Brazil - Christ the Redeemer",
          size: "small",
        },
      ];






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
            return prev === 0 ? memories.length - 1 : prev - 1;
          });
        };
      
        // Go to next image
        const nextImage = () => {
          setCurrentIndex((prev) => {
            // Wrap around to first image if at last image
            return prev === memories.length - 1 ? 0 : prev + 1;
          });
        };
      
      
    return (
        <>
<section className='  md:w-[75%] h-[70vh] flex-col font-Poppins  relative gap-[30px] w-[90%] flex mx-auto   2xl:w-[1370px]'>
<h1 className="flex font-[700] gap-[10px] w-fit  relative  text-[35px]">
Our
            <span className="pr-[10px] flex text-[#005f94]">             Memories </span>
            <div className=" absolute  right-[20px]    top-[35px]">
              <div className="relative  max-w-[100px] w-full md:max-w-[170px]">
                <svg
                  viewBox="0 0 300 80"
                  className="w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter
                      id="sketch"
                      x="-10%"
                      y="-10%"
                      width="120%"
                      height="120%"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.02"
                        numOctaves="4"
                        seed="5"
                        result="noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="2"
                        xChannelSelector="R"
                        yChannelSelector="G"
                      />
                    </filter>
                    <linearGradient
                      id="yellowVariation"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#FCD34D" />
                    </linearGradient>
                  </defs>

                  {/* Main sketchy lines */}
                  <g style={{ filter: "url(#sketch)" }}>
                    {/* First sketch layer */}
                    <path
                      d="M10,30 Q80,25 150,30 T290,30 
               M15,35 Q85,30 155,35 T285,35"
                      stroke="#FCD34D"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Second sketch layer with slight offset */}
                    <path
                      d="M12,32 Q82,27 152,32 T292,32
               M17,37 Q87,32 157,37 T287,37"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Quick sketch details */}
                    <path
                      d="M30,31 l5,-2 l10,4 l-5,-4
               M160,33 l8,-3 l6,3 l-4,-3
               M250,32 l6,-2 l8,4 l-7,-4"
                      stroke="#FBBF24"
                      strokeWidth="1"
                      fill="none"
                    />

                    {/* Additional sketchy details */}
                    {[...Array(8)].map((_, i) => (
                      <path
                        key={i}
                        d={`M${20 + i * 40},${30 + (i % 2) * 2} l${
                          5 + (i % 3)
                        },${-2 + (i % 2)}`}
                        stroke="#F59E0B"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.6"
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </div>

          </h1>

            <section className="travel-memories">
                <div className="memories-grid">
                {memories.map((memory, i) => (
              <div
                key={memory.id}
                className={`memory-item ${memory.size}`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={memory.src}
                  alt={memory.alt}
                  className="memory-image"
                />
              </div>
            ))}
                </div>

                {/* Styles */}
                <style jsx>{`
        .travel-memories {
          height: 80vh;
          padding: 10px;
          box-sizing: border-box;
        }
        .memories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 1fr;
          grid-auto-flow: dense;
          gap: 8px;
          height: 100%;
          width: 100%;
        }
        .memory-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        .memory-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
        
        /* Size Variations */
        .small {
          grid-column: span 1;
          grid-row: span 1;
        }
        .medium {
          grid-column: span 2;
          grid-row: span 2;
        }
        .wide {
          grid-column: span 3;
          grid-row: span 1;
        }
        .tall {
          grid-column: span 1;
          grid-row: span 3;
        }
        .large {
          grid-column: span 3;
          grid-row: span 3;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .memories-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .wide, .large {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .memories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .wide {
            grid-column: span 2;
          }
          .large {
            grid-column: span 3;
          }
        }
        @media (max-width: 480px) {
          .memories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .wide, .large {
            grid-column: span 2;
            grid-row: span 2;
          }
          .tall {
            grid-column: span 1;
            grid-row: span 2;
          }
        }
      `}</style>
            </section>


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
              src={memories[currentIndex].src}
              alt={memories[currentIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
        </div>
      )}
</section>

        </>
    )
}
