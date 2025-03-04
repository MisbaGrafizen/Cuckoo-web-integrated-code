// import React, { useState, useEffect } from "react";
// import aboutvideo from "../../../public/AboutUsImages/Deepmala_2.mp4";

// export default function AboutComponent() {
//   const contentArray = [
//     "We are Basalt Paradise",
//     "हम हैं बसाल्ट पैराडाइज",
//     "અમે બસાલ્ટ પેરાડાઇઝ છીએ",
//     "আমরা বাসাল্ট প্যারাডাইস",
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
//     }, 3000); // Change text every 2 seconds

//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, [contentArray.length]);

//   return (
//     <>
//       <div className="w-[100%] px-[10px] font-Poppins flex mx-auto">
//         <div className="flex justify-between relative w-[100%]">
//           <div className="w-[67%] pl-[10px] h-[75%] mx-auto flex">
//             <video
//               className="w-full object-cover scale-[1.5] text rounded-[8px]"
//               autoPlay
//               loop
//               muted
//               controls={false}
//             >
//               <source src={aboutvideo} type="video/mp4" />
//             </video>
//             <div className="w-[49%] absolute text-[#fff] left-[6%] z-[10] items-start py-[10px] flex">
//               <div className="flex flex-col">
//                 <h1
//                   className="flex text-[45px] font-[500] font-Montserrat transition-all duration-500"
//                 >
//                   {contentArray[currentIndex]}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useState, useEffect } from "react";
import aboutvideo from "../../../public/AboutUsImages/Deepmala_2.mp4";


export default function AboutComponent() {
    const items = [     "We are Basalt Paradise",
     "हम हैं बसाल्ट पैराडाइज",
     "અમે બસાલ્ટ પેરાડાઇઝ છીએ",
    "আমরা বাসাল্ট প্যারাডাইস"] ;
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true); // Flag to manage typing and erasing
    const typingSpeed = 150; // typing speed in ms
    const eraseSpeed = 50; // erase speed in ms
    const delayBetweenItems = 2000; // delay before erasing
  
    useEffect(() => {
        let timeout;
    
        if (isTyping) {
          // Typing phase
          if (currentText.length < items[currentIndex].length) {
            timeout = setTimeout(() => {
              setCurrentText((prev) => prev + items[currentIndex][prev.length]);
            }, typingSpeed);
          } else {
            // After typing, switch to erasing phase after a delay
            timeout = setTimeout(() => setIsTyping(false), delayBetweenItems);
          }
        } else {
          // Erasing phase
          if (currentText.length > 0) {
            timeout = setTimeout(() => {
              setCurrentText((prev) => prev.slice(0, -1));
            }, eraseSpeed);
          } else {
            // After erasing, move to the next word and switch back to typing
            setCurrentIndex((prev) => (prev + 1) % items.length);
            setIsTyping(true);
          }
        }
    
        return () => clearTimeout(timeout); // Clean up timeout on each render
      }, [currentText, isTyping, currentIndex, items]);
     
  return (
    <>
      <div className="w-[100%] px-[10px] font-Poppins flex mx-auto">
        <div className="flex justify-between relative w-[100%]">
          <div className="md:w-[67%] pl-[10px] h-[75%] mx-auto flex">
            <video
              className="w-full object-cover scale-[1.5] text rounded-[8px]"
              autoPlay
              loop
              muted
              controls={false}
            >
              <source src={aboutvideo} type="video/mp4" />
            </video>
            <div className="md:w-[51%] absolute md:text-[#fff] bottom-[15%] left-[6%] z-[10] items-start py-[10px] flex">
              <div className="flex flex-col">
                <h1
                  className="flex md:text-[45px] font-[600]  font-Poppins transition-all duration-500"
                >
                      {currentText}
                      <span className="blinking-cursor1">|</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}














// import React, { useState, useEffect } from "react";
// import aboutvideo from "../../../public/AboutUsImages/Deepmala_2.mp4";
// import mainimage from "../../../public/hero/abouthero.jpg"

// export default function AboutComponent() {
//     const items = [     "We are Basalt Paradise",
//      "हम हैं बसाल्ट पैराडाइज",
//      "અમે બસાલ્ટ પેરાડાઇઝ છીએ",
//     "আমরা বাসাল্ট প্যারাডাইস"] ;
//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isTyping, setIsTyping] = useState(true); // Flag to manage typing and erasing
//     const typingSpeed = 150; // typing speed in ms
//     const eraseSpeed = 50; // erase speed in ms
//     const delayBetweenItems = 2000; // delay before erasing
  
//     useEffect(() => {
//         let timeout;
    
//         if (isTyping) {
//           // Typing phase
//           if (currentText.length < items[currentIndex].length) {
//             timeout = setTimeout(() => {
//               setCurrentText((prev) => prev + items[currentIndex][prev.length]);
//             }, typingSpeed);
//           } else {
//             // After typing, switch to erasing phase after a delay
//             timeout = setTimeout(() => setIsTyping(false), delayBetweenItems);
//           }
//         } else {
//           // Erasing phase
//           if (currentText.length > 0) {
//             timeout = setTimeout(() => {
//               setCurrentText((prev) => prev.slice(0, -1));
//             }, eraseSpeed);
//           } else {
//             // After erasing, move to the next word and switch back to typing
//             setCurrentIndex((prev) => (prev + 1) % items.length);
//             setIsTyping(true);
//           }
//         }
    
//         return () => clearTimeout(timeout); // Clean up timeout on each render
//       }, [currentText, isTyping, currentIndex, items]);
     
//   return (
//     <>
//       <div className="w-[100%] px-[10px] font-Poppins flex mx-auto">
//         <div className="flex justify-between relative w-[100%]">
//           <div className="w-[99%] ] h-[92%]  mx-auto flex">
//             {/* <video
//               className="w-full object-cover scale-[1.5] text rounded-[8px]"
//               autoPlay
//               loop
//               muted
//               controls={false}
//             >
//               <source src={aboutvideo} type="video/mp4" />
//             </video> */}
//             <img className="flex object-cover rounded-[10px] w-[100%] h-[100%]" src={mainimage} />
//             <div className="w-[51%] absolute text-[#fff] bottom-[15%] left-[6%] z-[10] items-start py-[10px] flex">
//               <div className="flex flex-col">
//                 <h1
//                   className="flex text-[45px] font-[600]  font-Poppins transition-all duration-500"
//                 >
//                       {currentText}
//                       <span className="blinking-cursor1">|</span>
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
