"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"; // Import core styles
import "@glidejs/glide/dist/css/glide.theme.min.css"; // Import theme styles
import RatingCard from "./cards/RatingCard";
import { rubik } from "@/fonts";

import { IoStar } from "react-icons/io5";
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
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 4,
        gap: 20,
        autoplay: 200000,
        hoverpause: true,
        breakpoints: {
          4000: { perView: 4 },
          1200: { perView: 3 },
          1000: { perView: 2 },
          700: { perView: 1 },
        },
      });
      glide.mount();
      return () => {
        glide.destroy();
      };
    }
  }, []);

  return (
    <div className="py-12 md:py-24">
      <div className="mx-auto max-w-[1560px] px-3 md:px-5">
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${rubik.className} relative mb-10 text-center text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
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
        <div className="relative mb-8 overflow-hidden md:mb-16" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.reviews.map((review, index) => (
                <li
                  key={index}
                  className="glide__slide py-2 [height:100%_!important]"
                >
                  <RatingCard
                    className="h-full"
                    userName={review.userName}
                    userImage={review.userImage}
                    rating={review.rating}
                    date={review.date}
                    comment={review.comment}
                  />
                </li>
              ))}
            </ul>
          </div>
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
