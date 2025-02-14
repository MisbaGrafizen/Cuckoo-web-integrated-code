// import React, { useState } from "react";

// export default function TaskBar() {
//   const [activeButton, setActiveButton] = useState("Tours");
//   return (
//     <>
//       <nav className=" border-b w-[78%] mx-auto border-[#E5E5E5]">
//         <div className="max-w-[1400px] mx-auto">
//           <div
//             className={`absolute top-0 left-0 h-[40px] mt-[2.8px] w-[85px] rounded-[6px] bg-[#005f94] transition-transform duration-300 ease-in-out`}
//             style={{
//               transform:
//                 activeButton === "Tours"
//                   ? "translateX(3px)"
//                   : "translateX(98px)",
//             }}
//           ></div>
//           <ul className="flex items-center">
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#1A1A1A] border-b-2 border-[#0095FF] relative -mb-[1px]"
//               >
//                 Types Of Visas
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Documents
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Process
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Why Choose Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Sample Visa
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Embassy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="inline-block px-6 py-4  font-Poppins text-[15px] font-[400] text-[#666666] hover:text-[#1A1A1A] transition-colors"
//               >
//                 Visit Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Types Of Visas");

  // Define button positions dynamically
  const buttonPositions = {
    "Types Of Visas": 12,
    Documents: 168,
    Process: 293,
    "Why Choose Us": 409,
    "Sample Visa": 565,
    FAQs: 700,
    Embassy: 795,
    "Visit Us": 902,
  };

  // Define different widths for each button dynamically
  const buttonWidths = {
    "Types Of Visas": 130,
    Documents: 110,
    Process: 100,
    "Why Choose Us": 140,
    "Sample Visa": 130,
    FAQs: 90,
    Embassy: 100,
    "Visit Us": 100,
  };

  return (
    <nav className="border rounded-tl-[20px] shadow-md rounded-br-[20px]  w-[78%] mx-auto border-[#E5E5E5] relative">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Sliding Box with Dynamic Width */}
        <div
          className="absolute top-0 left-0 h-[40px] rounded-tl-[20px] shadow-md rounded-br-[20px] mt-[7px] rounded-[1px] bg-[#F59E0B] transition-all duration-300 ease-in-out"
          style={{
            transform: `translateX(${buttonPositions[activeButton]}px)`,
            width: `${buttonWidths[activeButton]}px`,
          }}
        ></div>

        {/* Navigation Menu */}
        <ul className="flex items-center">
          {Object.keys(buttonPositions).map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setActiveButton(item)}
                className={`inline-block px-6 py-4 font-Poppins text-[15px] transition-colors relative -mb-[1px] ${
                  activeButton === item
                    ? "!text-white" // White text + Bold for active button
                    : "text-[#666666] font-normal"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
