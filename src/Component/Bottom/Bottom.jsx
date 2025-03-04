import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Bottom() {
    const navigate = useNavigate();
    const location = useLocation(); // Get current path

    // Function to check if a tab is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex-col fixed bottom-0 bg-white z-50 md:hidden flex w-[100%]">
            <div className="relative flex w-[100%] h-[50px] justify-between px-[20px] border-t items-center border-b border-[#c0c0c0]">

                {/* Home */}
                <div
                    className={`flex font-Montserrat px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
                        ${isActive("/") ? "text-[#005f94] font-bold" : "text-[#808080]"}`}
                    onClick={() => navigate("/")}
                >
                    <i className="fa-solid fa-house text-[17px]"></i>
                    <p className="text-[10px] font-[600]">Home</p>
                    {isActive("/") && <span className="absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]"></span>}
                </div>

                {/* Visa */}
                <div
                    className={`flex font-Montserrat px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
                        ${isActive("/visa") ? "text-[#005f94] font-bold" : "text-[#808080]"}`}
                    onClick={() => navigate("/visa")}
                >
                    <i className="fa-brands fa-cc-visa text-[17px]"></i>
                    <p className="text-[10px] font-[600]">Visa</p>
                    {isActive("/visa") && <span className="absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]"></span>}
                </div>

                {/* Passport */}
                <div
                    className={`flex font-Montserrat px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
                        ${isActive("/passport") ? "text-[#005f94] font-bold" : "text-[#808080]"}`}
                    onClick={() => navigate("/passport")}
                >
                    <i className="fa-regular fa-passport text-[17px]"></i>
                    <p className="text-[10px] font-[600]">Passport</p>
                    {isActive("/passport") && <span className="absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]"></span>}
                </div>

                {/* Support */}
                <div
                    className={`flex font-Montserrat px-[10px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
                        ${isActive("/hotels") ? "text-[#005f94] font-bold" : "text-[#808080]"}`}
                    onClick={() => navigate("/hotels")}
                >
                    <i class="fa-sharp fa-solid fa-hotel text-[17px]"></i>
                    <p className="text-[10px] font-[600]">Hotels</p>
                    {isActive("/hotels") && <span className="absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]"></span>}
                </div>

                {/* Profile */}
                <div
                    className={`flex font-Montserrat px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] 
                        ${isActive("/profile") ? "text-[#005f94] font-bold" : "text-[#808080]"}`}
                    onClick={() => navigate("/contact-us")}
                >
                <i class="fa-solid fa-user-headset text-[17px]"></i>
                    <p className="text-[10px] font-[600]">Contact us</p>
                    {isActive("/contact-us") && <span className="absolute flex w-[30px] bottom-[5px] h-[2px] bg-[#005f94]"></span>}
                </div>
            </div>

            {/* Inquiry Section */}
            <div className="w-[100%] justify-center text-white text-[11px] flex mx-auto items-center gap-[10px] font-Poppins bg-[#005f94] py-[3px]">
                <i className="fa-light text-[14px] fa-phone-volume"></i>
                <p>Inquiry now</p>
            </div>
        </div>
    );
}
