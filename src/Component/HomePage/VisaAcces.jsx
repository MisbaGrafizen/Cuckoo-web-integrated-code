import React from "react";

export default function VisaAcces() {
  const destinations = [
    {
      country: "Dubai",
      continent: "Asia",
      price: "2,499",
      accentColor: "#d96554",
    },
    {
      country: "Malaysia",
      continent: "Asia",
      price: "1,999",
      accentColor: "#784dda",
    },
    {
      country: "Singapore",
      continent: "Asia",
      price: "1,900",
      accentColor: "#4dd0da",
    },
    {
      country: "Srilanka",
      continent: "Asia",
      price: "1999",
      accentColor: "#f3af3e",
    },
    {
      country: "Thailand",
      continent: "Asia",
      price: "1,999",
      accentColor: "#d96554",
    },
    // {
    //   country: "Australia",
    //   continent: "Australia",
    //   price: "9,999",
    //   accentColor: "#6B5BFF",
    // },
  ];

  return (
    <>
      <div className="flex font-Poppins mx-auto pb-[30px] w-[89%] md:w-[75%]">
        <div className="flex flex-col gap-[30px] w-[100%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="flex font-[600]  mx-auto text-[25px]">
              Popular Visa Assistance Destinations
            </h1>
          </div>
          <div className="flex w-[100%] overflow-x-auto gap-[15px] px-[10px] py-[10px] scroll-smooth scrollbar-hide">
            <div className="flex justify-between gap-[20px] w-[100%] flex-shrink-0">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[4px] custom-shadow2 h-[200px] flex justify-center items-center w-[230px] md:w-[190px] hover:shadow-lg transition-shadow overflow-hidden relative group cursor-pointer flex-shrink-0"
                >
                  <div className="p-6">
                    <h3 className="font-[500] text-center text-[28px] font-Work mb-1">
                      {destination.country}
                    </h3>
                    <p className="text-gray-500 text-center font-Work text-sm mb-4">
                      {destination.continent}
                    </p>
                    <div
                      className="text-xl text-center mt-[40px] font-semibold"
                      style={{ color: destination.accentColor }}
                    >
                      ₹ {destination.price}/-
                    </div>
                  </div>
                  {/* Bottom border with accent color */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: destination.accentColor }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
