import React from "react";
import ProcessStepCard from "./cards/ProcessStepCard";

type Props = { heading: string; subHeading: string; features: any[] };
const ProductionSteps: React.FC<{
  data: Props;
}> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-20 flex flex-col items-center gap-4">
          <h2 className="relative text-center text-4xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600]">
            {data.heading}
          </h2>
          <h3 className="text-center text-xl text-[#767676]">
            {data.subHeading}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {data.features.map((feature, index) => (
            <ProcessStepCard
              key={index}
              data={{
                ...feature,
                index,
                isHighlighted: index == 1 ? true : false,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionSteps;
