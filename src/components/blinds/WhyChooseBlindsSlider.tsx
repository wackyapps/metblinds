"use client";
import { JSX, useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import { inter, roboto, rubik } from "@/fonts";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

interface Feature {
  icon: JSX.Element;
  title: string;
  description?: string;
  image: string;
}

type Props = {
  data: {
    heading: string;
    features: Feature[];
  };
};

const WhyChooseBlindsSlider: React.FC<Props> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    setActiveIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 15000);

    return () => {
      clearInterval(interval); // Clean up interval on unmount
    };
  }, [api]);
  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-[1586px] px-4">
        <div className="flex flex-col items-center justify-between gap-10 px-8 lg:flex-row lg:gap-8 xl:gap-16 2xl:gap-28">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <h2
                className={`${roboto.className} relative z-0 mb-10 text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
              >
                {data.heading}
              </h2>
            </div>

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
                      <div
                        className={`h-full w-full text-4xl sm:text-5xl md:text-6xl ${
                          isActive ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3
                        className={`text-base font-semibold sm:text-lg md:text-xl ${rubik.className} ${
                          isActive ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p
                          className={`mt-1 ${isActive ? "text-white" : "text-gray-600"} ${inter.className}`}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Slider */}
          <Carousel className="w-full lg:w-1/2" setApi={setApi}>
            <CarouselContent>
              {data.features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-full">
                    <img
                      width={1000}
                      height={1000}
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
                            activeIndex === i
                              ? "w-6 bg-gray-500"
                              : "bg-gray-300"
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

export default WhyChooseBlindsSlider;
