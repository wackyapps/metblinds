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
      className="relative w-full py-[153px] md:py-[183px] lg:py-[213px]"
      style={{
        background: ` linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${background})`,
        backgroundSize: 'cover',       // Ensures image covers the entire element
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents image from repeating
        backgroundAttachment: 'fixed'  // Optional: makes image fixed during scroll
      }}
    >
      {/* Content Container */}
      <div className="mx-auto flex max-w-[1550px] flex-col items-start gap-6 px-4 sm:gap-8 md:gap-10">
        <div className="flex w-full flex-col gap-9">
          {/* Main Heading */}
          <h1
            className={`${inter.className} text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            {heading}
          </h1>
          {/* Orange Border Frame */}
          {/* <div className="inline-flex w-fit rounded-[21px] border border-[#FFB033] px-6 py-2 text-sm sm:px-8 sm:text-base md:px-10 md:text-[22px] md:text-lg lg:px-12">
            <span className={`${inter.className} font-medium text-[#FFB033]`}>
              {cta}
            </span>
          </div> */}
          {/* subHeading Text */}
          <p
            className={`${inter.className} max-w-[629px] text-base leading-relaxed text-white sm:text-lg md:text-[22px]`}
          >
            {subHeading}
          </p>
        </div>
        {/* CTA Button */}
        <button className="rounded-[19.46px] bg-[#FFA600] px-6 py-2 text-white transition-colors hover:bg-[#FFB033] sm:px-9 sm:py-3 md:px-14 md:py-4 md:text-lg">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default BlindsBanner;
