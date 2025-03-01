import React from "react";
import ProcessStepCard from "./cards/ProcessStepCard";

type Props = {
  heading: string;
  subHeading: string;
  features: {
    title: string;
    description: string;
  }[];
};
const ProductionSteps: React.FC<{
  data: Props;
}> = ({ data }) => {
  return (
    <section className="global-container mx-auto px-4 py-24">
      {/* Header */}
      <div className="mb-24 flex flex-col items-center text-center">
        <div className="relative mb-3">
          <h2 className="text-center text-5xl font-bold text-[#004168]">
            {data.heading}
          </h2>
          <div
            className="absolute -top-4 left-1/2 h-[61px] w-[217px] -translate-x-1/2 rounded-[42px] bg-[#FFA600]"
            style={{ zIndex: -1 }}
          />
        </div>
        <p className="text-center text-xl text-[#767676]">{data.subHeading}</p>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.features.map((feature, index) => (
          <ProcessStepCard
            key={index}
            data={{
              ...feature,
              index,
              isHighlighted: index === 1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductionSteps;
