import React, { useEffect, useRef, useState } from 'react'
import { Search } from "lucide-react"

const destinations = ["Paris", "London", "Dubai", "New York", "Tokyo"];
export default function HotelPopup({ onClose, hotels, setHotels }) {

  // const [showSearchPopup, setShowSearchPopup] = useState(false);

  const [priceRange, setPriceRange] = useState(1050);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [productType, setProductType] = useState("Tour");
  const [duration, setDuration] = useState("");
  // const [priceRange, setPriceRange] = useState(0);
  const [includeFlights, setIncludeFlights] = useState(false);
  const popupRef = useRef(null);
  const searchRef = useRef(null);
  const filteredDestinations = destinations.filter((dest) =>
    dest.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleClearAll = () => {
    setSearch("");
    setProductType("Tour");
    setDuration("");
    setPriceRange(0);
    setIncludeFlights(false);
  };

  // Close the entire popup if click is outside the popup container
  // useEffect(() => {
  //   function handleClickOutsidePopup(event) {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       setShowSearchPopup(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutsidePopup);
  //   return () =>
  //     document.removeEventListener("mousedown", handleClickOutsidePopup);
  // }, []);
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



  const amenitiesList = [
    "Gym",
    "Swimming Pool",
    "Spa",
    "Restaurant",
    "24-hour Room Service",
    "Jacuzzi",
  ];

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const applyFilters = () => {
    const filteredHotels = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedAmenities.length === 0 ||
          selectedAmenities.every((amenity) => hotel.amenities.includes(amenity))) &&
        hotel.discountedPrice <= priceRange
    );
    setHotels(filteredHotels);
    onClose(); // Close modal after applying filters
  };


  return (
    <>


      <div ref={popupRef} className="w-full animationSearch !max-w-[600px] mt-[10px] rounded-tl-[20px] rounded-br-[20px] shadow-lg h-fit bg-white p-6 ">
        {/* Search Input */}
        <div ref={searchRef} className="relative mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for hotels.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              className="w-full rounded-full border border-gray-200 py-3 pl-12 shadow-lg pr-4 text-gray-600 focus:border-gray-300 focus:outline-none"
            />
          </div>
          {showSuggestions && search && (
            <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              {filteredDestinations.map((dest) => (
                <button
                  key={dest}
                  onClick={() => {
                    setSearch(dest)
                    setShowSuggestions(false)
                  }}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50"
                >
                  {dest}
                </button>
              ))}
            </div>
          )}
        </div>


        {/* <div className="mb-6">
        <h3 className="mb-3 text-lg font-medium">Tour Type</h3>
        <div className="flex gap-3">
          {["Tour", "Activity"].map((type) => (
            <button
              key={type}
              onClick={() => setProductType()}
              className={`rounded-full px-6 py-2 ${
                productType === type
                  ? "bg-[#005f94] text-white"
                  : "border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>


      <div className="mb-6">
        <h3 className="mb-3 text-lg font-medium">Trip Duration</h3>
        <div className="flex flex-wrap gap-3">
          {["Upto 1 Day", "2 to 3 days", "3 to 5 days", "5 to 7 days", "7+ Days"].map((day) => (
            <button
              key={day}
              onClick={() => setDuration(day)}
              className={`rounded-full px-6 py-2 ${
                duration === day
                  ? "bg-[#005f94] text-white"
                  : "border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>


      <div className="mb-6">
        <h3 className="mb-3 text-lg font-medium">Price Range</h3>
        <input
          type="range"
          min="0"
          max="500000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        />
        <div className="mt-4 flex gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-500">Min</label>
            <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
              <span className="text-gray-500">INR</span>
              <input type="number" value={0} disabled className="ml-2 w-full bg-transparent focus:outline-none" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-500">Max</label>
            <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
              <span className="text-gray-500">INR</span>
              <input
                type="number"
                value={priceRange}
                onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
                className="ml-2 w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div> */}

        <div className="mb-3">
          <button
            onClick={() => setIsPriceOpen(!isPriceOpen)}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-[15px] font-[400]">Price Range</span>
            {/* <span
              className="text-2xl transform transition-transform duration-200"
            // style={{
            //   transform: isPriceOpen
            //     ? "rotate(0deg)"
            //     : "rotate(-45deg)",
            // }}
            >
              <i className={` text-[17px] fa-solid  ${isPriceOpen ? 'fa-minus' : ' fa-plus '}`}></i>
            </span> */}
          </button>

          {isPriceOpen && (
            <div className="space-y-2">
              <div className="relative h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute h-full bg-blue-500 rounded-full"
                  style={{ width: `${(priceRange / 18219) * 100}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max="18219"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹0</span>
                <span>₹{priceRange}</span>
              </div>
            </div>
          )}
        </div>
<div className=' flex mt-[20px]  gap-[40px] w-[100%]'>


        {/* Amenities Section */}
        <div className="mb-4 w-[50%]">
          <button
            // onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-xl font-[500]">Amenities</span>
            {/* <span
              className="text-2xl transform transition-transform duration-200"
            // style={{
            //   transform: isPriceOpen
            //     ? "rotate(0deg)"
            //     : "rotate(-45deg)",
            // }}
            >
              <i class={` text-[17px] fa-solid  ${isAmenitiesOpen ? 'fa-minus' : ' fa-plus '}`}></i>
            </span> */}
          </button>

          {isAmenitiesOpen && (
            <div className="space-y-1">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center cursor-pointer group"
                >
                  <div className="relative w-5 h-5 mr-3">
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="hidden"
                    />
                    <div
                      className={`
                      w-4 h-4 border-1 rounded transition-colors duration-200
                      ${selectedAmenities.includes(amenity)
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300 group-hover:border-blue-500"
                        }
                    `}
                    >
                      {selectedAmenities.includes(amenity) && (
                        <svg
                          className="w-full h-full text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className=" text-[13px] text-gray-700 group-hover:text-gray-900">
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating Section */}
        <div className='w-[50%]'>
          <button

            className="w-full flex items-center justify-between mb-4"
          >
            <span className="text-xl font-[500]">Rating</span>
            {/* <span
              className="text-2xl transform transition-transform duration-200"
            // style={{
            //   transform: isPriceOpen
            //     ? "rotate(0deg)"
            //     : "rotate(-45deg)",
            // }}
            >
              <i class={` text-[17px] fa-solid  ${isRatingOpen ? 'fa-minus' : ' fa-plus '}`}></i>
            </span> */}
          </button>

          {isRatingOpen && (
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center cursor-pointer group"
                  onClick={() => setSelectedRating(rating)}
                >
                  <div className="relative w-5 h-5 mr-3">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      className="hidden"
                      readOnly
                    />
                    <div
                      className={`
                      w-5 h-5 border-2 rounded-full transition-colors duration-200
                      ${selectedRating === rating
                          ? "border-blue-500"
                          : "border-gray-300 group-hover:border-blue-500"
                        }
                    `}
                    >
                      {selectedRating === rating && (
                        <div className="absolute inset-1 rounded-full bg-blue-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                      & Up
                    </span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
        </div>

        <div className="flex items-center justify-between">
          <button onClick={handleClearAll} className="text-gray-500 mt-[40px]  hover:text-gray-700">
            Clear All
          </button>
          <button
            // onClick={() => {
            //   // Handle search
            //   console.log({
            //     search,
            //     productType,
            //     duration,
            //     priceRange,
            //     includeFlights,
            //   })
            // }}
            className=" rounded-tl-[20px] mt-[40px] rounded-br-[20px]  sha bg-[#005f94] px-6 py-[10px] text-white hover:bg-[#102d3c]"
            onClick={applyFilters}
          >
            Search Hotels
          </button>
        </div>
      </div>
    </>
  )
}
