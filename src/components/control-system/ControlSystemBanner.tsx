import { controlSystemPage } from "@/configs/pages-data/control-systems";
import { inter } from "@/fonts";
import React from "react";

type Props = {
  data: typeof controlSystemPage.controlSystemBanner;
};

function ControlSystemBanner({ data }: Props) {
  return (
    <div
      className="min-h-[600px] w-full bg-cover md:min-h-[700px] lg:min-h-[850px]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${data.coverImage})`,
      }}
    >
      <div className="mx-auto flex max-w-[1560px] flex-col items-start gap-[57px] px-3 pt-[227px]">
        {/* Content Section */}
        <div className="flex flex-col items-start gap-[35px]">
          <h1
            className={`${inter.className} relative text-5xl font-bold text-white after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] md:text-6xl lg:text-7xl`}
          >
            {data.heading}
          </h1>
          <p
            className={`${inter.className} max-w-[985px] text-xl text-white md:text-2xl lg:text-3xl`}
          >
            {data.subHeading}
          </p>
          {/* Button */}
          <button className="flex items-center justify-center rounded-full bg-orange-500 px-10 py-5 text-lg text-white">
            {data.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlSystemBanner;
