"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

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
  const blackoutFabricRef = useRef<HTMLDivElement>(null);
  const lightFilteringFabricRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blackoutFabricRef.current) {
      new Glide(blackoutFabricRef.current, {
        type: "carousel",
        perView: 3,
        gap: 0,
      }).mount();
    }
    if (lightFilteringFabricRef.current) {
      new Glide(lightFilteringFabricRef.current, {
        type: "carousel",
        perView: 3,
        gap: 0,
      }).mount();
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

      <div
        className="aspect-[1156/628] max-w-[1156px]"
        style={{ background: currentFabric.color }}
      ></div>
      <div className="grid max-w-full grid-cols-2 gap-4">
        <div ref={blackoutFabricRef} className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {blackoutFabrics.map((fabric, index) => (
                <li key={index} className="glide__slide">
                  <div
                    onClick={() => setCurrentFabric(fabric)}
                    className="mx-4 aspect-square cursor-pointer rounded-lg p-6"
                    style={{ background: fabric.color }}
                  >
                    <h3
                      className={`text-2xl font-semibold ${fabric.textColor}`}
                    >
                      {fabric.name}
                    </h3>
                    <p className={`mt-2 ${fabric.textColor}`}>Blackout</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              data-glide-dir="<"
            >
              previous
            </button>
            <button
              className="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              data-glide-dir=">"
            >
              next
            </button>
          </div>
        </div>
        <div ref={lightFilteringFabricRef} className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {lightFilteringFabrics.map((fabric, index) => (
                <li key={index} className="glide__slide">
                  <div
                    onClick={() => setCurrentFabric(fabric)}
                    className="mx-4 aspect-square cursor-pointer rounded-lg p-6"
                    style={{ background: fabric.color }}
                  >
                    <h3
                      className={`text-2xl font-semibold ${fabric.textColor}`}
                    >
                      {fabric.name}
                    </h3>
                    <p className={`mt-2 ${fabric.textColor}`}>
                      Light Filtering
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourFabric;
