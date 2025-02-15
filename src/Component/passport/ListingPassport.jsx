import { useEffect, useRef, useState } from "react";
import Document from "./Document";
import AllAboutPassport from "./AllAboutPassport";
import PassportFaq from "./PassportFaq";
import { ApiGet } from "../../helper/axios";

export default function ListingPassport() {

    const [visaPackages, setVisaPackages] = useState([]);
  
    useEffect(() => {
      const fetchVisaPackages = async () => {
        try { 
          const response = await ApiGet("/admin/passport-inquiries");
          console.log('response', response)
          setVisaPackages(response.room);
        } catch (error) {
          console.error("Error fetching visa packages:", error);
        }
      };
  
      fetchVisaPackages();
    }, []);
  // const visaPackages = [
  //   {
  //     title: "New Passport Application",
  //     processingTime: "Up to 10 days",
  //     validity: "10 years",
  //     entry: "Multiple",
  //     fees: "3,499",
  //     isPopular: true,
  //   },
  //   {
  //     title: "Tatkal Passport (Express)",
  //     processingTime: "Up to 48 hours",
  //     validity: "10 years",
  //     entry: "Multiple",
  //     fees: "7,999",
  //     isPopular: true,
  //   },
  //   {
  //     title: "Passport Renewal",
  //     processingTime: "Up to 7 days",
  //     validity: "10 years",
  //     entry: "Multiple",
  //     fees: "3,999",
  //     isPopular: false,
  //   },
  //   {
  //     title: "Lost/Damaged Passport Replacement",
  //     processingTime: "Up to 14 days",
  //     validity: "10 years",
  //     entry: "Multiple",
  //     fees: "5,999",
  //     isPopular: false,
  //   },
  //   {
  //     title: "Child Passport (Below 18 Years)",
  //     processingTime: "Up to 10 days",
  //     validity: "5 years",
  //     entry: "Multiple",
  //     fees: "2,499",
  //     isPopular: false,
  //   },
  //   {
  //     title: "Family Passport Package",
  //     processingTime: "Up to 10 days",
  //     validity: "10 years",
  //     entry: "Multiple",
  //     fees: "14,999",
  //     isPopular: true,
  //     includesNote: "(Includes 2 Adults + 1 Child)",
  //   },
  // ]



  // Define refs for each section
  const documentRef = useRef(null);
  const passportRef = useRef(null);
  const faqRef = useRef(null);
  const stepsRef = useRef(null);
  const visitRef = useRef(null);

  const [activeButton, setActiveButton] = useState("Types Of Passport");

  // Define button positions dynamically
  const buttonPositions = {
    "Types Of Passport": 12,
    Documents: 193,
    "All About Passport": 327,


    FAQs: 499,
    "Steps To Apply": 588,
    "Visit Us ": 742,
  };

  // Define different widths for each button dynamically
  const buttonWidths = {
    "Types Of Passport": 160,
    Documents: 110,
    "All About Passport": 163,


    FAQs: 90,
    "Steps To Apply": 149,
    "Visit Us ": 100,
  };

  const sectionRefs = {
    "Types Of Passport": null, // No specific scroll target for this
    Documents: documentRef,
    "All About Passport": passportRef,
    FAQs: faqRef,
    "Steps To Apply": stepsRef,
    "Visit Us ": visitRef,
  };


  const handleScroll = (section) => {
    setActiveButton(section);
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const handleScroll = (section) => {
  //   setActiveButton(section);

  //   if (sectionRefs[section] && sectionRefs[section].current) {
  //     const offset = 100; // Adjust this value to control how much space is left at the top

  //     const element = sectionRefs[section].current;
  //     const elementPosition = element.getBoundingClientRect().top + window.scrollY;

  //     window.scrollTo({
  //       top: elementPosition - offset, // Adjust the position so the section starts visibly
  //       behavior: "smooth",
  //     });
  //   }
  // };
  return (
    <>
      <nav className="border rounded-tl-[20px] shadow-md rounded-br-[20px]  w-[78%] mx-auto border-[#E5E5E5] relative">
        <div className="max-w-[1400px] mx-auto relative">
          {/* Sliding Box with Dynamic Width */}
          <div
            className="absolute top-0 left-0 h-[40px] rounded-tl-[20px] shadow-md rounded-br-[20px] mt-[7px] rounded-[1px] bg-[#F59E0B] transition-all duration-300 ease-in-out"
            style={{
              transform: `translateX(${buttonPositions[activeButton]}px)`,
              width: `${buttonWidths[activeButton]}px`,
            }}
          ></div>

          {/* Navigation Menu */}
          <ul className="flex items-center">
            {Object.keys(buttonPositions).map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item);
                  }}
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

      <div className="max-w-[1400px] font-Poppins w-[80%] mx-auto mt-[0px] p-6">
        <h1 className="flex font-[600] text-[35px] mb-6">Types of of Indian Passport</h1>

        <div className="grid grid-cols-1   lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2   flex flex-col gap-[30px]">
            <div className="grid md:grid-cols-2 gap-6">
              {visaPackages.map((pkg, index) => (
                <VisaCard key={index} {...pkg} />
              ))}
            </div>

            <div ref={documentRef}>
              <Document />
            </div>
            <div ref={passportRef}>
              <AllAboutPassport />
            </div>
            <div ref={faqRef}>
              <PassportFaq />
            </div>
          </div>
          <div>
            <ApplicationForm />
          </div>

        </div>
      </div>
    </>
  )
}

