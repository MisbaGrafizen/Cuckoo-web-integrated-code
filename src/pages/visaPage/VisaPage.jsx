import React, { useEffect, useRef, useState } from "react";
import Header from "../../Component/header/Header";
import VisaHeroSection from "../../Component/visaAllCom/VisaHeroSection";
import TaskBar from "../../Component/visaAllCom/TaskBar";
import ListingVisa from "../../Component/visaAllCom/ListingVisa";
import VisaAcces from "../../Component/HomePage/VisaAcces";
import Footer from "../../Component/footer/Footer";

import dubaiWhite from "../../../public/visaCountry/Dubai-white.png";
import dubaiColor from "../../../public/visaCountry/Dubai-color.png"; // Add color images
import canadaWhite from "../../../public/visaCountry/Canada-white.png";
import canadaColor from "../../../public/visaCountry/Canada-color.png";
import parisWhite from "../../../public/visaCountry/Paris-white.png";
import parisColor from "../../../public/visaCountry/Paris-color.png";
import usaWhite from "../../../public/visaCountry/usa-white.png";
import usaColor from "../../../public/visaCountry/usa-color.png";
import { ApiGet } from "../../helper/axios";

export default function VisaPage() {
  const footerRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch all countries
    const fetchCountries = async () => {
      try {
        const response = await ApiGet("/admin/countries");
        setCountries(response.country);
        // Set the first country as default
        if (response.country.length > 0) {
          setSelectedCountry(response.country[0]._id);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const [selectedId, setSelectedId] = useState(1);


  const packgesButton = [
    { id: 1, text: "Dubai", whiteImg: dubaiWhite, colorImg: dubaiColor },
    { id: 2, text: "Canada", whiteImg: canadaWhite, colorImg: canadaColor },
    { id: 3, text: "Paris", whiteImg: parisWhite, colorImg: parisColor },
    { id: 4, text: "Usa", whiteImg: usaWhite, colorImg: usaColor },
  ];
  return (
    <>


      <div className=" 2xl:w-[1370px] !bg-[#]  md:pt-[160px] pt-[170px]   w-[100%]   flex flex-col  h-[100%] mx-auto">
        <div className=" flex  flex-col gap-[20px] px-[20px]">
          {/* <h1 className=" flex font-[500] font-Poppins text-[25px] ">
            Select a Country to Apply for Your<span className=" flex font-[600] pl-[10px] text-[#005f94]">
            Visa
            </span>
          </h1> */}
          <div className=" flex  font-Poppins pb-[40px] overflow-x-auto  w-[100%] gap-[18px]" >
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country._id)}
                className={`w-fit h-fit py-[10px] px-[12px] gap-[8px] flex items-center text-[18px] flex-shrink-0 rounded-tl-[11px] rounded-br-[11px] ${selectedCountry === country._id
                  ? "bg-[#005f94] text-[#fff]"
                  : "border border-[#005f94] text-[#005f94] bg-transparent"
                  }`}
              >
                {/* <img
                  className="w-[25px] h-[25px]"
                  src={selectedCountry === country.id ? country.whiteImg : country.colorImg}
                  alt={country.countryName}
                /> */}
                {country.countryName}
              </button>
            ))}
          </div>


        </div>
        <VisaHeroSection />
        {/* <TaskBar /> */}
        <ListingVisa countryId={selectedCountry} />



      </div>
      <Footer />
    </>
  );
}
