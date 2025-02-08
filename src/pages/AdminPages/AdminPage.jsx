import React, { useRef, useState, useMemo } from "react";
import JoditEditor from "jodit-react";
import { Star, ExternalLink } from "lucide-react";

export default function AdminPage() {
  const editorRef = useRef(null); // Reference to the editor container

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Start typing...";
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  return (
    <>
      <div className="md:w-[78%] mx-auto font-Poppins">
        <div className=" mx-auto p-4 w-[100%]">
          <div className=" flex w-[100%]  rounded-[10px]  overflow-hidden justify-between  gap-[10px]">
            {/* Main Image */}
            <div className="md:col-span-2 relative   h-[400px] md:h-[490px]">
              <div className=" border-1 flex justify-center  w-[590px] h-[100%]">
                <i class="fa-solid text-[30px] flex  justify-center items-center fa-plus"></i>
              </div>
            </div>

            {/* Side Gallery */}
            <div className="grid grid-cols-2  md:grid-cols-1 gap-[10px] h-full">
              <div className=" flex  w-[100%] gap-[10px]">
                <div className="relative   w-[100%]  overflow-hidden ">
                  <div className="object-cover justify-center border items-center flex  w-[240px] h-[240px]">
                    <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                  </div>
                  <div className="absolute inset-0 0" />
                  <input
                    type="text"
                    className="absolute h-[40px]  text-[19px]  w-[200px]  border-[1px] border-[#000] rounded-md px-[3px] outline-none  bottom-3 left-3 text-black font-medium"
                  />
                </div>
                <div className="relative   w-[100%]  overflow-hidden ">
                  <div className="object-cover justify-center border items-center flex  w-[240px] h-[240px]">
                    <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                  </div>
                  <div className="absolute inset-0 0" />
                  <input
                    type="text"
                    className="absolute h-[40px]  text-[19px]  w-[200px]  border-[1px] border-[#000] rounded-md px-[3px] outline-none  bottom-3 left-3 text-black font-medium"
                  />
                </div>
              </div>
              <div className=" flex  w-[100%] gap-[10px]">
                <div className="relative   w-[100%]  overflow-hidden ">
                  <div className="object-cover justify-center border items-center flex  w-[240px] h-[240px]">
                    <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                  </div>
                  <div className="absolute inset-0 0" />
                  <input
                    type="text"
                    className="absolute h-[40px]  text-[19px]  w-[200px]  border-[1px] border-[#000] rounded-md px-[3px] outline-none  bottom-3 left-3 text-black font-medium"
                  />
                </div>
                <div className="relative   w-[100%]  overflow-hidden ">
                  <div className="object-cover justify-center border items-center flex  w-[240px] h-[240px]">
                    <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                  </div>
                  <div className="absolute inset-0 0" />
                  <input
                    type="text"
                    className="absolute h-[40px]  text-[19px]  w-[200px]  border-[1px] border-[#000] rounded-md px-[3px] outline-none  bottom-3 left-3 text-black font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-[100%] justify-between ">
            {/* Package Details */}
            <div className="mt-[30px]  w-[60%] gap-8">
              <div>
                <input
                  placeholder="tittle"
                  className="text-2xl md:text-[29px] w-[100%] h-[70px] px-[10px] font-[600] outline-none border-1  mb-4"
                />

                <div className="flex items-center gap-2 mt-[20px] ">
                  <input
                    placeholder="D/N"
                    className="px-3 py-1 bg-orange-100 text-orange-800  rounded-full outline-none w-[80px] text-sm font-medium"
                  />

                  <span className=" flex items-center leading-[13px]  text-[12px] text-gray-600">
                    <input
                      type="number"
                      placeholder="D"
                      className=" text-center flex font-Poppins  text-[#bbbaba] font-[600] outline-none border-1 rounded-sm w-[50px] h-[50px] px-[3px] mr-[5px] text-[20px]"
                    />

                    <input
                      type="text"
                      placeholder=" text"
                      className=" flex w-[200px] h-[40px]  outline-none  border-[1px]   rounded-[2px] px-[10px]"
                    />
                  </span>
                </div>
                <span className=" flex w-[100%] m bg-[#cdcdcd] my-[20px] h-[0.8px] "></span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    {/* <Car className="w-5 h-5 text-gray-600" /> */}
                    <span className="text-sm text-gray-600">
                      Transfer Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <Building2 className="w-5 h-5 text-gray-600" /> */}
                    <span className="text-sm text-gray-600">Stay Included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <Coffee className="w-5 h-5 text-gray-600" /> */}
                    <span className="text-sm text-gray-600">
                      Breakfast Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <Map className="w-5 h-5 text-gray-600" /> */}
                    <span className="text-sm text-gray-600">
                      Sightseeing Included
                    </span>
                  </div>
                </div>
              </div>
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
              <div className="">
                <input className="text-[20px]  w-[80%] h-[40px] px-[10px] outline-none border-1 font-[400] mb-4" />
                {/* <ul className="space-y-3">
                  <li className="flex items-start  justify-start gap-3">
                    <span className=" text-[#4f4e4e]   text-[15px] leading-[21px]">
                      From the old city of Dubai to the spots highlighting
                      modern innovation, spend a memorable vacation exploring
                      Dubai's rich cultural and dynamic heritage.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px] ">
                      Step aboard the Dhow Cruise Marina for an unforgettable
                      evening and enjoy a delicious dinner, live music, and
                      unparalleled views of Dubai's skyline.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]  text-[15px] leading-[21px] ">
                      Visit Dubai Dolphinarium, the first indoor air-conditioned
                      dolphinarium in the Middle East and see interactive
                      performances by dolphins and seals.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-10px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px]">
                      Admire 360-degree views of Dubai's skyline along with the
                      beautiful Arabian Gulf as you elevate to the 124th and
                      125th floors of Burj Khalifa.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className=" text-[30px]  mt-[-8px]">•</span>
                    <span className="text-[#4f4e4e]   text-[15px] leading-[21px]">
                      Explore the unique world of AYA Universe and enjoy an
                      amazing blend of technology and art installations,
                      offering a wonderful experience.
                    </span>
                  </li>
                </ul> */}
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={2} // tabIndex of textarea
                  onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                />
              </div>

              {/* <Itinerary /> */}
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
            </div>
          </div>
          <div className=" w-[100%] mx-auto p-6">
            <h2 className="text-center text-3xl font-script text-orange-400 mb-8">
              End Of Trip
            </h2>

            <div className="bg-white rounded-lg py-6  px-[60px] border shadow-md">
              <h3 className="text-lg font-medium mb-">
                What's inside the package?
              </h3>
              <span className=" flex w-[100%] my-[20px] bg-[#cdcdcd] h-[0.8px] "></span>
              <div className=" flex w-[100%] justify-between">
                {/* Inclusions */}
                <div className=" w-[45%]">
                  <h4 className="font-medium mb-4">Inclusions</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <input
                        className=" flex w-[400px] px-[10px] rounded-[6px] h-[40px] outline-none border-[1px] "
                        type="text"
                      />
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <p>jhjlk;l</p>
                    </li>
                  </ul>
                </div>
                <span className=" flex h-[58vh]   bg-[#cdcdcd] w-[1px] "></span>
                {/* Exclusions */}
                <div className=" w-[45%]">
                  <h4 className="font-medium mb-4">Exclusions</h4>
                  <ul className="space-y-3 px-[60px]">
                    <li className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      <input
                        className=" flex w-[400px] px-[10px] rounded-[6px] h-[40px] outline-none border-[1px] "
                        type="text"
                      />
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      <p>fchgvjhbkjnkml,</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[100%] mx-auto space-y-6 p-6">
            {/* Know Before You Go Section */}
            <div className="bg-white rounded-lg  gap-[20px]   shadow-sm">
              <div className="flex items-center justify-between  mb-[30px]">
                <h2 className="text-xl font-[500]">Know Before You Go</h2>
              </div>

              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={2} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>

            {/* Additional Information Section */}
            <div className=" pt-[40px]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-[20px] text-gray-700">
                  Additional Information
                </h2>
                <button className="text-gray-600 hover:text-gray-900">
                  Modal Content
                </button>
              </div>

              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={2} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>

            <div className=" w-[100%] mx-auto ">
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                {/* Header with Profile and Rating */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12  border flex  justify-center items-center rounded-full overflow-hidden">
                      <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                    </div>
                    <div className=" flex flex-col">
                      <input className="text-[16px]  w-[80%] h-[30px] px-[10px] outline-none border-1 font-[400] mb-4" />
                      <input className="  w-[50%] text-[15px] h-[30px] px-[10px] outline-none border-1 font-[400] mb-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-green-500 text-green-500" />
                    <input className="text-green-500 font-medium border-1 outline-none px-[8px] rounded-[6px] w-[100px]" />
                    <span className="text-gray-400">/5</span>
                  </div>
                </div>

                {/* Booked Package */}
                <div className="mb-3">
                  <span className="text-gray-600">Booked: </span>
                  <a
                    href="#"
                    className="text-gray-900 hover:underline inline-flex items-center gap-1"
                  ></a>
                </div>

                {/* Review Text */}
                <textarea className="text-gray-700 mb-4 border rounded-[10px] outline-none text-[15px] h-[100px] p-[10px] w-[800px]"></textarea>

                {/* Photo Grid */}
                <div className=" flex gap-[10px]">
                  <div className="rounded-lg  w-fit ">
                    <div className="object-cover justify-center flex items-center w-[150px] border h-[150px] ">
                      <i class="fa-solid text-[20px] flex  justify-center items-center fa-plus"></i>
                    </div>
                  </div>

                  <div className="rounded-lg  w-fit ">
                    <div className="object-cover justify-center flex items-center w-[150px] border h-[150px] "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
