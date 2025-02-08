import React, { useState } from "react";
import image1 from "../../../public/staffhand/image1.webp";

import image2 from "../../../public/staffhand/image3.webp";
import image3 from "../../../public/staffhand/image2.webp";

export default function QuickVisa() {
  const [selectedCategory, setSelectedCategory] = useState("VisaFree");

  const visaFree = [
    { id: 1, image: image1, name: "Kashmir", price: "₹9999" },
    { id: 2, image: image2, name: "Manali", price: "₹8999" },
    { id: 3, image: image3, name: "Goa", price: "₹7999" },
    { id: 4, image: image2, name: "Manali", price: "₹8999" },
    { id: 5, image: image2, name: "Manali", price: "₹8999" },
  ];

  const visaOn = [
    { id: 1, image: image1, name: "Paris", price: "₹49999" },
    { id: 2, image: image2, name: "Dubai", price: "₹39999" },
    { id: 3, image: image3, name: "Maldives", price: "₹29999" },
    { id: 4, image: image1, name: "Goa", price: "₹7999" },
    { id: 5, image: image3, name: "Goa", price: "₹7999" },
  ];

  const packages = selectedCategory === "VisaFree" ? visaFree : visaOn;

  return (
    <>
      <div className="flex font-Poppins mx-auto  relative pb-[30px] w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[20px] md:gap-[30px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex md:flex-row flex-col font-[700] text-[35px]">
              <span className="pr-[10px] flex text-[#005f94]">Quick</span>
              <div className=" absolute top-[35px]">
                <div className="relative  w-full max-w-[120px]">
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
              Visa Getaways
            </h1>
            <p className="flex text-[16px] text-[#2a2a2a]">
              Unfold top visa-free getaways for smooth journeys.
            </p>
            <div className="flex w-fit gap-[12px] md:gap-[20px] mt-[10px] md:mt-[25px]">
              <button
                className={`flex px-[5px]  py-[8px] border-[1.2px] w-[110px] items-center justify-center text-[15px]  rounded-[50px] ${selectedCategory === "VisaFree"
                    ? "bg-[#005f94] text-[#ffffff]"
                    : "text-[#6F6F6F]   border-[1.2px] border-[#6F6F6F]"
                  }`}
                onClick={() => setSelectedCategory("VisaFree")}
              >
                Visa Free
              </button>
              <button
                className={`flex px-[5px]  py-[8px] border-[1.2px] w-[140px] items-center justify-center text-[15px]  rounded-[50px] ${selectedCategory === "visaOn"
                    ? "bg-[#005f94] text-[#ffffff]"
                    : "text-[#6F6F6F]   border-[1.2px] border-[#6F6F6F]"
                  }`}
                onClick={() => setSelectedCategory("visaOn")}
              >
                Visa on Arrival
              </button>
            </div>
          </div>
          <div className="flex w-[100%] overflow-x-auto    gap-[15px] px-[10px] py-[10px] scroll-smooth scrollbar-hide">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-col justify-center group cursor-pointer items-center flex relative flex-shrink-0"
              >
                <img
                  className="object-cover shadow-md w-[220px] h-[280px] rounded-[20px]"
                  src={pkg.image}
                  alt={pkg.name}
                />
                <div className="mt-[10px] flex">
                  <p className="text-[20px] group-hover:text-[#FFD801] font-[600]">
                    {pkg.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
