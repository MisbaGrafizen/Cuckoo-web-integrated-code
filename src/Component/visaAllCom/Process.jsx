import React from 'react'

export default function Process() {
  return (
     <>
 <div className="bg-[#005f94] mt-[20px]  rounded-lg font-Poppins px-5 py-5">
      <h1 className="text-[25px] font-[600] text-left text-[#fff] mb-[10px] ">
        Applying for Dubai Tourist Visa through us is this simple
      </h1>

      <div className=" mx-auto relative">
        {/* Timeline line */}
        <div className="absolute top-[49%] left-0 mx-auto right-0 h-[6px] rounded-xl w-[80%] bg-[#ffffffaf]" />

        {/* Timeline steps */}
        <div className="grid grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <svg viewBox="0 0 24 24" className="w-16 h-16">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" fill="#fff" />
                <path d="M12 7v2M12 15v2M7 12h2M15 12h2" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-white mb-8 relative z-10" />
            <p className="text-center text-[13px] text-[#fff]">
              Pay online via our
              <br />
              secure payment gateway
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-800">
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path d="M14 2v6h6M12 18v-6M9 15h6" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-white mb-8 relative z-10" />
            <p className="text-center text-[13px] text-[#fff]">Upload your documents</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-800">
                <path d="M9 11l3 3L22 4" fill="none" stroke="#fff" strokeWidth="2" />
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-white mb-8 relative z-10" />
            <p className="text-center text-[13px] text-[#fff]">
              We verify and submit
              <br />
              your documents
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <svg viewBox="0 0 24 24" className="w-16 h-16 text-gray-800">
                <path
                  d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="w-6 h-6 rounded-full bg-white mb-8 relative z-10" />
            <p className="text-center text-[13px] text-[#fff]">
              Receive your Dubai
              <br />
              Tourist Visa via Email
            </p>
          </div>
        </div>
      </div>
    </div>


     </>
  )
}
