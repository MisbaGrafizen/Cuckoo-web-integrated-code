import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiGet } from "../../helper/axios";

export default function Blog() {
  const navigate = useNavigate();
  
  const [blogs, setBlogs] = useState([]);  
 
   useEffect(() => {
     const fetchBlogs = async () => {
       try { 
         const response = await ApiGet("/admin/blogs");
         console.log('response', response)
         setBlogs(response.blogs);
       } catch (error) {
         console.error("Error fetching visa packages:", error);
       }
     };
     fetchBlogs();
   }, []);

  // const blogPosts = [
  //   {
  //     id: 1,
  //     image: mainimg,
  //     title: "Top 5 Visa-Free Destinations for 2024",
  //     description:
  //       "Explore stunning visa-free destinations like Maldives, Thailand, and Seychelles with ease. Cuckoo Travel ensures smooth journeys without visa hassles.",
  //     date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long" }),
  //     link: "/blog-details",
  //   },
  //   {
  //     id: 2,
  //     image: mainimg1,
  //     title: "Dubai Travel Guide: Everything You Need to Know",
  //     description:
  //       "From the towering Burj Khalifa to the desert safaris, Dubai is a must-visit. Get insider tips from Cuckoo Travel for an unforgettable trip.",
  //     date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long" }),
  //     link: "/blog-details",
  //   },
  //   {
  //     id: 3,
  //     image: mainimg2,
  //     title: "How to Get a Schengen Visa in 2024",
  //     description:
  //       "Planning a European adventure? Learn the step-by-step process to apply for a Schengen Visa and explore countries like France, Italy, and Germany.",
  //     date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long" }),
  //     link: "/blog-details",
  //   },
  //   {
  //     id: 4,
  //     image: mainimg3,
  //     title: "Thailand: The Ultimate Budget Travel Destination",
  //     description:
  //       "Affordable stays, street food, and tropical beaches – Thailand is a paradise for budget travelers. Discover must-visit spots with Cuckoo Travel.",
  //     date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long" }),
  //     link: "/blog-details",
  //   },
  //   // {
  //   //   id: 5,
  //   //   image: mainimg1,
  //   //   title: "Dubai Travel Guide: Everything You Need to Know",
  //   //   description:
  //   //     "From the towering Burj Khalifa to the desert safaris, Dubai is a must-visit. Get insider tips from Cuckoo Travel for an unforgettable trip.",
  //   //   date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long" }),
  //   //   link: "/blog/dubai-travel-guide",
  //   // },

  // ];

  return (
    <div className="md:w-[75%] flex-col font-Poppins  relative gap-[30px] w-[90%] flex mx-auto   2xl:w-[1370px]">

<h1 className="flex font-[700] gap-[10px] w-fit  relative  text-[35px]">
Latest
            <span className="pr-[10px] flex text-[#005f94]"> Blogs </span>
            <div className=" absolute  md:right-[130px]  right-[20px]   top-[35px]">
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
          <p className=" md:flex hidden">  & News</p>
          </h1>


      <div className="w-full flex flex-col md:gap-[20px]">

        <div className="flex w-full gap-[30px] md:mt-[0px] flex-col justify-between">
      
          <div className="w-full flex flex-row gap-[15px] 2xl:gap-[29px] overflow-x-auto  flex-shrink-0 py-2">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="md:w-[250px] 2xl:w-[290px] mb-[20px] 2xl:h-[440px] h-[410px] w-[260px] mx-auto md:mx-0 relative gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer flex-shrink-0"
                onClick={() => navigate(post.link)}
              >
                <img className="md:h-[200px] object-cover 2xl:h-[220px] h-[210px]" src={post.image} alt={post.title} />
                <div className="w-[90px] text-[12px] justify-center font-Poppins absolute items-center flex py-[5px] text-[#fff] bg-[#005f94] rounded-tl-[10px] rounded-br-[10px]">
                  {post.date}
                </div>
                <div className="flex w-full pt-[px] px-[10px] flex-col  mt-[10px] gap-[8px]">
                  <div className="font-[600] text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#005c95] leading-[22px]">
                      {post.title}
                    </p>
                  </div>
                  <div className="text-[12px] font-[400] text-[#646464]">
                    <p className="font-Poppins text-justify">{post.description}</p>
                  </div>
                  <div className="text-[14px] w-full cursor-pointer absolute bottom-5 text-[#005c95] flex justify-start font-[600]">
                    <p className="font-Poppins">Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
  
        </div>
      </div>
    </div>
  );
}



              {/* <div className=" flex-shrink-0  md:w-[250px]  h-[410px] w-[250px] relative mx-auto   gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] object-" src={expertTips1} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">03 February</p>
                </div>
                <div className=" flex w-[100%]  justify-start px-[16px] py-[4px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] text-left font-Rose text-[16px]">
                    <p className=" flex  font-Poppins font-[600] text-[#005c95] ">
                    Rotex Fans: The Future of Energy-Efficient Cooling
                    </p>
                  </div>
                  <div className=" text-[14px] font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Discuss how Rotex Fans leverage BLDC technology to provide superior cooling while savings
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  text-[#005c95] absolute bottom-3 pl-[15px] cursor-pointer flex justify-between font-[600]"
                    onClick={handleblog1}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div> */}
              {/* <div className=" md:w-[250px] flex-shrink-0  h-[410px] w-[250px] mx-auto  relative  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] ob" src={expertTips2} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">01 February</p>
                </div> 
                <div className=" flex w-[100%]  justify-start px-[16px] py-[5px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] font-Rose text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#005c95] ">
                    Why Choose Rotex BLDC Fans Over Conventional Fans?

                    </p>
                  </div>
                  <div className=" text-[14px] font-[400]  text-[#646464]">
                    <p className="font-Poppins text-justify ">
                    Highlight the unique advantages of Rotex BLDC fans, including energy efficiency, quieter operation ...
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  cursor-pointer  absolute bottom-3 pl-[15px] text-[#005c95] flex justify-between font-[600]"
                    onClick={handleblog3}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div>
              <div className=" md:w-[250px] flex-shrink-0  w-[250px] relative mx-auto h-[410px]  gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px]" src={expertTips3} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className="  flex font-[600] font-Monda">29 January</p>
                </div>
                <div className="  flex w-[100%]  justify-start px-[16px] py-[5px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] font-Rose text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#005c95] ">
                    5-Star Rated Rotex Fans: A Smart Choice for Your Home

                    </p>
                  </div>
                  <div className=" text-[14px]  font-Poppins font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Emphasize the energy savings and performance benefits of 5-star rated Rotex Fans..


                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]   cursor-pointer absolute bottom-3 pl-[15px]  text-[#005c95] flex justify-between font-[600]"
                    onClick={handleblog2}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div>
              <div className=" flex-shrink-0  md: md:w-[250px]  h-[410px] w-[250px] relative mx-auto   gap-[px] shadow-lg overflow-hidden rounded-[20px] border flex flex-col cursor-pointer ">
                <img className="h-[200px] object-" src={expertTips4} alt="" />
                <div className=" w-[80px] text-[10px] justify-center absolute items-center flex py-[5px] text-[#fff]  anime-green-btn1  rounded-tl-[10px] rounded-br-[10px]">
                  <p className=" flex font-[600] font-Monda">25 January</p>
                </div>
                <div className="  flex w-[100%]  justify-start px-[16px] py-[4px]  flex-col items-center  gap-[10px]">
                  <div className=" font-[600] text-left font-Rose text-[16px]">
                    <p className=" flex  font-Poppins font-[600] text-[#005c95] ">
                    How Rotex Fans Help You Beat the Heat with Less Power
                    </p>
                  </div>
                  <div className=" text-[14px] font-[400] font-Redhat text-[#646464]">
                    <p className=" font-Poppins text-justify ">
                    Discuss the cost-effectiveness and cooling power of Rotex Fans in hot climates ...
                    </p>
                  </div>
                  <div
                    className=" text-[14px] w-[100%]  text-[#005c95] absolute bottom-3 pl-[15px] cursor-pointer flex justify-between font-[600]"
                    onClick={handleblog1}
                  >
                    <p className=" font-Poppins">Read More </p>
                  </div>
                </div>
              </div> */}
        //     </div>
        //   </div>
        // </div>
        {/* <div className="w-[120px]  flex justify-center items-center mt-[15px] text-[#fff] py-[8px] cursor-pointer font-[600]  anime-green-btn1  font-Redhat rounded-[10px] text-center mx-auto ">
          <p>View More</p>{" "}
        </div> */}
//         <div className="flex  w-[100%]   mb-[40px] justify-start ">
         

//         </div>
//       </div>
//     </div>
//   );
// }
