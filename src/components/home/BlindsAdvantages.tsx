import React from "react";
import { rubik } from "@/fonts";
import { IconType } from "react-icons";

type Props = {
  heading: string;
  subHeading: string;
  background?: string;
  features: {
    icon: IconType;
    title: string;
    description: string;
  }[];
};

const BlindsAdvantages: React.FC<{
  data: Props;
}> = ({ data }) => {
  return (
    <div
      className="py-24"
      style={{
        background: data.background
          ? `linear-gradient(to bottom, #FFFFFF,#FFFFFF00), url(${data.background})`
          : undefined,
      }}
    >
      <div className="mx-auto max-w-[1490px] px-3 md:px-5">
        {/*
         * heading and subheading
         */}
        <div className="mb-14 flex flex-col items-center justify-center gap-3">
          <h2
            className={`${rubik.className} text-center text-[40px] font-semibold text-[#013F68]`}
          >
            {data.heading}
          </h2>
          <h3
            className={`${rubik.className} rounded-full bg-[#FFA600] px-4 py-2 text-center text-3xl font-semibold text-[#013F68]`}
          >
            {data.subHeading}
          </h3>
        </div>
        {/*
         * features
         */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className={`group flex flex-col items-start gap-5 rounded-3xl bg-[#F7F9FA] p-10 duration-500 hover:scale-110 hover:bg-[#FFA600]`}
            >
              <div>
                <feature.icon
                  className={`text-6xl text-[#FFBB3D] duration-500 group-hover:text-white`}
                />
              </div>
              <h3
                className={`text-2xl font-semibold text-[#666666] duration-500 group-hover:text-white`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-[#666666] duration-500 group-hover:text-white`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlindsAdvantages;
