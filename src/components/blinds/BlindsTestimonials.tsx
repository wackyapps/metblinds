"use client";
import { rubik } from "@/fonts";
import ReviewCard from "../common/cards/ReviewCard";
import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";

type Review = {
  userImage: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
};
type Props = {
  data: {
    heading: string;
    reviews: Review[];
  };
};

const BlindsTestimonials = ({ data }: Props) => {
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (glideRef.current) {
      glideInstance.current = new Glide(glideRef.current, {
        type: "carousel",
        perView: 3,
        gap: 20,
        breakpoints: {
          768: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
        autoplay: 3000,
        hoverpause: true,
      });

      glideInstance.current.mount();
    }

    return () => {
      if (glideInstance.current) {
        glideInstance.current.destroy();
        glideInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col items-center">
          <h2
            className={`${rubik.className} relative z-[1] mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
        </div>
        <div ref={glideRef} className="glide px-4">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {data.reviews.map((review, index) => (
                <li key={index} className="glide__slide">
                  <ReviewCard
                    userImage={review.userImage}
                    userName={review.userName}
                    rating={review.rating}
                    date={review.date}
                    comment={review.comment}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsTestimonials;
