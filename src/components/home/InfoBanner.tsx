import { homePage } from "@/configs/home";
import React from "react";

const InfoBanner: React.FC<{ data: typeof homePage.infoBanner }> = ({
  data,
}) => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage: `linear-gradient(#013F68CC, #013F68CC), 
    url(${data.backgroundImage})`,
      }}
    >
      <div className="global-container">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="mb-3 max-w-[1000px] text-center text-5xl text-[#FFA600]">
            {" "}
            {data.heading}{" "}
          </h2>
          {data.points.map((point, index) => (
            <h4
              key={index}
              className="max-w-[1000px] text-center text-xl font-medium text-white"
            >
              {point}
            </h4>
          ))}
          <button
            className={`rounded-full bg-[#FFA600] px-8 py-3 text-xl text-white`}
          >
            <span> Request a Free Quote </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
