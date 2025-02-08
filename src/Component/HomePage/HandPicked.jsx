import React, { useState } from "react";
import image1 from "../../../public/staffhand/image1.webp";
import image2 from "../../../public/staffhand/image2.webp";
import image3 from "../../../public/staffhand/image3.webp";

import chair from "../../../public/staffhand/chair.svg";

export default function HandPicked() {
  const [selectedCategory, setSelectedCategory] = useState("Domestic");

  const domesticPackages = [
    { id: 1, image: image1, name: "Kashmir", price: "9,999" },
    { id: 2, image: image2, name: "Manali", price: "8,999" },
    { id: 3, image: image3, name: "Goa", price: "7,999" },
    // { id: 4, image: image2, name: "Manali", price: "₹8999" },
  ];

  const internationalPackages = [
    { id: 1, image: image1, name: "Paris", price: "₹49999" },
    { id: 2, image: image2, name: "Dubai", price: "₹39999" },
    { id: 3, image: image3, name: "Maldives", price: "₹29999" },
    // { id: 4, image: image3, name: "Goa", price: "₹7999" },
  ];

  const packages =
    selectedCategory === "Domestic" ? domesticPackages : internationalPackages;

  return (
    <>
      <div className="flex font-Poppins relative mx-auto w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[30px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex md:flex-row flex-col font-[700]  gap-[5px] text-[30px] md:text-[35px]">
              <span className="pr-[10px] flex text-[#005f94]">Handpicked</span>
              Holiday Packages
            </h1>
            <div className=" absolute top-[30px]">

   
            <div className="relative max-w-[170px]  w-full md:max-w-[220px]">
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
            <p className="flex text-[16px] text-[#2a2a2a]">
              Indulge in unforgettable adventure with special tour plans.
            </p>
            <div className="flex w-fit gap-[15px] md:gap-[20px] mt-[10px] md:mt-[25px]">
              <button
                className={`flex px-[5px]  py-[8px] w-[130px] items-center justify-center text-[16px]  rounded-[50px] ${
                  selectedCategory === "Domestic"
                    ? "bg-[#F59E0B] text-[#ffffff]"
                    : "text-[#6F6F6F]   border-[1.2px] border-[#6F6F6F]"
                }`}
                onClick={() => setSelectedCategory("Domestic")}
              >
                Domestic
              </button>
              <button
                className={`flex px-[5px]  py-[8px] w-[130px] items-center justify-center text-[16px]  rounded-[50px] ${
                  selectedCategory === "International"
          ? "bg-[#F59E0B] text-[#ffffff]"
                    : "text-[#6F6F6F]  border-[1.2px]  border-[#6F6F6F]"
                }`}
                onClick={() => setSelectedCategory("International")}
              >
                International
              </button>
            </div>
          </div>
          <div className="flex w-[100%] justify-start overflow-x-auto gap-[20px]  ">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col justify-center items-center relative shrink-0 md:w-[340px] sm:w-[300px] w-[300px] min-h-[480px] bg-white rounded-[10px] shadow-md overflow-hidden"
              >
                <img
                  className="object-cover shadow-md md:w-[340px] w-[600px] h-[480px] rounded-[10px]"
                  src={pkg.image}
                  alt={pkg.name}
                />
                <div className=" absolute   w-[93%]  bottom-0  mx-auto   ">
                  <div className=" flex flex-col  text-[#fff] text-[15px] px-[4px] gap-[2px]">
                    <p>5 days & 4 nights</p>
                    <p className="  text-[13px] flex">
                      Dubai Highlights | Skyline and Sandscapes
                    </p>
                  </div>
                  <div className="flex h-[140px]   shadow-md flex-col px-[15px] py-[10px] bgStaff  ] rounded-t-[10px]">
                    <div className="flex w-[100%]  justify-between">
                      <p className=" flex font-[500] text-[14px] text-[#fff]">
                        5D Dubai
                      </p>
                    </div>
                    <div className=" p-[6px]"></div>
                    <span className="w-[100%] h-[1px] bg-[#c2c2c2]"></span>
                    <div className="flex flex-col justify-between w-[100%] mt-[10px]">
                      <div className="flex items-center gap-[6px]">
                        <h1 className="flex font-[500] text-[20px] text-[#fff] ">
                          INR {pkg.price}
                        </h1>
                      </div>
                      <button className=" flex w-[100%] justify-center items-center  font-[500] mt-[5px] rounded-[6px] py-[8px] bg-[#fff] ">
                      Inquiry Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
