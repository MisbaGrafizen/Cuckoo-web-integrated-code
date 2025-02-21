import React from "react";
import Header from "../../Component/header/Header";
import VisaHeroSection from "../../Component/visaAllCom/VisaHeroSection";
import TaskBar from "../../Component/visaAllCom/TaskBar";
import ListingVisa from "../../Component/visaAllCom/ListingVisa";
import VisaAcces from "../../Component/HomePage/VisaAcces";
import Footer from "../../Component/footer/Footer";


export default function VisaPage() {
  return (
    <>


      <div className=" 2xl:w-[1300px] !bg-[#]    flex flex-col  h-[100%] mx-auto">
        <VisaHeroSection />
        {/* <TaskBar /> */}
        <ListingVisa />
        <VisaAcces />

        <Footer/> 
      </div>
    </>
  );
}
