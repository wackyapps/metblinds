"use client";
import { rubik } from "@/fonts";
import ReviewCard from "../common/cards/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

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
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex flex-col items-center">
          <h2
            className={`${rubik.className} relative z-[1] mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
          >
            {data.heading}
          </h2>
        </div>
        <div className="relative flex items-center gap-3">
          <button className="text-6xl text-[#FFA600]" onClick={handlePrevSlide}>
            <CiCircleChevLeft />
          </button>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
            className="h-full w-full"
          >
            {data.reviews.map((review, index) => (
              <SwiperSlide className="h-full" key={index}>
                <ReviewCard
                  userImage={review.userImage}
                  userName={review.userName}
                  rating={review.rating}
                  date={review.date}
                  comment={review.comment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="text-6xl text-[#FFA600]" onClick={handleNextSlide}>
            <CiCircleChevRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlindsTestimonials;
