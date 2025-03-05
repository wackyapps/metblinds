"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { IconType } from "react-icons";
import { inter } from "@/fonts";
import { FaRegClock, FaShieldAlt, FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import React from "react";

interface Feature {
  iconName: string;
  title: string;
  description?: string;
  image: string;
}

type Props = {
  data: {
    heading: string;
    subHeading: string;
    features: Feature[];
  };
};

const iconMap = {
  FaRegClock,
  FaShieldAlt,
  FaRegCircle,
  FiSun,
  CiWallet,
  FaRegCircleCheck,
};

const WhyChooseControlSlider = ({ data }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    glideInstance.current = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 1,
      gap: 0,
      autoplay: 5000,
    });

    glideInstance.current.on("run.after", () => {
      setActiveIndex(glideInstance.current!.index);
    });

    glideInstance.current.mount();

    return () => {
      glideInstance.current?.destroy();
    };
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    glideInstance.current?.go(`=${index}`);
  };

  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-[1560px] px-4">
        <div className="mx-auto mb-14 flex max-w-[1200px] flex-col items-center px-3 md:mb-20">
          <h2
            className={` ${inter.className} relative mb-10 text-5xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-xl font-medium text-[#767676] sm:text-2xl">
            {data.subHeading}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-16 px-8 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Features Rendering Section */}
            <div className="flex flex-col items-stretch gap-2">
              {data.features.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center gap-5 rounded-xl px-5 py-3 transition duration-300 ${
                      isActive ? "scale-105 bg-[#FFAD33] text-white" : ""
                    }`}
                    onClick={() => handleFeatureClick(index)}
                  >
                    <div className="">
                      {iconMap[feature.iconName as keyof typeof iconMap] && (
                        <div
                          className={`h-full w-full text-6xl ${
                            isActive ? "text-white" : "text-[#FFAD33]"
                          }`}
                        >
                          {React.createElement(
                            iconMap[feature.iconName as keyof typeof iconMap],
                          )}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3
                        className={`text-xl ${
                          isActive
                            ? "font-semibold text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Slider */}
          <div className="aspect-[749/753] h-full max-h-[650px] w-full lg:w-1/2">
            <div className="glide h-full" ref={sliderRef}>
              <div className="glide__track h-full" data-glide-el="track">
                <ul className="glide__slides h-full">
                  {data.features.map((feature, index) => (
                    <li key={index} className="glide__slide h-full">
                      <div className="relative h-full">
                        <img
                          width={1000}
                          height={1000}
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full rounded-[42px] object-cover"
                        />
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                          {data.features.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleFeatureClick(i)}
                              className={`h-3 w-3 rounded-full transition-all ${
                                activeIndex === i
                                  ? "w-6 bg-gray-500"
                                  : "bg-gray-300"
                              }`}
                            ></button>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseControlSlider;
