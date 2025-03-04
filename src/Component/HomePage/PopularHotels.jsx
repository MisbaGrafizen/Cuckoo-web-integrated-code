import React from 'react'

import hotel1 from '../../../public/hotelsPopular/hotel1.jpg'
import hotel2 from '../../../public/hotelsPopular/hotel2.avif'
import { useNavigate, useNavigation } from 'react-router-dom'

const hotels = [
    {
        id: 1,
        name: "Burj Al Arab Jumeirah",
        location: "Jumeirah Beach Road, Dubai",
        rating: 4.9,
        reviews: "1.6K",
        pricePerNight: 2450,
        currency: "USD",
        image: hotel1,
        amenities: ["Free WiFi", "Pool", "Spa",],
        description: "Luxury hotel with iconic sail-shaped silhouette",
    },
    {
        id: 2,
        name: "Atlantis The Royal",
        location: "Palm Jumeirah, Dubai",
        rating: 5.0,
        reviews: "1.2K",
        pricePerNight: 1890,
        currency: "USD",
        image: hotel2,
        amenities: ["Free WiFi", "Ocean View", "Gym"],
        description: "Ultra-luxury resort with stunning ocean views",
    },
    {
        id: 3,
        name: "Burj Al Arab Jumeirah",
        location: "Jumeirah Beach Road, Dubai",
        rating: 4.9,
        reviews: "1.6K",
        pricePerNight: 2450,
        currency: "USD",
        image: hotel1,
        amenities: ["Free WiFi", "Pool", "Spa",],
        description: "Luxury hotel with iconic sail-shaped silhouette",
    },
    {
        id: 4,
        name: "Atlantis The Royal",
        location: "Palm Jumeirah, Dubai",
        rating: 5.0,
        reviews: "1.2K",
        pricePerNight: 1890,
        currency: "USD",
        image: hotel2,
        amenities: ["Free WiFi", "Ocean View", "Gym"],
        description: "Ultra-luxury resort with stunning ocean views",
    },
]


export default function PopularHotels() {
    const navigate = useNavigate()



    const handleview = () => {
        navigate("/hotels")
    }
    return (
        <>
            <div className="md:w-[75%] flex-col font-Poppins  relative gap-[30px] w-[90%] flex mx-auto   2xl:w-[1370px]">




                <h1 className="flex font-[700] gap-[10px] w-fit  relative  text-[35px]">
                    popular
                    <span className="pr-[10px] flex text-[#005f94]"> Hotel's </span>
                    <div className=" absolute  right-[0px]    top-[35px]">
                        <div className="relative  max-w-[100px] w-full md:max-w-[140px]">
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

                                {/* Main sketchy lines */}
                                <g style={{ filter: "url(#sketch)" }}>
                                    {/* First sketch layer */}
                                    <path
                                        d="M10,30 Q80,25 150,30 T290,30 
               M15,35 Q85,30 155,35 T285,35"
                                        stroke="#FCD34D"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {/* Second sketch layer with slight offset */}
                                    <path
                                        d="M12,32 Q82,27 152,32 T292,32
               M17,37 Q87,32 157,37 T287,37"
                                        stroke="#F59E0B"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {/* Quick sketch details */}
                                    <path
                                        d="M30,31 l5,-2 l10,4 l-5,-4
               M160,33 l8,-3 l6,3 l-4,-3
               M250,32 l6,-2 l8,4 l-7,-4"
                                        stroke="#FBBF24"
                                        strokeWidth="1"
                                        fill="none"
                                    />

                                    {/* Additional sketchy details */}
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
                        </div>
                    </div>

                </h1>


                <div className="w-full flex flex-col md:gap-[0px] md:mb-[30px]">

                    <div className="flex w-full gap-[30px] md:mt-[0px] flex-col justify-between">

                        <div className=" w-[100%] flex flex-row gap-[12px] pl-[10px]   pb-[30px] 2xl:gap-[29px] overflow-x-auto   ">

                            {hotels.map((hotel) => (
                                <div
                                    key={hotel.id}
                                    className="bg-white md:w-[280px] w-[300px] 2xl:w-[300px] rounded-2xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-[240px]">
                                        <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover h-[100%]" />
                                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        {/* Rating */}
                                        <div className="flex items-center gap-2 mb-[6px]">
                                            <div className="flex items-center gap-1">
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>

                                                {/* <span className="font-semibold">{hotel.rating}</span> */}
                                                {/* <span className="text-gray-500">({hotel.reviews})</span> */}
                                            </div>
                                        </div>

                                        {/* Hotel Name */}
                                        <h2 className="text-xl font-semibold mb-[6px] line-clamp-1">{hotel.name}</h2>

                                        {/* Location */}
                                        <div className="flex items-center gap-1 text-gray-500 mb-3">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span className="text-sm">{hotel.location}</span>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {hotel.amenities.map((amenity, index) => (
                                                <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{hotel.description}</p>

                                        {/* Price and Book */}
                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <div>
                                                <span className="text-2xl font-bold">₹{hotel.pricePerNight}</span>
                                                <span className="text-gray-500 text-sm">/night</span>
                                            </div>
                                            <button className="   bg-[#005f94] rounded-br-[15px] rounded-tl-[15px] text-white px-4 py-2  text-sm font-[500] transition-colors duration-200">
                                                Inquiry Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <button className=" ml-[10px] flex w-[140px] gap-[15px] text-[#fff]  group font-Poppins rounded-md  py-[9px] px-[25px] items-center justify-center bg-[#005f94]" onClick={handleview}>
                        View All <i class="fa-solid fa-arrow-right rotate-[330deg]"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

