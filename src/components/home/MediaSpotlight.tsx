import { homePage } from "@/configs/pages-data/home";
import React from "react";

const formatTextWithBold = (text: string) => {
  return text.split(/(\*[^*]+\*)/).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <strong key={index}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

const MediaSpotlight: React.FC<{ data: typeof homePage.mediaSpotlight }> = ({
  data,
}) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: `linear-gradient(to bottom, #FFFFFF 30%, #FFFFFF00), url(${data.background})`,
      }}
    >
      <div className="global-container">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-7 md:gap-10">
          <h2 className="max-w-[850px] text-center text-2xl text-[#013F68] sm:text-3xl md:text-5xl">
            {formatTextWithBold(data.heading)}
          </h2>
          <h4 className="max-w-[670px] text-center text-lg text-[#474747] sm:text-xl">
            {data.subHeading}
          </h4>
          <button
            className={`rounded-full bg-[#FFA600] px-4 py-2.5 text-lg text-white sm:px-8 sm:text-xl md:text-2xl`}
          >
            <span> {data.buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSpotlight;
