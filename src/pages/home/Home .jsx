import React from "react";
import Header from "../../Component/header/Header";
import HeroSection from "../../Component/HomePage/HeroSection";
import DiscoverWorld from "../../Component/HomePage/DiscoverWorld";
import HandPicked from "../../Component/HomePage/HandPicked";
import ExploreHolidays from "../../Component/HomePage/ExploreHolidays";
import Faq from "../../Component/HomePage/faqs/Faq";
import QuickVisa from "../../Component/HomePage/QuickVisa";
import VisaAcces from "../../Component/HomePage/VisaAcces";
import VisaExperts from "../../Component/HomePage/VisaExperts";
import Bottom from "../../Component/Bottom/Bottom";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className=" w-[100%]">
        <div className=" 2xl:w-[1400px] !bg-[#]    flex flex-col gap-[40px] h-[100%] mx-auto">
          <DiscoverWorld />
          <HandPicked />
          <ExploreHolidays />
          <Faq />
          <QuickVisa />
          <VisaAcces />
          <VisaExperts />
        </div>
      </div>
      <Bottom />
    </>
  );
}
