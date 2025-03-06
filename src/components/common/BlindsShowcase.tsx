"use client";
import React, { useEffect, useRef } from "react";
import BlindCard from "./cards/BlindCard";
import { rubik } from "@/fonts";
import Glide from "@glidejs/glide";

type Props = {
  data: {
    heading?: string;
    blinds: {
      title: string;
      description: string;
      image: string;
      buttonText: string;
    }[];
  };
  isSlider?: boolean;
};

const BlindsShowcase: React.FC<Props> = ({ data, isSlider = false }) => {
  const glideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSlider && glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "slider",
        perView: 3,
        breakpoints: {
          600: {
            perView: 1,
          },
          1024: {
            perView: 2,
          },
        },
        gap: 16,
        autoplay: false,
        hoverpause: true,
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, [isSlider]);

  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1490px] px-3 md:px-5">
        {data.heading && (
          <div className="mb-14 flex justify-center">
            <div className="relative mb-2">
              <h2
                className={`${rubik.className} relative mb-10 text-center text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
              >
                {data.heading}
              </h2>
            </div>
          </div>
        )}
        {isSlider ? (
          <div ref={glideRef} className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {data.blinds.map((blind, index) => (
                  <li key={index} className="glide__slide">
                    <div className="flex flex-col items-center p-4">
                      <img
                        src={blind.image}
                        alt={blind.title}
                        className="mb-4 rounded-lg"
                      />
                      <h3
                        className={`${rubik.className} text-lg font-semibold text-[#023D64]`}
                      >
                        {blind.title}
                      </h3>
                      <p className="text-center text-[#666666]">
                        {blind.description}
                      </p>
                      <button className="mt-4 rounded-full bg-[#FFA600] px-6 py-2 text-white">
                        {blind.buttonText}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 !rounded-full !bg-[#FFA600] p-2 !text-white !opacity-20 shadow-md duration-300 hover:!opacity-100"
                data-glide-dir="<"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                className="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 !rounded-full !bg-[#FFA600] p-2 !text-white !opacity-20 shadow-md duration-300 hover:!opacity-100"
                data-glide-dir=">"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.blinds.map((blind, index: number) => (
              <BlindCard key={index} {...blind} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlindsShowcase;
