import { useState } from "react";
import { ChevronUp,X } from "lucide-react";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import React ,{forwardRef}from "react";

const KnowYou = forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [detailsopen, setDetailsOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false)

const handleDetailsClose=()=>{
  setDetailsOpen(false)
}
const handleDetailsOpen=()=>{
  setDetailsOpen(true)
}

  return (
    <>
      <div className=" w-[100%] mx-auto space-y-6 p-4 md:p-6">
        {/* Know Before You Go Section */}
        <div className="bg-white rounded-lg border-[1px]  p-3 shadow-sm">
          <div className="flex items-center justify-between ">
            <h2 className="text-xl font-[500]">Know Before You Go</h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronUp
                className={`w-5 h-5 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Collapsible Content */}
          {isExpanded && (
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700 text-[15px]">
                  All international participants will have to share passport and
                  visa details on arrival.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700 text-[15px]">
                  Do not consume alcoholic beverages or drugs; if you are found
                  intoxicated, you might be asked to leave the tour/premises.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  Be respectful of local customs and traditions, especially
                  during religious holidays and events.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  Any kind of drink (alcoholic, aerated, or mineral water) is
                  not included in the package cost.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  ID proof is mandatory for each individual guest at the time of
                  booking, and also upon arrival. PAN card will not be
                  considered as valid address proof.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  You are expected to dress appropriately and conservatively.
                  Avoid wearing shorts.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  While visiting the mosque, women ought to conform to wearing
                  scarves and being fully covered.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  Ladies may wear swimsuits just at seashores and pools. As you
                  step out of the seaside, make a point to cover yourselves.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  Tourists above 8 years of age will be considered as adults
                  only. There are no charges for tourists below 8 years of age.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className=" text-[30px] mt-[-10px]">•</span>
                <span className="text-gray-700">
                  Any breakage or damage of any items at the property will be
                  charged at actuals.
                </span>
              </li>
            </ul>
          )}
        </div>

        {/* Additional Information Section */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">
              Additional Information
            </h2>
            <button
              className="text-gray-600 hover:text-gray-900"
        onClick={handleDetailsOpen}
            >
              Read More
            </button>
          </div>
          <div className="mt-4 text-gray-600">About the tour...</div>
        </div>
      </div>

    
    
   

    <NextUIModal isOpen={detailsopen} onClose={handleDetailsClose}>
        <ModalContent className="md:max-w-[1160px] font-Poppins max-w-[760px] relative  bg-transparent shadow-none rounded-2xl z-[700] flex justify-center !py-0 mx-auto  h-[760px]  ">
          {(handleDetailsClose) => (
            <>
              <div className="relative w-[100%] max-w-[1130px] mt-[10px]   px-[40px] bg-white   rounded-2xl z-[100] flex justify-center !py-0 mx-auto  h-[92%]">
                <div
                  className=" absolute right-[-13px]  top-[-13px]  flex gap-[5px]  z-[300] items-center cursor-pointer py-[5px]  border-red rounded-bl-[8px] px-[5px]"
                  onClick={handleDetailsClose}
                >
                  <i className=" text-[30px] text-[red] shadow-delete-icon bg-white   rounded-full fa-solid fa-circle-xmark"></i>
                </div>
                <div className=" w-[100%] py-[30px] overflow-y-auto mx-auto  bg-white">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Additional Information</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-medium text-gray-700 mb-3 underline">About the tour:</h2>
          <p className="text-gray-600 leading-relaxed">
            Dubai with its bold architecture and over-the-top style is the largest city in the United Arab Emirates that
            showcases a distinct blend of its Bedouin heritage and an ultra-modern culture. This classic 5-day tour of
            Dubai lets you explore the famous attractions of the city including, the charming Jumeirah Mosque, Mall of
            the Emirates, Burj Al Arab and many more. From exploring the cultural heritage and the architectural
            brilliance it exhibits to cruising through the Dubai Marina canal with the view of lightning skyscrapers,
            this tour will give you an experience out of the ordinary. Your astonishment wouldn't cease here, wait till
            you stand tall on the 124th floor in the world's tallest building and framing this memorable moment with
            some unique photographs amidst the aerial views of Dubai city, it would be an experience totally worth
            cherishing.
          </p>
        </section>

        <p className="text-gray-600 italic">
          Please note that the above prices may vary at the time of booking due to high fluctuations in the prices. Send
          an enquiry to know more.
        </p>

        <p className="text-gray-600 italic">
          Also, these prices are not applicable for the blackout dates (20th Dec,22 - 5th Jan,23)
        </p>

        <section>
          <h2 className="text-lg font-medium text-gray-700 mb-3">Quick info:</h2>
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-700">Start Point:</span>
              <span className="text-gray-600 ml-2">Delhi/Mumbai/Bangalore Airport</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">End Point:</span>
              <span className="text-gray-600 ml-2">Delhi/Mumbai/Bangalore Airport</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Duration:</span>
              <span className="text-gray-600 ml-2">5 Days, 4 Nights</span>
            </div>
          </div>
        </section>

        <p className="text-gray-600 italic">
          Please note that flight prices are dynamic and may change according to the date of travel. Send an enquiry to
          know more.
        </p>

        <section>
          <h2 className="text-lg font-medium text-gray-700 underline mb-3">Experiences Covered:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Half Day City Tour Of Dubai</li>
            <li>Dhow Cruise Dinner at Marina with Entertainment Shows</li>
            <li>Desert Safari With BBQ dinner and Tanura Show</li>
            <li>Burj Khalifa 124th Floor Ticket</li>
          </ul>
        </section>
      </div>
    </div>
              </div>
            </>
          )}
        </ModalContent>
      </NextUIModal>









    </>
  )
})

export default KnowYou   