import { homePage } from "@/configs/home";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const ServicesLocation: React.FC<{
  data: typeof homePage.servicesLocation;
  className?: string;
}> = ({ data, className }) => {
  return (
    <div className={`bg-[#F7F9FA] px-3 ${className}`}>
      <div className="global-container rounded-3xl bg-white shadow-lg">
        <div className="flex items-center justify-between p-10">
          {/*
           * text containe of the heading and desctiption and locations
           */}
          <div className="flex max-w-[600px] flex-col items-stretch gap-4">
            <h2 className="text-4xl font-bold text-[#013F68]">
              {data.heading}
            </h2>
            <h5 className="text-[#767676]">{data.description}</h5>
            <div className="grid max-w-[530px] grid-cols-2 gap-3">
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
          {/* image of the section */}
          <div>
            <Image
              src={data.image.src}
              width={600}
              height={500}
              alt={data.image.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLocation;
