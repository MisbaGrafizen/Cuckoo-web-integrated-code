import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home ";
import Loader from "./Component/loader/Loader";
import ScrollToTop from "./Component/Scrooltop";
import VisaPage from "./pages/visaPage/VisaPage";
import HoliDaysPackges from "./pages/holiDayPackges/HoliDaysPackges";

import RoomListing from "./pages/roomListingpage/RoomListing";

import Country from "./pages/country/Country";
import Passport from "./pages/passport/Passport";
import Header from "./Component/header/Header";
import ContactUs from "./pages/contactUs/ContactUs";
import AllHolidayPackage from "./pages/holiDayPackges/AllHolidayPackage";
import AboutUs from "./pages/aboutUs/AboutUs";
import BlogDetails from "./pages/blogdetail/BlogDetails";
import Bottom from "./Component/Bottom/Bottom";
import RelatedPackages from "./pages/holiDayPackges/RelatedPackages";
import TourInquiry from "./Component/modal/TourInquiry";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal automatically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
    <Header />
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

        <Routes>
          <Route path="/" element={loading ? <Loader /> : <Home />} /> 
          <Route path="/visa" element={loading ? <Loader /> : <VisaPage />} /> 
          <Route path="/holiday-packages/:packageName" element={loading ? <Loader /> : <HoliDaysPackges />} /> 
          <Route path="/related-packages" element={loading ? <Loader /> : <RelatedPackages />} /> 
          <Route path="/hotels" element={loading ? <Loader /> : <RoomListing />} /> 

          <Route path="/country" element={loading ? <Loader /> : <Country />} /> 
          <Route path="/passport" element={loading ? <Loader /> : <Passport />} /> 
          <Route path="/contact-us" element={loading ? <Loader /> : <ContactUs />} /> 
          <Route path="/about-us" element={loading ? <Loader /> : <AboutUs />} /> 
          <Route path="/blog-details" element={loading ? <Loader /> : <BlogDetails />} /> 
          <Route path="/all-holiday-packages" element={loading ? <Loader /> : <AllHolidayPackage />} /> 
        </Routes>
      </div>

      <Bottom />
      {isModalOpen && <TourInquiry isOpen={isModalOpen} closeAndResetModal={() => setIsModalOpen(false)} />}
    </>
  );
}

export default App;
