import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import travelImg from "../../../public/staffhand/image1.webp";
import travelImg1 from "../../../public/staffhand/image2.webp";
import travelImg2 from "../../../public/staffhand/image3.webp";

export default function Journey() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const multiplier = 1.9; // Adjust speed
      const progress = Math.min((scrollTop / documentHeight) * multiplier, 1);
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#f4f6f9] pt-[0px] relative overflow-hidden px-4 font-Poppins flex mx-auto">
      <div className="flex flex-col justify-between py-12 gap-12 relative w-[95%] md:w-[80%] mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-[25px] md:text-[38px] font-bold">
            Cuckoo Travel's <span className="text-[#005f94]"> Journey</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-justify font-medium">
            Exploring the world, one breathtaking destination at a time.
          </p>
        </div>

        <div className="flex flex-col relative gap-20">
          <motion.div
            className="absolute hidden md:flex top-[190px] left-[50%] w-[4px] bg-[#005f94]"
            style={{ height: `${scrollYProgress * 78}%`, transform: "translateX(-50%)" }}
          />

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="md:w-[43%]">
              <img className="rounded-lg object-cover" src={travelImg} alt="Travel Image" />
            </div>
            <div className="text-center md:flex hidden bg-[#f4f6f9] font-bold pb-2 absolute left-0 right-0 mx-auto w-40 flex-col">
              <h1 className="text-[40px] text-[#005f94]">2021</h1>
              <div className="w-10 h-10 rounded-full mx-auto bg-[#005f94]"></div>
            </div>
            <div className="flex flex-col gap-5 md:w-[43%] w-[90%] mt-5 md:mt-0">
              <h1 className="text-[28px] font-bold">The Beginning of an Adventure</h1>
              <p className="text-[16px] text-justify font-normal">
                Cuckoo Travel was founded with a simple yet powerful mission—to inspire wanderlust and make travel accessible for everyone. From city escapes to serene beaches, our journey started with a passion for exploration. We believed that travel is not just about visiting new places, but about immersing in different cultures, experiencing local traditions, and creating unforgettable memories. Our early days were filled with mapping out the best travel destinations, curating the finest itineraries, and ensuring that every traveler embarked on a seamless, fulfilling, and enriching adventure. 
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="order-2 md:order-1 flex flex-col gap-5 w-[90%] mt-5 md:mt-0 md:w-[43%]">
              <h1 className="text-[28px] font-bold">Expanding Our Horizons</h1>
              <p className="text-[16px] text-justify font-normal">
                In 2018, Cuckoo Travel expanded its reach, offering exclusive travel packages across continents. From the mountains of the Himalayas to the vibrant streets of Tokyo, we curated experiences that left lasting memories. We built strong partnerships with local guides, hotels, and airlines to offer tailored experiences that provided travelers with authentic cultural encounters. Our travel advisors worked tirelessly to craft unique, off-the-beaten-path adventures, ensuring that each trip was a blend of adventure, relaxation, and personal growth.
              </p>
            </div>
            <div className="text-center md:flex hidden bg-[#f4f6f9] font-bold pb-2 absolute left-0 right-0 mx-auto w-40 flex-col">
              <h1 className="text-[40px] text-[#005f94]">2022</h1>
              <div className="w-10 h-10 rounded-full mx-auto bg-[#005f94]"></div>
            </div>
            <div className="order-1 md:order-2 md:w-[43%]">
              <img className="rounded-lg object-cover" src={travelImg1} alt="Travel Image" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="md:w-[43%]">
              <img className="rounded-lg object-cover" src={travelImg2} alt="Travel Image" />
            </div>
            <div className="text-center md:flex hidden bg-[#f4f6f9] font-bold pb-2 absolute left-0 right-0 mx-auto w-40 flex-col">
              <h1 className="text-[40px] text-[#005f94]">2024</h1>
              <div className="w-10 h-10 rounded-full mx-auto bg-[#005f94]"></div>
            </div>
            <div className="flex flex-col gap-5 w-[90%] md:w-[43%]">
              <h1 className="text-[28px] font-bold">Innovation & Sustainability</h1>
              <p className="text-[16px] text-justify font-normal">
                With a commitment to sustainable travel, Cuckoo Travel launched eco-friendly travel initiatives, ensuring that future generations can also experience the beauty of our planet without harm. We introduced carbon offset programs, collaborated with eco-lodges, and encouraged travelers to participate in conservation activities. Our team worked on promoting responsible tourism by educating travelers on minimizing their environmental footprint while maximizing their cultural appreciation of destinations. Sustainability became a cornerstone of our brand, guiding our expansion into responsible travel experiences.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="order-2 md:order-1 flex flex-col gap-5 w-[95%] md:w-[43%]">
              <h1 className="text-[28px] font-bold">A Future of Endless Exploration</h1>
              <p className="text-[16px] text-justify font-normal">
                Looking ahead, Cuckoo Travel continues to redefine the travel experience with innovative solutions, immersive experiences, and a growing community of adventurers who dream big and explore fearlessly. Our focus is on providing seamless digital booking experiences, integrating AI-driven personalization to match travelers with destinations that suit their passions. We envision a future where travel becomes more intuitive, connected, and accessible to everyone, ensuring that every journey undertaken with Cuckoo Travel becomes an unforgettable adventure of a lifetime.
              </p>
            </div>
            <div className="text-center md:flex hidden bg-[#f4f6f9] font-bold pb-2 absolute left-0 right-0 mx-auto w-40 flex-col">
              <h1 className="text-[40px] text-[#005f94]">2025</h1>
              <div className="w-10 h-10 rounded-full mx-auto bg-[#005f94]"></div>
            </div>
            <div className="md:w-[43%] order-1 md:order-2">
              <img className="rounded-lg object-cover" src={travelImg} alt="Travel Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
