"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
// Import core styles
// Import theme styles

import { inter } from "@/fonts";
interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  isFilled?: boolean;
  image: string;
}

interface HowItWorksData {
  heading: string;
  subHeading: string;
  steps: Step[];
}

type HowItWorksProps = {
  data: HowItWorksData;
};

const StepItem: React.FC<{
  data: Step & { isActive: boolean; onClick: () => void };
  isFirst: boolean;
  isLast: boolean;
}> = ({ data, isFirst, isLast }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-5 rounded-xl px-5 py-3 transition duration-300`}
      onClick={data.onClick}
    >
      <div className="relative">
        {/* Vertical line before the icon (except for first item) */}
        {isFirst && (
          <div className="absolute -top-[25px] left-1/2 h-[25px] w-[8px] -translate-x-1/2 rounded-t-full bg-[#FFA600]"></div>
        )}
        {!isFirst && (
          <div className="absolute -top-[52px] left-1/2 h-[52px] w-[8px] -translate-x-1/2 bg-[#FFA600]"></div>
        )}

        {/* Circle background */}
        <div className="h-[98px] w-[98px] rounded-full bg-[#F7F9FA]"></div>

        {/* Icon container */}
        <div
          className={`absolute inset-[10px] flex items-center justify-center rounded-full border-8 border-[#FFA600] ${data.isActive ? "bg-[#FFA600]" : "bg-white"} `}
        >
          <div
            className={`text-3xl ${data.isActive ? "text-white" : "text-[#FFA600]"}`}
          >
            {data.icon}
          </div>
        </div>

        {/* Vertical line after the icon (except for last item) */}
        {!isLast && (
          <div className="absolute -bottom-[52px] left-1/2 h-[52px] w-[8px] -translate-x-1/2 bg-[#FFA600]"></div>
        )}
        {isLast && (
          <div className="absolute -bottom-[25px] left-1/2 h-[25px] w-[8px] -translate-x-1/2 rounded-b-full bg-[#FFA600]"></div>
        )}
      </div>
      <div
        className={`text-2xl leading-7 ${
          data.isActive ? "text-gray-500" : "text-gray-950"
        }`}
      >
        <h3
          className={`inline-block text-3xl font-bold ${data.isActive ? "text-gray-700" : "text-gray-950"}`}
        >
          {data.title}
        </h3>
        {" - "}
        {data.description}
      </div>
    </div>
  );
};

const HowItWorks: React.FC<HowItWorksProps> = ({ data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    glideInstance.current = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 1,
      gap: 0,
      autoplay: 10000,
    });

    glideInstance.current.on("run.after", () => {
      setActiveIndex(glideInstance.current!.index);
    });

    glideInstance.current.mount();

    return () => {
      if (glideInstance.current) {
        glideInstance.current.destroy();
        glideInstance.current = null;
      }
    };
  }, []);

  const handleStepClick = (index: number) => {
    if (glideInstance.current) {
      setActiveIndex(index);
      glideInstance.current.go(`=${index}`);
    }
  };

  return (
    <div className="bg-[#F7F9FA] px-4 py-24">
      <section className="mx-auto flex w-full max-w-[1481px] flex-col items-center px-4 py-8 sm:py-16">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center">
          <h2
            className={`${inter.className} relative z-10 mb-10 text-center text-5xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-xl font-medium text-[#767676] sm:text-2xl">
            {data.subHeading}
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col items-center justify-between gap-16 px-8 md:gap-20 lg:flex-row">
          {/* Left Column - Steps */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-stretch gap-10">
              {data.steps.map((step, index) => (
                <StepItem
                  key={index}
                  data={{
                    ...step,
                    isActive: activeIndex === index,
                    onClick: () => handleStepClick(index),
                  }}
                  isFirst={index === 0}
                  isLast={index === data.steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image Slider */}
          <div className="aspect-[749/753] h-full max-h-[600px] w-full lg:w-1/2">
            <div className="glide h-full w-auto" ref={sliderRef}>
              <div className="glide__track h-full w-auto" data-glide-el="track">
                <ul className="glide__slides h-full w-auto">
                  {data.steps.map((step, index) => (
                    <li key={index} className="glide__slide h-full w-auto">
                      <div className="relative h-full w-auto">
                        <img
                          width={1000}
                          height={1000}
                          src={step.image}
                          alt={`${step.title} - ${step.description}`}
                          className="h-full w-full rounded-[42px] object-cover"
                        />
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                          {data.steps.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleStepClick(i)}
                              className={`h-3 w-3 rounded-full transition-all ${
                                activeIndex === i
                                  ? "w-6 bg-gray-500"
                                  : "bg-gray-300"
                              }`}
                            />
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
      </section>
    </div>
  );
};

export default HowItWorks;
