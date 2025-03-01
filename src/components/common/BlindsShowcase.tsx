import React from "react";
import BlindCard from "./cards/BlindCard";

type Props = {
  data: {
    heading?: string;
    blinds: {
      title: string;
      description: string;
      image: string;
      buttonText: string;
    }[];
  };
};

const BlindsShowcase: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        {data.heading && (
          <div className="mb-14 flex justify-center">
            <div className="relative mb-2">
              <div className="absolute left-[20px] top-[6px] z-0 h-[61px] w-[218px] rounded-[42px] bg-[#FFA600]" />
              <h2 className="relative z-10 text-center text-[32px] font-semibold text-[#014768]">
                {data.heading}
              </h2>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {data.blinds.map((blind, index: number) => (
            <BlindCard key={index} {...blind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlindsShowcase;
