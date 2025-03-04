
// import React, { useState, useEffect, useRef } from "react";

// // import service5 from "../../../public/newsevices/service5.webp";


// import irani1 from '../../../public/testimonials/img3.jpeg'


// import boy1 from '../../../public/testimonials/boy1.jpg'
// import girl1 from '../../../public/testimonials/girl1.jpeg'
// import boy2 from '../../../public/testimonials/boy2.jpg'
// import girl2 from '../../../public/testimonials/girl2.jpg'
// import girl3 from '../../../public/testimonials/girl3.jpg'
// import boy3 from '../../../public/testimonials/boy3.jpg'

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// export default function Testimonials() {

//     const sliderRef = useRef(null);
//     const testimonialSliderSettings = {
//         arrows: true,
//         dots: false,
//         autoplay: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 1000,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };
//     const currentTestimonials = [
//         {
//             id: 1,
//             name: "Rahul",
//             rating: 4.5,
//             review: "Rotex Fans provide excellent quality and outstanding service. Highly recommended!",
//             image: boy1,
//         },
//         {
//             id: 2,
//             name: "Ananya",
//             rating: 4.8,
//             review: "Rotex Fans exceeded my expectations with their superior products and support.",
//             image: girl1,
//         },
//         {
//             id: 3,
//             name: "Arjun",
//             rating: 4.7,
//             review: "Very happy with Rotex Fans' prompt and friendly service. Will definitely return!",
//             image: boy2,
//         },
//         {
//             id: 4,
//             name: "Priya",
//             rating: 4.9,
//             review: "Outstanding experience with Rotex Fans! The team was extremely helpful.",
//             image: girl2,
//         },
//         {
//             id: 5,
//             name: "Rohit",
//             rating: 4.9,
//             review: "Rotex Fans offer top-quality products and excellent support throughout the process.",
//             image: boy3,
//         },
//         {
//             id: 6,
//             name: "Meera",
//             rating: 4.8,
//             review: "A seamless experience with Rotex Fans. Excellent service and premium quality fans!",
//             image: girl3,
//         },
//         {
//             id: 7,
//             name: "Karan",
//             rating: 4.8,
//             review: "Exceptional service from Rotex Fans! Truly exceeded my expectations.",
//             image: irani1,
//         }
//     ];





//     return (
//         <div className="w-[75%] flex flex-col py-[40px] gap-[30px]  mx-auto">
//             <div className="w-[100%] flex flex-col gap-[20px]">


//                 <div className="flex w-[100%] gap-[25px] overflow-hidden px-[10px] md:pb-[0px] mt-[20px] justify-center relative">

//                     <Slider       {...testimonialSliderSettings}
//                 ref={sliderRef}  className=" flex  gap-[10px] h-fit w-[100%]">


//                         {currentTestimonials.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className={`w-[100%] md:w-[400px]  p-[20px] flex-shrink-0 gap-[20px] rounded-[13px] flex flex-col h-[190px] border-[1px] border-[#005c95]  shadow-xl bg-[#fff] 
//                                 }`}
//                             >
//                                 <div className="flex gap-[15px] items-center">
//                                     <img
//                                         className="w-[50px] rounded-[50%]  object-cover h-[50px]"
//                                         src={testimonial.image}
//                                         alt={testimonial.name}
//                                     />
//                                     <div className="flex flex-col">
//                                         <p className="text-[16px] font-Poppins font-[600]">
//                                             {testimonial.name}
//                                         </p>
//                                         <div className="w-[100%] items-center flex gap-[5px]">
//                                             <i className="fa-sharp text-[#005c95] fa-solid fa-star"></i>
//                                             <p className="text-[13px] text-[#6a6a6a]  font-Poppins font-[500]">
//                                                 {testimonial.rating}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="text-[14px] text-[#646464] font-Montserrat font-[400]">
//                                     <p className=" font-Poppins ">{testimonial.review}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>


//             </div>


//         </div>
//     );
// }



// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import irani1 from '../../../public/testimonials/img3.jpeg';
// import boy1 from '../../../public/testimonials/boy1.jpg';
// import girl1 from '../../../public/testimonials/girl1.jpeg';
// import boy2 from '../../../public/testimonials/boy2.jpg';
// import girl2 from '../../../public/testimonials/girl2.jpg';
// import girl3 from '../../../public/testimonials/girl3.jpg';
// import boy3 from '../../../public/testimonials/boy3.jpg';

// export default function     Testimonials() {
//     const sliderRef = useRef(null);
    
//     const testimonialSliderSettings = {
//         arrows: true,
//         dots: false,
//         autoplay: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 1000,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     const currentTestimonials = [
//         { id: 1, name: "Rahul", rating: 4.5, review: "Cuckoo Travel offers amazing destinations and exceptional service!", image: boy1 },
//         { id: 2, name: "Ananya", rating: 4.8, review: "A seamless and adventurous experience with Cuckoo Travel. Highly recommended!", image: girl1 },
//         { id: 3, name: "Arjun", rating: 4.7, review: "Loved my trip planned by Cuckoo Travel! Everything was perfectly arranged.", image: boy2 },
//         { id: 4, name: "Priya", rating: 4.9, review: "Cuckoo Travel ensures hassle-free trips with top-notch guidance!", image: girl2 },
//         { id: 5, name: "Rohit", rating: 4.9, review: "Best travel agency experience ever! Thanks to Cuckoo Travel.", image: boy3 },
//         { id: 6, name: "Meera", rating: 4.8, review: "Wonderful vacation experiences curated by Cuckoo Travel. Loved it!", image: girl3 },
//         { id: 7, name: "Karan", rating: 4.8, review: "An unforgettable adventure, thanks to Cuckoo Travel!", image: irani1 },
//     ];

