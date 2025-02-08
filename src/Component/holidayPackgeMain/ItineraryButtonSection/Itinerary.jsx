// import { useState } from "react";
// import mainimage from "../../../../public/holidaypack/main.avif";

// export default function Itinerary() {
//   const [activeTab, setActiveTab] = useState("itinerary");
//   const [currentSlide, setCurrentSlide] = useState(6);
//   const [activeDay, setActiveDay] = useState(null); // Removed type annotation
//   const totalSlides = 11;

//   const [currentHotelSlide, setCurrentHotelSlide] = useState(0);
//   const [currentCruiseSlide, setCurrentCruiseSlide] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle navigation
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const hotelImages = [
//     {
//       id: 1,
//       url: {mainimage},
//       title: "Royal Falcon Hotel, Dubai",
//       rating: "3.4/5",
//     },
//     {
//       id: 2,
//       url: {mainimage},
//       title: "Orchid Hotel, Dubai",
//       rating: "4/5",
//     },
//   ];

//   const cruiseImages = Array(8)
//     .fill(null)
//     .map((_, i) => ({
//       id: i + 1,
//       url: {mainimage},
//     }));

//   const days = [
//     {
//       day: 1,
//       title: "Arrival in Dubai | Dhow Marina Dinner Cruise Experience",
//     },
//     {
//       day: 2,
//       title: "Visit to Dubai Dolphinarium | Desert Safari Experience",
//     },
//     {
//       day: 3,
//       title: "Dubai Sightseeing Tour | Visit to Burj Khalifa",
//     },
//     {
//       day: 4,
//       title: "Visit to Dubai Frame & AYA Universe",
//     },
//     {
//       day: 5,
//       title: "Departure Day",
//     },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto">
//       {/* Tabs */}
//       <div className="flex bg-[#efeeee] p-[10px]  rounded-[8px] gap-2 mb-6">
//         <button
//           onClick={() => setActiveTab("itinerary")}
//           className={`px-4 py-2 rounded-md text-sm font-medium ${
//             activeTab === "itinerary"
//               ? "bg-orange-500 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           Itinerary
//         </button>
//         <button
//           onClick={() => setActiveTab("summary")}
//           className={`px-4 py-2 rounded-md text-sm font-medium ${
//             activeTab === "summary"
//               ? "bg-orange-500 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           Summarised View
//         </button>
//         <button
//           onClick={() => setActiveTab("activities")}
//           className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
//             activeTab === "activities"
//               ? "bg-orange-500 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
//             <line x1="8" y1="21" x2="16" y2="21" />
//             <line x1="12" y1="17" x2="12" y2="21" />
//           </svg>
//           Activities
//         </button>
//         <button
//           onClick={() => setActiveTab("stay")}
//           className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
//             activeTab === "stay"
//               ? "bg-orange-500 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M2 4v16" />
//             <path d="M2 8h18a2 2 0 0 1 2 2v10" />
//             <path d="M2 17h20" />
//             <path d="M6 8v9" />
//           </svg>
//           Stay
//         </button>
//         <button
//           onClick={() => setActiveTab("transfers")}
//           className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
//             activeTab === "transfers"
//               ? "bg-orange-500 text-white"
//               : "bg-white text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
//             <circle cx="7" cy="17" r="2" />
//             <circle cx="17" cy="17" r="2" />
//           </svg>
//           Transfers
//         </button>
//       </div>

//       {/* Image Carousel */}
//       <div className="relative h-[250px] rounded-xl overflow-hidden mb-6">
//         <img src={mainimage} alt="Dubai Frame" fill className="object-cover" />
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Navigation Arrows */}
//         <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//         </button>
//         <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m9 18 6-6-6-6" />
//           </svg>
//         </button>

//         {/* Days Counter */}
//         <div className="absolute left-6 bottom-6 text-white">
//           <div className="text-4xl font-bold">5</div>
//           <div className="text-xl">
//             Days in
//             <br />
//             Dubai
//           </div>
//         </div>

//         {/* Pagination */}


//         {/* Thumbnails */}

//       </div>

