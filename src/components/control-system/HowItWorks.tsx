"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import { inter } from "@/fonts";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  isFilled?: boolean;
}

interface HowItWorksData {
  heading: string;
  subHeading: string;
  steps: Step[];
}

type Props = {
  data: HowItWorksData;
};

/** StepItem Component: Displays an individual step in the guide */
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
            className={`text-2xl sm:text-3xl ${data.isActive ? "text-white" : "text-[#FFA600]"}`}
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
        className={`text-lg leading-7 sm:text-xl md:text-2xl ${
          data.isActive ? "text-gray-500" : "text-gray-950"
        }`}
      >
        <h3
          className={`inline-block text-xl font-bold sm:text-2xl md:text-3xl ${data.isActive ? "text-gray-700" : "text-gray-950"}`}
        >
          {data.title}
        </h3>
        {" - "}
        {data.description}
      </div>
    </div>
  );
};

const HowItWorks = ({ data }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (!sliderRef.current || !data.steps || data.steps.length === 0) return;

    // Small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (!sliderRef.current) return;

      try {
        glideInstance.current = new Glide(sliderRef.current, {
          type: "carousel",
          perView: 1,
          gap: 0,
          autoplay: 2000,
        });

        glideInstance.current.on("run.after", () => {
          if (glideInstance.current) {
            setActiveIndex(glideInstance.current.index);
          }
        });

        glideInstance.current.mount();
      } catch (error) {
        console.error("Error initializing Glide:", error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (glideInstance.current) {
        try {
          glideInstance.current.destroy();
        } catch (error) {
          console.error("Error destroying Glide instance:", error);
        }
      }
    };
  }, [data.steps]);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    if (glideInstance.current) {
      try {
        glideInstance.current.go(`=${index}`);
      } catch (error) {
        console.error("Error navigating slide:", error);
      }
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
        <div className="flex flex-col items-center justify-between gap-16 px-8 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Features Rendering Section */}
            <div className="flex flex-col items-stretch gap-2">
              {data.steps?.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <StepItem
                    data={{
                      ...feature,
                      isActive,
                      onClick: () => handleFeatureClick(index),
                    }}
                    isFirst={index === 0}
                    isLast={index === data.steps.length - 1}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Content - Slider */}
          <div className="aspect-[749/753] h-full max-h-[650px] w-full lg:w-1/2">
            <div className="glide h-full" ref={sliderRef}>
              <div className="glide__track h-full" data-glide-el="track">
                <ul className="glide__slides h-full">
                  {data.steps?.map((feature, index) => (
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
                          {data.steps?.map((_, i) => (
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

export default HowItWorks;
