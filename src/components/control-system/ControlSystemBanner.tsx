import { controlSystemPage } from "@/configs/pages-data/control-systems";
import { inter } from "@/fonts";
import React from "react";

type Props = {
  data: typeof controlSystemPage.controlSystemBanner;
};

function ControlSystemBanner({ data }: Props) {
  return (
    <div
      className="min-h-[600px] w-full bg-cover md:min-h-[700px]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${data.coverImage})`,
      }}
    >
      <div className="mx-auto flex max-w-[1560px] flex-col items-start gap-[57px] px-3 py-[150px] sm:py-[180px] md:py-[227px]">
        {/* Content Section */}
        <div className="flex flex-col items-start gap-[35px]">
          <h1
            className={`${inter.className} relative z-0 text-3xl font-bold text-white after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-1/2 after:max-w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
          >
            {data.heading}
          </h1>
          <p
            className={`${inter.className} max-w-[985px] text-lg text-white sm:text-xl md:text-2xl lg:text-3xl`}
          >
            {data.subHeading}
          </p>
          {/* Button */}
          <button className="flex items-center justify-center rounded-full bg-[#FFA600] px-5 py-2 text-sm text-white sm:px-7 sm:py-2.5 sm:text-base md:px-10 md:py-4 lg:text-lg">
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlSystemBanner;
