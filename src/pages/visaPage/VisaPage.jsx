import React from "react";
import Header from "../../Component/header/Header";
import VisaHeroSection from "../../Component/visaAllCom/VisaHeroSection";
import TaskBar from "../../Component/visaAllCom/TaskBar";
import ListingVisa from "../../Component/visaAllCom/ListingVisa";
import VisaHeader from "../../Component/header/visaHeader/VisaHeader";

export default function VisaPage() {
  return (
    <>
      <VisaHeader />

      <div className=" 2xl:w-[1300px] !bg-[#]    flex flex-col  h-[100%] mx-auto">
        <VisaHeroSection />
        {/* <TaskBar /> */}
        <ListingVisa />
      </div>
    </>
  );
}
