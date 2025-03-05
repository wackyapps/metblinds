import { aboutPage } from "@/configs/pages-data/about";
import { rubik } from "@/fonts";
import React from "react";

type Props = {
  data: typeof aboutPage.aboutMission;
};

const MissionSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="pb-16">
      <div className="global-container">
        <div className="relative z-[3] mx-auto -mt-16 max-w-7xl rounded-[32px] bg-white px-10 py-14 shadow-[0_4px_38.8px_rgba(0,0,0,0.1)] sm:px-16 md:px-24">
          <div className="mb-20 flex flex-col items-center">
            <div className="mb-16 text-center">
              <div className="relative inline-block">
                <h2
                  className={`${rubik.className} relative z-10 text-4xl font-bold text-[#00406F] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
                >
                  {data.heading}
                </h2>
              </div>
            </div>
            <p className="max-w-4xl text-center text-lg text-[#767676]">
              {data.subHeading}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <feature.icon className="h-24 w-24 text-[#013F68]" />
                </div>
                <h3 className="text-sm font-medium text-gray-600">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
