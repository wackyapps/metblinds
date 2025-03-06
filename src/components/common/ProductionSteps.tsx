import React from "react";
import ProcessStepCard from "./cards/ProcessStepCard";
import { IconType } from "react-icons";
import { rubik } from "@/fonts";

type Props = {
  heading: string;
  subHeading: string;
  features: {
    title: string;
    description: string;
    icon?: IconType;
  }[];
};
const ProductionSteps: React.FC<{
  data: Props;
}> = ({ data }) => {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24">
      {/* Header */}

      <div className="mb-14 flex flex-col items-center">
        <h2
          className={`${rubik.className} relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
        >
          {data.heading}
        </h2>
        <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
          {data.subHeading}
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.features.map((feature, index) => (
          <ProcessStepCard
            key={index}
            data={{
              ...feature,
              index: index + 1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductionSteps;
