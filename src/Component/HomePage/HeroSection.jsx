import React, { useState, useEffect } from "react";
import slider1 from "../../../public/heroSection/image1.jpg";
import slider2 from "../../../public/heroSection/image2.jpg"; // Add more images as needed
import slider3 from "../../../public/heroSection/image1.jpg";
import slider4 from "../../../public/heroSection/image2.jpg";

export default function HeroSection() {
  const images = [slider1, slider2, slider3]; // Add your images here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3-second interval
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="pt-[130px] w-[100%] h-[100%]">
      <img
        className="object-cover w-[100%] h-[25vh] md:h-[100%] transition-all duration-1000 ease-in-out"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
    </div>
  );
}
