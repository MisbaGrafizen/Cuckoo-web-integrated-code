// import React, { useState, useEffect } from "react";
// import image1 from "../../../public/ExploreHoloidays/image1.svg";
// import image2 from "../../../public/ExploreHoloidays/image2.svg";
// import image3 from "../../../public/ExploreHoloidays/image3.svg";

// export default function ExploreHolidays() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = [
//     {
//       id: 1,
//       image: image1,
//       title: "Weekend",
//       description: "15+ Tour Packages",
//     },
//     {
//       id: 2,
//       image: image2,
//       title: "Adventure",
//       description: "20+ Tour Packages",
//     },
//     { id: 3, image: image2, title: "Family", description: "10+ Tour Packages" },
//     { id: 4, image: image1, title: "Beach", description: "18+ Tour Packages" },
//     {
//       id: 5,
//       image: image3,
//       title: "Romantic",
//       description: "25+ Tour Packages",
//     },
//     { id: 6, image: image2, title: "Family", description: "10+ Tour Packages" },
//     { id: 7, image: image1, title: "Beach", description: "18+ Tour Packages" },
//     { id: 8, image: image2, title: "Family", description: "10+ Tour Packages" },
//     // { id: 9, image: image1, title: "Beach", description: "18+ Tour Packages" },
//     // { id: 10, image: image1, title: "Weekend", description: "15+ Tour Packages" },
//     // { id: 11, image: image2, title: "Adventure", description: "20+ Tour Packages" },
//     // { id: 12, image: image2, title: "Family", description: "10+ Tour Packages" },
//     // { id: 13, image: image1, title: "Beach", description: "18+ Tour Packages" },
//     // { id: 14, image: image3, title: "Romantic", description: "25+ Tour Packages" },
//     // { id: 15, image: image2, title: "Family", description: "10+ Tour Packages" },
//     // { id: 16, image: image1, title: "Beach", description: "18+ Tour Packages" },
//     // { id: 17, image: image2, title: "Family", description: "10+ Tour Packages" },
//     // { id: 18, image: image1, title: "Beach", description: "18+ Tour Packages" },
//   ];

//   return (
//     <>
//       <div className="flex font-Poppins relative 2xl:w-[1370px]  pb-[40px] mx-auto w-[89%] md:w-[75%]">
//         <div className="flex flex-col gap-[40px] w-[100%]">
// <div className="flex flex-col gap-[10px]">
//   <h1 className="flex flex-col md:flex-row font-[700] text-[30px] md:text-[35px]">
//     <span className="pr-[10px] flex text-[#005f94]">Explore</span>
//     Holidays By Theme
//   </h1>
//   <div className=" absolute top-[30px] md:top-[35px]  left-[-7px] rotate-[360deg]">
//     <div className="relative  w-full max-w-[150px]">
//       <svg
//         viewBox="0 0 300 80"
//         className="w-full"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <filter
//             id="sketch"
//             x="-10%"
//             y="-10%"
//             width="120%"
//             height="120%"
//           >
//             <feTurbulence
//               type="fractalNoise"
//               baseFrequency="0.02"
//               numOctaves="4"
//               seed="5"
//               result="noise"
//             />
//             <feDisplacementMap
//               in="SourceGraphic"
//               in2="noise"
//               scale="2"
//               xChannelSelector="R"
//               yChannelSelector="G"
//             />
//           </filter>
//           <linearGradient
//             id="yellowVariation"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#FCD34D" />
//             <stop offset="50%" stopColor="#F59E0B" />
//             <stop offset="100%" stopColor="#FCD34D" />
//           </linearGradient>
//         </defs>

//         {/* Main sketchy lines */}
//         <g style={{ filter: "url(#sketch)" }}>
//           {/* First sketch layer */}
//           <path
//             d="M10,30 Q80,25 150,30 T290,30 
//      M15,35 Q85,30 155,35 T285,35"
//             stroke="#FCD34D"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />

//           {/* Second sketch layer with slight offset */}
//           <path
//             d="M12,32 Q82,27 152,32 T292,32
//      M17,37 Q87,32 157,37 T287,37"
//             stroke="#F59E0B"
//             strokeWidth="2"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />

//           {/* Quick sketch details */}
//           <path
//             d="M30,31 l5,-2 l10,4 l-5,-4
//      M160,33 l8,-3 l6,3 l-4,-3
//      M250,32 l6,-2 l8,4 l-7,-4"
//             stroke="#FBBF24"
//             strokeWidth="1"
//             fill="none"
//           />

//           {/* Additional sketchy details */}
//           {[...Array(8)].map((_, i) => (
//             <path
//               key={i}
//               d={`M${20 + i * 40},${30 + (i % 2) * 2} l${5 + (i % 3)
//                 },${-2 + (i % 2)}`}
//               stroke="#F59E0B"
//               strokeWidth="1"
//               fill="none"
//               opacity="0.6"
//             />
//           ))}
//         </g>
//       </svg>
//     </div>
//   </div>
//   <p className="flex text-[16px] text-[#2a2a2a]">
//     Find your perfect getaway, tailored to your interests.
//   </p>
// </div>
//           <div className="flex md:w-[67%] 2xl:w-[56%] w-[100%]  justify-center">
//             <div className="md:grid  flex overflow-x-auto lg:grid-cols-5 xl:grid-cols-4 gap-[20px] md:gap-[30px] w-full  h-fit md:justify-center flex-shrink-0">
//               {items.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col md:w-[150px] w-[140px] bg-[#2b9bf63f] md:h-[150px]   h-[140px] rounded-full justify-center items-center flex-shrink-0"
//                 >
//                   <img
//                     className="md:w-[55px] w-[45px] object-cover"
//                     src={item.image}
//                     alt={item.title}
//                   />
//                   <h1 className="font-[500] mt-[5px] md:text-[15px] text-[13px] text-center">
//                     {item.title}
//                   </h1>
//                   <p className="md:text-[11px] text-[11px] font-[400] text-[#2196F3] text-center">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react"
import { Building2, Compass, Users, Palmtree, Heart, Mountain, Sailboat, Utensils } from "lucide-react"

