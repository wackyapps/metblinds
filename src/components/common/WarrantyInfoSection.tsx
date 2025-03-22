import { contactPage } from "@/configs/pages-data/contact";
import React from "react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

type Props = {
  data: typeof contactPage.warrantyInfoSection;
  className?: string;
};
const formatTextWithBold = (text: string) => {
  return text.split(/(\*[^*]+\*)/).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <strong key={index}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

const WarrantyInfoSection = ({ data, className }: Props) => {
  const { heading, features, ctaText } = data;
  return (
    <section className={twMerge("bg-[#F7F9FA] py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-[1470px] px-4">
        <div className="flex flex-col items-center justify-center gap-10 min-[1100px]:flex-row min-[1100px]:gap-32">
          {/* 10 Year Warranty Image */}
          <div className="relative h-[530px] w-full flex-shrink-0 sm:w-[530px]">
            <img
              src="/images/ten-year-warranty.svg"
              alt="10 Year Warranty"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex max-w-[1000px] flex-col space-y-12">
            {/* Heading */}
            <h2 className={`text-3xl font-bold text-[#1E3C6F] lg:text-4xl`}>
              {heading}
            </h2>

            {/* Warranty Points */}
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
              <div className="flex flex-col space-y-6">
                {features.map((feature, index) => (
                  <div className="flex items-start space-x-5" key={index}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFA600]">
                      <HiCheck className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-lg md:text-xl">
                      {formatTextWithBold(feature)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex w-fit items-center gap-2 rounded-full bg-[#FFA600] px-5 py-2 text-lg text-white transition-colors hover:bg-[#FF9500] sm:px-8 sm:py-4">
              {ctaText}
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyInfoSection;
