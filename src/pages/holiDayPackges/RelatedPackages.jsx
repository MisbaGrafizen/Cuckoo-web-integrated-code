import React, { useState } from 'react'
import Footer from '../../Component/footer/Footer';
import image1 from "../../../public/staffhand/image1.webp";
import image2 from "../../../public/staffhand/image2.webp";
import image3 from "../../../public/staffhand/image3.webp";
import Inquariy from '../../Component/modal/Inquariy';
import { motion } from 'framer-motion';
import TourInquiry from '../../Component/modal/TourInquiry';
import customi from "../../../public/holidaypack/equalizer.png"
import { useNavigate } from 'react-router-dom';

export default function RelatedPackages() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const domesticPackages = [
        { id: 1, image: image1, name: "Kashmir", price: "9,999" },
        { id: 2, image: image2, name: "Manali", price: "8,999" },
        { id: 3, image: image3, name: "Goa", price: "7,999" },
        { id: 4, image: image2, name: "Manali", price: "₹8999" },
        { id: 5, image: image3, name: "Goa", price: "7,999" },
    ];
    const packgesButton = [
        { id: 1, text: "Distinctive world travel" },
        { id: 2, text: "The Landmark Tour" },
        { id: 3, text: "Opulent Itineraries" },
    ]
    const [isModalTourOpen, setIsModalTourOpen] = useState(false);

    const [selectedPackage, setSelectedPackage] = useState(domesticPackages[0]);
const navigate = useNavigate();