//       {/* Daily Itinerary */}
//       <div className="space-y-4">
//         {days.map((item) => (
//           <div
//             key={item.day}
//             className="border rounded-lg overflow-hidden bg-white"
//           >
//             <button
//               onClick={() =>
//                 setActiveDay(activeDay === item.day ? null : item.day)
//               }
//               className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
//             >
//               <div className="flex items-center gap-4">
//                 <span className="px-3 py-1 bg-orange-100 text-orange-500 rounded-lg font-medium">
//                   DAY {item.day}
//                 </span>
//                 <span className="font-semibold text-left">{item.title}</span>
//               </div>
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className={`transform transition-transform ${
//                   activeDay === item.day ? "rotate-180" : ""
//                 }`}
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//             {activeDay === item.day && (
//               <>
//                 <div className=" w-[100%] mx-auto p-4 space-y-6">
//                   {/* Welcome Text */}
//                   <p className="text-gray-700 text-[14px] leading-relaxed">
//                     Welcome to Dubai! Upon arriving at the airport, you'll be
//                     driven to the hotel for check-in. Relax for the afternoon
//                     and in the evening, get ready for a wonderful experience and
//                     board the transfer to Dubai Marina Harbour. Take the Dhow
//                     Marina Cruise, a perfect blend of modern luxury and
//                     tradition. As you sail along the shores, enjoy views of the
//                     city's skyline, savour a delicious meal, and be entertained
//                     by live performances. Later, you'll be transferred back to
//                     the hotel for an overnight stay.
//                   </p>

//                   {/* Private Transfer Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <path
//                           d="M7 18h10m-5-3v3M4 21h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                       <span className="font-medium">Private Transfer</span>
//                     </div>

//                     <div className="text-sm text-gray-600 mb-2">
//                       Transfer in Toyota Prado, Toyota Corolla or similar
//                     </div>

//                     <div className="space-y-4">
//                       <div className="relative pl-8">
//                         <div className="absolute left-[7px] top-[20px] bottom-0 h-[60px] w-0.5 bg-gray-200"></div>
//                         <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
//                         <div className="space-y-1">
//                           <div className="text-sm text-orange-500">From</div>
//                           <div className="flex items-center gap-2">
//                             {/* <svg
//                               viewBox="0 0 24 24"
//                               className="w-4 h-4"
//                               fill="none"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 d="M22 12H2M12 2v20m3-3l-3 3-3-3m0-14l3-3 3 3"
//                                 strokeWidth="2"
//                               />
//                             </svg> */}
//                             <span>Dubai International Airport</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="relative pl-8">
//                         <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
//                         <div className="space-y-1">
//                           <div className="text-sm text-orange-500">To</div>
//                           <div className="flex items-center gap-2">
//                             <svg
//                               viewBox="0 0 24 24"
//                               className="w-4 h-4"
//                               fill="none"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
//                                 strokeWidth="2"
//                               />
//                             </svg>
//                             <span>Standard Hotel in Dubai</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hotel Stay Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <path
//                           d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
//                           strokeWidth="2"
//                         />
//                       </svg>
//                       <span className="font-medium">Stay At</span>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <div className="font-medium mb-4">
//                         Check-in At Standard Hotel in Dubai
//                       </div>
//                       <div className="flex justify-between text-sm text-gray-600">
//                         <div>
//                           <div className="text-xs uppercase">Check In</div>
//                           <div>2:00 PM</div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//                           <div>4N</div>
//                           <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//                         </div>
//                         <div>
//                           <div className="text-xs uppercase">Check Out</div>
//                           <div>12:00 PM</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="text-sm text-blue-600">
//                       Stays will be allocated based on availability or similar
//                       category
//                     </div>

