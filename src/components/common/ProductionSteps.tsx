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
          className={`${rubik.className} relative mb-10 text-center text-5xl text-[28px] font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-3xl`}
        >
          {data.heading}
        </h2>
        <p className="max-w-[1300px] text-center text-lg text-[#767676] sm:text-xl md:text-2xl">
          {data.subHeading}
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="flex flex-wrap justify-center">
        {data.features.map((feature, index) => (
          <div className="basis-full p-4 md:basis-1/2 lg:basis-1/3" key={index}>
            <ProcessStepCard
              className="h-full basis-full md:basis-1/2 lg:basis-1/3"
              data={{
                ...feature,
                index: index + 1,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductionSteps;
