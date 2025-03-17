import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Document from "./Document";
import VisaAcces from "../HomePage/VisaAcces";
import { ApiGet, ApiPost } from "../../helper/axios";

export default function VisaSection( { countryId }) {

  const footerRef = useRef(null);
  const [visaPackages, setVisaPackages] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!countryId) {
      setVisaPackages([]);
      setCountryName(""); // Reset country name when no countryId
      return;
    }
  
    const fetchVisaByCountry = async () => {
      setIsLoading(true);
      try {
        const response = await ApiGet(`/admin/visa-by-country/${countryId}`);
        console.log("Visa API Response:", response); // Debugging log
  
        if (response.success) {
          setCountryName(response.visa.length > 0 ? response.visa[0]?.country?.countryName || "Unknown Country" : ""); // ✅ Always set the country name
          setVisaPackages(response.visa); // ✅ If no visas, this will be an empty array
        } else {
          setCountryName("Unknown Country"); // Fallback
          setVisaPackages([]);
        }
      } catch (error) {
        console.error("Error fetching visas by country:", error);
        setCountryName("Error fetching visa data"); // ✅ Show country name even on error
        setVisaPackages([]);
      }
      setIsLoading(false);
    };
  
    fetchVisaByCountry();
  }, [countryId]);
  
  

  const [activeButton, setActiveButton] = useState("Types Of Visas");

  // Define button positions dynamically
  const buttonPositions = {
    "Types Of Visas": 12,
    Documents: 168,
    Process: 293,
    "Why Choose Us": 409,
    "Sample Visa": 565,
    FAQs: 700,
    Embassy: 795,
    "Visit Us": 902,
  };

  // Define different widths for each button dynamically
  const buttonWidths = {
    "Types Of Visas": 130,
    Documents: 110,
    Process: 100,
    "Why Choose Us": 140,
    "Sample Visa": 130,
    FAQs: 90,
    Embassy: 100,
    "Visit Us": 100,
  };

  return (
    <>
      <section className=" flex w-[100%]    overflow-x-auto">
        <nav className="border rounded-tl-[20px] shadow-md w-[1290px] rounded-br-[20px] min-w-max  2xl:w-[1370px]  mx-[10px]  md:w-[78%] md:mx-auto border-[#E5E5E5] relative">
          <div className=" md:max-w-[1400px] mx-auto relative">
            {/* Sliding Box with Dynamic Width */}
            <div
              className="absolute top-0 left-0 h-[40px] rounded-tl-[20px] shadow-md rounded-br-[20px] mt-[7px] rounded-[1px] bg-[#F59E0B] transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${buttonPositions[activeButton]}px)`,
                width: `${buttonWidths[activeButton]}px`,
              }}
            ></div>

            {/* Navigation Menu */}
            <ul className="flex items-center flex-shrink-0">
              {Object.keys(buttonPositions).map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setActiveButton(item)}
                    className={`inline-block px-6 py-4 font-Poppins text-[15px] transition-colors relative -mb-[1px] ${activeButton === item
                      ? "!text-white" // White text + Bold for active button
                      : "text-[#666666] font-normal"
                      }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
      {/* {countryName && visaPackages.length > 0 && (
      <div className="2xl:w-[1370px] font-Poppins w-[95%] md:w-[80%] mx-auto mt-[0px] p-3 md:p-6">
        <h1 className="flex font-[600] text-[25px] md:text-[35px] mb-6">
        {`Types of ${countryName} Visas for Indians`}
        </h1>

        <div className="grid grid-cols-1   lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2   flex flex-col gap-[30px]">
            <div className="grid md:grid-cols-2 gap-6">
          {isLoading ? (
        <p className="text-gray-500">Fetching visa details...</p>
      ) : visaPackages.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
              {visaPackages.map((pkg, index) => (
                <VisaCard key={index} {...pkg} />
              ))}
            </div>
      ) : (
        <p className="text-red-500 text-lg font-semibold">
          No visa available now for {countryName}.
        </p>
      )}
            </div>
            <div className="  w-[100%] flex flex-col ">
              <Document />
            </div>
            <div>
            </div>
          </div>
          <div className=" flex w-[100%] h-fit mb-[40px]">
            <ApplicationForm footerRef={footerRef}  />
          </div>

        </div>
        <VisaAcces  ref={footerRef}  />
      </div>
    )} */}
    <div className="2xl:w-[1370px] font-Poppins w-[95%] md:w-[80%] mx-auto mt-[0px] p-3 md:p-6">
        <h1 className="flex font-[600] text-[25px] md:text-[35px] mb-6">{`Types of ${countryName} Visas for Indians`}</h1>

        <div className="grid grid-cols-1   lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2   flex flex-col gap-[30px]">
            <div className="grid md:grid-cols-2 gap-6">
              {visaPackages.map((pkg, index) => (
                <VisaCard key={index} {...pkg} />
              ))}
            </div>
            <div className="  w-[100%] flex flex-col ">
              <Document />
            </div>
            <div>
              {/* <Process /> */}
            </div>
          </div>
          <div className=" flex w-[100%] h-fit mb-[40px]">
            <ApplicationForm footerRef={footerRef}  />
          </div>

        </div>
        <VisaAcces  ref={footerRef}  />
      </div>
    </>
  )
}

function VisaCard({ title, processingTime, stayPeriod, validity, entry, fees, isPopular, includesNote }) {
  return (

    <>
      {/* <div className="relative bg-white font-Poppins p-5 shadow-md rounded-tl-[20px] rounded-br-[20px]">
      <div className="absolute inset-0 rounded-tl-[20px]  h-[100%] rounded-br-[20px] bg-gradient-to-r from-[#005f94] via-[#0095FF] to-[#00D4FF] p-[2px]">
        <div className="relative border  rounded-tl-[20px] shadow-md rounded-br-[20px] bg-[#ffffff] font-Poppins  p-5">

          {isPopular && (
            <div
              className="absolute -top-1 -right-1  text-[10px] bg-gradient-to-r from-[#B5396B] to-[#6B39B5] text-white  font-medium py-1 px-3"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
              }}
            >
              POPULAR
            </div>
          )}

          <h3 className="text-[15px] font-[600] text-[#1A1A1A] mb-4">
            {title}
            {includesNote && <span className="block text-xs font-normal text-[#666666] mt-1">{includesNote}</span>}
          </h3>

          <div className="space-y-2.5">
            <div className="flex justify-between">
              <span className="text-[#666666] text-sm">Processing time:</span>
              <span className="text-[#1A1A1A] text-sm">{processingTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666666] text-sm">Stay period:</span>
              <span className="text-[#1A1A1A] text-sm">{stayPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666666] text-sm">Validity:</span>
              <span className="text-[#1A1A1A] text-sm">{validity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666666] text-sm">Entry:</span>
              <span className="text-[#1A1A1A] text-sm">{entry}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[#666666] text-sm">Fees:</span>
              <span className="text-[#005f94] font-[600]">INR {fees}/-</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="relative bg-white   h-[257px] font-Poppins p-5 shadow-md rounded-tl-[20px] rounded-br-[20px]">
        {/* Gradient Border */}
        <div className="absolute inset-0   h-[261px] rounded-tl-[20px] rounded-br-[20px] bg-gradient-to-r from-[#005f94] via-[#0095FF] to-[#00D4FF] p-[2px]">
          {/* Inner white content box */}
          <div className=" w-full bg-white rounded-tl-[18px]   h-[257px]  rounded-br-[18px] p-5">
            {isPopular && (
              <div
                className="absolute -top-1 -right-1  text-[10px] bg-gradient-to-r from-[#B5396B] to-[#6B39B5] text-white  font-medium py-1 px-3"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
                }}
              >
                POPULAR
              </div>
            )}
            <h3 className="text-[15px] font-[600] text-[#1A1A1A] mb-4">
              {title}
              {includesNote && <span className="block text-xs font-normal text-[#666666] mt-1">{includesNote}</span>}
            </h3>
            <div className="space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Processing time:</span>
                <span className="text-[#1A1A1A] text-sm">{processingTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Stay period:</span>
                <span className="text-[#1A1A1A] text-sm">{stayPeriod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Validity:</span>
                <span className="text-[#1A1A1A] text-sm">{validity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Entry:</span>
                <span className="text-[#1A1A1A] text-sm">{entry}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-[#666666] text-sm">Fees:</span>
                <span className="text-[#005f94] font-[600]">INR {fees}/-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ApplicationForm({ footerRef }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travellers, setTravellers] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [visaOptions, setVisaOptions] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [isFooterVisible, setFooterVisible] = useState(false);
  
  useEffect(() => {
    const fetchVisaOption = async () => {
      try { 
        const response = await ApiGet("/admin/visa-enquiries");
        console.log('response', response)
        setVisaOptions(response.inquiry);
      } catch (error) {
        console.error("Error fetching visa packages:", error);
      }
    };

    fetchVisaOption();
  }, []);

  
  const totalPrice = selectedVisa ? selectedVisa.fees * Number(travellers) : 0;


  useEffect(() => {
    // Only run if footerRef.current exists.
    if (!footerRef?.current) return;
  
    // Capture the element so it remains consistent in cleanup.
    const element = footerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    observer.observe(element);
  
    // Cleanup: unobserve the same element.
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [footerRef]);
  

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 430 && !isFooterVisible) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFooterVisible]);


  const handleApplyNow = async () => {
    const payload = {
      email,
      phone,
      visaId: selectedVisa ? selectedVisa._id : null,
      travellers,
    };
    try {
      const response = await ApiPost("/admin/visa-form", payload);
      console.log('response', response)
      if (response.data.visaForm) {
        alert("Application submitted successfully!");
        setEmail("");
        setPhone("");
        setTravellers("");
        setSelectedVisa(null);
      } else {
        alert(`Application failed: ${response.message}`);
      }
    } catch (error) {
      console.error("Error applying for visa:", error);
      alert("Error occurred while applying for visa.");
    }
  };

  return (
    <>

<motion.div

      animate={{ translateX: "0", translateY: "0" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: isFooterVisible ? "relative" : scrollPosition ? "fixed" : "relative",
        top: isFooterVisible ? "auto" : scrollPosition ? "140px" : "0px",

        transform: "translateX(-50%)",
     

        zIndex: isFooterVisible ? 0 : scrollPosition ? 50: 50,
      }}
> 
      <div className="transition-all duration-300 w-[400px] ease-in-out top-0 hidden md:flex flex-col left-0 z-50 bg-white shadow-lg">
        <div
          id="contact-form"
          className="bg-white border overflow-hidden font-Poppins shadow-md rounded-tl-[27px] rounded-br-[27px]"
        >
          <div className="bg-[#005f94] text-[#fff] p-3 flex items-center gap-2">
            <span className="text-sm">It takes less than 2 minutes to Apply</span>
          </div>

          <div className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-medium">Apply Online</h3>
              <span className="text-[#666666]">−</span>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
              />
              <input
                type="tel"
                placeholder="Contact No"
                name="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
              />
              <select
                value={selectedVisa ? selectedVisa._id : ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const visa = visaOptions.find(
                    (visa) => visa._id === selectedId
                  );
                  setSelectedVisa(visa || null);
                }}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2] text-[#666666]"
              >
                <option value="">Visa type</option>
                {visaOptions.map((visa) => (
                  <option key={visa._id} value={visa._id}>
                    {visa.title}
                  </option>
                ))}
              </select>
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#005f94] text-[#666666]"
              >
                <option value="">Travellers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>

              <div className="flex justify-end items-center gap-2 pt-2 rounded-tl-[20px] rounded-br-[20px]">
                <span className="text-[#1A1A1A] font-medium">₹{totalPrice}</span>
                <button
                  onClick={handleApplyNow}
                  className="bg-[#005f94] ml-[10px] text-white px-3 py-2 rounded-tl-[20px] rounded-br-[20px] font-medium"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>

        <div className="border-t border-[#E5E5E5] pt-[5px] px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-medium">Let us Call You</h3>
            <span className="text-[#666666]">+</span>
          </div>
        </div>

        <div className="space-y-3 text-white px-5 py-[15px]">
          <a href="https://wa.me/917506865623" className="flex  items-center rounded-tl-[20px] rounded-br-[20px] gap-3 bg-[#005f94] p-2 ">
          <i className="fa-brands fa-whatsapp text-[25px]  text-[#fff]"></i>
            <div className="flex text-white flex-col">
              <span className="text-xs">Visa on whatsapp</span>
              <span className="font-medium">+91 7506865623</span>
            </div>
          </a>

          <a href="tel:02240666444" className="flex items-center gap-3 bg-[#005f94] p-2 rounded-tl-[20px] rounded-br-[20px]">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <div className="flex text-white flex-col">
              <span className="text-xs">Call us on</span>
              <span className="font-medium">02240666444</span>
            </div>
          </a>

          <div className="flex items-center gap-3 border-[#1565C0] text-[#1565C0] border-1 p-2 rounded-tl-[20px] rounded-br-[20px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xs">Timing</span>
              <span className="font-medium">9am to 9pm</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      <div className="transition-all duration-300 w-[330px] md:hidden  flex flex-col  ease-in-out top-0 left-0 z-10 bg-white shadow-lg">
        <div
          id="contact-form"
          className="bg-white border overflow-hidden font-Poppins shadow-md rounded-tl-[27px] rounded-br-[27px]"
        >
          <div className="bg-[#005f94] text-[#fff] p-3 flex items-center gap-2">
            <span className="text-sm">It takes less than 2 minutes to Apply</span>
          </div>

          <div className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[15px] font-medium">Apply Online</h3>
              <span className="text-[#666666]">−</span>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
              />
              <input
                type="tel"
                placeholder="Contact No"
                name="phoneNumber"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
              />
              <select
                value={selectedVisa ? selectedVisa._id : ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const visa = visaOptions.find(
                    (visa) => visa._id === selectedId
                  );
                  setSelectedVisa(visa || null);
                }}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2] text-[#666666]"
              >
                <option value="">Visa type</option>
                {visaOptions.map((visa) => (
                  <option key={visa._id} value={visa._id}>
                    {visa.title}
                  </option>
                ))}
              </select>
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#005f94] text-[#666666]"
              >
                <option value="">Travellers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>

              <div className="flex justify-end items-center gap-2 pt-2 rounded-tl-[20px] rounded-br-[20px]">
                <span className="text-[#1A1A1A] font-medium">₹0</span>
                <button
                  onClick={handleApplyNow}
                  className="bg-[#005f94] ml-[10px] text-white px-3 py-2 rounded-tl-[20px] rounded-br-[20px] font-medium"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>

        <div className="border-t border-[#E5E5E5] pt-[5px] px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-medium">Let us Call You</h3>
            <span className="text-[#666666]">+</span>
          </div>
        </div>

        <div className="space-y-3 text-white px-5 py-[15px]">
          <a href="https://wa.me/917506865623" className="flex  items-center rounded-tl-[20px] rounded-br-[20px] gap-3 bg-[#005f94] p-2 ">
          <i className="fa-brands fa-whatsapp text-[25px]  text-[#fff]"></i>
            <div className="flex text-white flex-col">
              <span className="text-xs">Visa on whatsapp</span>
              <span className="font-medium">+91 7506865623</span>
            </div>
          </a>

          <a href="tel:02240666444" className="flex items-center gap-3 bg-[#005f94] p-2 rounded-tl-[20px] rounded-br-[20px]">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <div className="flex text-white flex-col">
              <span className="text-xs">Call us on</span>
              <span className="font-medium">02240666444</span>
            </div>
          </a>

          <div className="flex items-center gap-3 border-[#1565C0] text-[#1565C0] border-1 p-2 rounded-tl-[20px] rounded-br-[20px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xs">Timing</span>
              <span className="font-medium">9am to 9pm</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>


  )
}

