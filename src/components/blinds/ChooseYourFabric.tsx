"use client";
import { useState } from "react";
import { rubik } from "@/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

interface FabricOption {
  name: string;
  color: string;
  textColor?: string;
}

type Props = {
  data: {
    heading: string;
    subHeading: string;
    blackoutHeading: string;
    lightFilteringHeading: string;
    blackoutFabrics: FabricOption[];
    lightoutFabrics: FabricOption[];
  };
};

const ChooseYourFabric: React.FC<Props> = ({ data }) => {
  const [currentFabric, setCurrentFabric] = useState<FabricOption>(
    data.blackoutFabrics[0],
  );

  return (
    <div className="global-container py-24">
      <div>
        <div className="mb-14 flex flex-col items-center">
          <h2
            className={`${rubik.className} relative z-[1] mb-6 text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:mb-8 sm:text-4xl md:mb-10 md:text-5xl`}
          >
            {data.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-lg text-[#767676] sm:text-xl md:text-2xl">
            {data.subHeading}
          </p>
        </div>
      </div>
      {/*
       * fabric color shower
       */}
      <div
        className="mx-auto mb-20 aspect-[1156/628] max-w-[1156px] rounded-[40px] sm:rounded-[55px] md:rounded-[74px]"
        style={{ background: currentFabric.color }}
      ></div>
      <div className="flex max-w-full flex-col justify-center [column-gap:30px] [row-gap:40px] xl:flex-row xl:items-end">
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            {data.blackoutHeading}
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="flex w-full items-center gap-5 [&>*:nth-child(2)]:flex-grow"
          >
            <CarouselPrevious className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <FaCircleChevronLeft />
            </CarouselPrevious>
            <CarouselContent className="">
              {data.blackoutFabrics.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 min-[650px]:basis-1/3 md:basis-1/4"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className={`flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6 ${
                        currentFabric.color === fabric.color
                          ? "border-4 border-[#FFBB3D]"
                          : ""
                      }`}
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
            <CarouselNext className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <FaCircleChevronRight />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="hidden h-full xl:block">
          <div className="h-[191px] w-[2.5px] bg-[#A39F9F]"></div>
        </div>
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            {data.lightFilteringHeading}
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="flex w-full items-center gap-5 [&>*:nth-child(2)]:flex-grow"
          >
            <CarouselPrevious className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <FaCircleChevronLeft />
            </CarouselPrevious>
            <CarouselContent className="">
              {data.lightoutFabrics.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 min-[650px]:basis-1/3 md:basis-1/4"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className={`flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6 ${
                        currentFabric.color === fabric.color
                          ? "border-4 border-[#FFBB3D]"
                          : ""
                      }`}
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
            <CarouselNext className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <FaCircleChevronRight />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourFabric;
