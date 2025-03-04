import React ,{ forwardRef }  from "react";

const InclustutionEx = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}  className=" w-[100%] mx-auto p-6">
        <h2 className="text-center text-[30px]  font-[500] font-Poppins text-[#005f94] mb-8">
          End Of Trip
        </h2>

        <div className="bg-white rounded-lg py-6 px-[20px]  w-[100%] md:px-[60px] border shadow-md">
          <h3 className="text-lg font-medium mb-">
            What's inside the package?
          </h3>
          <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
          <div className=" flex flex-col md:flex-row w-[100%] justify-between">
            {/* Inclusions */}
            <div className=" md:w-[45%]">
              <h4 className="font-medium mb-4">Inclusions</h4>
              <ul className="space-y-3">
                {[
                  "4 nights stay in Dubai with breakfast",
                  "Dolphin and Seal show at Dubai Dolphinarium Tickets on a Shared basis and ticket",
                  "Dubai City Sightseeing Tour - Dubai City Tour (Deira, Bur Dubai) - Shared Transfers and ticket",
                  "Dubai Frame Tickets - Dubai Frame Ticket on a Shared basis and ticket",
                  "Dhow Cruise Dubai Marina - Marina Dinner Cruise (With Shared Transfers)",
                  "Dubai Desert Safari with BBQ Dinner - All-In-One-Package on a Shared basis",
 

                  "Airport transfer from Dubai International Airport to Standard Hotel",
                  "Airport transfer from Dubai International Airport",
                  "Daily Breakfast",
                  "Visa assistance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <span className="  hidden md:flex h-[78vh]   bg-[#cdcdcd] w-[1px] "></span>
            {/* Exclusions */}
            <div className=" md:w-[45%] mt-[30px] md:mt-[0px]">
              <h4 className="font-medium mb-4">Exclusions</h4>
              <ul className="space-y-3 ">
                {[
                  "Expenses of a personal nature",
                  "Meals not mentioned in the itinerary or inclusions",
                  "Lunch",
                  "Dinner",
                  "Visa Charges",
                  "International flight tickets",
                  "Travel Insurance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default InclustutionEx;