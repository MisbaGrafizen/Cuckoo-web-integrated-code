import React, { useState } from "react";
import image1 from "../../../../public/faq/image1.svg";
import image2 from "../../../../public/faq/image2.svg";
import image3 from "../../../../public/faq/image3.svg";
import image4 from "../../../../public/faq/image4.svg";
import image5 from "../../../../public/faq/image5.svg";
import image6 from "../../../../public/faq/image6.svg";
import mobile from "../../../../public/faq/mobile.webp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null); // State to track which accordion is open

  const faqData = [
    {
      id: 1,
      icon: image1,
      title: "Look for flights and hotels",
      content:
        "Search for exclusive deals on flights and hotels. Find cheap air tickets to any destination you like. Choose from its vast repository of hotels - from budget, mid-range, five-star to niche boutique properties. Widen your choices with options like flexi stay, pay directly at hotel, and guaranteed standard amenities. Extremely efficient and easy.",
    },
    {
      id: 2,
      icon: image2,
      title: "How to book a holiday package?",
      content:
        "Booking a holiday package is simple and quick. Browse through available packages, select your destination, customize as needed, and proceed to book. Payment options are flexible, and our team ensures a smooth booking process.",
    },
    {
      id: 3,
      icon: image3,
      title: "What are the cancellation policies?",
      content:
        "Cancellation policies vary depending on the package and time of cancellation. Generally, full refunds are available if canceled within the stipulated time frame. Refer to the specific package details for more information.",
    },
    {
      id: 4,
      icon: image4,
      title: "What are the cancellation policies?",
      content:
        "Cancellation policies vary depending on the package and time of cancellation. Generally, full refunds are available if canceled within the stipulated time frame. Refer to the specific package details for more information.",
    },
    {
      id: 5,
      icon: image5,
      title: "What are the cancellation policies?",
      content:
        "Cancellation policies vary depending on the package and time of cancellation. Generally, full refunds are available if canceled within the stipulated time frame. Refer to the specific package details for more information.",
    },
    {
      id: 6,
      icon: image6,
      title: "What are the cancellation policies?",
      content:
        "Cancellation policies vary depending on the package and time of cancellation. Generally, full refunds are available if canceled within the stipulated time frame. Refer to the specific package details for more information.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex font-Poppins  relative pb-[40px] mx-auto w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[30px] w-[100%]">
          <h1 className="flex font-[700] text-[35px]">
            <span className="pr-[10px] flex text-[#005f94]">Why</span>
            <div className=" absolute top-[35px]">
              <div className="relative  max-w-[100px] w-full md:max-w-[130px]">
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
            Cuckoo ?
          </h1>
          <div className=" flex justify-between w-[100%] ">
            <div className="flex md:w-[50%] w-[100%] flex-col gap-[20px]">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-[20px] p-[10px] md:p-[17px] rounded-tl-[15px]  rounded-br-[15px] custom-shadow1"
                >
                  {/* Accordion Header */}
                  <div
                    className="flex w-[100%] justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center gap-[20px]">
                      <img
                        className="flex w-[20px] md:w-[30px]"
                        src={item.icon}
                        alt="icon"
                      />
                      <p className="flex font-[400] text-[15px] md:text-[18px]">
                        {item.title}
                      </p>
                    </div>
                    <i
                      className={`fa-solid fa-chevron-right text-center items-center text-[13px] md:text-[16px] flex transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : "rotate-0"
                      }`}
                    ></i>
                  </div>

                  {/* Accordion Content */}
                  {openIndex === index && (
                    <div className="flex font-[400] text-[13px] text-justify mt-[10px]">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className=" md:flex hidden w-[40%] pr-[20px]">
              {/* <img className=" flex w-[100%] h-[100%]" src={mobile} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
