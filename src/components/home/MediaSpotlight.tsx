import { homePage } from "@/configs/home";
import React from "react";

const MediaSpotlight: React.FC<{ data: typeof homePage.mediaSpotlight }> = ({
  data,
}) => {
  return (
    <div
      className="py-32"
      style={{
        background: `linear-gradient(#F7F9FA, #f7f9fa75), 
              url(${data.background})`,
      }}
    >
      <div className="global-container">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="max-w-[850px] text-center text-5xl font-semibold text-[#013F68]">
            {data.heading}
          </h2>
          <h4 className="max-w-[670px] text-center text-xl text-[#474747]">
            {data.subHeading}
          </h4>
          <button
            className={`rounded-full bg-[#FFA600] px-6 py-2 text-2xl text-white`}
          >
            <span> {data.buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSpotlight;
