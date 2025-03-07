"use client";
import { useState } from "react";
import { rubik } from "@/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface FabricOption {
  name: string;
  color: string;
  textColor?: string;
}

const blackoutFabrics: FabricOption[] = [
  {
    name: "Moonlit Taupe",
    color: "linear-gradient(to bottom, #87847E, #4C4940)",
    textColor: "text-white",
  },
  {
    name: "Stormy Driftwood",
    color: "linear-gradient(to bottom, #88705B, #4E403D)",
    textColor: "text-white",
  },
  {
    name: "Desert Sandstone",
    color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
    textColor: "text-white",
  },
  {
    name: "Alabaster Mist",
    color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
    textColor: "text-white",
  },
];

const lightFilteringFabrics: FabricOption[] = [
  { name: "Moonlit Taupe", color: "#838B92", textColor: "text-white" },
  { name: "Stormy Driftwood", color: "#D9DAD7", textColor: "text-[#464644]" },
  { name: "Desert Sandstone", color: "#464644", textColor: "text-white" },
  { name: "Alabaster Mist", color: "#C9B692", textColor: "text-white" },
];

const ChooseYourFabric = () => {
  const [currentFabric, setCurrentFabric] = useState<FabricOption>(
    blackoutFabrics[0],
  );

  return (
    <div className="global-container py-24">
      <div>
        <div className="mb-14 flex flex-col items-center">
          <h2 className="relative z-[1] mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
            CHOOSE YOUR FABRIC{" "}
          </h2>
          <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
            Choose your fabric to give your new zebra blinds light filtering or
            blackout properties to suit your preferences for each space in your
            home. Enhance your privacy in coveted spaces like bedrooms and
            bathrooms. Bring more light into the heart of your home with light
            filtering fabrics to showcase your decor etc.{" "}
          </p>
        </div>
      </div>
      {/*
       * fabric color shower
       */}
      <div
        className="mx-auto mb-20 aspect-[1156/628] max-w-[1156px] rounded-[74px]"
        style={{ background: currentFabric.color }}
      ></div>
      <div className="flex max-w-full flex-col justify-center [column-gap:30px] [row-gap:40px] xl:flex-row xl:items-stretch">
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            Blackout Fabrics
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blackoutFabrics.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 min-[650px]:basis-1/3 md:basis-1/4"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className="flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6"
                      style={{ background: fabric.color }}
                    >
                      <h3
                        className={`${rubik.className} text-lg font-semibold ${fabric.textColor}`}
                      >
                        {fabric.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            Light Filtering Fabrics
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {lightFilteringFabrics.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 min-[650px]:basis-1/3 md:basis-1/4"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className="flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6"
                      style={{ background: fabric.color }}
                    >
                      <h3
                        className={`${rubik.className} text-lg font-semibold ${fabric.textColor}`}
                      >
                        {fabric.name}
                      </h3>
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

export default ChooseYourFabric;