const handle=()=>{
    navigate("/holiday-packages")
}
    return (
        <>

            <div className=" 2xl:w-[1370px]  font-Poppins !bg-[#] w-[90%] md:w-[75%]  pt-[160px] md:pb-[] pb-[40px] flex flex-col gap-[20px] h-[100%] mx-auto">








                <div className="flex flex-col relative gap-[0px]">
                    <h1 className="flex md:flex-row flex-col font-[700]  gap-[5px] text-[30px] md:text-[35px]">

                        Related  Packages
                    </h1>
                    <div className=" absolute left-[-10px] top-[35px]">

                        {/* 
                        <div className="relative max-w-[100px]  w-full md:max-w-[130px]">
                            <svg
                                viewBox="0 0 300 80"
                                className="w-full"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <filter
                                        id="sketch"
                                        x="-10%"
                                        y="-10%"
                                        width="120%"
                                        height="120%"
                                    >
                                        <feTurbulence
                                            type="fractalNoise"
                                            baseFrequency="0.02"
                                            numOctaves="4"
                                            seed="5"
                                            result="noise"
                                        />
                                        <feDisplacementMap
                                            in="SourceGraphic"
                                            in2="noise"
                                            scale="2"
                                            xChannelSelector="R"
                                            yChannelSelector="G"
                                        />
                                    </filter>
                                    <linearGradient
                                        id="yellowVariation"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop offset="0%" stopColor="#FCD34D" />
                                        <stop offset="50%" stopColor="#F59E0B" />
                                        <stop offset="100%" stopColor="#FCD34D" />
                                    </linearGradient>
                                </defs>

                              
                                <g style={{ filter: "url(#sketch)" }}>
                                   
                                    <path
                                        d="M10,30 Q80,25 150,30 T290,30 
               M15,35 Q85,30 155,35 T285,35"
                                        stroke="#FCD34D"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

        
                                    <path
                                        d="M12,32 Q82,27 152,32 T292,32
               M17,37 Q87,32 157,37 T287,37"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

        
                                    <path
                                        d="M30,31 l5,-2 l10,4 l-5,-4
               M160,33 l8,-3 l6,3 l-4,-3
               M250,32 l6,-2 l8,4 l-7,-4"
                                        stroke="#FBBF24"
                                        strokeWidth="1"
                                        fill="none"
                                    />

                               
                                    {[...Array(8)].map((_, i) => (
                                        <path
                                            key={i}
                                            d={`M${20 + i * 40},${30 + (i % 2) * 2} l${5 + (i % 3)
                                                },${-2 + (i % 2)}`}
                                            stroke="#F59E0B"
                                            strokeWidth="1"
                                            fill="none"
                                            opacity="0.6"
                                        />
                                    ))}
                                </g>
                            </svg>
                        </div> */}
                    </div>
                </div>

                <div className=' flex w-[100%] overflow-x-auto'>


                    <div className=' flex   overflow-x-auto  min-w-max  w-full gap-[10px]'>
                        {packgesButton.map((btn) => (
                            <button
                                key={btn.id}
                                className={`w-fit h-fit py-[10px] px-[12px] rounded-tl-[11px] rounded-br-[11px] text-[15px] flex ${selectedPackage.id === btn.id ? 'bg-[#005f94] border border-[#005f94] text-white' : 'border border-[#005f94] bg-white text-[#005f94]'}`}
                                onClick={() => setSelectedPackage(domesticPackages[btn.id - 1])}>
                                {btn.text}
                            </button>
                        ))}
                    </div>
                </div>
                <div className=' flex flex-col gap-[40px]'>

                    <div className="flex w-[100%] justify-start  overflow-x-auto gap-[20px]  ">
                        {domesticPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="flex flex-col justify-center items-center relative shrink-0 md:w-[255px] sm:w-[300px] w-[300px] md:h-[400px] max-h-[480px] bg-white rounded-[8px] shadow-md overflow-hidden cursor-pointer" 
                            >
                                <img
                                onClick={handle}
                                    className="object-cover shadow-md md:w-[340px] w-[600px] h-[480px] rounded-[10px]"
                                    src={pkg.image}
                                    alt={pkg.name}
                                />
                                <div className=" absolute   w-[93%]  bottom-0  mx-auto   ">
                                    <div className=" flex flex-col md:text-[13px] text-[#fff] text-[15px] px-[4px] gap-[px]" onClick={handle}>
                                        <p>5 days & 4 nights</p>
                                        <p className="  text-[13px]  md:text-[10px]  text-jus flex">
                                            Dubai Highlights | Skyline and Sandscapes
                                        </p>
                                    </div>
                                    <div className="flex h-[140px] md:h-[115px]  shadow-md flex-col px-[15px] py-[10px] bgStaff  ] rounded-t-[10px]">

                                        <p className=" flex font-[500] md:text-[12px] text-[14px] text-[#fff]">
                                            5D Dubai
                                        </p>


                                        {/* <span className="w-[180px] h-[2px] bg-[#c2c2c2]"></span> */}
                                        <div className=' w-[180px] my-[3px] h-[1.2px] bg-[#d7d6d6]'>

                                        </div>
                                        <div className="flex flex-col justify-between w-[100%] md:mt-[0px] mt-[10px]">
                                            <div className="flex items-center gap-[6px]">
                                                <h1 className="flex font-[500] md:text-[14px] text-[20px] text-[#fff] ">
                                                    INR {pkg.price}
                                                </h1>
                                            </div>
                                            <button className=" flex w-[100%] justify-center text-[14px] items-center  font-[500] md:mt-[10px] mt-[5px] rounded-[6px] py-[8px] bg-[#fff] " onClick={() => setIsModalOpen(true)}>
                                                Inquiry Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="flex w-[100%] justify-start overflow-x-auto gap-[20px]  ">
                        {domesticPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="flex flex-col justify-center items-center relative shrink-0 md:w-[255px] sm:w-[300px] w-[300px] md:h-[400px] max-h-[480px] bg-white rounded-[8px] shadow-md overflow-hidden cursor-pointer"
                            >
                                <img
                                    className="object-cover shadow-md md:w-[340px] w-[600px] h-[480px] rounded-[10px]"  onClick={handle}
                                    src={pkg.image}
                                    alt={pkg.name}
                                />
                                <div className=" absolute   w-[93%]  bottom-0  mx-auto   ">
                                    <div className=" flex flex-col md:text-[13px] text-[#fff] text-[15px] px-[4px] gap-[px]"  onClick={handle}>
                                        <p>5 days & 4 nights</p>
                                        <p className="  text-[13px]  md:text-[10px]  text-jus flex">
                                            Dubai Highlights | Skyline and Sandscapes
                                        </p>
                                    </div>
                                    <div className="flex h-[140px] md:h-[115px]  shadow-md flex-col px-[15px] py-[10px] bgStaff  ] rounded-t-[10px]">

                                        <p className=" flex font-[500] md:text-[12px] text-[14px] text-[#fff]"  onClick={handle}>
                                            5D Dubai
                                        </p>


                                        {/* <span className="w-[180px] h-[2px] bg-[#c2c2c2]"></span> */}
                                        <div className=' w-[180px] my-[3px] h-[1.2px] bg-[#d7d6d6]'>

                                        </div>
                                        <div className="flex flex-col justify-between w-[100%] md:mt-[0px] mt-[10px]">
                                            <div className="flex items-center gap-[6px]">
                                                <h1 className="flex font-[500] md:text-[14px] text-[20px] text-[#fff] ">
                                                    INR {pkg.price}
                                                </h1>
                                            </div>
                                            <button className=" flex w-[100%] justify-center text-[14px] items-center  font-[500] md:mt-[10px] mt-[5px] rounded-[6px] py-[8px] bg-[#fff] " onClick={() => setIsModalOpen(true)}>
                                                Inquiry Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





            </div>

            <Footer />





            <a
                onClick={() => setIsModalTourOpen(true)}
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.div
                    initial={{ width: '50px', borderRadius: '9999px' }} // Added borderRadius here
                    whileHover={{
                        width: '260px',
                        borderRadius: '9999px',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-9 right-9 flex z-[7000] items-center rounded-xl gap-3 bg-[#005c95] cursor-pointer shadow-lg hover:shadow-xl overflow-hidden"
                >
                    <div className="flex-shrink-0 w-[50px] h-[50px] rounded-xl flex items-center justify-center">
                        {/* <img className=' w-[22px]' src={customi} /> */}
                        <i class="fa-regular   text-[23px] text-[#fff] fa-comment-pen"></i>
                    </div>
                    <motion.p
                        initial={{ opacity: 1, x: -10 }}
                        whileHover={{ opacity: 1, x: -10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-white font-Poppins font-medium whitespace-nowrap pr-4 text-[16px] font-Roboto"
                    >
                        CustoMize Your Package
                    </motion.p>
                </motion.div>
            </a>
            {isModalOpen && <Inquariy isOpen={isModalOpen} closeAndResetModal={() => setIsModalOpen(false)} />}
            {isModalTourOpen && <TourInquiry isOpen={isModalTourOpen} closeAndResetModal={() => setIsModalTourOpen(false)} />}

        </>
    )
}
