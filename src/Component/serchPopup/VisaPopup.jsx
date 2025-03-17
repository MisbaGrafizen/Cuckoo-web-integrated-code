// // import React, { useEffect, useRef, useState } from 'react'
// // import { Search } from "lucide-react"

// // const destinations = ["Paris", "London", "Dubai", "New York", "Tokyo"];
// // export default function VisaPopup({onClose}) {

// //     const [showSearchPopup, setShowSearchPopup] = useState(false);
    
// //       const [search, setSearch] = useState("");
// //       const [showSuggestions, setShowSuggestions] = useState(false);
// //       const [productType, setProductType] = useState("Tour");
// //       const [duration, setDuration] = useState("");
// //       const [priceRange, setPriceRange] = useState(0);
// //       const [includeFlights, setIncludeFlights] = useState(false);
// //       const popupRef = useRef(null);
// //       const searchRef = useRef(null);
// //       const filteredDestinations = destinations.filter((dest) =>
// //         dest.toLowerCase().includes(search.toLowerCase())
// //       );
// //       useEffect(() => {
// //         function handleClickOutside(event) {
// //           if (searchRef.current && !searchRef.current.contains(event.target)) {
// //             setShowSuggestions(false);
// //           }
// //         }
// //         document.addEventListener("mousedown", handleClickOutside);
// //         return () => document.removeEventListener("mousedown", handleClickOutside);
// //       }, []);
// //       const handleClearAll = () => {
// //         setSearch("");
// //         setProductType("Tour");
// //         setDuration("");
// //         setPriceRange(0);
// //         setIncludeFlights(false);
// //       };

// //         // Close the entire popup if click is outside the popup container
// //   useEffect(() => {
// //     function handleClickOutsidePopup(event) {
// //       if (popupRef.current && !popupRef.current.contains(event.target)) {
// //         setShowSearchPopup(false);
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClickOutsidePopup);
// //     return () =>
// //       document.removeEventListener("mousedown", handleClickOutsidePopup);
// //   }, []);
// //   useEffect(() => {
// //     function handleClickOutsidePopup(event) {
// //       if (popupRef.current && !popupRef.current.contains(event.target)) {
// //         onClose();
// //       }
// //     }
// //     document.addEventListener("mousedown", handleClickOutsidePopup);
// //     return () =>
// //       document.removeEventListener("mousedown", handleClickOutsidePopup);
// //   }, [onClose]);
// //   return (
// // <>


// // <div ref={popupRef}  className="w-full animationSearch max-w-[600px] h-[300px] mt-[10px] rounded-tl-[20px] relative rounded-br-[20px] shadow-lg bg-white p-6 ">
// //       {/* Search Input */}
// //       <div ref={searchRef} className="relative mb-6">
// //         <div className="relative">
// //           <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search  Country.."
           
// //                   value={search}
// //                   onChange={(e) => setSearch(e.target.value)}
// //                   onFocus={() => setShowSuggestions(true)}
// //             className="w-full rounded-full border border-gray-200 py-3 pl-12 shadow-lg pr-4 text-gray-600 focus:border-gray-300 focus:outline-none"
// //           />
// //         </div>
// //         {showSuggestions && search && (
// //           <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
// //             {filteredDestinations.map((dest) => (
// //               <button
// //                 key={dest}
// //                 onClick={() => {
// //                   setSearch(dest)
// //                   setShowSuggestions(false)
// //                 }}
// //                 className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
// //               >
// //                 {dest}
// //               </button>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// // {/* 
      
// //       <div className="mb-6">
// //         <h3 className="mb-3 text-lg font-medium">Product Type</h3>
// //         <div className="flex gap-3">
// //           {["Tour", "Activity"].map((type) => (
// //             <button
// //               key={type}
// //               onClick={() => setProductType()}
// //               className={`rounded-full px-6 py-2 ${
// //                 productType === type
// //                   ? "bg-[#005f94] text-white"
// //                   : "border border-gray-200 text-gray-600 hover:border-gray-300"
// //               }`}
// //             >
// //               {type}
// //             </button>
// //           ))}
// //         </div>
// //       </div>


// //       <div className="mb-6">
// //         <h3 className="mb-3 text-lg font-medium">Trip Duration</h3>
// //         <div className="flex flex-wrap gap-3">
// //           {["Upto 1 Day", "2 to 3 days", "3 to 5 days", "5 to 7 days", "7+ Days"].map((day) => (
// //             <button
// //               key={day}
// //               onClick={() => setDuration(day)}
// //               className={`rounded-full px-6 py-2 ${
// //                 duration === day
// //                   ? "bg-[#005f94] text-white"
// //                   : "border border-gray-200 text-gray-600 hover:border-gray-300"
// //               }`}
// //             >
// //               {day}
// //             </button>
// //           ))}
// //         </div>
// //       </div>


