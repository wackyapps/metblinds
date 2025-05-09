"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";

import { inter } from "@/fonts";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

interface Feature {
  icon: React.ReactNode;
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

const WhyChooseControlSlider = ({ data }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 15000); // 15-second interval

    return () => {
      clearInterval(interval); // Clean up interval on unmount
    };
  }, [api]);

  const handleFeatureClick = (index: number) => {
    setCurrent(index);
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-[1560px] px-4">
        <div className="mx-auto mb-14 flex max-w-[1200px] flex-col items-center px-3 md:mb-20">
          <h2
            className={` ${inter.className} relative mb-10 text-center text-3xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-base font-medium text-[#767676] sm:text-xl md:text-2xl">
            {data.subHeading}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-10 px-8 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Features Rendering Section */}
            <div className="flex flex-col items-stretch gap-2">
              {data.features.map((feature, index) => {
                const isActive = current === index;
                return (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center gap-5 rounded-xl px-5 py-3 transition duration-300 ${
                      isActive ? "scale-105 bg-[#FFAD33] text-white" : ""
                    }`}
                    onClick={() => handleFeatureClick(index)}
                  >
                    <div className="">
                      <div
                        className={`h-full w-full text-4xl sm:text-5xl md:text-6xl ${
                          isActive ? "text-white" : "text-[#FFAD33]"
                        }`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-base sm:text-lg md:text-xl ${
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

          <Carousel setApi={setApi} className="w-full lg:w-1/2">
            <CarouselContent>
              {data.features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full max-h-[600px] w-full rounded-[42px] object-cover"
                    />
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {data.features.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleFeatureClick(i)}
                          className={`h-3 w-3 rounded-full transition-all ${
                            current === i ? "w-6 bg-gray-500" : "bg-gray-300"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseControlSlider;
