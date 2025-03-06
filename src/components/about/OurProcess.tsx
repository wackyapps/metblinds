import { aboutPage } from "@/configs/pages-data/about";
import { rubik } from "@/fonts";
import React from "react";

type Props = {
  data: typeof aboutPage.aboutOurProcess;
};

const OurProcess: React.FC<Props> = ({ data }) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1224px] px-4">
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h2
              className={`${rubik.className} relative z-10 text-4xl font-bold text-[#00406F]`}
            >
              {data.heading}
            </h2>
            <div className="absolute left-1/2 top-1/2 -z-10 h-[61px] w-[149px] -translate-x-1/2 -translate-y-1/2 transform rounded-[42px] bg-[#FFA600]"></div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.features.map((item) => (
            <div
              key={item.id}
              className={`group flex flex-col items-start gap-8 rounded-[35px] bg-[#F7F9FA] px-11 py-12 duration-500 hover:bg-[#FFA633] md:flex-row`}
            >
              <div className="flex-1">
                <h3
                  className={`mb-8 text-2xl font-semibold text-gray-600 duration-500 group-hover:text-white md:text-3xl ${rubik.className}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-lg text-gray-600 duration-500 group-hover:text-white md:text-xl`}
                >
                  {item.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <item.icon className="h-16 w-16 text-[#FFA633] duration-500 group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
