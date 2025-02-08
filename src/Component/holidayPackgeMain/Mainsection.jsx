import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import { Car, Building2, Coffee, Map } from "lucide-react";
import mainimage from "../../../public/holidaypack/main.avif";
import other1 from "../../../public/holidaypack/other1.avif";
import other2 from "../../../public/holidaypack/other2.avif";
import Itinerary from "./ItineraryButtonSection/Itinerary";
import InclustutionEx from "./inclustutionEx";
import KnowYou from "./KnowYou";
import Reviews from "./Reviews";
import Policyce from "./Policy/Policyce";
import { Star, ChevronDown } from "lucide-react";

export default function Mainsection() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travellerCount: "",
    message: "",
  });

  return (
    <>
      <div className="md:w-[78%] mx-auto font-Poppins">
        <div className=" mx-auto p-4 w-[100%]">
          <div className=" flex w-[100%]  rounded-[10px]  overflow-hidden justify-between  gap-[10px]">
            {/* Main Image */}
            <div className="md:col-span-2 relative  overflow-hidden h-[400px] md:h-[490px]">
              <img
                src={mainimage}
                alt="Dubai Cityscape"
                fill
                className="object-cover w-[590px] h-[100%]"
                priority
              />
            </div>

            {/* Side Gallery */}
            <div className="grid grid-cols-2  md:grid-cols-1 gap-[10px] h-full">
              <div className=" flex  w-[100%] gap-[10px]">
                <div className="relative   w-[100%]  overflow-hidden ">
                <img
                    src={other2}
                    alt="Activity & Sightseeing"
                    fill
                    className="object-cover  w-[240px] h-[240px]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute  text-[14px] bottom-3 left-3 text-white font-medium">
                    Destination
                  </span>
                </div>
                <div className="relative   w-[100%]  overflow-hidden ">
                <img
                    src={other2}
                    alt="Activity & Sightseeing"
                    fill
                    className="object-cover  w-[240px] h-[240px]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute  text-[14px] bottom-3 left-3 text-white font-medium">
                    Stay
                  </span>
                </div>
              </div>
              <div className=" flex  w-[100%] gap-[10px]">
                <div className="relative   w-[100%]  overflow-hidden ">
                  <img
                    src={other2}
                    alt="Activity & Sightseeing"
                    fill
                    className="object-cover  w-[240px] h-[240px]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute  text-[14px] bottom-3 left-3 text-white font-medium">
                    Activity & Sightseeing
                  </span>
                </div>
                <div className="relative   w-[100%]  overflow-hidden ">
                  <img
                    src={other2}
                    alt="Activity & Sightseeing"
                    fill
                    className="object-cover w-[240px] h-[240px]"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute  text-[14px] bottom-3 left-3 text-white font-medium">
                    Activity & Sightseeing
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-[100%] justify-between ">
            {/* Package Details */}
            <div className="mt-[30px]  w-[60%] gap-8">
              <div>
                <h1 className="text-2xl md:text-[29px] w-[100%] font-[600] mb-4">
                  Classic Dubai | Sky-High Treasures & Desert Adventures
                </h1>

                <div className="flex items-center gap-2 mt-[20px] ">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    5D/4N
                  </span>
                  <span className=" flex items-center leading-[13px]  text-[12px] text-gray-600">
                    <p className=" flex font-Poppins  text-[#bbbaba] font-[600] mr-[5px] text-[30px]">
                      5
                    </p>
                    Days in  Dubai
                  </span>
                </div>
                <span className=" flex w-[100%] m bg-[#cdcdcd] my-[20px] h-[0.8px] "></span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Transfer Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Stay Included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Breakfast Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Map className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      Sightseeing Included
                    </span>
                  </div>
                </div>
              </div>
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
              <div className="">
                <h2 className="text-[20px] font-[400] mb-4">
                  Trip Highlights
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start  justify-start gap-3">
                    <span className=" text-[#4f4e4e]   text-[15px] leading-[21px]">
                      From the old city of Dubai to the spots highlighting
                      modern innovation, spend a memorable vacation exploring
                      Dubai's rich cultural and dynamic heritage.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px] ">
                      Step aboard the Dhow Cruise Marina for an unforgettable
                      evening and enjoy a delicious dinner, live music, and
                      unparalleled views of Dubai's skyline.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]  text-[15px] leading-[21px] ">
                      Visit Dubai Dolphinarium, the first indoor air-conditioned
                      dolphinarium in the Middle East and see interactive
                      performances by dolphins and seals.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px]">
                      Admire 360-degree views of Dubai's skyline along with the
                      beautiful Arabian Gulf as you elevate to the 124th and
                      125th floors of Burj Khalifa.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-8px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px]">
                      Explore the unique world of AYA Universe and enjoy an
                      amazing blend of technology and art installations,
                      offering a wonderful experience.
                    </span>
                  </li>
                </ul>
              </div>
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>

              <Itinerary />
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
            </div>
            <div className=" w-[37%] mt-[30px]">
              <div className=" w-[100%]  mx-auto space-y-6">
                {/* Price Card */}
                <div className="bg-white rounded-xl relative border p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h2 className="text-xl font-bold">INR 28,500</h2>
                        <span className="text-gray-500 text-[11px]">Per Adult</span>
                      </div>
                      <div className="text-gray-500 line-through">
                        INR 54,720
                      </div>
                    </div>
                    <div className="flex items-center absolute top-[12px] gap-[3px]  right-[10px] ">
                      <Star className="w-5 h-5 mt-[-4px] fill-green-500 text-green-500" />
                      <span className="text-green-500  text-[15px] mr-4px]">4.7</span>
                      <span className="text-gray-400 text-[14px]">(56.1K)</span>
                    </div>
                  </div>
                  <div className=" flex w-[100%] h-[1px] mb-[13px] bg-[#dddada]">

                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-[5px] text-[14px] transition-colors">
                    Send Enquiry
                  </button>
                </div>

                {/* Enquiry Form */}
                <div className="bg-white border rounded-xl p-6 mt-[60px] shadow-sm">
                  <h3 className="text-[15px]  text-[#4f4e4e] font-[400] ">
                    Classic Dubai | Sky-High Treasures & Desert...
                  </h3>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[16px] font-bold">INR 28,500</span>
                    <span className="text-gray-500 line-through text-[12px]">
                      INR 54,720
                    </span>
                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded">
                      SAVE INR 26,220
                    </span>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email*"
                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="relative w-24">
                        <select className="w-full appearance-none px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white">
                          <option>+91</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Your Phone*"
                        className="flex-1 px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="date"
                        placeholder="Travel Date*"
                        className="px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Traveller Count*"
                        className="px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message..."

                        className="w-full px-4 py-3 rounded-[5px] text-[14px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-[5px] text-[14px] transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InclustutionEx />
        <KnowYou />
        <Reviews />
        <Policyce />
      </div>
    </>
  );
}
