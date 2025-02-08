import React, { useState } from "react";
import dubai from "../../../../public/Header/dubai.png";
import singapore from "../../../../public/Header/singapore.png";
import thaiLand from "../../../../public/Header/thailand.jpg";
import logo from "../../../../public/Header/logo.png";
import flag from "../../../../public/Header/flag.png";

export default function VisaHeader() {
      const [activeButton, setActiveButton] = useState("Tours");
  return (
  <>

     <div className=" flex w-[100%]  z-[100] bg-white font-Poppins  fixed  ">
            <div className=" flex  w-[100%]   gap-[20px] pt-[20px]  !text-[#515151] flex-col  ">
              <div className=" flex   h-fit  w-[100%]">
                <div className=" flex md:w-[75%] 2xl:w-[1360px] z-[10]  items-center h-[25px] mx-auto">
                  <div className=" flex w-[100%]  relative items-center justify-between ">
                    <div className="relative">
                      <img
                        className="flex w-[130px] z-10 relative"
                        src={logo}
                        alt="Logo"
                      />
                      {/* <span className="absolute top-1/2 right-[-20px] w-[50px] h-[2px] bg-[#515151] animate-cross-fade"></span> */}
                    </div>
                    <div className="  mt-[13px] px-[13px] flex w-[250px] bg-white  gap-[10px] rounded-[26px] border-[1.5px] custom-sahdow overflow-hidden items-center justify-start h-[39px]">
                      <i className="fa-solid text-[#515151] fa-magnifying-glass"></i>
                      <input
                        className=" w-[100%] h-[100%]  text-[14px] outline-none"
                        placeholder="  Search your destination"
                        type="text"
                      />
                    </div>
                    <div className=" flex gap-[10px]  mt-[13px] bg-white ">
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
              <div className=" w-[100%]  border-b-[1.5px]  py-[px] flex ms-center">
                <div className=" flex w-[75%]  2xl:w-[1360px]  items-center justify-between  gap-[10px] mx-auto">
                  <div className=" flex w-[79%] 2xl:w-[85.5%]   overflow-x-auto  gap-[40px] items-center justify-start flex-shrink-0">
                    <div className="flex flex-col gap-[5px] text-[#005f94] border-b-[2px] border-[#005f94]  pb-[4px] text-center w-fit flex-shrink-0">
                      <i className="fa-regular  text-[20px] text-[#005f94]    fa-fire-flame-curved"></i>
                      <h2 className=" text-[12px] font-[500]">Explore</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[4px]  items-center  text-center w-fit">
                      <img className=" w-[22px] h-[25px]" src={dubai} />
                      <h2 className=" text-[12px] font-[500]">Dubai</h2>
                    </div>
                    <div className="flex flex-col gap-[5px] pb-[px] items-center justify-center   text-center w-fit">
                      <img className=" w-[20px] h-[20px]" src={singapore} />
                      <h2 className=" text-[12px] items-center font-[500]">
                        Singapore
                      </h2>
                    </div>
                  </div>
                  {/* <div className="w-fit flex gap-[10px] justify-center items-center h-fit p-[3.5px] border-[1px]  border-[#cbcbcb] rounded-[7px] my-[10px] text-[#000]">
                    <button
                      className={`flex w-[85px] text-[14px] rounded-[6px]  p-[9px] text-center justify-center items-center ${
                        activeButton === "Tours"
                          ? "bg-[#005f94] text-[#fff]"
                          : "bg-[#ffffff] text-[#000]"
                      }`}
                      onClick={() => setActiveButton("Tours")}
                    >
                      Tours
                    </button>
                    <button
                      className={`flex w-[85px] text-[14px] rounded-[6px] p-[9px] text-center justify-center items-center ${
                        activeButton === "Activities"
                          ? "bg-[#005f94] text-[#fff]"
                          : "bg-[#ffffff] text-[#000]"
                      }`}
                      onClick={() => setActiveButton("Activities")}
                    >
                      Activities
                    </button>
                  </div> */}
                  <div className="relative w-fit flex gap-[10px] justify-center items-center h-fit p-[3.5px] border-[1px] border-[#cbcbcb] rounded-[7px] my-[10px] text-[#000] bg-[#ffffff]">
              
                    <div
                      className={`absolute top-0 left-0 h-[40px] mt-[2.8px] w-[85px] rounded-[6px] bg-[#005f94] transition-transform duration-300 ease-in-out`}
                      style={{
                        transform:
                          activeButton === "Tours"
                            ? "translateX(3px)"
                            : "translateX(98px)",
                      }}
                    ></div>
    
    
                    <button
                      className={`relative z-10 flex w-[85px] text-[14px] rounded-[6px] p-[9px] text-center justify-center items-center ${
                        activeButton === "Tours" ? "text-[#fff]" : "text-[#000]"
                      }`}
                      onClick={() => setActiveButton("Tours")}
                    >
             Passport
                    </button>
    
      
                    <button
                      className={`relative z-10 flex w-[85px] text-[14px] rounded-[6px] p-[9px] text-center justify-center items-center ${
                        activeButton === "Activities"
                          ? "text-[#fff]"
                          : "text-[#000]"
                      }`}
                      onClick={() => setActiveButton("Activities")}
                    >
                      Visa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </>
  )
}
