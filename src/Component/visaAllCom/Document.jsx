import React, { useState } from 'react'

export default function Document() {


    const [isOpen, setIsOpen] = useState(true)
  return (
  <>
        <div className=" bg-[#f9f7f7] p-[10px] mt-[10px] w-[100%] ">
      <h1 className="flex font-[600] text-[30px] my-4 leading-9">Documents required for Dubai Visa for Indians</h1>

      <div className="border bg-white w-[100%] border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-8 py-4 bg-white flex items-center justify-between text-left text-[18px] hover:bg-gray-50"
        >
          <span>Must have Documents for Dubai Tourist Visa:</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="px-8 py-6 border-t border-gray-200">
            <ul className="space-y-4 list-disc pl-6">
              <li className="text-[15px]">Scanned colour copy of first and last page of your valid Passport</li>
              <li className="text-[15px]">Scanned colour copy of your passport size photograph with white background</li>
              <li className="text-[15px]">Confirmed return air ticket (required for Ok to Board processing)</li>
            </ul>
          </div>
        )}
      </div>
    </div>

  </>
  )
}
