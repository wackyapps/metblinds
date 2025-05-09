"use client";
import React, { useRef } from "react";
import BlindCard from "./cards/BlindCard";
import { rubik } from "@/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: {
    heading?: string;
    blinds: {
      title: string;
      description: string;
      image: string;
      buttonText: string;
    }[];
  };
  isSlider?: boolean;
};

const BlindsShowcase: React.FC<Props> = ({ data, isSlider = false }) => {
  const swiperRef = useRef<any>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1300px] px-3 md:px-5">
        {data.heading && (
          <div className="mb-14 flex justify-center">
            <div className="relative mb-2">
              <h2
                className={`${rubik.className} relative z-0 mb-10 text-center text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
              >
                {data.heading}
              </h2>
            </div>
          </div>
        )}
        {isSlider ? (
          <div className="relative mb-8 flex items-center gap-3 sm:gap-6 md:mb-16 md:gap-9 lg:gap-12 xl:gap-16">
            <button
              className="text-3xl text-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl"
              onClick={handlePrevSlide}
            >
              <CiCircleChevLeft />
            </button>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={3}
              breakpoints={{
                1: {
                  slidesPerView: 1,
                },
                800: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              className="w-full"
            >
              {data.blinds.map((blind, index) => (
                <SwiperSlide key={index}>
                  <BlindCard {...blind} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="text-3xl text-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl"
              onClick={handleNextSlide}
            >
              <CiCircleChevRight />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.blinds.map((blind, index: number) => (
              <BlindCard key={index} {...blind} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlindsShowcase;
