import React from "react";
import { FaComments } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const processData = [
  {
    id: 1,
    title: "Free Consultation",
    description: "Our experts help you choose the best blinds for your space.",
    icon: FaComments,
    bgColor: "bg-[#FFA633]",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Custom Manufacturing",
    description: "Each blind is made to your specifications.",
    icon: MdFactory,
    bgColor: "bg-[#F7F9FA]",
    textColor: "text-gray-600",
  },
  {
    id: 3,
    title: "Professional Installation",
    description: "We ensure a perfect fit and seamless operation.",
    icon: BsTools,
    bgColor: "bg-[#F7F9FA]",
    textColor: "text-gray-600",
  },
  {
    id: 4,
    title: "After-Sales Support",
    description: "We provide guidance on maintenance and smart features.",
    icon: BiSupport,
    bgColor: "bg-[#F7F9FA]",
    textColor: "text-gray-600",
  },
];

const OurProcess = () => {
  return (
    <section className="py-24">
      <div className="global-container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h2 className="relative z-10 text-4xl font-bold text-[#00406F]">
              Our Process
            </h2>
            <div className="absolute left-1/2 top-1/2 -z-10 h-[61px] w-[149px] -translate-x-1/2 -translate-y-1/2 transform rounded-[42px] bg-[#FFA600]"></div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 md:grid-cols-2">
          {processData.map((item) => (
            <div
              key={item.id}
              className={`group flex flex-col items-start gap-8 rounded-[35px] bg-[#F7F9FA] p-12 duration-500 hover:bg-[#FFA633] md:flex-row`}
            >
              <div className="flex-1">
                <h3
                  className={`mb-8 text-3xl font-semibold text-gray-600 duration-500 group-hover:text-white`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-lg text-gray-600 duration-500 group-hover:text-white`}
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