//     return (
//         <div className="w-[76%] flex flex-col py-[40px] gap-[30px] mx-auto">
//             <div className="w-[100%] flex flex-col gap-[20px]">
//                 <div className="flex w-[100%] gap-[25px] overflow-hidden px-[10px] md:pb-[0px] mt-[20px] justify-center relative">
//                     <Slider {...testimonialSliderSettings} ref={sliderRef} className="flex space-x-2 !gap-[10px] h-fit w-[100%]">
//                         {currentTestimonials.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className="w-[100%] md:w-[350px] p-[20px]  flex-shrink-0 gap-[20px] rounded-[13px] flex flex-col h-[190px] border-[1px] border-[#005c95] shadow-xl bg-[#fff]"
//                             >
//                                 <div className="flex gap-[15px] items-center">
//                                     <img className="w-[50px] rounded-[50%] object-cover h-[50px]" src={testimonial.image} alt={testimonial.name} />
//                                     <div className="flex flex-col">
//                                         <p className="text-[16px] font-Poppins font-[600]">{testimonial.name}</p>
//                                         <div className="w-[100%] items-center flex gap-[5px]">
//                                             <i className="fa-sharp text-[#005c95] fa-solid fa-star"></i>
//                                             <p className="text-[13px] text-[#6a6a6a] font-Poppins font-[500]">{testimonial.rating}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="text-[14px] text-[#646464] font-Montserrat font-[400]">
//                                     <p className="font-Poppins">{testimonial.review}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import test1 from '../../../public/testimonials/img3.jpeg';
import test2 from '../../../public/testimonials/boy1.jpg';
import test3 from '../../../public/testimonials/girl1.jpeg';
import test4 from '../../../public/testimonials/boy2.jpg';
import { ApiGet } from '../../helper/axios';

export default function Testimonials() {
    const controls = useAnimation();

    const [testimonials, setTestimonials] = useState([]);


    useEffect(() => {
      const fetchTestimonials = async () => {
        try { 
          const response = await ApiGet("/admin/testimonials");
          console.log('response', response)
          setTestimonials(response.testimonial);
        } catch (error) {
          console.error("Error fetching visa packages:", error);
        }
      };
  
      fetchTestimonials();
    }, []);

    // const testimonials = [
    //     {
    //         text: "Cuckoo Travels planned the most memorable trip to Bali for us! Everything was seamless and stress-free.",
    //         author: "Aarav Sharma",
    //         role: "Frequent Traveler",
    //         rating: 5,
    //         company: "Cuckoo Travels",
    //         image: test1,
    //     },
    //     {
    //         text: "An amazing experience exploring Europe with Cuckoo Travels! Their attention to detail was incredible.",
    //         author: "Sanya Mehta",
    //         role: "Globetrotter",
    //         rating: 5,
    //         company: "Cuckoo Travels",
    //         image: test2,
    //     },
    //     {
    //         text: "Cuckoo Travels made our honeymoon in the Maldives absolutely magical. Highly recommended!",
    //         author: "Priya",
    //         role: "Honeymooners",
    //         rating: 5,
    //         company: "Cuckoo Travels",
    //         image: test3,
    //     },
    //     {
    //         text: "Smooth bookings, great itinerary, and excellent support throughout our journey to Switzerland!",
    //         author: "Karan Verma",
    //         role: "Adventure Seeker",
    //         rating: 5,
    //         company: "Cuckoo Travels",
    //         image: test4,
    //     }
    // ];

    const slideAnimation = async () => {
        await controls.start({
            x: [0, -100 * testimonials.length],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: testimonials.length * 2
                }
            }
        });
    };

    useEffect(() => {
        slideAnimation();
    }, []);

    return (
        <div className="px-4 sm:px-6 font-Poppins lg:px-8">
            <div className="md:w-[77%] w-[95%] 2xl:w-[1360px] mx-auto">
                <div className="relative pt-[20px] overflow-hidden" style={{ width: '100%', height: '350px' }}>
                    <motion.div
                        animate={controls}
                        className="flex gap-6 absolute"
                        style={{ width: `${testimonials.length * 200}%` }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className='relative'> 
                                <div className="absolute z-[50] right-0 top-[-16px]">
                                    <Quote className="w-8 h-8 bg-white text-[#005c95] transform rotate-180" />
                                </div>

                                <motion.div
                                    className="relative bg-white border-[#005c95] border-[1px] h-[220px] py-4 px-6 rounded-br-2xl rounded-tl-2xl shadow-xl w-[340px] flex-shrink-0"
                                >
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 mb-4 font-Manrope text-sm leading-relaxed line-clamp-3">
                                        "{testimonial.description}"
                                    </p>

                                    <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.nmae}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-violet-100"
                                        />
                                        <div>
                                            <p className="font-semibold font-Manrope text-gray-900">{testimonial.name}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
