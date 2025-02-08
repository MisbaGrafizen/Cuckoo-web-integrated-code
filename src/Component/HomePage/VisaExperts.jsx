import React, { useRef } from "react";
import image1 from "../../../public/experts/image1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VisaExperts() {
  const sliderRef = useRef(null);
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
      <div className="flex font-Poppins mx-auto pb-[30px] mt-[20px] w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[60px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex font-[600]  mx-auto text-[25px]">
              Popular Visa Assistance Destinations
            </h1>
          </div>
          <div className="flex flex-col  w-[100%] gap-[15px] ">
            <div className=" flex  justify-between w-[100%] gap-6">
              <Slider
                className=" !flex  justify-between !gap-[40px] w-full"
                {...testimonialSliderSettings}
                ref={sliderRef} 
              >
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image1}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Raj Bhatt
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Senior Visa Officer
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        2 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image1}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Raj Bhatt
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Senior Visa Officer
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        2 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image1}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Raj Bhatt
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Senior Visa Officer
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        2 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image1}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Raj Bhatt
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Senior Visa Officer
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        2 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" !flex gap-[15px] !mr-[10px] ">
                  <img
                    className=" flex w-[80px] object-cover h-[80px] rounded-full "
                    src={image1}
                  />
                  <div className=" !flex gap-[6px] flex-col">
                    <h1 className=" flex  text-[19px] font-[600] ">
                      Raj Bhatt
                    </h1>
                    <div>
                      <p className=" flex text-[14px] text-[#141414]">
                        Senior Visa Officer
                      </p>
                      <p className=" flex  text-[#939393] text-[12px] ">
                        2 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
              {/* <div className=" flex gap-[15px] ">
                <img
                  className=" flex w-[80px] object-cover h-[80px] rounded-full "
                  src={image1}
                />
                <div className=" flex gap-[6px] flex-col">
                  <h1 className=" flex  text-[19px] font-[600] ">Raj Bhatt</h1>
                  <div>
                    <p className=" flex text-[14px] text-[#141414]">
                      Senior Visa Officer
                    </p>
                    <p className=" flex  text-[#939393] text-[12px] ">
                      2 Years of Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex gap-[15px] ">
                <img
                  className=" flex w-[80px] object-cover h-[80px] rounded-full "
                  src={image1}
                />
                <div className=" flex gap-[6px] flex-col">
                  <h1 className=" flex  text-[19px] font-[600] ">Raj Bhatt</h1>
                  <div>
                    <p className=" flex text-[14px] text-[#141414]">
                      Senior Visa Officer
                    </p>
                    <p className=" flex  text-[#939393] text-[12px] ">
                      2 Years of Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex gap-[15px] ">
                <img
                  className=" flex w-[80px] object-cover h-[80px] rounded-full "
                  src={image1}
                />
                <div className=" flex gap-[6px] flex-col">
                  <h1 className=" flex  text-[19px] font-[600] ">Raj Bhatt</h1>
                  <div>
                    <p className=" flex text-[14px] text-[#141414]">
                      Senior Visa Officer
                    </p>
                    <p className=" flex  text-[#939393] text-[12px] ">
                      2 Years of Experience
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className=" flex gap-[20px] mb-[50px]  mx-auto md:mt-[30px]">
              <button className=" flex w-[50px]  justify-center items-center h-[50px] custom-shadow2 rounded-full"  onClick={() => sliderRef.current.slickPrev()} >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button className=" flex w-[50px]  justify-center items-center h-[50px] custom-shadow2 rounded-full"       onClick={() => sliderRef.current.slickNext()}>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
