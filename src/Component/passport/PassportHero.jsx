import React from "react";
import { ChevronRight } from "lucide-react";
import { Check } from "lucide-react";
import mainimg from "../../../public/passport/hero.avif"

export default function PassportHero() {
  return (
    <>
      <div className="2xl:w-[1400px]  relative  font-Poppins  w-[85%] pt-[160px] mx-auto p-4">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-2 mb-8 text-sm">
        <a href="/" className="text-[#0095FF] hover:underline">
          Home
        </a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <a href="/visa" className="text-[#0095FF] hover:underline">
          Visa
        </a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-[#0095FF]">Dubai Visa</span>
      </nav> */}

        <div className="flex flex-col w-[85%]  mx-auto relative lg:flex-row items-center justify-between">
          <div className=" ">
            {/* Main Heading */}
            {/* <h1 className="text-[35px] font-[500] text-[#1A1A1A] mb-[17px]">
              Dubai Visa 
            </h1> */}
            <div className=" flex  w-fit relative">


              <h1 className="flex font-[600]  mb-[10px] text-[35px]">
              Apply  
                <span className="px-[10px] flex text-[#005f94]">Passport</span>Online

              </h1>
              <div className=" absolute    right-[110px] top-[30px]">


                <div className="relative  w-full max-w-[190px]">
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
            </div>

            {/* Approval Banner */}
            {/* <div className="relative ">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#39B5B5]/20 blur-md transform translate-y-1"></div>
                <div
                  className="relative anime-green-btn  rounded-full mb-[20px] text-white py-2.5 pl-4 pr-12"
                  // style={{
                  //   clipPath:
                  //     "polygon(100% 0%,93% 49%,100% 100%,0% 100%,0% 50%,0% 0%)",



                  // }}
                >
                  <div className="flex  items-center gap-2.5">
                    <div className="w-5 h-5 bg-[#ffffff] rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#1e8d46] stroke-[3]" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">
                      99.2% Visas Approved before Time
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Processing Details */}
            <div className="grid grid-cols-2 mt-[40px] gap-x-24">
              <div>
                <div className="text-[#666666] text-[15px] mb-1.5">
                  Processing time
                </div>
                <div className="text-[22px] font-[500] text-[#1A1A1A] tracking-tight">
                3 to 4 days
                </div>
              </div>
              <div>
                <div className="text-[#666666] text-[15px] mb-1.5">
                  Starting from
                </div>
                <div className="text-[22px] font-[500] text-[#1A1A1A] tracking-tight">
            ₹1,999/-
                </div>
              </div>
            </div>

            {/* Authorization Badge */}
            <div className="inline-block">
              {/* <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B5396B]/20 to-[#6B39B5]/20 rounded-full blur-xl transform translate-y-1"></div>
                <div className="relative bg-gradient-to-r from-[#B5396B] to-[#6B39B5] text-white py-3.5 pl-3.5 pr-7 rounded-full flex items-center gap-3">

                  <span className="text-[15px] font-medium whitespace-nowrap">
                    Authorised Visa Agent - Official Partner of UAE Government
                  </span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Dubai Skyline */}

            <img className="   w-[400px]  mt-[-20px] " src={mainimg} />

        </div>
      </div>
    </>
  );
}
