import React from "react";
import BlindCard from "./cards/BlindCard";

const BlindsShowcase: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container grid grid-cols-3 gap-3">
        {data.map((blind, index) => (
          <BlindCard key={index} {...blind} />
        ))}
      </div>
    </div>
  );
};

export default BlindsShowcase;
