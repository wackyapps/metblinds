"use client";
import { useState, useEffect, useRef } from "react";
import { rubik } from "@/fonts";
import Glide from "@glidejs/glide";

interface FabricOption {
  name: string;
  color: string;
  textColor?: string;
}

const blackoutFabrics: FabricOption[] = [
  {
    name: "Moonlit Taupe",
    color: "linear-gradient(to bottom, #87847E, #4C4940)",
    textColor: "text-white",
  },
  {
    name: "Stormy Driftwood",
    color: "linear-gradient(to bottom, #88705B, #4E403D)",
    textColor: "text-white",
  },
  {
    name: "Desert Sandstone",
    color: "linear-gradient(to bottom, #C5BDA4, #5F5B4F)",
    textColor: "text-white",
  },
  {
    name: "Alabaster Mist",
    color: "linear-gradient(to bottom, #C4C1B0, #908E79)",
    textColor: "text-white",
  },
];

const lightFilteringFabrics: FabricOption[] = [
  { name: "Moonlit Taupe", color: "#838B92", textColor: "text-white" },
  { name: "Stormy Driftwood", color: "#D9DAD7", textColor: "text-[#464644]" },
  { name: "Desert Sandstone", color: "#464644", textColor: "text-white" },
  { name: "Alabaster Mist", color: "#C9B692", textColor: "text-white" },
];

const ChooseYourFabric = () => {
  const [currentFabric, setCurrentFabric] = useState<FabricOption>(
    blackoutFabrics[0],
  );
  const blackoutGlideRef = useRef<HTMLDivElement>(null);
  const lightFilteringGlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blackoutGlideRef.current) {
      const blackoutGlide = new Glide(blackoutGlideRef.current, {
        type: "carousel",
        perView: 4,
        gap: 16,
        breakpoints: {
          1024: {
            perView: 2,
          },
          768: {
            perView: 1,
          },
        },
        autoplay: false,
        hoverpause: true,
      });
      blackoutGlide.mount();

      return () => {
        blackoutGlide.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (lightFilteringGlideRef.current) {
      const lightFilteringGlide = new Glide(lightFilteringGlideRef.current, {
        type: "carousel",
        perView: 4,
        gap: 16,
        breakpoints: {
          1024: {
            perView: 2,
          },
          768: {
            perView: 1,
          },
        },
        autoplay: false,
        hoverpause: true,
      });
      lightFilteringGlide.mount();

      return () => {
        lightFilteringGlide.destroy();
      };
    }
  }, []);

  return (
    <div className="global-container py-24">
      <div>
        <div className="mb-14 flex flex-col items-center">
          <h2 className="relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
            CHOOSE YOUR FABRIC{" "}
          </h2>
          <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
            Choose your fabric to give your new zebra blinds light filtering or
            blackout properties to suit your preferences for each space in your
            home. Enhance your privacy in coveted spaces like bedrooms and
            bathrooms. Bring more light into the heart of your home with light
            filtering fabrics to showcase your decor etc.{" "}
          </p>
        </div>
      </div>
      {/*
       * fabric color shower
       */}
      <div
        className="mx-auto mb-20 aspect-[1156/628] max-w-[1156px] rounded-[74px]"
        style={{ background: currentFabric.color }}
      ></div>
      <div className="grid max-w-full grid-cols-1 [column-gap:10px] [row-gap:40px] xl:grid-cols-2">
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            Blackout Fabrics
          </div>
          <div className="glide w-full" ref={blackoutGlideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {blackoutFabrics.map((fabric, index) => (
                  <li key={index} className="glide__slide">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className="flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6"
                      style={{ background: fabric.color }}
                    >
                      <h3
                        className={`${rubik.className} text-lg font-semibold ${fabric.textColor}`}
                      >
                        {fabric.name}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-11">
          <div
            className={`${rubik.className} text-center text-2xl font-semibold text-[#023D64]`}
          >
            Light Filtering Fabrics
          </div>
          <div className="glide w-full" ref={lightFilteringGlideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {lightFilteringFabrics.map((fabric, index) => (
                  <li key={index} className="glide__slide">
                    <div
                      onClick={() => setCurrentFabric(fabric)}
                      className="flex aspect-[154/184] max-w-[160px] cursor-pointer flex-col items-center justify-end rounded-[34px] p-6"
                      style={{ background: fabric.color }}
                    >
                      <h3
                        className={`${rubik.className} text-lg font-semibold ${fabric.textColor}`}
                      >
                        {fabric.name}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourFabric;
