import React, { useEffect, useRef, useState } from 'react'
import { Search } from "lucide-react"

const destinations = ["Paris", "London", "Dubai", "New York", "Tokyo"];
export default function HolidaysPopup({onClose}) {

    const [showSearchPopup, setShowSearchPopup] = useState(false);
    
      const [search, setSearch] = useState("");
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [productType, setProductType] = useState("Tour");
      const [duration, setDuration] = useState("");
      const [priceRange, setPriceRange] = useState(0);
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
  useEffect(() => {
    function handleClickOutsidePopup(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowSearchPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsidePopup);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsidePopup);
  }, []);
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
  return (
<>


<div ref={popupRef}  className="w-full animationSearch max-w-[600px] mt-[10px] rounded-tl-[20px] rounded-br-[20px] shadow-lg h-fit bg-white p-6 ">
      {/* Search Input */}
      <div ref={searchRef} className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for destinations.."
           
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

      {/* Product Type */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-medium">Product Type</h3>
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

      {/* Trip Duration */}
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

      {/* Price Range */}
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
      </div>


      {/* Actions */}
      <div className="flex items-center justify-between">
        <button onClick={handleClearAll} className="text-gray-500 hover:text-gray-700">
          Clear All
        </button>
        <button
          onClick={() => {
            // Handle search
            console.log({
              search,
              productType,
              duration,
              priceRange,
              includeFlights,
            })
          }}
          className=" rounded-tl-[20px] rounded-br-[20px]  sha bg-[#005f94] px-6 py-3 text-white hover:bg-[#102d3c]"
        >
          Search Packges
        </button>
      </div>
    </div>
</>
  )
}
