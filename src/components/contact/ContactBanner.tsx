"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import "./ContactBanner.css";

type BannerData = {
  id: string;
  backgroundImage: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

type Props = { data: BannerData[] };

const ContactBanner = ({ data }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 1,
        gap: 0,
        autoplay: 5000,
        hoverpause: true,
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, []);

  return (
    <div className="relative overflow-hidden" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {data.map((banner) => (
            <li key={banner.id} className="glide__slide">
              <div
                className="relative h-[700px] bg-cover bg-center md:h-[927px]"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                    url(${banner.backgroundImage})`,
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-35"></div>

                <div className="h-full px-4">
                  <div className="contact-banner-text-container mx-auto flex h-full max-w-[1450px] flex-col items-center justify-center">
                    {/* Banner content container */}
                    <div className="flex w-full max-w-[800px] flex-col items-center gap-5 px-10 min-[900px]:px-2">
                      {/* Heading */}
                      <h1 className="text-center text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
                        {banner.heading}
                      </h1>

                      {/* Decorative element */}
                      <img
                        src="/svgs/divider-icon.svg"
                        className="h-2 w-20"
                        alt=""
                      />

                      {/* Description */}
                      <p className="text-center text-base text-white md:text-lg">
                        {banner.description}
                      </p>

                      {/* Button */}
                      <Link
                        href={banner.buttonLink}
                        className="rounded-full bg-[#FFA600] px-8 py-4 text-white transition-colors duration-300 hover:bg-[#FFB733]"
                      >
                        {banner.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation arrows */}
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="absolute left-1 top-1/2 z-10 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFA600] text-white min-[900px]:left-5"
          data-glide-dir="<"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-1 top-1/2 z-10 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFA600] text-white min-[900px]:right-5"
          data-glide-dir=">"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ContactBanner;
