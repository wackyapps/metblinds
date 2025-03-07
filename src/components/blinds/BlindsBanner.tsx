import { inter } from "@/fonts";
import React from "react";
type Props = {
  data: {
    heading: string;
    subHeading: string;
    cta: string;
    background: string;
  };
};

const BlindsBanner: React.FC<Props> = ({ data }) => {
  const { heading, subHeading, cta, background } = data;
  return (
    <div
      className="relative w-full py-[153px]"
      style={{
        background: ` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${background})`,
      }}
    >
      {/* Content Container */}
      <div className="global-container mx-auto flex flex-col items-start gap-10 px-4">
        <div className="flex w-full flex-col gap-9">
          {/* Main Heading */}
          <h1
            className={`${inter.className} text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl`}
          >
            {heading}
          </h1>
          {/* Orange Border Frame */}
          <div className="inline-flex w-fit rounded-[21px] border border-[#FFB033] px-6 py-2 sm:px-8 md:px-10 lg:px-12">
            <span className={`${inter.className} font-medium text-[#FFB033]`}>
              {cta}
            </span>
          </div>
          {/* subHeading Text */}
          <p
            className={`${inter.className} max-w-[629px] text-lg leading-relaxed text-white`}
          >
            {subHeading}
          </p>
        </div>
        {/* CTA Button */}
        <button className="rounded-full bg-[#FFA600] px-14 py-4 text-white transition-colors hover:bg-[#FFB033]">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default BlindsBanner;
