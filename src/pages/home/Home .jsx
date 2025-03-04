import React, { useState } from "react";
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
import Blog from "../../Component/HomePage/Blog";
import Footer from "../../Component/footer/Footer";
import Testimonials from "../../Component/HomePage/Testimonials";
import { motion } from 'framer-motion';
import Inquariy from "../../Component/modal/Inquariy";
import BookingAlliance from "../../Component/HomePage/BookingAillence";
import Memories from "../../Component/HomePage/Memories";
import PopularHotels from "../../Component/HomePage/PopularHotels";
import TourInquiry from "../../Component/modal/TourInquiry";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <div className=" w-[100%]">
        <div className="  !bg-[#]   pt-[60px]  flex flex-col gap-[40px] h-[100%] mx-auto">
          {/* <DiscoverWorld /> */}
          <ExploreHolidays />
          <HandPicked />
          <BookingAlliance />

          <PopularHotels />
    
          <Faq />
          <QuickVisa />
          {/* <VisaAcces /> */}
          <VisaExperts />
          <Blog />
          <Memories />
          <Testimonials />
        </div>
      </div>

      <Footer />




{/* 
      <a
        onClick={() => setIsModalOpen(true)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial={{ width: '50px', borderRadius: '9999px' }} // Added borderRadius here
          whileHover={{
            width: '170px',
            borderRadius: '9999px',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed md:bottom-9 right-9  bottom-[80px]  flex z-[50] items-center rounded-xl gap-3 bg-[#005c95] cursor-pointer shadow-lg hover:shadow-xl overflow-hidden"
        >
          <div className="flex-shrink-0 w-[50px] h-[50px] rounded-xl flex items-center justify-center">
            <i className="fa-regular text-[#fff] text-[22px] fa-comment-question"></i>
          </div>
          <motion.p
            initial={{ opacity: 1, x: -10 }}
            whileHover={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-white font-Poppins font-medium whitespace-nowrap pr-4 text-[17px] font-Roboto"
          >
            Inquiry Now
          </motion.p>
        </motion.div>
      </a> */}




      <a
        onClick={() => setIsModalOpen(true)}
        target="_blank"
        rel="noopener noreferrer"
      >
     
        <div  className="fixed md:bottom-[70px] right-9  text-white font-Poppins font-medium whitespace-nowrap  text-[17px] bottom-[80px]  h-[45px]  w-[170px] justify-center flex z-[50] items-center rounded-[100px] gap-3 bg-[#005c95] cursor-pointer shadow-lg hover:shadow-xl overflow-hidden"
        >
            Inquiry Now
       
       </div>
      </a>

      {isModalOpen && <TourInquiry isOpen={isModalOpen} closeAndResetModal={() => setIsModalOpen(false)} />}

    </>
  );
}
