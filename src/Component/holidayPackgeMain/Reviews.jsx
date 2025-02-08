import React from "react";

import other1 from "../../../public/holidaypack/other1.avif";
import other2 from "../../../public/holidaypack/other2.avif";
import { Star, ExternalLink } from "lucide-react";
export default function Reviews() {
  return (
    <>
      <div className=" w-[100%] mx-auto p-6">
        <div className="bg-white rounded-lg border p-6 shadow-sm">
          {/* Header with Profile and Rating */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={other1}
                  alt="Sachin Sharma"
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sachin Sharma</h3>
                <p className="text-sm text-gray-500">Reviewed: 30 Aug 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <span className="text-green-500 font-medium">5.0</span>
              <span className="text-gray-400">/5</span>
            </div>
          </div>

          {/* Booked Package */}
          <div className="mb-3">
            <span className="text-gray-600">Booked: </span>
            <a
              href="#"
              className="text-gray-900 hover:underline inline-flex items-center gap-1"
            >
              Wonders of Dubai | Journey through Jewels of the Emirates
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mb-4">
            Everything was very well planned and every service provided was
            great whether its transport or property.I loved this trip and wish
            to travel always with   first.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="rounded-lg  w-fit overflow-hidden">
                <img
                  src={other1}
                  alt={`Trip photo ${i + 1}`}
                  className="object-cover w-[150px] h-[150px] "
                />
              </div>
            ))}
            <div className=" rounded-lg w-fit  overflow-hidden relative group">
              <img
                src={other1}
                alt="More photos"
                className="object-cover w-[150px] h-[150px] "
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-semibold">(20+)</span>
                <span className="text-sm">View All</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
