import React from "react";

const BlindsBanner = () => {
  return (
    <div
      className="relative w-full py-[153px]"
      style={{
        background:
          " linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/banners/about-banner-img.png')",
      }}
    >
      {/* Content Container */}
      <div className="global-container mx-auto flex flex-col items-start gap-10 px-4">
        <div className="flex w-full flex-col gap-9">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Blackout Zebra Blinds Canada Trusts!
          </h1>
          {/* Orange Border Frame */}
          <div className="inline-flex w-fit rounded-[21px] border border-[#FFB033] px-6 py-2 sm:px-8 md:px-10 lg:px-12">
            <span className="font-medium text-[#FFB033]">
              Our Premium Blinds Collection
            </span>
          </div>
          {/* Description Text */}
          <p className="max-w-[629px] text-lg leading-relaxed text-white">
            Zebra blinds offer a perfect combination of style, functionality,
            and durability. Designed to provide optimal light control, privacy,
            and energy efficiency, these blinds are an ideal choice for both
            modern and classic interiors.
          </p>
        </div>
        {/* CTA Button */}
        <button className="rounded-[19px] bg-[#FFA600] px-14 py-4 text-white transition-colors hover:bg-[#FFB033]">
          Request free Quote
        </button>
      </div>
    </div>
  );
};

export default BlindsBanner;