//                     {/* Hotel Images Carousel */}
//                     <div className="grid grid-cols-2 gap-4">
//                       {hotelImages.map((hotel, index) => (
//                         <div
//                           key={hotel.id}
//                           className="relative rounded-lg overflow-hidden group"
//                         >
//                           <div className="relative h-48">
//                             <img
//                               src={mainimage}
//                               alt={hotel.title}
//                               fill
//                               className="object-cover"
//                             />
//                             <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
//                               Gallery
//                             </div>
//                             <div className="absolute bottom-2 left-2 right-2">
//                               <div className="text-white font-medium text-sm">
//                                 {hotel.title}
//                               </div>
//                               <div className="flex items-center gap-1 text-white text-xs">
//                                 <svg
//                                   viewBox="0 0 24 24"
//                                   className="w-4 h-4"
//                                   fill="currentColor"
//                                 >
//                                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 {hotel.rating}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Inclusions */}
//                     <div className="space-y-2">
//                       <div className="font-medium">Inclusions:</div>
//                       <div className="flex items-center gap-6 text-sm">
//                         <div className="flex items-center gap-2">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="w-4 h-4 text-green-500"
//                             fill="none"
//                             stroke="currentColor"
//                           >
//                             <path d="M20 6L9 17l-5-5" strokeWidth="2" />
//                           </svg>
//                           <span>Breakfast</span>
//                           <span className="text-green-500 text-xs">
//                             Included
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="w-4 h-4 text-gray-400"
//                             fill="none"
//                             stroke="currentColor"
//                           >
//                             <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
//                           </svg>
//                           <span>Lunch</span>
//                           <span className="text-gray-400 text-xs">
//                             Not Included
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="w-4 h-4 text-gray-400"
//                             fill="none"
//                             stroke="currentColor"
//                           >
//                             <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
//                           </svg>
//                           <span>Dinner</span>
//                           <span className="text-gray-400 text-xs">
//                             Not Included
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Shared Transfer & Activity Section */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <path
//                           d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
//                           strokeWidth="2"
//                         />
//                         <path d="M12 6v6l4 2" strokeWidth="2" />
//                       </svg>
//                       <span className="font-medium">Activity</span>
//                     </div>

//                     <div className="font-medium">
//                       Dhow Cruise Dubai Marina - Marina Dinner Cruise (With
//                       Shared Transfers)
//                     </div>

//                     {/* Cruise Images Carousel */}
//                     <div className="relative rounded-lg overflow-hidden">
//                       <div className="relative h-64">
//                         <img
//                           src={mainimage}
//                           alt="Dhow Cruise"
//                           fill
//                           className="object-cover"
//                         />

//                         {/* Navigation Arrows */}
//                         <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="w-4 h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                           >
//                             <path d="M15 18l-6-6 6-6" strokeWidth="2" />
//                           </svg>
//                         </button>
//                         <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="w-4 h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                           >
//                             <path d="M9 18l6-6-6-6" strokeWidth="2" />
//                           </svg>
//                         </button>

//                         {/* Pagination */}
//                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
//                           {cruiseImages.map((_, index) => (
//                             <div
//                               key={index}
//                               className={`w-2 h-2 rounded-full ${
//                                 currentCruiseSlide === index
//                                   ? "bg-white"
//                                   : "bg-white/50"
//                               }`}
//                             />
//                           ))}
//                         </div>

//                         {/* Thumbnails */}
//                         <div className="absolute bottom-4 right-4 flex items-center gap-2">
//                           <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
//                             2/6
//                           </div>
//                           <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//                             +8
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Transfer Details */}
//                     <div className="space-y-4">
//                       <div className="flex items-center gap-2 text-gray-700">
//                         <svg
//                           viewBox="0 0 24 24"
//                           className="w-5 h-5"
//                           fill="none"
//                           stroke="currentColor"
//                         >
//                           <path
//                             d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
//                             strokeWidth="2"
//                           />
//                           <circle cx="7" cy="17" r="2" strokeWidth="2" />
//                           <circle cx="17" cy="17" r="2" strokeWidth="2" />
//                         </svg>
//                         <span className="font-medium">Shared Transfer</span>
//                       </div>

//                       <div className="text-sm">Transfer in Coach</div>

//                       <div className="space-y-4">
//                         <div className="relative pl-8">
//                           <div className="absolute left-[7px] top-[18px] h-[80px] bottom-0 w-0.5 bg-gray-200"></div>
//                           <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
//                           <div className="space-y-1">
//                             <div className="text-sm text-orange-500">From</div>
//                             <div className="flex items-center gap-2">
//                               <svg
//                                 viewBox="0 0 24 24"
//                                 className="w-4 h-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
//                                   strokeWidth="2"
//                                 />
//                               </svg>
//                               <span>Standard Hotel in Dubai</span>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="relative pl-8">
//                           <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
//                           <div className="space-y-1">
//                             <div className="text-sm text-orange-500">To</div>
//                             <div className="flex items-center gap-2">
//                               <svg
//                                 viewBox="0 0 24 24"
//                                 className="w-4 h-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
//                                   strokeWidth="2"
//                                 />
//                                 <circle cx="12" cy="10" r="3" strokeWidth="2" />
//                               </svg>
//                               <span>Dubai Marina Harbour</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









