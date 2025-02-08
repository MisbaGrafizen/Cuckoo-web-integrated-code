import React, { useState, useEffect } from "react";
import image1 from "../../../public/ExploreHoloidays/image1.svg";
import image2 from "../../../public/ExploreHoloidays/image2.svg";
import image3 from "../../../public/ExploreHoloidays/image3.svg";

export default function ExploreHolidays() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: image1,
      title: "Weekend",
      description: "15+ Tour Packages",
    },
    {
      id: 2,
      image: image2,
      title: "Adventure",
      description: "20+ Tour Packages",
    },
    { id: 3, image: image2, title: "Family", description: "10+ Tour Packages" },
    { id: 4, image: image1, title: "Beach", description: "18+ Tour Packages" },
    {
      id: 5,
      image: image3,
      title: "Romantic",
      description: "25+ Tour Packages",
    },
    { id: 6, image: image2, title: "Family", description: "10+ Tour Packages" },
    { id: 7, image: image1, title: "Beach", description: "18+ Tour Packages" },
    { id: 8, image: image2, title: "Family", description: "10+ Tour Packages" },
    // { id: 9, image: image1, title: "Beach", description: "18+ Tour Packages" },
    // { id: 10, image: image1, title: "Weekend", description: "15+ Tour Packages" },
    // { id: 11, image: image2, title: "Adventure", description: "20+ Tour Packages" },
    // { id: 12, image: image2, title: "Family", description: "10+ Tour Packages" },
    // { id: 13, image: image1, title: "Beach", description: "18+ Tour Packages" },
    // { id: 14, image: image3, title: "Romantic", description: "25+ Tour Packages" },
    // { id: 15, image: image2, title: "Family", description: "10+ Tour Packages" },
    // { id: 16, image: image1, title: "Beach", description: "18+ Tour Packages" },
    // { id: 17, image: image2, title: "Family", description: "10+ Tour Packages" },
    // { id: 18, image: image1, title: "Beach", description: "18+ Tour Packages" },
  ];

  return (
    <>
      <div className="flex font-Poppins relative  pb-[40px] mx-auto w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[40px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex flex-col md:flex-row font-[700] text-[30px] md:text-[35px]">
              <span className="pr-[10px] flex text-[#005f94]">Explore</span>
              Holidays By Theme
            </h1>
            <div className=" absolute top-[30px] md:top-[35px]  left-[-7px] rotate-[360deg]">
              <div className="relative  w-full max-w-[150px]">
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
                        d={`M${20 + i * 40},${30 + (i % 2) * 2} l${5 + (i % 3)
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
            <p className="flex text-[16px] text-[#2a2a2a]">
              Find your perfect getaway, tailored to your interests.
            </p>
          </div>
          <div className="flex w-[50%] overflow-hidden justify-center">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-[30px] w-full  h-fit justify-center">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col md:w-[150px] md:h-[110px]  rounded-full justify-center items-center"
                >
                  <img
                    className="md:w-[55px] object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <h1 className="font-[500] mt-[5px] md:text-[15px] text-center">
                    {item.title}
                  </h1>
                  <p className="md:text-[11px] text-[13px] font-[400] text-[#2196F3] text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
