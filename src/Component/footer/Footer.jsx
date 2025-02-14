import React from 'react'
import logo from "../../../public/Header/logo.png";
export default function Footer() {

    const countries = [
        { code: "IN", name: "India", phone: "+91" },
        { code: "US", name: "United States", phone: "+1" },
        { code: "UK", name: "United Kingdom", phone: "+44" },
        { code: "AE", name: "UAE", phone: "+971" },
      ];
  return (
<>



<footer className="bg-[#071a2d] font-Poppins text-white pt-[50px] pb-[20px]  px-6 md:px-12">
      <div className="md:max-w-[92%] mx-auto flex flex-col">
        <div className=" flex md:flex-row flex-col   gap-[20px] w-[100%] justify-between">
          <div className=" flex flex-col ">
            {/* Logo Section */}
            <div className="mb-">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[70px]  w-[160px] mb-"
              />
              <p className="text-[16px]  mt-[10px] font-medium">
                Keep travelling all year round!
              </p>
            </div>

            {/* Contact Form Section */}
            <div className=" mb-12">
              <p className="text-gray-400 text-[10px] mb-6">
                Subscribe to our newsletter to find travel inspiration in your
                inbox.
              </p>
              <div className="space-y-2">
                <div className="grid md:grid-cols-2 gap-">
          
            
                </div>
                <div className="flex gap-2 items-center">
                  {/* <select className="bg-transparent border border-gray-600 rounded px-3 py-2 w-36 appearance-none custom-select">
                    {countries.map((country) => (
                      <option
                        key={country.code}
                        value={country.phone}
                        className="bg-[#1A2332]"
                      >
                        {country.name} ({country.phone})
                      </option>
                    ))}

                  </select> */}
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email ID*"
                      className="bg-transparent border text-[12px] outline-none w-[210px] border-[#3a3f59] rounded-[6px] px-4 py-2"
                    />
                  </div>
                  <button className="bg-[#005f94]  w-[90px] text-[14px] h-[34px] rounded-[4px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Links Section */}
          <div className="md:grid  w-[100%]  md:w-fit flex md:grid-cols-3 mb-[40px] gap-[10px] md:gap-[80px] md:mb-5">
            {/* Discover us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Discover us</h3>
              <ul className="  flex flex-col gap-[px]">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Guests Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Our Team
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Tour Managers
                  </a>
                </li> */}
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Sales Partners
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Become A Sales Partner
                  </a>
                </li> */}
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Careers{" "}
                    <span className="text-[#005f94]">We're Hiring!</span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    CSR Policy
                  </a>
                </li> */}
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Create Your Travel Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className=" flex flex-col gap-[px]">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Leave Your Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    How To Book
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Travel Deals
                  </a> */}
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    COVID-19 Public Notice
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Singapore Visa
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Annual Return
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className=" flex flex-col gap-[px]">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Tour Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Podcasts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Video Blogs
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Hardik Bhai Patel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Darshit Adesara
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Neil Patil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Travel Planner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Customized Travel Planner
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Caution Message */}
        </div>
        <div className="mb-[10px]">
          <p className="text-[12px] text-gray-400 font-[300]">
            <span className="text-white  text-[15px] font-medium">
              *Caution: Beware of Fake Promotions or Offers{" "}
            </span>
            *Please do not believe or engage with any promotional emails, SMS or
            Web-link which ask you to click on a link and fill in your details.
            All Cuckoo Travel authorized email communications are delivered from
            domain @cuckootravels.com  .
           *Cuckoo Travels  no liability or responsibility whatsoever
            for any communication which is fraudulent or misleading in nature
            and not received from registered domain.
          </p>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-between w-[100%] gap-4 md:mb-0">
            <span className="text-sm md:text-start text-center text-gray-400">
              © 2025 All Rights Reserved by Cuckoo Travels || Designed and
              Developed with ❤️ by Grafizen International LLC
            </span>
            <div className="  md:flex hidden  gap-[20px]">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Site Map
              </a>
            </div>
          </div>
          {/* <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Payments on website are secure
            </span>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="/placeholder.svg?height=40&width=40"
                  alt={`Payment Partner ${i}`}
                  className="h-8"
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .custom-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </footer>
</>
  )
}
