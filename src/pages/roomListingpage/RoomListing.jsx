import React, { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import image1 from "../../../public/hero/1.jpg";
import image2 from "../../../public/hero/2.jpg";
import image3 from "../../../public/hero/3.jpg";
import image4 from "../../../public/hero/4.jpg";

import image11 from "../../../public/Gallery/img1.jpg";
import image22 from "../../../public/Gallery/img2.jpg";
import image33 from "../../../public/Gallery/img3.jpg";
import image44 from "../../../public/Gallery/img4.jpg";

import {
  Modal as NextUIModal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

import dubaiWhite from "../../../public/visaCountry/Dubai-white.png";
import dubaiColor from "../../../public/visaCountry/Dubai-color.png"; // Add color images
import canadaWhite from "../../../public/visaCountry/Canada-white.png";
import canadaColor from "../../../public/visaCountry/Canada-color.png";
import parisWhite from "../../../public/visaCountry/Paris-white.png";
import parisColor from "../../../public/visaCountry/Paris-color.png";
import usaWhite from "../../../public/visaCountry/usa-white.png";
import usaColor from "../../../public/visaCountry/usa-color.png";
import HotelPopup from "../../Component/serchPopup/HotelPopup";


import {
  Star,
  MapPin,
  Dumbbell,
  UtensilsCrossed,
  Clock,
  ChevronRight,
  Bath,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../../public/Gallery/img3.jpg";

import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";
import RoomHeader from "../../Component/header/roomHeader/RoomHeader";
import Footer from "../../Component/footer/Footer";
import BookingAlliance from "../../Component/HomePage/BookingAillence";
import { useSelector } from "react-redux";
import { ApiGet } from "../../helper/axios";

// interface RoomProps {
//   name: string;
//   location: string;
//   distance: string;
//   rating: number;
//   reviews: number;
//   basePrice: number;
//   discountedPrice: number;
//   taxes: number;
//   amenities: string[];
//   images: string[];
//   offerText?: string;
//   cancellationType: string;
// }

const HotelCard = ({
  name,
  location,
  distance,
  rating,
  ratingText,
  ratings,
  sponsored,
  basePrice,
  discountedPrice,
  taxesAndFees,
  amenities,
  images,
  features = [],
  description,
  noCostEmi,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();


  const amenitiesArray = Object.keys(amenities).filter(
    (key) => amenities[key]
  );

  const handleDetails = () => {
    navigate("/room-details");
  };

  return (
    <div className="bg-white  md:w-[750px] 2xl:w-[900px] rounded-lg border relative flex flex-col  2xl:  border-[#005f94] overflow-hidden">
      <div className="flex relative  flex-col w-[100%]   md:flex-row">
        {/* Left Section - Image Gal lery */}
        <div className="relative  md:h-[243px] w- md:w-[275px]">
          {/* Sponsored Badge */}
          {/* {sponsored && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 text-[#4a4a4a] font-Poppins   px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
                SPONSORED
              </span>
            </div>
          )} */}

          {/* Main Image */}
          <div className="relative md:h-[220px]  pt-[10px] pb-[5px] px-[10px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${name} view ${currentImageIndex + 1}`}
                className="!w-[400px] h-[130px] md:h-[162px] rounded-[4px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-3 left-[9px] md:flex hidden gap-[5px] md:gap-[5px]">
            {images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`md:w-[60px] md:h-[55px] w-[90%] h-[55px] rounded overflow-hidden ${currentImageIndex === index
                  ? "border-2 border-white"
                  : "border border-transparent"
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <button className="md:w-[60px] md:h-[55px] w-[90%] mr-[10px] h-[55px] bg-black/50 text-white rounded flex items-center justify-center text-xs">
              View All
            </button>
          </div>

          <div className=" bottom-[]  ml-[10px] flex md:hidden gap-[5px] md:gap-[5px]">
            {images.slice(0, 4).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`md:w-[60px] md:h-[55px] w-[90%] h-[55px] rounded overflow-hidden ${currentImageIndex === index
                  ? "border-2 border-white"
                  : "border border-transparent"
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <button className="md:w-[60px] md:h-[55px] w-[90%] mr-[10px] h-[55px] bg-black/50 text-white rounded flex items-center justify-center text-xs">
              View All
            </button>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1 mt-2 py-[8px] font-Poppins  md:w-[40%] pr-[30px] pl-[10px]">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-[20px] font-[600] leading-7   text-gray-900">
                {name}
              </h2>

              <div className="mt-1">
                <a
                  href="#"
                  className="text-[#1f569e] text-[14px] leading-4 font-[500] hover:underline"
                >
                  {location}
                </a>
                <span className="text-[#4a4a4a]   leading-4 text-[13px]">
                  {" "}
                  | {distance}
                </span>
              </div>
            </div>
            {/* <div className="text-right flex flex-col items-center gap-[5px]">
              <div className="text-[#0066b2] text-[12px]  font-bold">
                {ratingText}
              </div>
              <div className="text-[#005f94]   text-[28px] font-bold leading-8">
                {rating}
              </div>
              <div className="text-[#4a4a4a]   text-sm">
                ({ratings} Ratings)
              </div>
            </div> */}
          </div>


          <div className="flex gap-3 flex-wrap mt-2">
            {Array.isArray(amenitiesArray) ? (
              amenitiesArray.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center leading-4 text-[#4a4a4a]"
                >
                  {amenity === "Gym" && (
                    <Dumbbell className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                  )}
                  {amenity === "Restaurant" && (
                    <UtensilsCrossed className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                  )}
                  {amenity === "24-hour Room Service" && (
                    <Clock className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                  )}
                  {/* {amenity === "Swimming Pool" && (
                    <Bath className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                  )} */}
                  <span className="text-[12px]">{amenity}</span>
                </div>
              ))
            ) : (
              <p>No amenities available</p>
            )}


          </div>

          <div className=" flex relative ">
            <div className=" w-[80%] flex  flex-col gap-[5px] mt-[23px]">
              {features.map((feature, index) => (
                <div key={index} className="flex  gap-2">
                  <i className="fa-duotone fa-solid mt-[2px]  text-[#b18f2a] fa-check"></i>
                  <span className="text-[#b18f2a]  text-[13px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1  pl-[10px] py-[8px] font-Poppins max-w-[220px] border-l pr-[20px]">
          <div className="md:text-right md:justify-end flex flex-col  gap-[5px]">
            {/* <div className="text-[#0066b2] text-[13px]  font-bold">
 
            </div> */}
            <div className="  text-[#ffd500] text-[15px] w-[100%] justify-end hidden  md:flex gap-[7px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="text-[#005f94]   text-[28px] font-bold leading-8">
              {rating}
            </div>
            <div className="text-[#4a4a4a] md:text-right text-left  text-[12px]">
              ({ratings} Ratings)
            </div>
          </div>

          <div className="flex   z-[12] mt-[20px]    md:justify-end">
            <div className="md:text-right w-[100%] ">
              {basePrice && (
                <div className="text-[#4a4a4a] text-left text-[10px] line-through text-base">
                  {/* ₹{basePrice?.toLocaleString()} */}
                </div>
              )}
              <div className="flex items-baseline gap-2 md:justify-end">
                <span className="text-[22px] font-[600]  text-black">
                  ₹{basePrice?.toLocaleString()}
                </span>
              </div>

              <div className=" flex  md:justify-end">


                <div className="text-sm text-[400] w-fit md:w-fit md:text-right flex justify-end text -[12] text-[#4a4a4a]  ">
                  + ₹{taxesAndFees?.toLocaleString()} taxes & fees
                </div>

              </div>
              <div className=" flex flex-col gap-[10px]  justify-end  absolute bottom-[10px] right-4">

                <div className="  text-[#ffd500] text-[19px] w-[100%] justify-end md:hidden flex gap-[7px]">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="  flex items-center gap-[10px]">
                  <div
                    className="flex w-[37px] h-[37px] mt-[6px] rounded-full justify-center items-center text-[#fff] bg-[#005f94] cursor-pointer"
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  >
                    <i className="fa-brands text-[23px] fa-whatsapp"></i>
                  </div>


                  <div
                    className=" flex w-[120px]  mt-[4px] cursor-pointer  h-[36px] text-[13px] justify-center items-center py-[2px]  bg-[#005f94] font-Poppins px-[10px] text-white rounded-[30px]"

                  >
                    <p>Inquiry Now</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RoomListing() {
  const [guestDetails, setGuestDetails] = useState(false);
  const [roomnum, setRoomNum] = useState(0);
  const [adultnum, setAdultNum] = useState(0);
  const [childrennum, setChildrenNum] = useState(0);
  const [selectedDates, setSelectedDates] = useState([dayjs(), dayjs()]);
  const [numOfNights, setNumOfNights] = useState(1);
  const [startDate, setStartDate] = useState(dayjs());
  const [numOfDays, setNumOfDays] = useState(null);
  const [endDate, setEndDate] = useState(dayjs());
  const [hotels, setHotels] = useState([]);


  const rooms = useSelector((state) => state.landing.getAllRooms);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await ApiGet("/admin/rooms");
        console.log("room response", rooms)
        setHotels(response.room);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  console.log('rooms', hotels)


  const formatPlaceholder = (dates) => { };
  const handleGuestDetails = () => {
    setGuestDetails((prevCheck) => !prevCheck);
  };

  // useEffect(() => {
  //   // Set default values for today and tomorrow
  //   const defaultStartDate = moment().startOf("day");
  //   const defaultEndDate = moment().startOf("day").add(1, "days");

  //   // Update state with default values
  //   setStartDate(defaultStartDate);
  //   setEndDate(defaultEndDate);

  //   // Calculate and set the default number of nights
  //   const diffTime = Math.abs(defaultEndDate - defaultStartDate);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   setNumOfDays(diffDays);
  // }, []);
  // const disabledDate = (current) => {
  //   return current && current.isBefore(dayjs(), "day");
  // };
  // const hotels = [
  //   {
  //     name: "Moxy Mumbai Andheri West By Marriott",
  //     location: "Andheri West",
  //     distance: "1.8 km drive to Kokilaben Dhirubhai Ambani Hospital",
  //     rating: 4.7,
  //     ratingText: "Excellent",
  //     ratings: 29,
  //     sponsored: true,
  //     basePrice: null,
  //     discountedPrice: 19777,
  //     taxes: 3560,
  //     amenities: ["Gym", "Restaurant", "24-hour Room Service"],
  //     images: [image1, image2, image3, image4],
  //     features: ["Free Cancellation", "Breakfast Included"],
  //     description: null,
  //     noCostEmi: false,
  //   },
  //   {
  //     name: "The Lalit Mumbai",
  //     location: "Near Mumbai Airport",
  //     distance: "1.3 km  - Chhatrapati Shivaji International Airport",
  //     rating: 4.1,
  //     ratingText: "Very Good",
  //     ratings: 8074,
  //     sponsored: false,
  //     basePrice: 26018,
  //     discountedPrice: 19563,
  //     taxes: 5971,
  //     amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
  //     images: [image1, image2, image3, image4],
  //     features: ["Free Cancellation till 24 hrs before check in"],
  //     description:
  //       "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
  //     noCostEmi: true,
  //   },
  //   {
  //     name: "Lemon Tree Premier, Mumbai International Airport",
  //     location: "Near Mumbai Airport",
  //     distance: "3 minutes walk to Marol Naka Metro Station",
  //     rating: 4.2,
  //     ratingText: "Very Good",
  //     ratings: 21,
  //     sponsored: false,
  //     basePrice: 29559,
  //     discountedPrice: 11295,
  //     taxes: 5601,
  //     amenities: ["Spa", "Swimming Pool", "Gym"],
  //     images: [image11, image22, image33, image44],
  //     features: ["Free Cancellation"],
  //     description:
  //       "Conveniently located near Mumbai airport, easy access to metro and nearby ",
  //     noCostEmi: false,
  //   },
  //   {
  //     name: "The Lalit Mumbai",
  //     location: "Near Mumbai Airport",
  //     distance: "1.3 km  - Chhatrapati Shivaji International Airport",
  //     rating: 4.1,
  //     ratingText: "Very Good",
  //     ratings: 74,
  //     sponsored: false,
  //     basePrice: 26018,
  //     discountedPrice: 19563,
  //     taxes: 5971,
  //     amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
  //     images: [image1, image2, image3, image4],
  //     features: ["Free Cancellation till 24 hrs before check in"],
  //     description:
  //       "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
  //     noCostEmi: true,
  //   },
  // ];

  const [priceRange, setPriceRange] = useState(18219);
  const [amenities, setAmenities] = useState([]);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedId, setSelectedId] = useState(1);


  const packgesButton = [
    { id: 1, text: "Dubai", whiteImg: dubaiWhite, colorImg: dubaiColor },
    { id: 2, text: "Canada", whiteImg: canadaWhite, colorImg: canadaColor },
    { id: 3, text: "Paris", whiteImg: parisWhite, colorImg: parisColor },
    { id: 4, text: "Usa", whiteImg: usaWhite, colorImg: usaColor },
  ];

  const amenitiesList = [
    "Gym",
    "Swimming Pool",
    "Spa",
    "Restaurant",
    "24-hour Room Service",
    "Jacuzzi",
  ];

  const handleAmenityToggle = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <RoomHeader /> */}


      <div className=" flex flex-col font-Poppins md:w-[75%]  justify-between  mx-auto  2xl:w-[1390px]  pt-[160px] gap-[20px] px-[20px]">
        {/* <h1 className=" flex font-[500] font-Poppins text-[25px] ">
            Select a Country to Apply for Your<span className=" flex font-[600] pl-[10px] text-[#005f94]">
            Visa
            </span>
          </h1> */}
         <div className=" hidden md:flex   2xl:w-[1390px]  w-[100%] md:w-[75%] mx-auto relative items-center justify-between ">

          <div className=" w-[100%]  top-[66px]  absolute h-[1px] bg-[#d7d7d7]">

          </div>
          <div className="  z-[10] font-Poppins mx-auto mt-[43px] px-[13px] flex w-[390px] bg-white  gap-[10px] rounded-[26px] border-[1.5px] custom-sahdow overflow-hidden items-center justify-start h-[45px]" onClick={handleOpenModal}>
            <i className="fa-solid text-[#515151] fa-magnifying-glass"></i>
            <input
              className=" w-[100%] h-[100%]  text-[14px] outline-none"
              placeholder=" Serch Hotels"
              type="text"
            />
          </div>

          </div>

      </div>


      <div className=" px-[10px]">
        <BookingAlliance />
      </div>
      <div className="flex flex-col font-Poppins md:w-[75%] mb-[50px] justify-between  mx-auto  2xl:w-[1400px] min-h-screen">
        <div className="   gap-[20px] mt-[5px] justify-between w-[100%]  md:flex  mx-auto">
          <div className="w-[300px]  border-[1.1px] max-w-md mx-auto rounded-[10px] shadow-lg border-[#005f94] bg-white  h-fit overflow-hidden">
            <div className="p-5 hidden md:flex  flex-col ">
              <h1 className="text-2xl font-[500] mb-2">Filters</h1>

              {/* Price Range Section */}
              <div className="mb-3">
                <button
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <span className="text-[15px] font-[400]">Price Range</span>
                  <span
                    className="text-2xl transform transition-transform duration-200"
                  // style={{
                  //   transform: isPriceOpen
                  //     ? "rotate(0deg)"
                  //     : "rotate(-45deg)",
                  // }}
                  >
                    <i className={` text-[17px] fa-solid  ${isPriceOpen ? 'fa-minus' : ' fa-plus '}`}></i>
                  </span>
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

              {/* Amenities Section */}
              <div className="mb-4">
                <button
                  onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <span className="text-xl font-[500]">Amenities</span>
                  <span
                    className="text-2xl transform transition-transform duration-200"
                  // style={{
                  //   transform: isPriceOpen
                  //     ? "rotate(0deg)"
                  //     : "rotate(-45deg)",
                  // }}
                  >
                    <i className={` text-[17px] fa-solid  ${isAmenitiesOpen ? 'fa-minus' : ' fa-plus '}`}></i>
                  </span>
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
                            checked={amenities.includes(amenity)}
                            onChange={() => handleAmenityToggle(amenity)}
                            className="hidden"
                          />
                          <div
                            className={`
                      w-4 h-4 border-1 rounded transition-colors duration-200
                      ${amenities.includes(amenity)
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-300 group-hover:border-blue-500"
                              }
                    `}
                          >
                            {amenities.includes(amenity) && (
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
              <div>
                <button
                  onClick={() => setIsRatingOpen(!isRatingOpen)}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <span className="text-xl font-[500]">Rating</span>
                  <span
                    className="text-2xl transform transition-transform duration-200"
                  // style={{
                  //   transform: isPriceOpen
                  //     ? "rotate(0deg)"
                  //     : "rotate(-45deg)",
                  // }}
                  >
                    <i className={` text-[17px] fa-solid  ${isRatingOpen ? 'fa-minus' : ' fa-plus '}`}></i>
                  </span>
                </button>

                {isRatingOpen && (
                  <div className="space-y-3">
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
          </div>
          <div className="w-[90%] md:w-fit mx-auto  md:h-[89vh] 2xl:h-[100%] md:mt-0 mt-[40px]  overflow-y-auto space-y-6">
            {hotels.slice(0, 5).map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>


        </div>
      </div>

      <Footer />
      <NextUIModal
        className=" bg-transparent  !max-w-[500px]  font-Poppins shadow-none"
        isOpen={isModalOpen}
        onOpenChange={handleCloseModal}
      >
        <ModalContent className="w-[100%] ">
          <ModalBody className=" w-[100%] ">

          <HotelPopup
              onClose={() => setIsModalOpen(false)}
              hotels={hotels}
              setHotels={setHotels}
            />

          </ModalBody>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
