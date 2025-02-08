import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home ";
import Loader from "./Component/loader/Loader";
import ScrollToTop from "./Component/Scrooltop";
import VisaPage from "./pages/visaPage/VisaPage";
import HoliDaysPackges from "./pages/holiDayPackges/HoliDaysPackges";
import AdminPage from "./pages/AdminPages/AdminPage";
import RoomListing from "./pages/roomListingpage/RoomListing";
import RoomCreate from "./pages/AdminPages/RoomCreate";





function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

        <Routes>
          <Route path="/" element={loading ? <Loader /> : <Home />} /> 
          <Route path="/visa" element={loading ? <Loader /> : <VisaPage />} /> 
          <Route path="/holiday-packges" element={loading ? <Loader /> : <HoliDaysPackges />} /> 
          <Route path="/admin" element={loading ? <Loader /> : <AdminPage />} /> 
          <Route path="/rooms" element={loading ? <Loader /> : <RoomListing />} /> 
          <Route path="/rooms-create" element={loading ? <Loader /> : <RoomCreate />} /> 

        </Routes>
      </div>
    </>
  );
}

export default App;
