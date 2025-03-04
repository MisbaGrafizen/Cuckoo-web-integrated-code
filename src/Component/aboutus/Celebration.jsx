import React, { useRef } from "react";
import travelImage1 from "../../../public/staffhand/image3.webp";
import travelImage2 from "../../../public/staffhand/image2.webp";
import travelImage3 from "../../../public/staffhand/image1.webp";


export default function Celebration() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="md:w-[75%] mx-auto pb-[50px] pt-[20px]">
        <div className="bg-[#f4f6f9] md:gap-[30px] shadow-md font-Poppins flex flex-col rounded-[14px] py-[30px] px-[20px] md:px-[30px] border border-gray-100">
          <div className="flex justify-between items-center w-[100%]">
            <h1 className="flex md:flex-row flex-col md:text-[30px] text-[25px] font-[600]">
              Thrilling Adventures with <b className="flex font-[400] md:pl-[10px]">Cuckoo Travel</b>
            </h1>
            <div className="hidden md:flex gap-[30px]">
              <div className="text-[#005f94] cursor-pointer justify-center items-center shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px]" onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left text-[14px]"></i>
              </div>
              <div className="text-[#005f94] justify-center items-center cursor-pointer shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px]" onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right text-[14px]"></i>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-[100%] justify-between">
            <div className="pt-[30px]  md:w-[50%] gap-[20px] flex flex-col">
              <div className="leading-6 flex flex-col md:text-[23px] font-[600] gap-[5px]">
                <h1>Exploring the World with Cuckoo Travel</h1>
                <div className="w-fit">
                  <h2 className="flex text-[#005f94]">Unforgettable Journeys & Travel Stories</h2>

                </div>
              </div>
              <p className="flex font-[400] text-justify w-[95%] text-[13px] md:text-[16px] text-[#515151]">
                At Cuckoo Travel, we believe that every journey tells a story. From breathtaking landscapes to hidden gems, our adventures are curated to provide unforgettable experiences. Whether it’s exploring the beaches of Bali, trekking in the Himalayas, or discovering ancient ruins in Rome, we ensure your travels are filled with excitement, culture, and discovery.
              </p>
            </div>
            <div ref={scrollContainerRef} className="flex gap-[20px] overflow-y-auto md:mt-0 mt-[20px] md:w-[42%]">
              {[travelImage1, travelImage2, travelImage3,travelImage1, travelImage2, travelImage3].map((img, index) => (
                <img
                  key={index}
                  className="rounded-[10px] w-[230px] h-[320px] object-cover"
                  src={img}
                  alt={`Travel Adventure ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// import React, { useRef } from "react";
// import image1 from "../../../public/Basalt Final/B4.jpg";

// export default function Celebration() {
//   const scrollContainerRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
//     }
//   };
//   return (
//     <>
//       <div className=" w-[100%] mx-auto  pb-[50px]  pt-[20px] ">
//         <div className="bg-[#f4f6f9]  gap-[30px] shadow-md  font-Poppins flex flex-col rounded-[14px] py-[30px] px-[20px]  md:px-[30px] border border-gray-100  ">
//           <div className=" flex  justify-between items-center w-[100%] ">
//             <h1 className=" flex md:flex-row flex-col  md:text-[30px] text-[25px]  font-[600]">
//               {" "}
//               Thrilling Celebrations at <b className=" flex font-[400] md:pl-[10px]">Basalt Pradise{" "}</b>
//             </h1>
//             <div className=" hidden md:flex gap-[30px]">
//             <div className="  text-[#005f94] cursor-pointer justify-center items-center   shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] " onClick={scrollLeft}>
//                 <i class="fa-solid fa-chevron-left text-[14px]"></i>
//               </div>
//               <div className="  text-[#005f94]  justify-center items-center  shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] " onClick={scrollRight}>
//                 <i class="fa-solid fa-chevron-right text-[14px]"></i>
//               </div>
//             </div>
//           </div>
//           <div className="  flex md:flex-row flex-col  w-[100%] justify-between ">
//             <div className=" pt-[30px] order-1 md:order-2    md:w-[50%]  gap-[20px] flex flex-col  ">
//               <div className="  leading-4flex flex-col  text-[23px]  font-[600] gap-[5px]   ">
//                 <h1>Celebrating hardik bhai Patel’s</h1>
//                 <div className=" w-fit">
//                   <h2 className=" flex text-[#005f94] ">
//                     {" "}
//                     3 Impactful Years at Basalt Pradise
//                   </h2>
//                   <div className=" flex w-[100%] bg-[#005f94] h-[2px]"></div>
//                 </div>
//               </div>
//               <p className=" flex  font-[400] text-justify  w-[95%] text-[16px] text-[#515151] ">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,  .
//               </p>
//             </div>
//             <div ref={scrollContainerRef} className=" flex  gap-[20px] overflow-y-auto md:w-[42%]">
//             {[image1, image1, image1].map((img, index) => (
//               <img
//                 key={index}
//                 className="rounded-[10px] w-[230px] h-[320px] object-cover"
//                 src={img}
//                 alt={`Celebration ${index}`}
//               />
//             ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
