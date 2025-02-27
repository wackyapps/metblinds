import { homePage } from "@/configs/home";
import React from "react";

const BlindsAdvantages: React.FC<{
  data: typeof homePage.blindsAdvantages;
}> = ({ data }) => {
  return (
    <div className="py-20">
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
        <div className="grid grid-cols-4 gap-4">
          {data.features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-start gap-5 rounded-3xl p-10 ${feature.isHighlited ? "bg-[#FFA600]" : "bg-[#F7F9FA]"}`}
            >
              <div>
                <feature.icon
                  className={`h-10 w-10 ${feature.isHighlited ? "text-white" : "text-[#FFBB3D]"}`}
                />
              </div>
              <h3
                className={`text-2xl font-semibold ${feature.isHighlited ? "text-white" : "text-[#666666]"}`}
              >
                {feature.title}
              </h3>
              <p
                className={` ${feature.isHighlited ? "text-white" : "text-[#666666]"}`}
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
