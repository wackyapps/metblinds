"use client";
import { homePage } from "@/configs/pages-data/home";
import React from "react";
import { rubik } from "@/fonts";

const OurPartners: React.FC<{ data: typeof homePage.ourPartners }> = ({
  data,
}) => {
  return (
    <div className="py-20">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${rubik.className} relative mb-16 text-center text-3xl font-semibold text-[#013F68] after:absolute after:left-[30%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600] md:text-4xl lg:text-5xl`}
          >
            {data.heading}
          </h2>
          
          {/* Static awards display - no carousel/swipe */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
              {data.partners.map((partner, index) => (
                <div key={index} className="flex-1 min-w-[240px] px-4 flex justify-center">
                  <div className="flex justify-center w-full py-2">
                    <img
                      src={partner.image}
                      className="mx-auto w-full"
                      height="auto"
                      alt={`Partner ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;