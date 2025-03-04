import React, { useEffect, useRef, useState } from "react";
import dubai from "../../../public/Header/dubai.png";
import singapore from "../../../public/Header/singapore.png";
import thaiLand from "../../../public/Header/thailand.jpg";
import logo from "../../../public/Header/logo.png";
import flag from "../../../public/Header/flag.png";
import singaPore from "../../../public/newIconHeader/merlion-park.png"
import thailand from "../../../public/newIconHeader/sanctuary-of-truth.png"
import japan from "../../../public/newIconHeader/nepal.png"
import Kashmir from "../../../public/newIconHeader/kashmir.png"
import usa from "../../../public/newIconHeader/usa.png"
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import HolidaysPopup from "../serchPopup/HolidaysPopup";
import VisaPopup from "../serchPopup/VisaPopup";
import HotelPopup from "../serchPopup/HotelPopup";

// const destinations = [
//   "Dubai, UAE",
//   "Bangkok, Thailand",
//   "Singapore",
//   "Bali, Indonesia",
//   "Tokyo, Japan",
//   "Paris, France",
//   "London, UK",
//   "New York, USA",
// ]

const destinations = ["Paris", "London", "Dubai", "New York", "Tokyo"];

export default function Header() {

  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const popupRef = useRef(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [productType, setProductType] = useState("Tour");
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [includeFlights, setIncludeFlights] = useState(false);
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
  const navigate = useNavigate();
  const destinations1 = [
    { name: "Explore", path: "/", icon: <i className="fa-regular fa-fire-flame-curved text-[20px]"></i> },
    { name: "Dubai", path: "/country", icon: <img src={dubai} className="w-[22px] h-[25px]" /> },
    { name: "Singapore", icon: <img src={singaPore} className="w-[20px] h-[20px]" /> },
    { name: "Thailand", icon: <img src={thailand} className="w-[22px] h-[25px]" /> },
    { name: "Japan", icon: <img src={japan} className="w-[20px] h-[20px]" /> },
    { name: "Kashmir", icon: <img src={Kashmir} className="w-[22px] h-[25px]" /> },
    { name: "USA", icon: <img src={usa} className="w-[20px] h-[20px]" /> },
  ];

  const handleVisaClick = () => {
    setActiveButton("Visa");
    setTimeout(() => {
      navigate("/visa");
    }, 300);
  };


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


  const location = useLocation();

  // Default active button based on the page route

  const [selected, setSelected] = useState("Explore");

  const [activeButton, setActiveButton] = useState("holiday");
  const [activeVisaButton, setActiveVisaButton] = useState("holiday");



  useEffect(() => {
    if (location.pathname === "/passport") {
      setActiveButton("passport");
      setActiveVisaButton("passport");
    } else if (location.pathname === "/visa") {
      setActiveButton("visa");
      setActiveVisaButton("visa");
    }
    else if (location.pathname === "/hotels") {
      setActiveButton("hotels");
      setActiveVisaButton("hotels");
    } else {
      setActiveButton("holiday");
      setActiveVisaButton("holiday");
    }
  }, [location.pathname]);



  const handleNavigation = (page) => {
    setActiveButton(page);
    setActiveVisaButton(page);
    navigate(page);
  };


  const renderSearchComponent = () => {
    if (location.pathname === "/visa") {
      return <VisaPopup onClose={() => setShowSearchPopup(false)} />;
    } else if (location.pathname === "/hotels") {
      return <HotelPopup onClose={() => setShowSearchPopup(false)} />;
    } else {
      return <HolidaysPopup onClose={() => setShowSearchPopup(false)} />;
    }
  };


  let placeholderText = "Search your destination";
  if (location.pathname === "/visa") {
    placeholderText = "Search Country";
  } else if (location.pathname === "/hotels") {
    placeholderText = "Search  hotels..";
  }
  useEffect(() => {
    if (showSearchPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSearchPopup]);




  return (
    <>
      <div className=" flex w-[100%]   z-[20] bg-white font-Poppins  fixed  ">
        <div className=" flex  w-[100%]   gap-[20px] pt-[20px]  !text-[#515151] flex-col  ">
          <div className=" flex   h-fit  w-[100%]">
            <div className=" flex md:w-[75%] 2xl:w-[1370px] z-[10]  items-center h-[25px] mx-auto">
              <div className=" flex w-[100%]  relative items-center justify-between ">
                <div className="relative">
                  <img
                    className="flex w-[130px] z-10 relative"
                    src={logo}
                    alt="Logo"
                  />
                  {/* <span className="absolute top-1/2 right-[-20px] w-[50px] h-[2px] bg-[#515151] animate-cross-fade"></span> */}
                </div>





                <div className="  mt-[13px] px-[13px] hidden md:flex w-[250px] bg-white  gap-[10px] rounded-[26px] border-[1.5px] custom-sahdow overflow-hidden items-center justify-start h-[39px]" onClick={() => setShowSearchPopup(true)}>
                  <i className="fa-solid text-[#515151] fa-magnifying-glass"></i>
                  <input
                    className=" w-[100%] h-[100%]  text-[14px] outline-none"
                    placeholder={placeholderText}
                    type="text"
                  />
                </div>
                <div className="hidden md:flex  gap-[10px]  mt-[13px] bg-white ">
                  <div className="  gap-[10px]  items-center flex">
                    <img
                      className=" w-[24px] h-[18px] border-[1px]"
                      src={flag}
                    />
                    <p className="  text-[#000] text-[13px] font-[500]">
                      INR ₹
                    </p>
                    <i className=" fa-solid fa-chevron-down text-[12px] pr-[10px]"></i>
                  </div>
                  <div className=" text-[#515151] text-[14px] font-[500]">
                    Login
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className=" flex w-[100%] top-[39px]  h-[1.5px] bg-[#b6b6b6] absolute"></span>
          <div className=" w-[100%]  border-b-[1.5px]  py-[9px] flex ms-center">
            <div className=" flex md:w-[75%] w-[95%]  2xl:w-[1370px]  relative items-center  gap-[30px] mx-auto">





              <div className=" hidden md:flex w-fit">




                {location.pathname === "/visa" || location.pathname === "/passport" ? (

                  <div className="relative flex gap-3 items-center border-[1px] border-[#cbcbcb] rounded-lg p-[5px] bg-white">
                    {/* Moving Slider */}
                    <div
                      className="absolute top-[3px] left-1 h-[40px] w-[85px] rounded-md bg-[#005f94] transition-transform duration-300 ease-in-out"
                      style={{
                        transform: activeVisaButton === "holiday"
                          ? "translateX(0px)"
                          : activeVisaButton === "passport"
                            ? "translateX(98px)"
                            : "translateX(194px)",
                      }}
                    ></div>

                    {/* Holidays Button */}
                    <button
                      className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "holiday" ? "text-white" : "text-black"
                        }`}
                      onClick={() => handleNavigation("/")}
                    >
                      Holidays
                    </button>

                    {/* Passport Button */}
                    <button
                      className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "passport" ? "text-white" : "text-black"
                        }`}
                      onClick={() => handleNavigation("/passport")}
                    >
                      Passport
                    </button>

                    {/* Visa Button */}
                    <button
                      className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "visa" ? "text-white" : "text-black"
                        }`}
                      onClick={() => handleNavigation("/visa")}
                    >
                      Visa
                    </button>
                  </div>

                ) : (
                  <>


                    <div className="relative flex gap-3 items-center border-[1px] border-[#cbcbcb] rounded-lg p-[5px] bg-white">
                      {/* Moving Slider */}
                      <div
                        className="absolute top-[3px] left-1 h-[40px] w-[85px] rounded-md bg-[#005f94] transition-transform duration-300 ease-in-out"
                        style={{
                          transform: activeVisaButton === "holiday"
                            ? "translateX(0px)"
                            : activeVisaButton === "passport"
                              ? "translateX(20px)"
                              : "translateX(97px)",
                        }}
                      ></div>

                      {/* Holidays Button */}
                      <button
                        className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "holiday" ? "text-white" : "text-black"
                          }`}
                        onClick={() => handleNavigation("/")}
                      >
                        Holidays
                      </button>

                      {/* Passport Button */}
                      <button
                        className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "hotels" ? "text-white" : "text-black"
                          }`}
                        onClick={() => handleNavigation("/hotels")}
                      >
                        Hotels
                      </button>

                      {/* Visa Button */}
                      <button
                        className={`relative z-10 w-[85px] text-sm rounded-md p-2 text-center transition-all ${activeVisaButton === "visa" ? "text-white" : "text-black"
                          }`}
                        onClick={() => handleNavigation("/visa")}
                      >
                        Visa
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="absolute left-0 flex md:hidden top-0 bottom-0 w-[30px] bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className=" flex w-[100%] pl-[20px]  md:w-[71%] 2xl:w-[900px]  md:pl-0 md:mt-0  mt-[10px] overflow-x-auto  scroll-smooth gap-[30px] md:gap-[40px] items-center justify-start flex-shrink-0">
                {destinations1.map((dest, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer"
                    onClick={() => {
                      setSelected(dest.name);
                      navigate(dest.path);
                    }}
                  >
                    <div className={`flex flex-col gap-[5px] pb-[4px] items-center text-center w-fit ${selected === dest.name ? "text-[#005f94] font-bold" : "text-[#333]"
                      }`}>
                      {dest.icon}
                      <h2 className="text-[12px] font-[500]">{dest.name}</h2>
                    </div>
                    {selected === dest.name && (
                      <div className="flex absolute bottom-0 h-[2px] w-[40px] bg-[#005f94]"></div>
                    )}
                  </div>
                ))}
         


              </div>
              {/* <div className="absolute right-0 top-0 bottom-0 w-[30px] bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}



            </div>
          </div>
        </div>
      </div>








      {/* Search popup */}

      {showSearchPopup && (
        <div className="fixed  font-Poppins inset-0 z-[770] flex justify-center bg-black/50">

          {renderSearchComponent()}
        </div>
      )}

    </>
  );
}
