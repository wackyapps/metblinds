import React from "react";
import { IconType } from "react-icons";
import { FaClipboardCheck, FaTools, FaClock, FaMedal } from "react-icons/fa";

interface MissionFeature {
  icon: IconType;
  title: string;
}

const missionFeatures: MissionFeature[] = [
  {
    icon: FaClipboardCheck,
    title: "FREE ESTIMATES",
  },
  {
    icon: FaTools,
    title: "UPGRADE AS NEEDED",
  },
  {
    icon: FaClock,
    title: "INSTALLED IN 8-10 BUSINESS DAYS",
  },
  {
    icon: FaMedal,
    title: "10 YEAR WARRANTY",
  },
];

const MissionSection = () => {
  return (
    <section className="pb-16">
      <div className="global-container">
        <div className="relative z-[3] mx-auto -mt-16 max-w-7xl rounded-[32px] bg-white p-16 shadow-[0_4px_38.8px_rgba(0,0,0,0.1)]">
          <div className="mb-20 flex flex-col items-center">
            <div className="mb-16 text-center">
              <div className="relative inline-block">
                <h2 className="relative z-10 text-4xl font-bold text-[#00406F]">
                  OUR MISSION
                </h2>
                <div className="absolute left-[60%] top-1/2 z-0 h-[61px] w-[149px] -translate-x-1/2 -translate-y-1/2 transform rounded-[42px] bg-[#FFA600]"></div>
              </div>
            </div>
            <p className="max-w-4xl text-center text-lg text-[#767676]">
              To bring high-quality, stylish, and innovative window coverings
              that improve privacy, energy efficiency, and interior aesthetics,
              all while ensuring ease of use through smart automation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
            {missionFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5">
                  <feature.icon className="text-primary h-24 w-24 text-[#013F68]" />
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
