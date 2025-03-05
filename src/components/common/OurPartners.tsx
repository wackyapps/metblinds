"use client";
import { homePage } from "@/configs/pages-data/home";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { rubik } from "@/fonts";

const OurPartners: React.FC<{ data: typeof homePage.ourPartners }> = ({
  data,
}) => {
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (glideRef.current) {
      new Glide(glideRef.current, {
        type: "carousel",
        perView: 7,
        gap: 16,
        autoplay: 3000,
        hoverpause: true,
        breakpoints: {
          1400: {
            perView: 6,
          },
          1200: {
            perView: 5,
          },
          992: {
            perView: 4,
          },
          768: {
            perView: 3,
          },
          576: {
            perView: 2,
          },
        },
      }).mount();
    }
  }, []);

  return (
    <div className="py-32">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${rubik.className} relative mb-16 text-center text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
          <div ref={glideRef} className="glide w-full">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {data.partners.map((partner, index) => (
                  <li key={index} className="glide__slide w-32">
                    <div className="rounded-full border px-6 py-4">
                      <img
                        src={partner.image}
                        className="mx-auto"
                        width={135}
                        height={25}
                        alt=""
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