// //       <div className="mb-6">
// //         <h3 className="mb-3 text-lg font-medium">Price Range</h3>
// //         <input
// //           type="range"
// //           min="0"
// //           max="500000"
// //           value={priceRange}
// //           onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
// //           className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
// //         />
// //         <div className="mt-4 flex gap-4">
// //           <div className="flex-1">
// //             <label className="text-sm text-gray-500">Min</label>
// //             <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
// //               <span className="text-gray-500">INR</span>
// //               <input type="number" value={0} disabled className="ml-2 w-full bg-transparent focus:outline-none" />
// //             </div>
// //           </div>
// //           <div className="flex-1">
// //             <label className="text-sm text-gray-500">Max</label>
// //             <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
// //               <span className="text-gray-500">INR</span>
// //               <input
// //                 type="number"
// //                 value={priceRange}
// //                 onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
// //                 className="ml-2 w-full bg-transparent focus:outline-none"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div> */}



// //       <div className="flex items-center absolute  bottom-6 w-[91%] justify-between">
// //         <button onClick={handleClearAll} className="text-gray-500 hover:text-gray-700">
// //           Clear All
// //         </button>
// //         <button
// //           onClick={() => {

// //             console.log({
// //               search,
// //               productType,
// //               duration,
// //               priceRange,
// //               includeFlights,
// //             })
// //             onClose();
// //           }}
// //           className=" rounded-tl-[20px] rounded-br-[20px]  sha bg-[#005f94] px-6 py-3 text-white hover:bg-[#102d3c]"
// //         >
// //           Search Visa
// //         </button>
// //       </div>
// //     </div>
// // </>
// //   )
// // }

// import React, { useEffect, useRef, useState } from 'react';
// import { Search } from "lucide-react";
// import { ApiGet } from '../../helper/axios';

// export default function VisaPopup({ onClose }) {
//   const [search, setSearch] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [destinations, setDestinations] = useState([]); // Store dynamic country list
//   const [visaDetails, setVisaDetails] = useState(null); // Store visa details
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(""); 
//   const searchRef = useRef(null);
//   const popupRef = useRef(null);

//   // Fetch dynamic destinations from API
//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await  ApiGet("/admin/countries"); 
//         console.log("respone  of countries", response);
//         setDestinations(response?.country); 
//       } catch (error) {
//         console.error("Error fetching destinations:", error);
//       }
//     };
//     fetchDestinations();
//   }, []);

//   // Handle outside click to close suggestions
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Close popup if clicked outside
//   useEffect(() => {
//     function handleClickOutsidePopup(event) {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         onClose();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutsidePopup);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutsidePopup);
//   }, [onClose]);

//   // Fetch Visa Details by Country
//   const fetchVisaDetails = async (country) => {
//     setLoading(true);
//     try {
//       const response = await ApiGet(`/admin/visa-by-country/${country}`); 
//       console.log("response of visa", response);
//       setVisaDetails(response.data); 
//     } catch (error) {
//       console.error("Error fetching visa details:", error);
//       setVisaDetails(null);
//     }
//     setLoading(false);
//   };

//   const handleClearAll = () => {
//     setSearch("");
//     setVisaDetails(null);
//   };

//   const handleSearchVisa = () => {
//     const selectedCountry = destinations.find(
//       (dest) => dest.name.toLowerCase() === search.toLowerCase()
//     );

//     if (!selectedCountry) {
//       setError("Country not found. Please select from the suggestions.");
//       return;
//     }

//     fetchVisaDetails(selectedCountry._id);
//   };


//   return (
//     <>
//       <div ref={popupRef} className="w-full animationSearch max-w-[600px] h-[350px] mt-[10px] rounded-tl-[20px] relative rounded-br-[20px] shadow-lg bg-white p-6">
//         {/* Search Input */}
//         <div ref={searchRef} className="relative mb-6">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search Country.."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onFocus={() => setShowSuggestions(true)}
//               className="w-full rounded-full border border-gray-200 py-3 pl-12 shadow-lg pr-4 text-gray-600 focus:border-gray-300 focus:outline-none"
//             />
//           </div>
//           {showSuggestions && search && (
//             <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
//             {destinations
//               ?.filter((dest) => dest.name?.toLowerCase().includes(search?.toLowerCase()))
//               .map((dest) => (
//                   <button
//                     key={dest}
//                     onClick={() => {
//                       setSearch(dest);
//                       fetchVisaDetails(dest._id);
//                       setShowSuggestions(false);
//                     }}
//                     className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
//                   >
//                     {dest}
//                   </button>
//                 ))}
//             </div>
//           )}
//         </div>

//         {/* Display Visa Details */}
//         {loading && <p className="text-center text-gray-600">Loading visa details...</p>}
//         {visaDetails && (
//           <div className="bg-gray-100 p-3 rounded-md text-sm">
//             <h3 className="font-semibold text-lg text-blue-800">Visa Details for {visaDetails.country}</h3>
//             <p><strong>Processing Time:</strong> {visaDetails.processing_time}</p>
//             <p><strong>Fee:</strong> {visaDetails.fee}</p>
//             <p><strong>Documents Required:</strong> {visaDetails.documents.join(", ")}</p>
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="flex items-center absolute bottom-6 w-[91%] justify-between">
//           <button onClick={handleClearAll} className="text-gray-500 hover:text-gray-700">
//             Clear All
//           </button>
//           <button
//               onClick={() => {
//               if (search) {
//                 const selectedCountry = destinations?.find((dest) => dest.name === search);
//                 console.log("selectedCountry", selectedCountry);
//                 if (selectedCountry) {
//                   fetchVisaDetails(selectedCountry._id);
//                 }
//               }
//               onClose();
//             }}

