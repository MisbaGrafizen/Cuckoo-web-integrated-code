import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dumbbell,
    UtensilsCrossed,
    Clock,
    Bath,
    ChevronRight,
} from "lucide-react";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
// Import Images
import image1 from "../../../public/hero/1.jpg";
import image2 from "../../../public/hero/2.jpg";
import image3 from "../../../public/hero/3.jpg";
import image4 from "../../../public/hero/4.jpg";
import image11 from "../../../public/Gallery/img1.jpg";
import image22 from "../../../public/Gallery/img2.jpg";
import image33 from "../../../public/Gallery/img3.jpg";
import image44 from "../../../public/Gallery/img4.jpg";

export default function RoomCreate() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImageBoxVisible, setIsImageBoxVisible] = useState(false);
    const fileInputRef = React.useRef(null);
    const [modalOpen, setModalOpen] = useState(false);

    const hotels = [
        {
            name: "Moxy Mumbai Andheri West By Marriott",
            location: "Andheri West",
            distance: "1.8 km drive to Kokilaben Dhirubhai Ambani Hospital",
            rating: 4.7,
            ratingText: "Excellent",
            ratings: 29,
            sponsored: true,
            originalPrice: null,
            discountedPrice: 19777,
            taxes: 3560,
            amenities: ["Gym", "Restaurant", "24-hour Room Service"],
            images: [image1, image2, image3, image4],
            features: ["Free Cancellation", "Breakfast Included"],
            noCostEmi: false,
        },
        {
            name: "The Lalit Mumbai",
            location: "Near Mumbai Airport",
            distance: "1.3 km - Chhatrapati Shivaji International Airport",
            rating: 4.1,
            ratingText: "Very Good",
            ratings: 8074,
            sponsored: false,
            originalPrice: 26018,
            discountedPrice: 19563,
            taxes: 5971,
            amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
            images: [image1, image2, image3, image4],
            features: ["Free Cancellation till 24 hrs before check-in"],
            noCostEmi: true,
        },
        {
            name: "Lemon Tree Premier, Mumbai International Airport",
            location: "Near Mumbai Airport",
            distance: "3 minutes walk to Marol Naka Metro Station",
            rating: 4.2,
            ratingText: "Very Good",
            ratings: 21,
            sponsored: false,
            originalPrice: 29559,
            discountedPrice: 11295,
            taxes: 5601,
            amenities: ["Spa", "Swimming Pool", "Gym"],
            images: [image11, image22, image33, image44],
            features: ["Free Cancellation"],
            noCostEmi: false,
        },
    ];

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };


    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    return (




        <>

            <div className=" w-[75%] flex mt-[60px]  mx-auto flex-col gap-[10px] ">
                <div className=" flex justify-end ">
                    <button className=" font-Poppins  bg-[#005f94] gap-[10px] justify-center  text-white  items-center  px-[10px] flex  py-[8px] rounded-[7px] w-[150px]" onClick={handleModalOpen} >
                        <i className="fa-solid fa-plus"></i>
                        Create Room
                    </button>
                </div>

                <div className="bg-white w-[100%]  m-[10px] rounded-lg] overflow-hidden">
                    {hotels.map((hotel, hotelIndex) => (
                        <div key={hotelIndex} className="flex flex-col md:flex-row w-[100%] my-[10px] rounded-[10px] border">
                            {/* Left Section - Image Gallery */}
                            <div className="relative h-[243px] md:w-[275px]">
                                <div className="relative h-[220px] p-[10px]">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={hotel.images[currentImageIndex]}
                                            alt={`${hotel.name} view ${currentImageIndex + 1}`}
                                            className="w-[400px] h-[162px] rounded-[4px] object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </AnimatePresence>
                                </div>

                                {/* Image Thumbnails */}
                                <div className="absolute bottom-3 left-[9px] flex gap-[5px]">
                                    {hotel.images.slice(0, 3).map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-[60px] h-[55px] rounded overflow-hidden ${currentImageIndex === index ? "border-2 border-white" : "border border-transparent"
                                                }`}
                                        >
                                            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                    <button className="w-[60px] h-[55px] bg-black/50 text-white rounded flex items-center justify-center text-xs">
                                        View All
                                    </button>
                                </div>
                            </div>

                            {/* Right Section - Hotel Details */}
                            <div className="flex-1 py-[8px] font-Poppins w-[40%] pr-[30px] pl-[10px]">
                                <h2 className="text-[20px] font-[600] text-gray-900">{hotel.name}</h2>
                                <div className="mt-1">
                                    <span className="text-[#1f569e] text-[14px]">{hotel.location}</span>
                                    <span className="text-[#4a4a4a] text-[13px]"> | {hotel.distance}</span>
                                </div>

                                {/* Amenities */}
                                <div className="flex gap-3 flex-wrap mt-2">
                                    {hotel.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center text-[#4a4a4a]">
                                            {amenity === "Gym" && <Dumbbell className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            {amenity === "Restaurant" && <UtensilsCrossed className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            {amenity === "24-hour Room Service" && <Clock className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            <span className="text-[12px]">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex-1 py-[8px] font-Poppins max-w-[220px] border-l pr-[20px]">
                                <div className="text-right flex flex-col gap-[5px]">
                                    <div className="text-[#0066b2] text-[13px] font-bold">{hotel.ratingText}</div>
                                    <div className="text-[#005f94] text-[28px] font-bold">{hotel.rating}</div>
                                    <div className="text-[#4a4a4a] text-[12px]">({hotel.ratings} Ratings)</div>
                                </div>
                                <div className="flex justify-end mt-[20px]">
                                    <span className="text-[22px] font-[600] text-black">₹{hotel.discountedPrice.toLocaleString()}</span>
                                </div>
                                <div className="text-sm text-[#4a4a4a]">+ ₹{hotel.taxes.toLocaleString()} taxes & fees</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            <NextUIModal isOpen={modalOpen} onClose={handleModalClose}>
                <ModalContent className=" shadow-none z-[100]   flex  flex-col  !bg-transparent  max-w-[1000px]  h-[400px]">
                    <div className="relative w-[100%] max-w-[960px] bg-[#ffffff]  mt-[10px] backdrop-blur-[19.5px] border-[2px] border-[rgba(255,255,255,0.18)]  rounded-2xl z-[100] flex justify-center !py-0 mx-auto h-[460px]">

                        <div className=" w-[99%] p-[30px]">

                            <div className="flex flex-col md:flex-row border-[#000] w-[100%] my-[10px] rounded-[10px] border">

                                <div className="relative border-[#000]   flex flex-col gap-[9px] p-[10px]">

                                    <div

                                        className="w-[230px] h-[162px] rounded-[4px] justify-center items-center flex border-[#000] border-1 object-cover">
                                        <i class="fa-solid text-[30px] fa-plus"></i>
                                    </div>


                                    <div className=" flex  gap-[10px]">
                                        <div className=" flex w-[50px] h-[50px] items-center justify-center border-[#000] border rounded-[6px] ">
                                            <i class="fa-solid text-[15px] fa-plus"></i>
                                        </div>
                                        <div className=" flex w-[50px] h-[50px] items-center justify-center border-[#000] border rounded-[6px] ">
                                            <i class="fa-solid text-[15px] fa-plus"></i>
                                        </div>
                                        <div className=" flex w-[50px] h-[50px] items-center justify-center border-[#000] border rounded-[6px] ">
                                            <i class="fa-solid text-[15px] fa-plus"></i>
                                        </div>
                                        <div className=" flex w-[50px] h-[50px] items-center justify-center border-[#000] border rounded-[6px] ">
                                            <i class="fa-solid text-[15px] fa-plus"></i>
                                        </div>


                                    </div>
                                </div>


                                <div className=" flex  flex-col gap-[10px] py-[10px]">
                                    <div className=" flex w-[300px] border-[#000] h-[40px]  border  font-Poppins rounded-[6px] px-[8px]">
                                        <input placeholder=" name" className=" flex w-[100%] h-[100%] outline-none" type="text" />

                                    </div>


                                    <div className=" flex gap-[10px]">
                                        <div className=" flex w-[500px] border-[#000] h-[40px]  border  font-Poppins rounded-[6px] px-[8px]">
                                            <input placeholder=" location" className=" flex w-[100%] h-[100%] outline-none" type="text" />

                                        </div>
                                    </div>
                                    <div className="grid font-Poppins  grid-cols-3 gap-4">
                                        <label className="flex  cursor-pointer items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="hasGym"

                                                className="w-4 h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <Dumbbell className="h-4 w-4" />
                                                Gym
                                            </div>
                                        </label>

                                        <label className="flex cursor-pointer items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="hasRestaurant"

                                                className="w-4 h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <UtensilsCrossed className="h-4 w-4" />
                                                Restaurant
                                            </div>
                                        </label>

                                        <label className="flex cursor-pointer items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="has24HourService"

                                                className="w-4 h-4"
                                            />
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                24-hour Service
                                            </div>
                                        </label>
                                    </div>
                                    <div className="grid font-Poppins mt-[10px] grid-cols-2 gap-4">
                                        <div className=" font-Poppins">
                                            <label className="block text-sm font-medium mb-2">Base Price (₹)</label>
                                            <input
                                                type="text"
                                                name="basePrice"


                                                placeholder="19777"
                                                className="w-full outline-none px-3 py-2 border-[#000] border rounded-md"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Taxes & Fees (₹)</label>
                                            <input
                                                type="text"
                                                name="taxesAndFees"

                                                placeholder="3560"
                                                className="w-full px-3  outline-none py-2 border border-[#000] rounded-md"
                                            />
                                        </div>
                                    </div>

                                </div>


                                {/* Right Section - Hotel Details
                            <div className="flex-1 py-[8px] font-Poppins w-[40%] pr-[30px] pl-[10px]">
                                <h2 className="text-[20px] font-[600] text-gray-900">{hotel.name}</h2>
                                <div className="mt-1">
                                    <span className="text-[#1f569e] text-[14px]">{hotel.location}</span>
                                    <span className="text-[#4a4a4a] text-[13px]"> | {hotel.distance}</span>
                                </div>


                                <div className="flex gap-3 flex-wrap mt-2">
                                    {hotel.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center text-[#4a4a4a]">
                                            {amenity === "Gym" && <Dumbbell className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            {amenity === "Restaurant" && <UtensilsCrossed className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            {amenity === "24-hour Room Service" && <Clock className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />}
                                            <span className="text-[12px]">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                           
                            <div className="flex-1 py-[8px] font-Poppins max-w-[220px] border-l pr-[20px]">
                                <div className="text-right flex flex-col gap-[5px]">
                                    <div className="text-[#0066b2] text-[13px] font-bold">{hotel.ratingText}</div>
                                    <div className="text-[#005f94] text-[28px] font-bold">{hotel.rating}</div>
                                    <div className="text-[#4a4a4a] text-[12px]">({hotel.ratings} Ratings)</div>
                                </div>
                                <div className="flex justify-end mt-[20px]">
                                    <span className="text-[22px] font-[600] text-black">₹{hotel.discountedPrice.toLocaleString()}</span>
                                </div>
                                <div className="text-sm text-[#4a4a4a]">+ ₹{hotel.taxes.toLocaleString()} taxes & fees</div>
                            </div> */}
                            </div>


                            <button className=" mx-auto mt-[40px] font-Poppins  bg-[#005f94] gap-[10px] justify-center  text-white  items-center  px-[10px] flex  py-[8px] rounded-[7px] w-[150px]"  >

                                Create Room
                            </button>
                        </div>

                    </div>
                </ModalContent>
            </NextUIModal>
        </>
    );
}
