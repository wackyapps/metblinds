"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlindCard from "../common/cards/BlindCard";
import { inter } from "@/fonts";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

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
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-14 flex flex-col items-center">
          <h2
            className={`${inter.className} relative mb-10 text-center text-3xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-lg font-medium text-[#767676] sm:text-xl md:text-2xl">
            {data.subHeading}
          </p>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="flex w-full items-center gap-5 [&>*:nth-child(2)]:flex-grow"
          >
            <CarouselPrevious className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <CiCircleChevLeft className="text-3xl text-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl" />
            </CarouselPrevious>
            <CarouselContent className="-ml-2 md:-ml-4">
              {data.blinds.map((blind, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <BlindCard {...blind} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <CiCircleChevRight className="text-3xl text-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CompatibleBlinds;
