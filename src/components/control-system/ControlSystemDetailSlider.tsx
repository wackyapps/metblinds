"use client";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import controlSystemPages, {
  controlSystemPage,
} from "@/configs/pages-data/control-systems";
import { inter } from "@/fonts";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

type Props = {
  data: typeof controlSystemPage.controlSystemDetails;
};

const ControlSystemDetailSlider: React.FC<Props> = ({ data }) => {
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

  const handleNavClick = (index: number) => {
    setCurrent(index);
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1530px] px-4">
        <div className="mb-14 space-y-4 text-center">
          <h1
            className={`${inter.className} mx-auto max-w-[700px] text-center text-3xl font-bold text-[#023D64] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-lg text-[#767676] sm:text-xl md:text-2xl">
            {data.subHeading}
          </p>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {controlSystemPages.map((option, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(index)}
              className={`rounded-full px-4 py-1.5 text-base transition-colors sm:px-6 sm:py-2 sm:text-lg md:text-xl ${
                current === index
                  ? "bg-[#FFA600] text-white"
                  : "border-2 border-[#FFA600] text-[#767676] hover:bg-orange-500/10 md:text-2xl"
              }`}
            >
              {option.title}
            </button>
          ))}
        </div>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="mx-auto w-full max-w-[1300px]"
        >
          <CarouselContent>
            {controlSystemPages.map((option, index) => (
              <CarouselItem key={index}>
                <div className="flex w-full flex-col items-center gap-[30px] sm:gap-[40px] md:justify-center md:gap-16 lg:flex-row">
                  {/* Text Content */}
                  <div className="order-2 flex w-full flex-col items-start gap-6 max-lg:items-center sm:gap-8 md:gap-10 lg:order-1">
                    <h2 className="text-2xl font-medium text-[#023D64] max-lg:text-center sm:text-3xl md:text-4xl">
                      {option.title}
                    </h2>
                    <p className="text-lg text-[#767676] max-lg:text-center sm:text-xl md:text-2xl">
                      {option.description}
                    </p>
                    <Link
                      href={`/control-system/${option.slug}`}
                      className="inline-flex items-center rounded-full border-2 border-[#FFA600] px-6 py-3 text-sm text-[#FFA600] hover:bg-orange-500/10 sm:text-base"
                    >
                      Learn More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                  {/* Image */}
                  <div className="order-1 max-lg:w-full lg:order-2 lg:min-w-[40%] lg:max-w-[500px]">
                    <img
                      className="mx-auto block aspect-video rounded-[55px] max-lg:max-w-[500px] max-sm:max-w-full lg:w-full"
                      src={option.image}
                      alt={option.title || ""}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ControlSystemDetailSlider;
