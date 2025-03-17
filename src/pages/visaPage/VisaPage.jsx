import React, { useEffect, useRef, useState } from "react";
import Header from "../../Component/header/Header";
import VisaHeroSection from "../../Component/visaAllCom/VisaHeroSection";
import TaskBar from "../../Component/visaAllCom/TaskBar";
import ListingVisa from "../../Component/visaAllCom/ListingVisa";
import VisaAcces from "../../Component/HomePage/VisaAcces";
import Footer from "../../Component/footer/Footer";
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
import { ApiGet } from "../../helper/axios";
import VisaPopup from "../../Component/serchPopup/VisaPopup";


export default function VisaPage() {
  const footerRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await ApiGet("/admin/visa-enquiries"); 
        const inquiries = response.inquiry;

        const uniqueCountries = [];
        const countrySet = new Set();

        inquiries.forEach((inquiry) => {
          if (!countrySet.has(inquiry.country._id)) {
            countrySet.add(inquiry.country._id);
            uniqueCountries.push(inquiry.country);
          }
        });

        setCountries(uniqueCountries);

        if (uniqueCountries.length > 0) {
          setSelectedCountry(uniqueCountries[0]._id);
        }
      } catch (error) {
        console.error("Error fetching visa inquiries:", error);
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

    <div className=" hidden md:flex relative    2xl:w-[1390px]  w-[100%] md:w-[75%] mx-auto relative items-center justify-between pt-[160px]">
      <div className=" w-[100%]  top-[180px]  absolute h-[1px] bg-[#d7d7d7]">

      </div>
      <div className="  z-[10] font-Poppins mx-auto  px-[13px] flex w-[390px] bg-white  gap-[10px] rounded-[26px] border-[1.5px] custom-sahdow overflow-hidden items-center justify-start h-[45px]" onClick={handleOpenModal}>
        <i className="fa-solid text-[#515151] fa-magnifying-glass"></i>
        <input
          className=" w-[100%] h-[100%]  text-[14px] outline-none"
          placeholder=" Serch Country"
          type="text"
          readOnly
        />
      </div>


</div>
      <div className=" 2xl:w-[1370px] !bg-[#]  md:pt-[160px] pt-[170px]   w-[100%]   flex flex-col  h-[100%] mx-auto">
        <div className=" flex  flex-col gap-[20px] px-[20px]">
          {/* <h1 className=" flex font-[500] font-Poppins text-[25px] ">
            Select a Country to Apply for Your<span className=" flex font-[600] pl-[10px] text-[#005f94]">
            Visa
            </span>
          </h1> */}
          <div className=" flex  font-Poppins pb-[40px] mx-auto overflow-x-auto 2xl:w-[1400px]  md:w-[78%] gap-[18px]" >
            {countries?.map((country) => (
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

      <NextUIModal
        className=" bg-transparent  !max-w-[500px]  font-Poppins shadow-none"
        isOpen={isModalOpen}
        onOpenChange={handleCloseModal}
      >
        <ModalContent className="w-[100%] ">
          <ModalBody className=" w-[100%] ">

          <VisaPopup onClose={handleCloseModal} />


          </ModalBody>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
