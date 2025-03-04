import React, { useEffect, useRef, useState } from "react";
import image1 from "../../../public/testimonials/boy1.jpg";
import image2 from "../../../public/testimonials/girl2.jpg";
import image3 from  "../../../public/testimonials/boy3.jpg";
import image4 from "../../../public/testimonials/girl3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiGet } from "../../helper/axios";

export default function VisaExperts() {
  const sliderRef = useRef(null);

  const [visaExperts, setVisaExperts] = useState([]);


  useEffect(() => {
    const fetchVisaPackages = async () => {
      try { 
        const response = await ApiGet("/admin/visa-experts");
        console.log('response', response)
        setVisaExperts(response.expert);
      } catch (error) {
        console.error("Error fetching visa packages:", error);
      }
    };

    fetchVisaPackages();
  }, []);

  const testimonialSliderSettings = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex font-Poppins mx-auto   2xl:w-[1370px]  mt-[20px] mb-[50px] w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[60px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex font-[600]  mx-auto text-[25px]">
              Talk to Our Visa Experts
            </h1>
          </div>
          <div className="flex flex-col  w-[100%] gap-[15px] ">
            <div className=" flex  justify-between w-[100%] gap-6">
              <Slider
                className=" !flex  justify-between !gap-[40px] w-full"
                {...testimonialSliderSettings}
                ref={sliderRef} 
              >
              {visaExperts?.map((item, index) => (                
                <div key={index} className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={item?.image}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      {item?.name}
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        {item?.role}
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </div>
                               
              ))}
                {/* <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image2}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Priya Kapoor
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Visa Process Specialist
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        3 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image3}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Rohan Mehta
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Immigration Advisor
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        6 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image4}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Neha Verma
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Visa Documentation Expert
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        4 Years of Experience
                      </p>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