//             className="rounded-tl-[20px] rounded-br-[20px] sha bg-[#005f94] px-6 py-3 text-white hover:bg-[#102d3c]"
//           >
//             Search Visa
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { ApiGet } from "../../helper/axios"; // Ensure Axios helper is correctly imported

export default function VisaPopup({ onClose }) {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [destinations, setDestinations] = useState([]); // Store country list with _id
  const [visaDetails, setVisaDetails] = useState(null); // Store visa details
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error handling
  const searchRef = useRef(null);
  const popupRef = useRef(null);

  // ✅ Fetch country list from API
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await ApiGet("/admin/countries"); // Correct API endpoint
        if (response.country) {
          setDestinations(response.country); // Assuming API returns [{ _id, name }]
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setError("Failed to load country list.");
      }
    };
    fetchDestinations();
  }, []);

  // ✅ Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Close popup when clicking outside
  useEffect(() => {
    function handleClickOutsidePopup(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutsidePopup);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsidePopup);
  }, [onClose]);

  const handleClose = () => {
    setSearch(""); // Clear search input
    setVisaDetails(null); // Clear previous visa details
    setShowSuggestions(false);
    setError(""); // Clear error messages
    onClose(); // Call parent function to close modal
  };

  // ✅ Fetch Visa Details by Country ObjectId
  const fetchVisaDetails = async (countryId) => {
    if (!countryId) {
      setError("Please select a valid country.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await ApiGet(`/admin/visa-by-country/${countryId}`); 
      console.log("response of visa", response)
      if (response.visa) {
        setVisaDetails(response.visa);
        setTimeout(() => {
          handleClose(); // ✅ Close modal only after fetching data successfully
        }, 500);
      } else {
        setVisaDetails(null);
        setError("No visa details found for this country.");
      }
    } catch (error) {
      console.error("Error fetching visa details:", error);
      setVisaDetails(null);
      setError("Failed to fetch visa details.");
    }
    setLoading(false);
  };

  // ✅ Handle Search Action
  const handleSearchVisa = () => {
    const trimmedSearch = search.trim().toLowerCase(); 

    const selectedCountry = destinations.find(
      (dest) => dest.countryName?.toLowerCase().replace(/\s+/g, "") === trimmedSearch.replace(/\s+/g, "")
    );

    if (!selectedCountry) {
      setError("Country not found. Please select from the suggestions.");
      return;
    }

    fetchVisaDetails(selectedCountry._id);
  };

  return (
    <>
      <div ref={popupRef} className="w-full animationSearch max-w-[600px] h-auto mt-[10px] rounded-tl-[20px] relative rounded-br-[20px] shadow-lg bg-white p-6">
        {/* ✅ Search Input */}
        <div ref={searchRef} className="relative mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Country.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="w-full rounded-full border border-gray-200 py-3 pl-12 shadow-lg pr-4 text-gray-600 focus:border-gray-300 focus:outline-none"
            />
          </div>
          {showSuggestions && search && (
            <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              {destinations
                ?.filter((dest) =>
                  dest.countryName?.toLowerCase().includes(search.trim().toLowerCase())
                )
                .map((dest) => (
                  <button
                    key={dest._id}
                    onClick={() => {
                      setSearch(dest.countryName);
                      fetchVisaDetails(dest._id); // Pass ObjectId instead of name
                      setShowSuggestions(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                  >
                    {dest.countryName}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* ✅ Display Errors */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* ✅ Display Visa Details */}
        {loading && <p className="text-center text-gray-600">Loading visa details...</p>}
        {visaDetails && (
          <div className="bg-gray-100 p-3 rounded-md text-sm">
            <h3 className="font-semibold text-lg text-blue-800">Visa Details for {visaDetails.country}</h3>
            <p><strong>Processing Time:</strong> {visaDetails.processing_time}</p>
            <p><strong>Fee:</strong> {visaDetails.fee}</p>
            <p><strong>Documents Required:</strong> {visaDetails.documents?.join(", ")}</p>
          </div>
        )}

        {/* ✅ Buttons */}
        <div className="flex items-center absolute bottm-6 w-[91%] justify-between">
          <button
            onClick={() => {
              setSearch("");
              setVisaDetails(null);
              setError("");
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            Clear All
          </button>
          <button
            onClick={handleSearchVisa}
            className="rounded-tl-[20px] rounded-br-[20px] sha bg-[#005f94] px-6 py-3 text-white hover:bg-[#102d3c]"
          >
            Search Visa
          </button>
        </div>
      </div>
    </>
  );
}
