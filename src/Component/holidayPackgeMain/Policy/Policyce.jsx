// import React from 'react'
// import { useState } from "react"
// import { ChevronUp } from 'lucide-react'
// export default function Policyce() {
//     const [visibleSections, setVisibleSections] = useState({
//         tourism: true,
//         confirmation: true,
//         refund: true,
//         cancellation: true,
//         payment: true
//       })
    
//       const toggleSection = (section: keyof typeof visibleSections) => {
//         setVisibleSections(prev => ({
//           ...prev,
//           [section]: !prev[section]
//         }))
//       }
    
//   return (
//   <>
  



//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       {/* More On Dubai Tourism */}
//       <div className="border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-[500]">More On Dubai Tourism</h2>
//           <button 
//             onClick={() => toggleSection('tourism')}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ChevronUp className={`w-5 h-5 transition-transform ${!visibleSections.tourism ? 'rotate-180' : ''}`} />
//           </button>
//         </div>
//         {visibleSections.tourism && (
//           <div className="flex gap-4 text-gray-500">
//             <a href="#" className="hover:text-gray-900 hover:underline">Dubai Tour Packages</a>
//             <a href="#" className="hover:text-gray-900 hover:underline">Things to do in Dubai</a>
//             <a href="#" className="hover:text-gray-900 hover:underline">Places to visit in Dubai</a>
//           </div>
//         )}
//       </div>

//       {/* Confirmation Policy */}
//       <div className="border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-[500]">Confirmation Policy</h2>
//           <button 
//             onClick={() => toggleSection('confirmation')}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ChevronUp className={`w-5 h-5 transition-transform ${!visibleSections.confirmation ? 'rotate-180' : ''}`} />
//           </button>
//         </div>
//         {visibleSections.confirmation && (
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>The customer receives a confirmation voucher via email within 24 hours of successful booking</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>In case the preferred slots are unavailable, an alternate schedule of the customer's preference will be arranged and a new confirmation voucher will be sent via email.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.</span>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Refund Policy */}
//       <div className="border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-[500]">Refund Policy</h2>
//           <button 
//             onClick={() => toggleSection('refund')}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ChevronUp className={`w-5 h-5 transition-transform ${!visibleSections.refund ? 'rotate-180' : ''}`} />
//           </button>
//         </div>
//         {visibleSections.refund && (
//           <div className="space-y-3 text-gray-700">
//             <p>The applicable refund amount will be processed within 10 business days.</p>
//             <p>All applicable refunds will be done in the traveler's   wallet as Thrillcash.</p>
//           </div>
//         )}
//       </div>

//       {/* Cancellation Policy */}
//       <div className="border-b">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-[500]">Cancellation Policy</h2>
//           <button 
//             onClick={() => toggleSection('cancellation')}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ChevronUp className={`w-5 h-5 transition-transform ${!visibleSections.cancellation ? 'rotate-180' : ''}`} />
//           </button>
//         </div>
//         {visibleSections.cancellation && (
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>If cancellation is made 30 days or more before the date of travel, 25.0% of total booking cost will be charged as cancellation fees.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>If cancellation is made between 15 days to 30 days before the date of travel, 50.0% of total booking cost will be charged as cancellation fees.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>If cancellation is made within 15 days before the date of travel, total booking cost will be charged as cancellation fees.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-[30px] mt-[-11px]">•</span>
//               <span>In the event of unforeseen weather conditions, union issues, government restrictions, or any other circumstances beyond human control, certain trips or activities may be cancelled. In such cases, alternate feasible options will be provided. However, a cash refund will not be available.</span>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Payment Term Policy */}
//       <div>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-[500]">Payment Term Policy</h2>
//           <button 
//             onClick={() => toggleSection('payment')}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ChevronUp className={`w-5 h-5 transition-transform ${!visibleSections.payment ? 'rotate-180' : ''}`} />
//           </button>
//         </div>
//         {visibleSections.payment && (
//           <div className="text-gray-700">
//             {/* Payment terms content would go here */}
//           </div>
//         )}
//       </div>
//     </div>

//   </>


//   )
// }






import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Policyce() {
  const [visibleSections, setVisibleSections] = useState({
    tourism: true,
    confirmation: true,
    refund: true,
    cancellation: true,
    payment: true,
  });

  const toggleSection = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className=" w-[100%] mx-auto p-6 space-y-6">
        {/* More On Dubai Tourism */}
        <div className="border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-[500]">More On Dubai Tourism</h2>
            <button
              onClick={() => toggleSection("tourism")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  !visibleSections.tourism ? "rotate-90" : " rotate-180"
                }`}
              />
            </button>
          </div>
          {visibleSections.tourism && (
            <div className="flex gap-4 text-gray-500 pb-6">
              <a
                href="#"
                className="hover:text-gray-900 hover:underline"
              >
                Dubai Tour Packages
              </a>
              <a
                href="#"
                className="hover:text-gray-900 hover:underline"
              >
                Things to do in Dubai
              </a>
              <a
                href="#"
                className="hover:text-gray-900 hover:underline"
              >
                Places to visit in Dubai
              </a>
            </div>
          )}
        </div>

        {/* Confirmation Policy */}
        <div className="border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-[500]">Confirmation Policy</h2>
            <button
              onClick={() => toggleSection("confirmation")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  !visibleSections.confirmation ?"rotate-90" : " rotate-180"
                }`}
              />
            </button>
          </div>
          {visibleSections.confirmation && (
            <ul className="space-y-1 text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                  The customer receives a confirmation voucher via email within
                  24 hours of successful booking
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                  In case the preferred slots are unavailable, an alternate
                  schedule of the customer's preference will be arranged and a
                  new confirmation voucher will be sent via email.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                  Alternatively, the customer may choose to cancel their booking
                  before confirmation and a full refund will be processed.
                </span>
              </li>
            </ul>
          )}
        </div>

        {/* Refund Policy */}
        <div className="border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-[500]">Refund Policy</h2>
            <button
              onClick={() => toggleSection("refund")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  !visibleSections.refund ? "rotate-90" : " rotate-180"
                }`}
              />
            </button>
          </div>
          {visibleSections.refund && (
            <div className="space-y-1 text-gray-500 pb-6">
              <p>
                The applicable refund amount will be processed within 10
                business days.
              </p>
              <p>
                All applicable refunds will be done in the traveler's
                  wallet as Thrillcash.
              </p>
            </div>
          )}
        </div>

        {/* Cancellation Policy */}
        <div className="border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-[500]">Cancellation Policy</h2>
            <button
              onClick={() => toggleSection("cancellation")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  !visibleSections.cancellation ? "rotate-90" : " rotate-180"
                }`}
              />
            </button>
          </div>
          {visibleSections.cancellation && (
            <ul className="space-y-3text-gray-500">
              {/* Cancellation content */}
            </ul>
          )}
        </div>

        {/* Payment Term Policy */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-[500]">Payment Term Policy</h2>
            <button
              onClick={() => toggleSection("payment")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  !visibleSections.payment ? "rotate-90" : " rotate-180"
                }`}
              />
            </button>
          </div>
          {visibleSections.payment && (
            <div className="text-gray-700">
            <ul className="space-y-1 text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                30.0% of total tour cost will have to be paid 0 days before the date of booking
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                70.0% of total tour cost will have to be paid 10 days before the date of travel
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[30px] mt-[-11px]">•</span>
                <span>
                  Alternatively, the customer may choose to cancel their booking
                  before confirmation and a full refund will be processed.
                </span>
              </li>
            </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
