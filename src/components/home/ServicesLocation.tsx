import { homePage } from "@/configs/pages-data/home";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";

// defining props of data and className
const ServicesLocation: React.FC<{
  data: typeof homePage.servicesLocation;
  className?: string;
}> = ({ data, className }) => {
  return (
    <div className={`bg-[#F7F9FA] px-3 ${className}`}>
      <div className="global-container relative z-50 -translate-y-5 rounded-3xl bg-white shadow-lg">
        <div className="flex flex-col items-start justify-between gap-8 p-4 lg:flex-row lg:items-center lg:p-10">
          {/* Text container with heading, description and locations */}
          <div className="flex w-full flex-col items-stretch gap-4 lg:max-w-[500px]">
            <h2 className="text-2xl font-bold text-[#013F68] lg:text-4xl">
              {data.heading}
            </h2>
            <h5 className="text-[#767676]">{data.description}</h5>
            <div className="grid max-w-[460px] grid-cols-1 gap-3 sm:grid-cols-2">
              {data.locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-3 text-[#767676]"
                >
                  <FaLocationDot color="#FFA600" />
                  {loc.name}
                </div>
              ))}
            </div>
          </div>

          {/* Image section */}
          <div className="w-full lg:w-auto">
            <img
              src={data.image.src}
              width={600}
              height={500}
              alt={data.image.alt}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLocation;
