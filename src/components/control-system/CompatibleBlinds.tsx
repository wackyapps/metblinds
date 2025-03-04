"use client";
import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"; // Import core styles
import "@glidejs/glide/dist/css/glide.theme.min.css"; // Import theme styles
import BlindCard from "../common/cards/BlindCard";

const blinds = [
  {
    title: "Zebra Blinds",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/zebra-blind.png",
    buttonText: "Learn More",
  },
  {
    title: "Roller Shades",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/roller-shades-blind.png",
    buttonText: "Learn More",
  },
  {
    title: "Solar Shades",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/solar-shades-blind.png",
    buttonText: "Learn More",
  },
  {
    title: "Drapery",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/drapery-blind.png",
    buttonText: "Learn More",
  },
  {
    title: "Trifold",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/triflod-blind.png",
    buttonText: "Learn More",
  },
  {
    title: "Honeycomb Blinds",
    description:
      "A sleek and modern look at a budget-friendly price. Its versatile, moisture-resistant design makes it perfect for any room.",
    image: "/images/blinds/honey-comb-blind.png",
    buttonText: "Learn More",
  },
];
const CompatibleBlinds = () => {
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
    <div className="py-24">
      <div className="global-container">
        <div className="mb-14 flex flex-col items-center">
          <h2 className="relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
            Compatible Blinds{" "}
          </h2>
          <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
            Corded control is compatible with multiple blind types, offering a
            traditional and effective solution.
          </p>
        </div>
        <div className="relative overflow-hidden" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {blinds.map((blind, index) => (
                <li
                  key={index}
                  className="glide__slide py-2 [height:100%_!important]"
                >
                  <BlindCard {...blind} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibleBlinds;