export default function HolidayThemeCircles() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const themes = [
    {
      name: "Weekend",
      icon: <Building2 className="h-8 w-8" />,
      packages: 15,
    },
    {
      name: "Adventure",
      icon: <Mountain className="h-8 w-8" />,
      packages: 20,
    },
    {
      name: "Family",
      icon: <Users className="h-8 w-8" />,
      packages: 10,
    },
    {
      name: "Beach",
      icon: <Palmtree className="h-8 w-8" />,
      packages: 18,
    },
    {
      name: "Romantic",
      icon: <Heart className="h-8 w-8" />,
      packages: 25,
    },
    {
      name: "Cruise",
      icon: <Sailboat className="h-8 w-8" />,
      packages: 12,
    },
    {
      name: "Culinary",
      icon: <Utensils className="h-8 w-8" />,
      packages: 8,
    },
    {
      name: "Explore",
      icon: <Compass className="h-8 w-8" />,
      packages: 30,
    },
  ]

  return (
    <div className="flex flex-col gap-[50px] font-Poppins relative 2xl:w-[1370px]  pb-[40px] mx-auto w-[89%] md:w-[75%]">
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

      <div className=" flex gap-6 w-[100%] overflow-x-auto md:gap-8 py-[10px] mx-auto">
        {themes.map((theme, index) => (
          <div
            key={theme.name}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`
                relative w-36 h-36 rounded-full flex items-center justify-center 
                transition-all duration-300 cursor-pointer
                ${hoveredIndex === index ? "bg-blue-100 shadow-lg transform scale-105" : "bg-[#c0d7e34c]"}
              `}
            >
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-50"></div>
              <div className="absolute inset-3 rounded-full border border-blue-100"></div>
              <div
                className={`
                text-[#005f94] transition-transform duration-300
                ${hoveredIndex === index ? "transform scale-110" : ""}
              `}
              >
                {theme.icon}
              </div>

              {/* Pulsing dot decoration */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-400"></div>

              {/* Ripple effect on hover */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-30"></div>
                  <div className="absolute inset-0 rounded-full bg-blue-50 animate-pulse opacity-20"></div>
                </>
              )}
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-[500]  text text-lg">{theme.name}</h3>
              <p className="text-sm font-[500] text-[#005f94]">{theme.packages}+ Tour Packages</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// import { useState } from "react"
// import { Building2, Compass, Users, Palmtree, Heart, Mountain, Sailboat, Utensils } from "lucide-react"

// export default function HolidayThemeAlternative() {
//   const [activeTheme, setActiveTheme] = useState(null)

//   const themes = [
//     {
//       name: "Weekend",
//       icon: <Building2 className="h-6 w-6" />,
//       packages: 15,
//     },
//     {
//       name: "Adventure",
//       icon: <Mountain className="h-6 w-6" />,
//       packages: 20,
//     },
//     {
//       name: "Family",
//       icon: <Users className="h-6 w-6" />,
//       packages: 10,
//     },
//     {
//       name: "Beach",
//       icon: <Palmtree className="h-6 w-6" />,
//       packages: 18,
//     },
//     {
//       name: "Romantic",
//       icon: <Heart className="h-6 w-6" />,
//       packages: 25,
//     },
//     {
//       name: "Cruise",
//       icon: <Sailboat className="h-6 w-6" />,
//       packages: 12,
//     },
//     {
//       name: "Culinary",
//       icon: <Utensils className="h-6 w-6" />,
//       packages: 8,
//     },
//     {
//       name: "Explore",
//       icon: <Compass className="h-6 w-6" />,
//       packages: 30,
//     },
//   ]

//   return (
//     <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-3">
//           <span className="text-blue-600">Explore</span> Holidays By Theme
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">Find your perfect getaway, tailored to your interests.</p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
//         {themes.map((theme) => (
//           <div
//             key={theme.name}
//             className={`
//               relative group cursor-pointer
//               w-32 h-32 sm:w-40 sm:h-40 rounded-full 
//               flex flex-col items-center justify-center
//               transition-all duration-300
//               ${
//                 activeTheme === theme.name
//                   ? "bg-blue-100 shadow-lg transform scale-105"
//                   : "bg-blue-50 hover:bg-blue-100 hover:shadow-md"
//               }
//             `}
//             onClick={() => setActiveTheme(activeTheme === theme.name ? null : theme.name)}
//           >
//             {/* Concentric circles decoration */}
//             <div className="absolute inset-0 rounded-full border border-blue-200"></div>
//             <div className="absolute inset-2 rounded-full border border-blue-100"></div>

//             {/* Dot decorations */}
//             <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
//             <div className="absolute bottom-5 left-5 w-1.5 h-1.5 rounded-full bg-blue-300"></div>

//             <div className="text-blue-600 mb-1 transition-transform duration-300 group-hover:scale-110">
//               {theme.icon}
//             </div>
//             <h3 className="font-medium text-center">{theme.name}</h3>
//             <p className="text-xs text-blue-600 mt-1">{theme.packages}+ Packages</p>

//             {/* Ripple effect on active */}
//             {activeTheme === theme.name && (
//               <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-30"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

