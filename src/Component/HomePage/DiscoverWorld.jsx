// import React from "react";
// import image1 from "../../../public/heroSection/image2.jpg";
// import image2 from "../../../public/heroSection/image1.jpg";

// export default function DiscoverWorld() {
//   return (
//     <>
//       <div className=" flex font-Poppins  2xl:w-[1360px]  py-[70px] mx-auto w-[76%]">
//         <div className=" flex justify-between items-center  w-[100%] ">
//           <div className=" flex w-[50%] items-center  pl-[60px] relative ">
//             <div className=" flex absolute left-[-30px]    border-[1px]  border-[#000] justify-center items-center   w-[40px] h-[40px] rounded-[100%] ">
//               <i className="fa-regular fa-arrow-left"></i>
//             </div>
//             <div className=" w-[450]">

 
//             <div className=" w-[280px] top-[10px] absolute right-[180px] h-[280px] rounded-md ">
//               <img
//                 className=" object-cover h-[100%] rounded-[10px] w-[100%]"
//                 src={image1}
//               />
//             </div>
//             <div className=" w-[300px] h-[300px] z-[10] flex relative rounded-md ">
//               <img 
//                 className=" object-cover h-[100%] rounded-[10px] w-[100%]"
//                 src={image2}
//               />
//             </div>
//             <div className=" w-[280px] top-[10px] z-[0px] flex absolute right-[120px] h-[280px] rounded-md ">
//               <img
//                 className=" object-cover h-[100%] rounded-[10px] w-[100%]"
//                 src={image1}
//               />
//             </div>
//             </div>
//             <div className=" flex absolute right-[50px]    border-[1px]  border-[#000] justify-center items-center   w-[40px] h-[40px] rounded-[100%] ">
//               <i className="fa-regular fa-arrow-right"></i>
//             </div>
//           </div>
//           <div className=" flex flex-col gap-[30px] w-[60%]">
//             <div className=" flex flex-col leading-[45px] font-Montserrat  font-[500]  text-[39px]">
//               <h1>Discover the World,</h1>
//               <h1>specially curated for you!</h1>
//             </div>
//             <p className=" flex w-[100%] leading-7 font-Poppins text-[17px]  font-[400]">
//               Our exclusive customized holidays division can cater to every
//               travel need: hotel, air tickets, VISA, sightseeings, transfer or
//               the entire package, all designed keeping in mind your interests!
//             </p>
//             <h5 className=" flex mt-[20px] font-Poppins text-[18px] ">
//               Tell us what you want and we will design it for you.
//             </h5>
//             <div className="flex w-[100%] items-center  gap-[20px]  ">
//               <div className=" flex w-[300px] bg-[#FFD801] justify-center items-center rounded-[6px]   py-[15px] text-[#000] text-[15px]  ">
//                 Enquiry Now
//               </div>
//               <i class=""></i>
//               <p className=" text-[20px]">or</p>
//               <div className=" flex gap-[10px] items-center">
//                 <i class=" text-[20px] fa-light fa-phone-volume"></i>
//                 <p className=" flex font-[500]  text-[28px] font-Montserrat">
//                   1800 22 7979
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState } from "react";
import image1 from "../../../public/heroSection/image2.jpg";
import image2 from "../../../public/heroSection/image1.jpg";
import image3 from "../../../public/heroSection/rannutsav.jpg";

export default function DiscoverWorld() {
  const [images, setImages] = useState([image1, image2, image3]);

  const handleNext = () => {
    setImages((prevImages) => {
      const [first, ...rest] = prevImages;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setImages((prevImages) => {
      const last = prevImages[prevImages.length - 1];
      const rest = prevImages.slice(0, prevImages.length - 1);
      return [last, ...rest];
    });
  };

  return (
    <div className="flex font-Poppins 2xl:w-[1360px] py-[70px] mx-auto w-[88%] md:w-[76%]">
      <div className="flex md:flex-row flex-col justify-between  items-center w-[100%]">
        {/* Image Carousel */}
        <div className="flex md:w-[36%] w-[100%] justify-center items-center relative">
          {/* Left Arrow */}
          <div
            className="flex absolute md:left-[-30px] top-[35%] md:top-auto left-[-18px] border-[1px] border-[#000] justify-center items-center w-[40px] h-[40px] bg-white md:w-[40px] md:h-[40px] rounded-[100%] cursor-pointer"
            onClick={handlePrev}
          >
            <i className="fa-regular fa-arrow-left"></i>
          </div>

          {/* Images */}
          <div className="relative md:w-[450px] md:h-[300px] w-[450px] h-[300px]  overflow-hidden">
            {/* Layered Images */}
            <div
              className="absolute  top-[32px] md:top-[35px] right-[85px] md:right-[110px] md:w-[230px] md:h-[230px] w-[230px] h-[200px] rounded-md z-[5] transition-transform duration-700"
              style={{
                transform: "translateX(-3%)",
                zIndex: 5,
              }}
            >
              <img
                className="object-cover h-[100%] opacity-[0.4] rounded-[10px] w-[100%]"
                src={images[2]}
                alt="Previous Image"
              />
            </div>
            <div
              className="absolute top-[13px] md:top-[17px] md:right-[105px] right-[115px] shadow-lg h-[230px] w-[230px] md:w-[270px] md:h-[270px] rounded-md z-[5] transition-transform duration-700"
              style={{
                transform: "translateX(18%)",
                zIndex: 5,
              }}
            >
              <img
                className="object-cover h-[100%] opacity-[0.9] rounded-[10px] w-[100%]"
                src={images[1]}
                alt="Next Image"
              />
            </div>
            <div
              className="absolute md:w-[300px] md:h-[300px]  w-[250px] h-[250px] md:right-[60px] right-[80px] rounded-md z-[10] transition-transform duration-700"
              style={{
                transform: "translateX(19%)",
                zIndex: 10,
              }}
            >
              <img
                className="object-cover h-[100%] rounded-[10px] w-[100%]"
                src={images[0]}
                alt="Main Image"
              />
            </div>
          
          </div>

          {/* Right Arrow */}
          <div
            className="flex absolute  top-[35%] md:top-auto  md:right-[-75px] right-[-10px] border-[1px] border-[#000] justify-center items-center w-[40px] h-[40px] rounded-[100%] cursor-pointer"
            onClick={handleNext}
          >
            <i className="fa-regular fa-arrow-right"></i>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-[20px] md:w-[45%]">
          <div className="flex flex-col justify-center  leading-[40px] font-Poppins font-[600] text-[33px]">
            <h1>Discover the World,</h1>
            <h1>specially curated for you!</h1>
          </div>
          <p className="flex w-[100%] leading-[23px] text-[#505050] font-Poppins text-[14px] font-[400]">
            Our exclusive customized holidays division can cater to every travel
            need: hotel, air tickets, VISA, sightseeing, transfers, or the
            entire package, all designed keeping in mind your interests!
          </p>
          <h5 className="flex   text-[#3d3c3c] font-Poppins font-[400] text-[16px]">
            Tell us what you want and we will design it for you.
          </h5>
          <div className="flex w-[100%] items-center gap-[20px]">
            <button className="flex w-[140px] bg-[#005f94] justify-center items-center rounded-tl-[13px] rounded-br-[13px] py-[10px] text-[#fff] text-[15px]">
              Enquire Now
            </button>
            <p className="text-[20px]">or</p>
            <div className="flex gap-[10px] items-center">
              <i className="text-[20px] fa-light fa-phone-volume"></i>
              <p className="flex font-[500] text-[16px] md:text-[21px] font-Montserrat">
                1800 22 7979
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}












