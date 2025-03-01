import React from "react";
import BlindCard from "./cards/BlindCard";

type Props = {
  data: {
    title: string;
    description: string;
    image: string;
    buttonText: string;
  }[];
};

const BlindsShowcase: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.map((blind, index: number) => (
          <BlindCard key={index} {...blind} />
        ))}
      </div>
    </div>
  );
};

export default BlindsShowcase;
