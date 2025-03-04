import React, { useState } from 'react'
import PassportHero from '../../Component/passport/PassportHero'
import ListingPassport from '../../Component/passport/ListingPassport'
import Footer from '../../Component/footer/Footer'
import dubaiWhite from "../../../public/visaCountry/Dubai-white.png";
import dubaiColor from "../../../public/visaCountry/Dubai-color.png"; // Add color images
import canadaWhite from "../../../public/visaCountry/Canada-white.png";
import canadaColor from "../../../public/visaCountry/Canada-color.png";
import parisWhite from "../../../public/visaCountry/Paris-white.png";
import parisColor from "../../../public/visaCountry/Paris-color.png";
import usaWhite from "../../../public/visaCountry/usa-white.png";
import usaColor from "../../../public/visaCountry/usa-color.png";

export default function Passport() {

    const [selectedId, setSelectedId] = useState(1);


    const packgesButton = [
        { id: 1, text: "Dubai", whiteImg: dubaiWhite, colorImg: dubaiColor },
        { id: 2, text: "Canada", whiteImg: canadaWhite, colorImg: canadaColor },
        { id: 3, text: "Paris", whiteImg: parisWhite, colorImg: parisColor },
        { id: 4, text: "Usa", whiteImg: usaWhite, colorImg: usaColor },
    ];
    return (
        <>


            <div className=" w-[100%] !bg-[#]  pt-[160px]   flex flex-col  h-[100%] mx-auto">
                <div className=" 2xl:w-[1370px] !bg-[#]      w-[100%]    h-[100%] mx-auto flex  flex-col gap-[20px] px-[20px]">
                    {/* <h1 className=" flex font-[500] font-Poppins text-[25px] ">
            Select a Country to Apply for Your<span className=" flex font-[600] pl-[10px] text-[#005f94]">
            Visa
            </span>
          </h1> */}
                    <div className=" flex  font-Poppins pb-[40px] overflow-x-auto  w-[100%] gap-[18px]" >
                        {packgesButton.map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setSelectedId(btn.id)}
                                className={`w-fit h-fit py-[10px] px-[12px] gap-[8px] flex items-center text-[18px] flex-shrink-0 rounded-tl-[11px] rounded-br-[11px] ${selectedId === btn.id
                                    ? "bg-[#005f94] text-[#fff]"
                                    : "border border-[#005f94] text-[#005f94] bg-transparent"
                                    }`}
                            >
                                <img
                                    className="w-[25px] h-[25px]"
                                    src={selectedId === btn.id ? btn.whiteImg : btn.colorImg}
                                    alt={btn.text}
                                />
                                {btn.text}
                            </button>
                        ))}
                    </div>


                </div>
                <PassportHero />
                <ListingPassport />
            </div>

            {/* <Footer /> */}
        </>
    )
}
