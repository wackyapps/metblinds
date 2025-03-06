"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
// Import core styles
// Import theme styles
import BlindCard from "../common/cards/BlindCard";
import { inter } from "@/fonts";

type Props = {
  data: {
    heading: string;
    subHeading: string;
    blinds: {
      title: string;
      description: string;
      image: string;
      buttonText: string;
    }[];
  };
};
const CompatibleBlinds = ({ data }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 4,
        gap: 20,
        autoplay: 200000,
        hoverpause: true,
        breakpoints: {
          4000: { perView: 4 },
          1200: { perView: 3 },
          1000: { perView: 2 },
          700: { perView: 1 },
        },
      });
      glide.mount();
      return () => {
        glide.destroy();
      };
    }
  }, []);
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-14 flex flex-col items-center">
          <h2
            className={`${inter.className} relative mb-10 text-5xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-xl font-medium text-[#767676] sm:text-2xl">
            {data.subHeading}
          </p>
        </div>
        <div className="relative overflow-hidden" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.blinds.map((blind, index) => (
                <li
                  key={index}
                  className="glide__slide py-2 [height:100%_!important]"
                >
                  <BlindCard {...blind} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibleBlinds;
