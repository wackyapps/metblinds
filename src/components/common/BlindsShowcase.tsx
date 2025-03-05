import React from "react";
import BlindCard from "./cards/BlindCard";
import { rubik } from "@/fonts";

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
      <div className="mx-auto max-w-[1490px] px-3 md:px-5">
        {data.heading && (
          <div className="mb-14 flex justify-center">
            <div className="relative mb-2">
              <h2
                className={`${rubik.className} relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
              >
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
