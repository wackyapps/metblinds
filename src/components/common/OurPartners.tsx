"use client";
import { homePage } from "@/configs/pages-data/home";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";

import { rubik } from "@/fonts";

const OurPartners: React.FC<{ data: typeof homePage.ourPartners }> = ({
  data,
}) => {
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glideRef.current) {
      new Glide(glideRef.current, {
        type: "carousel",
        perView: 3,      // Show all 3 items at once
        gap: 0,          // No gap between slides
        bound: true,     // Prevent additional sliding beyond the last slide
        autoplay: false,
        hoverpause: false,
        breakpoints: {
          768: { perView: 1 },
          992: { perView: 2 },
        },
      }).mount();
    }
  }, []);
  

  return (
    <div className="py-32">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${rubik.className} relative mb-16 text-center text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600] md:text-4xl lg:text-5xl`}
          >
            {data.heading}
          </h2>
          <div ref={glideRef} className="glide w-full max-w-5xl mx-auto">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides flex items-center">
                {data.partners.map((partner, index) => (
                  <li key={index} className="glide__slide flex items-center justify-center">
                    <div className="px-0 py-2 flex justify-center w-full"> 
                      <img
                        src={partner.image}
                        className="mx-auto w-full max-w-[220px]" 
                        height="auto"
                        alt={`Partner ${index + 1}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;