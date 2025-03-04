import React from "react";
import { Shield } from "lucide-react";

export default function AlertBanner() {
  return (
    <>
      <div className=" md:w-[90%] mx-auto  w-[100%]  mb-[40px] p-4">
        <div className="bg-[#fff] shadow-sm rounded-[20px]  border border-gray-100 p-[20px]">
          <div className="flex items-center w-[100%] gap-[8%]">
            <div className="flex items-center  relative gap-6">
              <div
                className="bg-gradient-to-br z-[10] w-[50px]  justify-center items-center h-[50px] pl-[11px] pt-[13px] from-[#FFB800] to-[#FF8A00] p-3  rounded-[50px]"
                style={{ boxShadow: "0px 2px 4px rgba(255, 138, 0, 0.1)" }}
              >
             <i className=" text-[#fff] text-[25px] fa-regular fa-shield-check"></i>
              </div>

              <div flex className="  absolute text-left gap-[5px] leadeing-[20px]  pt-[6px] justify-start  h-[38px] left-[16px] font-[600] font-Poppins text-[#fff]  pl-[45px] px-[20px] items-  flex flex-col rounded-[20px] text-[14px]  bg-[#ff1a1a] w-[105px]">
                <p className=" leading-3 ">Fraud</p>
                <p className=" leading-3">Alert</p>
              </div>
            </div>
            {/* Title */}
            <h2 className="md:text-[26px]  md:flex hidden font-[600]  text-gray-900 font-Poppins">
              Beware of Fraudulent Activities
            </h2>
          </div>

          {/* Message */}
          <p className="text-[15px] text-gray-600 w-[] font-Poppins mt-[10px] max-w-[800px]">
            Always check that you are on the correct website{" "}
            <span className="text-[#F85A2A]">www.basaltparadise.com</span>{" "}
            before entering any personal or payment information. Avoid clicking
            on suspicious links or entering information on sites that seem
            unfamiliar.
          </p>

          {/* Read More Button */}
          <div className="flex md:justify-end mt-[10px] md:mt-[-32px]">
            <button className="bg-[#F85A2A] font-Poppins text-white px-5 py-2 rounded-lg text-[15px] font-medium hover:bg-[#F85A2A]/90 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
