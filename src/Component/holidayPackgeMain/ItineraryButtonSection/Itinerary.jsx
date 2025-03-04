




import { useState } from "react";
import mainimage from "../../../../public/holidaypack/main.avif";
import mainimage1 from "../../../../public/holidaypack/other1.avif";
import mainimage2 from "../../../../public/holidaypack/other2.avif";
import { MapPin, Plus, Minus, Flag, Bed, Utensils, Coffee } from "lucide-react"

export default function Itinerary() {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [currentSlide, setCurrentSlide] = useState(6);
  const [activeDay, setActiveDay] = useState(null); // Removed type annotation
  const totalSlides = 11;

  const [currentHotelSlide, setCurrentHotelSlide] = useState(0);
  const [currentCruiseSlide, setCurrentCruiseSlide] = useState(0);



  const [expandedDays, setExpandedDays] = useState([1]); // Expand all days by default

  const toggleDay = (day) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const itinerary = [
    { day: 1, date: "19 Feb, 25", title: "Delhi – Shimla (1 Night)" },
    { day: 2, date: "20 Feb, 25", title: "Shimla – Manali (3 Nights)" },
    { day: 3, date: "21 Feb, 25", title: "Manali – Solang Valley – Manali" },
    { day: 4, date: "22 Feb, 25", title: "Manali" },
    { day: 5, date: "23 Feb, 25", title: "Manali – Chandigarh (1 Night)" },
    { day: 6, date: "24 Feb, 25", title: "Chandigarh – Delhi – Departure" },
  ]
  // Function to handle navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const hotelImages = [
    {
      id: 1,
      url: { mainimage },
      title: "Royal Falcon Hotel, Dubai",
      rating: "3.4/5",
    },
    {
      id: 2,
      url: { mainimage },
      title: "Orchid Hotel, Dubai",
      rating: "4/5",
    },
  ];

  const cruiseImages = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      url: { mainimage },
    }));

  const days = [
    {
      day: 1,
      title: "Arrival in Dubai | Dhow Marina Dinner Cruise Experience",
    },
    {
      day: 2,
      title: "Visit to Dubai Dolphinarium | Desert Safari Experience",
    },
    {
      day: 3,
      title: "Dubai Sightseeing Tour | Visit to Burj Khalifa",
    },
    {
      day: 4,
      title: "Visit to Dubai Frame & AYA Universe",
    },
    {
      day: 5,
      title: "Departure Day",
    },
  ];



  const images = [
    mainimage1, mainimage2, mainimage1, mainimage2
  ]; // Add your images here

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const [expandedDay, setExpandedDay] = useState(1)


  const [activeButton, setActiveButton] = useState("Itinerary");

  // Define button positions dynamically
  const buttonPositions = {
    "Itinerary": 6,
    Documents: 120,
    Process: 245,
    "Why Choose Us": 359,


  };

  // Define different widths for each button dynamically
  const buttonWidths = {
    "Itinerary": 100,
    Documents: 110,
    Process: 100,
    "Why Choose Us": 140,


  };
  return (
    <div className="md:max-w-5xl w-[100%] mx-auto">
<div className=" flex  max-w-[360px] md:max-w-[100%] !overflow-x-auto !w-[100%]">

      <nav className="border mb-[10px] rounded-tl-[20px] min-w-max max-w-[1370px] w-[100%]  shadow-md rounded-br-[20px]   md:mx-auto border-[#E5E5E5]  relative">
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

                  onClick={() => setActiveButton(item)}
                  className={`inline-block px-6 py-4  cursor-pointer font-Poppins text-[] md:text-[15px] transition-colors relative -mb-[1px] ${activeButton === item
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
</div>
      {/* Image Carousel */}
      <div className="relative h-[250px] rounded-xl md:w-[100%] w-[100%] overflow-hidden mb-6">
        <img
          src={images[currentIndex]}
          alt="Dubai Frame"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors" onClick={prevImage}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"

          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors" onClick={nextImage}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Days Counter */}
        <div className="absolute left-6 bottom-6 text-white">
          <div className="text-4xl font-bold">5</div>
          <div className="text-xl">
            Days in
            <br />
            Dubai
          </div>
        </div>

        {/* Pagination */}


        {/* Thumbnails */}

      </div>



      <div className="md:max-w-3xl  mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium">
            Itinerary <span className="text-gray-500 font-normal">(Day Wise)</span>
          </h1>
          <a href="#" className="text-[#0052CC] text-sm hover:underline">
            View all days
          </a>
        </div>

        <div className="relative space-y-4">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px border-l-2 border-dashed border-[#E5E7EB]" />

          {/*    
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="relative">
              <MapPin className="w-[25px] h-[25px] bg-white ml-[4px] text-[#0052CC]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] text-gray-500">Day 1 / 19 Feb, 25</div>
                  <h3 className="text-[15px] font-medium text-[#1A1F36]">Delhi – Shimla (1 Night)</h3>
                </div>
                <button
                  onClick={() => setExpandedDay(expandedDay === 1 ? 0 : 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                >
                  {expandedDay === 1 ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {expandedDay === 1 && (
                <div className="mt-4 text-[13px] space-y-4">
                  <p className="text-[#4A5578] leading-relaxed">
                    Tour guests will arrive at Delhi airport as per their scheduled flight. Upon arrival they will meet
                    Veena World tour manager at the airport and proceed to Shimla. Known as the Queen of Hills, the spot
                    is famous for its scenic beauty, colonial-era architecture and pleasant climate.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Joining and Leaving (J&L) tour guests will join the group on their own. The transfer charges to
                    reach the designated place or hotel will be borne by the (J&L) guests.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Upon arrival we enjoy a stroll on the famous Mall road of Shimla and view Shimla Church, Scandal
                    point, the Ridge etc.
                  </p>


                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="w-5 h-5 text-gray-600" />
                      <h4 className="font-medium text-[#1A1F36]">Today's Sightseeing</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {["Shimla Mall Road", "Church", "The Ridge"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00B8D9]" />
                          <span className="text-[#4A5578]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

               
                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Night Stay in Shimla</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Dinner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">
                        Tea / Coffee en route to Shimla, Burger / Softy and Tea / Coffee at Mall Road
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {expandedDay === 2 && (
                <div className="mt-4 text-[13px] space-y-4">
                  <p className="text-[#4A5578] leading-relaxed">
                    Tour guests will arrive at Delhi airport as per their scheduled flight. Upon arrival they will meet
                    Veena World tour manager at the airport and proceed to Shimla. Known as the Queen of Hills, the spot
                    is famous for its scenic beauty, colonial-era architecture and pleasant climate.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Joining and Leaving (J&L) tour guests will join the group on their own. The transfer charges to
                    reach the designated place or hotel will be borne by the (J&L) guests.
                  </p>
                  <p className="text-[#4A5578] leading-relaxed">
                    Upon arrival we enjoy a stroll on the famous Mall road of Shimla and view Shimla Church, Scandal
                    point, the Ridge etc.
                  </p>


                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="w-5 h-5 text-gray-600" />
                      <h4 className="font-medium text-[#1A1F36]">Today's Sightseeing</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {["Shimla Mall Road", "Church", "The Ridge"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#00B8D9]" />
                          <span className="text-[#4A5578]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                    <div className="flex items-center gap-3">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Night Stay in Shimla</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">Dinner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-gray-600" />
                      <span className="text-[#4A5578]">
                        Tea / Coffee en route to Shimla, Burger / Softy and Tea / Coffee at Mall Road
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        {[
          { day: 2, date: "20 Feb, 25", title: "Shimla – Manali (3 Nights)" },
          { day: 3, date: "21 Feb, 25", title: "Manali – Solang Valley – Manali" },
          { day: 4, date: "22 Feb, 25", title: "Manali" },
          { day: 5, date: "23 Feb, 25", title: "Manali – Chandigarh (1 Night)" },
          { day: 6, date: "24 Feb, 25", title: "Chandigarh – Delhi – Departure" },
        ].map(({ day, date, title }) => (
          <div key={day} className="relative">
            <div className="flex items-start gap-6">
              <div className="relative">
                <MapPin className="w-[25px] h-[25px] bg-white ml-[4px] text-[#0052CC]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] text-gray-500">
                      Day {day} / {date}
                    </div>
                    <h3 className="text-[15px] font-medium text-[#1A1F36]">{title}</h3>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <Plus className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))} */}











          {itinerary.map(({ day, date, title }) => (
            <div key={day} className=" w-[100%] relative">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <MapPin className="w-[25px] h-[25px] bg-white ml-[4px] text-[#0052CC]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[13px] text-gray-500">
                        Day {day} / {date}
                      </div>
                      <h3 className="text-[15px] font-medium text-[#1A1F36]">{title}</h3>
                    </div>
                    <button
                      onClick={() => toggleDay(day)}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                    >
                      {expandedDays.includes(day) ? (
                        <Minus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedDays.includes(day) && (
                    <div className="mt-4 text-[13px] space-y-4">
                      <p className="text-[#4A5578] leading-relaxed">
                        Tour guests will arrive at Delhi airport as per their scheduled flight. Upon arrival they will meet
                        Veena World tour manager at the airport and proceed to their destination.
                      </p>
                      <p className="text-[#4A5578] leading-relaxed">
                        Joining and Leaving (J&L) tour guests will join the group on their own. The transfer charges to
                        reach the designated place or hotel will be borne by the (J&L) guests.
                      </p>
                      <p className="text-[#4A5578] leading-relaxed">
                        Upon arrival, we enjoy sightseeing and exploring the area.
                      </p>

                      {/* Today's Sightseeing */}
                      <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                        <div className="flex items-center gap-2">
                          <Flag className="w-5 h-5 text-gray-600" />
                          <h4 className="font-medium text-[#1A1F36]">Today's Sightseeing</h4>
                        </div>
                        <ul className="space-y-2 pl-7">
                          {["Scenic Spots", "Local Attractions", "Famous Landmarks"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#00B8D9]" />
                              <span className="text-[#4A5578]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stay & Meals */}
                      <div className="bg-[#F7F8F9] p-4 rounded-lg space-y-3">
                        <div className="flex items-center gap-3">
                          <Bed className="w-5 h-5 text-gray-600" />
                          <span className="text-[#4A5578]">Night Stay</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Utensils className="w-5 h-5 text-gray-600" />
                          <span className="text-[#4A5578]">Dinner</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Coffee className="w-5 h-5 text-gray-600" />
                          <span className="text-[#4A5578]">
                            Tea / Coffee available en route
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



