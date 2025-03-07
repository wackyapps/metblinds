"use client";
import ReviewCard from "../common/cards/ReviewCard";
import Glide from "@glidejs/glide";
import { useEffect, useRef } from "react";

const BlindsTestimonials = () => {
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<Glide | null>(null);

  const reviews = [
    {
      userImage: "/profile-image.jpg",
      userName: "Maria arnold",
      rating: 4,
      date: "2023-10-12",
      comment: "Great product, highly recommend!",
    },
    {
      userImage: "/profile-image.jpg",
      userName: "John Smith",
      rating: 5,
      date: "2023-11-15",
      comment:
        "Excellent service and quality blinds. The installation team was very professional.",
    },
    {
      userImage: "/profile-image.jpg",
      userName: "Sarah Johnson",
      rating: 5,
      date: "2023-11-01",
      comment:
        "Love my new motorized blinds! They work perfectly and look amazing.",
    },
    {
      userImage: "/profile-image.jpg",
      userName: "Michael Chen",
      rating: 4,
      date: "2023-10-25",
      comment:
        "Very happy with the zebra blinds. Great quality and reasonable prices.",
    },
    {
      userImage: "/profile-image.jpg",
      userName: "Emma Wilson",
      rating: 5,
      date: "2023-10-18",
      comment:
        "The smart blinds are a game changer! Customer service was outstanding.",
    },
  ];

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
          <h2 className="relative z-[1] mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
            CUSTOMER REVIEWS{" "}
          </h2>
        </div>
        <div ref={glideRef} className="glide px-4">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {reviews.map((review, index) => (
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
