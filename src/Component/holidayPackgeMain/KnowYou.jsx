import { useState } from "react";
import { ChevronUp,X } from "lucide-react";



export default function KnowYou() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isOpen, setIsOpen] = useState(false)

  // if (!isOpen) return null

  return (
    <>
      <div className=" w-[100%] mx-auto space-y-6 p-6">
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
              onClick={() => setIsOpen(true)}
            >
              Read More
            </button>
          </div>
          <div className="mt-4 text-gray-600">About the tour...</div>
        </div>
      </div>

      {/* <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Additional Information</h2>


          <div className="space-y-4 mb-6">
            <h3 className="font-medium underline">About the tour:</h3>
            <p className="text-gray-700 leading-relaxed">
              Discover the magic of Dubai on a luxurious 5-day tour, where bold architecture and rich heritage unite in perfect harmony. Immerse yourself in the city's modern marvels, visiting iconic sites like Jumeirah Mosque, Mall of the Emirates, AYA Universe and Dubai Frame. Cruise along the Dubai Marina Canal aboard a Dhow, capturing the glittering skyline. Then, reach new heights at the 124th floor of Burj Khalifa, capturing breathtaking aerial views. Prepare for an adrenaline-fueled Dubai desert safari, with dune bashing, sandboarding, and camel rides. This extraordinary journey promises a fusion of culture, architecture, and excitement, creating cherished memories to cherish forever.
            </p>
          </div>

      
          <div className="space-y-2 mb-6">
            <p className="text-gray-700 italic">
              Please note that the above prices may vary at the time of booking due to high fluctuations in the prices. Send an enquiry to know more.
            </p>
            <p className="text-gray-700 italic">
              Also, these prices are not applicable for the blackout dates (20th Dec,23 - 5th Jan,24)
            </p>
          </div>

         
          <div className="space-y-4 mb-6">
            <h3 className="font-medium underline">Quick Info:</h3>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-medium">Start Point:</span>
                <span className="text-gray-700">Dubai</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">End Point:</span>
                <span className="text-gray-700">Dubai</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Duration:</span>
                <span className="text-gray-700">5 Days, 4 Nights</span>
              </div>
            </div>
          </div>

    
          <div className="space-y-4">
            <h3 className="font-medium underline">Experiences Covered:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Marina Dhow Cruise with Buffet Dinner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Dubai Dolphinarium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Desert Safari With BBQ Dinner and Tanoura Show</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Half-Day City Tour Of Dubai</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Dubai Mall</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Burj Khalifa 124th & 125th Floor Ticket</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <span>Dubai Aquarium and Underwater Zoo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}
