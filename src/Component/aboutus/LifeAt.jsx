// import React from "react";
// import image1 from "../../../public/Basalt Final/B5.jpg";
// import logo from "../../../public/logo.png";

// export default function LifeAt() {
//   return (
//     <>
//       <div className="w-[100%] px-[10px] font-Poppins flex mx-auto">
//         <div className="flex  flex-col  gap-[30px] justify-between relative w-[100%]">
//           <div className=" flex  justify-between  items-center w-[100%]  ">
//             <div>
//               <h1 className=" text-[43px]  gap-[17px] flex font-Montserrat font-[600]">
//                 Life At{" "}
//                 <span className=" flex basalt-text1">Basalt Pradise</span>
//               </h1>
//               <h2 className=" flex   text-[20px] font-[500] ">
//                 A Whirlwind of Excitement, Discovery, Innovation, & Limitless
//                 Growth!
//               </h2>
//             </div>
//             <button className=" flex w-[180px] basalt-button h-[50px]  font-Poppins text-[14px]  text-[#fff] rounded-[6px] font-[500] justify-center items-center">
//               Yes , We are Hiringe!
//             </button>
//           </div>

//           <div className="border border-gray-200 flex flex-col gap-[30px] rounded-lg overflow-hidden">
//             {/* Orange top border */}
//             <div className="h-[7px] bg-orange-500"></div>

//             {/* Profile header */}
//             <div className=" flex  justify-center items-center gap-3">
//               <div>
//                 <img className=" w-[150px] flex object-cover " src={logo} />
//               </div>
//               <div>
//                 <h2 className="font-bold text-[23px] text-gray-900">
//                   LIFE AT BASALT_PARADISE
//                 </h2>
//                 <p className="text-gray-600 text-sm">life_at_Bbasalt_pradise</p>
//               </div>
//             </div>

//             {/* Image grid */}
//             <div className="flex gap-[20px] w-[95%]  mx-auto  overflow-x-auto pb-[30px]  ">
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//             </div>

//             {/* Navigation arrow */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

import logo from "../../../public/Header/logo.png";
import Celebration from "./Celebration";

export default function LifeAt() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchInstagramPosts = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url&access_token=YOUR_ACCESS_TOKEN`
  //       );
  //       const data = await response.json();
  //       setPosts(data.data || []);
  //     } catch (error) {
  //       console.error("Error fetching Instagram posts:", error);
  //     }
  //   };

  //   fetchInstagramPosts();
  // }, []);


  useEffect(() => {
    // Dummy Instagram posts
    const dummyPosts = [
      {
        id: "1",
        caption: "Amazing view from our latest trip! 🌍✈️",
        media_url:
          "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "2",
        caption: "Exploring the mountains 🏔️",
        media_url:
          "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "3",
        caption: "City lights and amazing vibes 🌆",
        media_url:
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "4",
        caption: "Relaxing by the sea 🌊",
        media_url:
          "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];

    setPosts(dummyPosts); // Set the dummy posts
  }, []);

  return (
    <>
      <div className="md:w-[75%] flex-col font-Poppins  relative gap-[30px] w-[90%] flex mx-auto   2xl:w-[1370px]">
        <div className="flex  flex-col  gap-[30px] justify-between relative w-[100%]">
          <div className=" flex   flex-col md:flex-row justify-between  items-center w-[100%]  ">
            <div className="  flex flex-col gap-[10px] w-[100%]">
            <h1 className="flex font-[700] gap-[10px] w-fit  relative  text-[35px]">

            <span className="pr-[10px] flex text-[#005f94]"> Cuckoo </span>
            <div className=" absolute  right-[130px]    top-[35px]">
              <div className="relative  max-w-[100px] w-full md:max-w-[140px]">
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
            Travel
          </h1>
              <h2 className=" flex  md:text-start text-center  md:text-[20px] text-[#515151] font-[500] ">
                A Whirlwind of Excitement, Discovery, Innovation, & Limitless
                Growth!
              </h2>
            </div>
            <button className=" flex w-[160px] basalt-button h-[45px] mt-[20px]  font-Poppins text-[13px]  text-[#fff] rounded-[6px] font-[500] justify-center items-center">
              Yes , We are Hiring!
            </button>
          </div>
          {/* <Celebration /> */}
          {/* <div className="w-[80%] mb-[25px]  mt-px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d8d8d8] to-transparent"></div> */}
          <div className="border border-gray-200 flex flex-col gap-[30px] rounded-lg overflow-hidden">
            {/* Orange top border */}
            <div className="h-[7px] bg-[#005c95]"></div>

            {/* Profile header */}
            <div className=" flex  justify-center items-center gap-3">
              <div>
                <img className=" w-[150px] flex object-cover " src={logo} />
              </div>
              <div>
                <h2 className="font-bold text-[23px] text-gray-900">
                  LIFE AT CUCKOO_TRAVEL
                </h2>
                <p className="text-gray-600 text-sm">life_at_Cuckoo_Travel</p>
              </div>
            </div>

            {/* Image grid */}
            <div className="flex gap-[20px] w-[95%]  mx-auto  overflow-x-auto pb-[30px]  ">
              {/* <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              /> */}
              {posts.map((post) => (
                <img
                  key={post.id}
                  className="flex h-[300px] rounded-[9px] w-[270px] object-cover"
                  src={post.media_url || post.thumbnail_url}
                  alt={post.caption || "Instagram Post"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
