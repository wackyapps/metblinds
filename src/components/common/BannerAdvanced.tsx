"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
// Import core styles
// Import theme styles
import "./BannerAdvanced.css";
import Link from "next/link";
import BannerItem from "./BannerItem";

type Props = {
  banners: {
    coverImage: string;
    heading: string;
    subheading?: string;
    description: string;
    buttonText: string;
    link: string;
    bannerImage?: string;
    textPosition?: string;
  }[];
};

const BannerAdvanced: React.FC<Props> = ({ banners }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 1,
        gap: 20,
        autoplay: 10000000,
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
          {banners.map((banner, index: number) => (
            <li key={index} className="glide__slide">
              <BannerItem banner={banner} />
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation */}
    </div>
  );
};

export default BannerAdvanced;
