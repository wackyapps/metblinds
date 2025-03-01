"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"; // Import core styles
import "@glidejs/glide/dist/css/glide.theme.min.css"; // Import theme styles
import RatingCard from "./cards/RatingCard";
import Image from "next/image";
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
        perView: 1,
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
    <div className="py-24">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="relative mb-10 text-center text-[40px] font-semibold text-[#013F68]">
            {data.heading}
          </h2>
        </div>
        {/*
         * showing the rating
         */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <div className="mb-3 flex items-center gap-5">
              <Image
                src={"/google.svg"}
                alt="google image"
                width={131}
                height={50}
              />
              <h4 className="text-[28px]">Rating</h4>
            </div>
            {/*
             * showing the stars and ratings
             */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <IoStar color="#FFA600" className="text-3xl" key={index} />
                  );
                })}
              </div>
              <div>
                <h6 className="text-center text-lg">
                  4.9 rating of 89 reviews
                </h6>
              </div>
            </div>
          </div>
          {/* right side rating button  */}
          <div>
            <button
              className={`rounded-xl bg-[#FFA600] px-8 py-3 text-xl text-white`}
            >
              <span> Post A review </span>
            </button>
          </div>
        </div>
        {/* showing the customer reviews */}
        {/* <div className="mb-16 flex items-center justify-center gap-4"> */}
        <div className="relative mb-16 overflow-hidden" ref={sliderRef}>
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
            className={`rounded-full bg-[#FFA600] px-8 py-3 text-xl text-white`}
          >
            <span> See more {">"} </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
