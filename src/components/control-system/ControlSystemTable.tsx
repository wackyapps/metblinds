import { controlSystemPage } from "@/configs/pages-data/control-systems";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { inter } from "@/fonts";

type Props = {
  data: typeof controlSystemPage.controlSystemTable;
};

const ControlSystemTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-12 flex flex-col justify-center">
          <h2
            className={`${inter.className} relative mx-auto mb-6 max-w-[700px] text-center text-3xl text-[#023D64] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h2>
          <p className="mx-auto max-w-[1100px] text-center text-sm text-[#767676] sm:text-xl md:text-[22px]">
            {data.subHeading}
          </p>
        </div>

        {/* Table replacement with divs */}
        <div className="overflow-x-auto rounded-[32px] shadow-md">
          <div className="min-w-[1500px] bg-white">
            {/* Header */}
            <div className="grid grid-cols-7 overflow-hidden rounded-[32px] bg-[#FDBA3C] px-14">
              <div className="p-6 text-left text-lg font-medium uppercase tracking-wider text-white">
                Blinds
              </div>
              {data.controlOptions.map((option) => (
                <div
                  key={option}
                  className="whitespace-nowrap p-6 text-center text-lg font-medium uppercase tracking-wider text-white"
                >
                  {option}
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-200 rounded-b-[32px] bg-white px-14 py-8">
              {data.blindsDetails.map((system, index) => (
                <div
                  key={system.blindType}
                  className={`grid grid-cols-7 ${index === data.blindsDetails.length - 1 ? "rounded-b-[32px]" : ""}`}
                >
                  <div className="p-4 text-xl font-medium text-[#504D4D]">
                    {system.blindType}
                  </div>
                  {data.controlOptions.map((option) => (
                    <div
                      key={option}
                      className="flex items-center justify-center p-4"
                    >
                      {system.controls[
                        option as keyof typeof system.controls
                      ] ? (
                        <FaCheckCircle className="text-3xl text-amber-400" />
                      ) : (
                        <RiCloseCircleFill className="text-3xl text-gray-500" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlSystemTable;
