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

// Just using string type for image paths
type FabricOption = string;

type Props = {
  data: {
    heading: string;
    subHeading: string;
    blackoutHeading: string;
    lightFilteringHeading: string;
    blackoutFabrics: string[];
    lightoutFabrics: string[];
  };
};

const ChooseYourFabric = ({ data }: Props) => {
  // Set default fabric image
  const [currentFabric, setCurrentFabric] = useState<string>(
    data.blackoutFabrics?.[0] || "/placeholder.jpg"
  );

  return (
    <div className="global-container py-16 px-4">
      <div>
        <div className="mb-10 flex flex-col items-center">
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
      
      <div className="mx-auto mb-16 aspect-[16/9] max-w-[850px] rounded-lg overflow-hidden">
        <img 
          src={currentFabric} 
          alt="Selected fabric" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex max-w-full flex-col justify-center [column-gap:30px] [row-gap:40px] xl:flex-row xl:items-end">
        {/* Blackout fabrics section */}
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
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="flex w-full items-center gap-2"
          >
            <CarouselPrevious className="!static h-10 w-10 rounded-full bg-white text-2xl text-[#FFBB3D] duration-300 hover:opacity-100 border border-gray-200">
              <FaCircleChevronLeft />
            </CarouselPrevious>
            <CarouselContent className="gap-2 ml-0">
              {data.blackoutFabrics?.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto pl-1"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className={`w-[158px] h-[148px] cursor-pointer rounded-md overflow-hidden ${
                        currentFabric === fabric
                          ? "border-2 border-[#FFBB3D]"
                          : ""
                      }`}
                    >
                      {/* Fabric image without text */}
                      <img 
                        src={fabric} 
                        alt="Fabric option" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!static h-10 w-10 rounded-full bg-white text-2xl text-[#FFBB3D] duration-300 hover:opacity-100 border border-gray-200">
              <FaCircleChevronRight />
            </CarouselNext>
          </Carousel>
        </div>
        
        {/* Divider for desktop */}
        <div className="hidden h-full xl:block">
          <div className="h-[191px] w-[2.5px] bg-[#A39F9F]"></div>
        </div>
        
        {/* Light filtering fabrics section */}
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
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="flex w-full items-center gap-2"
          >
            <CarouselPrevious className="!static h-10 w-10 rounded-full bg-white text-2xl text-[#FFBB3D] duration-300 hover:opacity-100 border border-gray-200">
              <FaCircleChevronLeft />
            </CarouselPrevious>
            <CarouselContent className="gap-2 ml-0">
              {data.lightoutFabrics?.map((fabric, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto pl-1"
                >
                  <div className="flex justify-center">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className={`w-[158px] h-[148px] cursor-pointer rounded-md overflow-hidden ${
                        currentFabric === fabric
                          ? "border-2 border-[#FFBB3D]"
                          : ""
                      }`}
                    >
                      {/* Fabric image without text */}
                      <img 
                        src={fabric} 
                        alt="Fabric option" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!static h-10 w-10 rounded-full bg-white text-2xl text-[#FFBB3D] duration-300 hover:opacity-100 border border-gray-200">
              <FaCircleChevronRight />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourFabric;