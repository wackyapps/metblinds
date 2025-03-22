"use client";
import { useState } from "react";
import { roboto } from "@/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

interface HardwareOption {
  image: string;
  name: string;
}

type Props = {
  data: {
    heading: string;
    subHeading: string;
    hardwareOptions: HardwareOption[];
  };
};

const ChooseHardware = ({ data }: Props) => {
  const [selectedImage, setSelectedImage] = useState(
    data.hardwareOptions[0].image,
  );

  const handleSlideClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="py-24">
      <div className="mx-auto flex max-w-[1560px] flex-col items-center gap-[90px] px-3 sm:px-6 xl:flex-row">
        {/* Main Image */}
        <div className="order-2 h-[493px] w-full overflow-hidden rounded-[49px] xl:order-1 xl:w-[828px] xl:flex-1">
          <img
            src={selectedImage}
            alt="Selected Hardware"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Slider Section */}
        <div className="order-1 w-full space-y-[26px] xl:order-2 xl:w-[673px] xl:flex-shrink">
          {/* Title Section */}
          <div className="space-y-[18px]">
            <div className="relative flex items-center justify-start">
              <h2
                className={` ${roboto.className} relative z-0 text-3xl font-semibold text-[#023D64] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl`}
              >
                {data.heading}
              </h2>
            </div>
            <p className="text-lg text-[#767676]">{data.subHeading}</p>
          </div>

          {/* Carousel */}
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
            <CarouselContent className="-ml-4">
              {data.hardwareOptions.map((option, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 min-[650px]:basis-1/3 md:basis-1/4 xl:basis-1/3"
                >
                  <div className="flex justify-center">
                    <div
                      className={`h-[184px] w-[154px] cursor-pointer overflow-hidden rounded-[34px] transition-all duration-300 ${
                        selectedImage === option.image
                          ? "border-3 border-[#FFA600]"
                          : ""
                      }`}
                      onClick={() => handleSlideClick(option.image)}
                    >
                      <img
                        src={option.image}
                        alt={option.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="!static rounded-full bg-white text-3xl text-[#FFBB3D] duration-300 hover:opacity-100">
              <FaCircleChevronRight />
            </CarouselNext>{" "}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ChooseHardware;
