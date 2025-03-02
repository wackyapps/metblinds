import { homePage } from "@/configs/pages/home";
import React from "react";

const BlindsAdvantages: React.FC<{
  data: typeof homePage.blindsAdvantages;
}> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        {/*
         * heading and subheading
         */}
        <div className="mb-14 flex flex-col items-center justify-center gap-3">
          <h2 className="text-[40px] font-semibold text-[#013F68]">
            {data.heading}
          </h2>
          <h3 className="rounded-full bg-[#FFA600] px-4 py-2 text-3xl font-semibold text-[#013F68]">
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
              className={`group flex flex-col items-start gap-5 rounded-3xl bg-[#F7F9FA] p-10 duration-500 hover:scale-105 hover:bg-[#FFA600]`}
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