function VisaCard({ title, processingTime, travelerType,  processingType, validity, assistanceType, fees, isPopular, includesNote }) {
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
      <div className="relative bg-white   h-[290px] font-Poppins p-5 shadow-md rounded-tl-[20px] rounded-br-[20px]">
        {/* Gradient Border */}
        <div className="absolute inset-0   h-[294px] rounded-tl-[20px] rounded-br-[20px] bg-gradient-to-r from-[#005f94] via-[#0095FF] to-[#00D4FF] p-[2px]">
          {/* Inner white content box */}
          <div className=" w-full bg-white rounded-tl-[18px]   h-[290px]  rounded-br-[18px] p-5">
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
                <span className="text-[#666666] text-sm">Validity:</span>
                <span className="text-[#1A1A1A] text-sm">{validity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Traveler Type:</span>
                <span className="text-[#1A1A1A] text-sm">{travelerType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Processing Time:</span>
                <span className="text-[#1A1A1A] text-sm">{processingTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Processing Type:</span>
                <span className="text-[#1A1A1A] text-sm">{processingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666] text-sm">Assistance Type:</span>
                <span className="text-[#1A1A1A] text-sm">{assistanceType}</span>
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

function ApplicationForm({ selectedVisa, setSelectedVisa, travellers, setTravellers, email, setEmail, phone, setPhone }) {



  return (
    <>
      <div className="bg-white border  overflow-hidden font-Poppins shadow-md rounded-tl-[27px] rounded-br-[27px]">
        <div className="bg-[#005f94]  text-[#fff] p-3 flex items-center gap-2">
          {/* <Clock className="w-5 h-5" /> */}
          <span className="text-sm">It takes less than 2 minutes to Apply</span>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-medium">Apply Online</h3>
            <span className="text-[#666666]">−</span>
          </div>

          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
            />
            <input
              type="tel"
              placeholder="Contact No"
              className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2]"
            />

            {/* <select className="w-full p-3 border border-[#E5E5E5] rounded text-sm focus:outline-none focus:border-[#1976D2] text-[#666666]">
              <option>Travellers</option>
            </select> */}

            <div className="flex justify-end items-center gap-2 pt-2 rounded-tl-[20px] rounded-br-[20px]">
              <span className="text-[#1A1A1A] font-medium">₹0</span>
              <button className="bg-[#1565C0] ml-[10px] text-white px-3 py-2 rounded-tl-[20px] rounded-br-[20px] font-medium">APPLY NOW</button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-medium">Let us Call You</h3>
            <span className="text-[#666666]">+</span>
          </div>
        </div>

        <div className="space-y-3 text-white p-5">
          <a href="https://wa.me/917506865623" className="flex  -center rounded-tl-[20px] rounded-br-[20px] gap-3 bg-[#1565C0] p-3 ">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 6.3c-1.4-1.5-3.3-2.3-5.3-2.3-4.2 0-7.6 3.4-7.6 7.6 0 1.3.3 2.6 1 3.8l-1 3.9 4-1c1.1.6 2.3 1 3.6 1 4.2 0 7.6-3.4 7.6-7.6 0-2-.8-3.9-2.3-5.4zm-5.3 11.6c-1.1 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.4-.1-.2c-.6-1-1-2.2-1-3.4 0-3.5 2.8-6.3 6.3-6.3 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c.1 3.5-2.7 6.3-6.3 6.3z" />
            </svg>
            <div className="flex text-white flex-col">
              <span className="text-xs">Visa on whatsapp</span>
              <span className="font-medium">+91 7506865623</span>
            </div>
          </a>

          <a href="tel:02240666444" className="flex items-center gap-3 bg-[#1565C0] p-3 rounded-tl-[20px] rounded-br-[20px]">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <div className="flex text-white flex-col">
              <span className="text-xs">Call us on</span>
              <span className="font-medium">02240666444</span>
            </div>
          </a>

          <div className="flex items-center gap-3 border-[#1565C0] text-[#1565C0] border-1 p-3 rounded-tl-[20px] rounded-br-[20px]">
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



    </>


  )
}