import { useState } from "react";
import mainimage from "../../../../public/holidaypack/main.avif";
import { MapPin, Plus, Minus, Flag, Bed, Utensils, Coffee } from "lucide-react"

export default function Itinerary() {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [currentSlide, setCurrentSlide] = useState(6);
  const [activeDay, setActiveDay] = useState(null); // Removed type annotation
  const totalSlides = 11;

  const [currentHotelSlide, setCurrentHotelSlide] = useState(0);
  const [currentCruiseSlide, setCurrentCruiseSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const hotelImages = [
    {
      id: 1,
      url: {mainimage},
      title: "Royal Falcon Hotel, Dubai",
      rating: "3.4/5",
    },
    {
      id: 2,
      url: {mainimage},
      title: "Orchid Hotel, Dubai",
      rating: "4/5",
    },
  ];

  const cruiseImages = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      url: {mainimage},
    }));

  const days = [
    {
      day: 1,
      title: "Arrival in Dubai | Dhow Marina Dinner Cruise Experience",
    },
    {
      day: 2,
      title: "Visit to Dubai Dolphinarium | Desert Safari Experience",
    },
    {
      day: 3,
      title: "Dubai Sightseeing Tour | Visit to Burj Khalifa",
    },
    {
      day: 4,
      title: "Visit to Dubai Frame & AYA Universe",
    },
    {
      day: 5,
      title: "Departure Day",
    },
  ];
  const [expandedDay, setExpandedDay] = useState(1)


  const [activeButton, setActiveButton] = useState("Itinerary");

  // Define button positions dynamically
  const buttonPositions = {
    "Itinerary": 6,
    Documents: 168,
    Process: 293,
    "Why Choose Us": 409,


  };

  // Define different widths for each button dynamically
  const buttonWidths = {
    "Itinerary": 100,
    Documents: 110,
    Process: 100,
    "Why Choose Us": 140,
    

  };
  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs */}
      {/* <div className="flex bg-[#efeeee] p-[10px]  rounded-[8px] gap-2 mb-6">
        <button
          onClick={() => setActiveTab("itinerary")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "itinerary"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Itinerary
        </button>
        <button
          onClick={() => setActiveTab("summary")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "summary"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Summarised View
        </button>
        <button
          onClick={() => setActiveTab("activities")}
          className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
            activeTab === "activities"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          Activities
        </button>
        <button
          onClick={() => setActiveTab("stay")}
          className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
            activeTab === "stay"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 4v16" />
            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path d="M2 17h20" />
            <path d="M6 8v9" />
          </svg>
          Stay
        </button>
        <button
          onClick={() => setActiveTab("transfers")}
          className={`hidden lg:flex px-4 py-2 rounded-md text-sm font-medium items-center gap-2 ${
            activeTab === "transfers"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
          Transfers
        </button>
      </div> */}

      <nav className="border  mb-[10px] rounded-tl-[20px] shadow-md rounded-br-[20px]  w-[100%] mx-auto border-[#E5E5E5] relative">
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

      {/* Image Carousel */}
      <div className="relative h-[250px] rounded-xl overflow-hidden mb-6">
        <img src={mainimage} alt="Dubai Frame" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Days Counter */}
        <div className="absolute left-6 bottom-6 text-white">
          <div className="text-4xl font-bold">5</div>
          <div className="text-xl">
            Days in
            <br />
            Dubai
          </div>
        </div>

        {/* Pagination */}


        {/* Thumbnails */}

      </div>

      {/* Daily Itinerary
      <div className="space-y-4">
        {days.map((item) => (
          <div
            key={item.day}
            className="border rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() =>
                setActiveDay(activeDay === item.day ? null : item.day)
              }
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-500 rounded-lg font-medium">
                  DAY {item.day}
                </span>
                <span className="font-semibold text-left">{item.title}</span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform ${
                  activeDay === item.day ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {activeDay === item.day && (
              <>
                <div className=" w-[100%] mx-auto p-4 space-y-6">
                 
                  <p className="text-gray-700 text-[14px] leading-relaxed">
                    Welcome to Dubai! Upon arriving at the airport, you'll be
                    driven to the hotel for check-in. Relax for the afternoon
                    and in the evening, get ready for a wonderful experience and
                    board the transfer to Dubai Marina Harbour. Take the Dhow
                    Marina Cruise, a perfect blend of modern luxury and
                    tradition. As you sail along the shores, enjoy views of the
                    city's skyline, savour a delicious meal, and be entertained
                    by live performances. Later, you'll be transferred back to
                    the hotel for an overnight stay.
                  </p>


                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 18h10m-5-3v3M4 21h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="font-medium">Private Transfer</span>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">
                      Transfer in Toyota Prado, Toyota Corolla or similar
                    </div>

                    <div className="space-y-4">
                      <div className="relative pl-8">
                        <div className="absolute left-[7px] top-[20px] bottom-0 h-[60px] w-0.5 bg-gray-200"></div>
                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
                        <div className="space-y-1">
                          <div className="text-sm text-orange-500">From</div>
                          <div className="flex items-center gap-2">
                            {/* <svg
                              viewBox="0 0 24 24"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M22 12H2M12 2v20m3-3l-3 3-3-3m0-14l3-3 3 3"
                                strokeWidth="2"
                              />
                            </svg> 
                            <span>Dubai International Airport</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
                        <div className="space-y-1">
                          <div className="text-sm text-orange-500">To</div>
                          <div className="flex items-center gap-2">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
                                strokeWidth="2"
                              />
                            </svg>
                            <span>Standard Hotel in Dubai</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

           
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="font-medium">Stay At</span>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium mb-4">
                        Check-in At Standard Hotel in Dubai
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <div>
                          <div className="text-xs uppercase">Check In</div>
                          <div>2:00 PM</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div>4N</div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-xs uppercase">Check Out</div>
                          <div>12:00 PM</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-blue-600">
                      Stays will be allocated based on availability or similar
                      category
                    </div>

  
                    <div className="grid grid-cols-2 gap-4">
                      {hotelImages.map((hotel, index) => (
                        <div
                          key={hotel.id}
                          className="relative rounded-lg overflow-hidden group"
                        >
                          <div className="relative h-48">
                            <img
                              src={mainimage}
                              alt={hotel.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                              Gallery
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                              <div className="text-white font-medium text-sm">
                                {hotel.title}
                              </div>
                              <div className="flex items-center gap-1 text-white text-xs">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4"
                                  fill="currentColor"
                                >
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                {hotel.rating}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="font-medium">Inclusions:</div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-green-500"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M20 6L9 17l-5-5" strokeWidth="2" />
                          </svg>
                          <span>Breakfast</span>
                          <span className="text-green-500 text-xs">
                            Included
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
                          </svg>
                          <span>Lunch</span>
                          <span className="text-gray-400 text-xs">
                            Not Included
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
                          </svg>
                          <span>Dinner</span>
                          <span className="text-gray-400 text-xs">
                            Not Included
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                          strokeWidth="2"
                        />
                        <path d="M12 6v6l4 2" strokeWidth="2" />
                      </svg>
                      <span className="font-medium">Activity</span>
                    </div>

                    <div className="font-medium">
                      Dhow Cruise Dubai Marina - Marina Dinner Cruise (With
                      Shared Transfers)
                    </div>


                    <div className="relative rounded-lg overflow-hidden">
                      <div className="relative h-64">
                        <img
                          src={mainimage}
                          alt="Dhow Cruise"
                          fill
                          className="object-cover"
                        />


                        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                          </svg>
                        </button>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M9 18l6-6-6-6" strokeWidth="2" />
                          </svg>
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
                          {cruiseImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                currentCruiseSlide === index
                                  ? "bg-white"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>

       
                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                            2/6
                          </div>
                          <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            +8
                          </div>
                        </div>
                      </div>
                    </div>

  
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
                            strokeWidth="2"
                          />
                          <circle cx="7" cy="17" r="2" strokeWidth="2" />
                          <circle cx="17" cy="17" r="2" strokeWidth="2" />
                        </svg>
                        <span className="font-medium">Shared Transfer</span>
                      </div>

                      <div className="text-sm">Transfer in Coach</div>

                      <div className="space-y-4">
                        <div className="relative pl-8">
                          <div className="absolute left-[7px] top-[18px] h-[80px] bottom-0 w-0.5 bg-gray-200"></div>
                          <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
                          <div className="space-y-1">
                            <div className="text-sm text-orange-500">From</div>
                            <div className="flex items-center gap-2">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"
                                  strokeWidth="2"
                                />
                              </svg>
                              <span>Standard Hotel in Dubai</span>
                            </div>
                          </div>
                        </div>

                        <div className="relative pl-8">
                          <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 border-orange-500 bg-white"></div>
                          <div className="space-y-1">
                            <div className="text-sm text-orange-500">To</div>
                            <div className="flex items-center gap-2">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                              >
                                <path
                                  d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
                                  strokeWidth="2"
                                />
                                <circle cx="12" cy="10" r="3" strokeWidth="2" />
                              </svg>
                              <span>Dubai Marina Harbour</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div> */}




      <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">
          Itinerary <span className="text-gray-500 font-normal">(Day Wise)</span>
        </h1>
        <a href="#" className="text-[#0052CC] text-sm hover:underline">
          View all days
        </a>
      </div>

      <div className="relative space-y-4">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-px border-l-2 border-dashed border-[#E5E7EB]" />

        {/* Day 1 */}
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="relative">
              <MapPin className="w-[25px] h-[25px] bg-white ml-[4px] text-[#0052CC]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] text-gray-500">Day 1 / 19 Feb, 25</div>
                  <h3 className="text-[15px] font-medium text-[#1A1F36]">Delhi – Shimla (1 Night)</h3>
                </div>
                <button
                  onClick={() => setExpandedDay(expandedDay === 1 ? 0 : 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                >
                  {expandedDay === 1 ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {expandedDay === 1 && (
                <div className="mt-4 text-[13px] space-y-4">
                  <p className="text-[#4A5578] leading-relaxed">
                    Tour guests will arrive at Delhi airport as per their scheduled flight. Upon arrival they will meet
                    Veena World tour manager at the airport and proceed to Shimla. Known as the Queen of Hills, the spot
                    is famous for its scenic beauty, colonial-era architecture and pleasant climate.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Joining and Leaving (J&L) tour guests will join the group on their own. The transfer charges to
                    reach the designated place or hotel will be borne by the (J&L) guests.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Upon arrival we enjoy a stroll on the famous Mall road of Shimla and view Shimla Church, Scandal
                    point, the Ridge etc.
                  </p>

                  {/* Today's Sightseeing */}
                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="w-5 h-5 text-gray-600" />
                      <h4 className="font-medium text-[#1A1F36]">Today's Sightseeing</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {["Shimla Mall Road", "Church", "The Ridge"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00B8D9]" />
                          <span className="text-[#4A5578]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stay & Meals */}
                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Night Stay in Shimla</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Dinner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">
                        Tea / Coffee en route to Shimla, Burger / Softy and Tea / Coffee at Mall Road
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Days */}
        {[
          { day: 2, date: "20 Feb, 25", title: "Shimla – Manali (3 Nights)" },
          { day: 3, date: "21 Feb, 25", title: "Manali – Solang Valley – Manali" },
          { day: 4, date: "22 Feb, 25", title: "Manali" },
          { day: 5, date: "23 Feb, 25", title: "Manali – Chandigarh (1 Night)" },
          { day: 6, date: "24 Feb, 25", title: "Chandigarh – Delhi – Departure" },
        ].map(({ day, date, title }) => (
          <div key={day} className="relative">
            <div className="flex items-start gap-6">
              <div className="relative">
                <MapPin className="w-[25px] h-[25px] bg-white ml-[4px] text-[#0052CC]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] text-gray-500">
                      Day {day} / {date}
                    </div>
                    <h3 className="text-[15px] font-medium text-[#1A1F36]">{title}</h3>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <Plus className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}



