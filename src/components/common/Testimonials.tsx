"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./cards/ReviewCard";
import { rubik } from "@/fonts";
import { IoStar } from "react-icons/io5";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

type Props = {
  data: {
    heading: string;
    reviews: {
      userImage: string;
      rating: number;
      date: string;
      comment: string;
      userName: string;
    }[];
  };
};

const Testimonials: React.FC<Props> = ({ data }) => {
  const swiperRef = React.useRef<any>(null);

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
    <div className="py-12 md:py-14">
      <div className="mx-auto max-w-[1560px] px-3 md:px-5">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${rubik.className} relative z-0 mb-10 text-center text-3xl font-semibold text-[#013F68] after:absolute after:left-[27%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h2>
        </div>
        {/* showing the rating */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-16 md:flex-row md:gap-0">
          <div>
            <div className="mb-3 flex items-center gap-3 md:gap-5">
              <img
                src={"/google.svg"}
                alt="google image"
                width={100}
                height={38}
                className="md:h-[50px] md:w-[131px]"
              />
              <h4 className="text-xl md:text-[28px]">Rating</h4>
            </div>
            {/* showing the stars and ratings */}
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <IoStar
                      color="#FFA600"
                      className="text-2xl md:text-3xl"
                      key={index}
                    />
                  );
                })}
              </div>
              <div>
                <h6 className="text-center text-base md:text-lg">
                  4.9 rating of 89 reviews
                </h6>
              </div>
            </div>
          </div>
          {/* right side rating button  */}
          <div>
            <button
              className={`w-full rounded-xl bg-[#FFA600] px-6 py-2 text-base text-white md:w-auto md:px-8 md:py-3 md:text-xl`}
            >
              <span> Post A review </span>
            </button>
          </div>
        </div>
        {/* showing the customer reviews */}
        <div className="relative mb-8 flex h-[500px] items-center gap-3 sm:gap-6 md:mb-16 md:gap-9 lg:gap-12 xl:gap-16">
          <button
            className="text-3xl text-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl"
            onClick={handlePrevSlide}
          >
            <CiCircleChevLeft />
          </button>{" "}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 200000,
              disableOnInteraction: false,
            }}
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
            className="h-full"
          >
            {data.reviews.map((review, index) => (
              <SwiperSlide className="h-full" key={index}>
                <ReviewCard
                  userName={review.userName}
                  userImage={review.userImage}
                  rating={review.rating}
                  date={review.date}
                  comment={review.comment}
                  fromGoogle={true}
                />
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
        <div className="flex justify-center">
          <button
            className={`rounded-full bg-[#FFA600] px-6 py-2 text-base text-white md:px-8 md:py-3 md:text-xl`}
          >
            <span> See more {">"} </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
