import React from "react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import Image from "next/image";

type Props = {
  data: {
    heading: string;
    features: { title: string; description: string }[];
  };
};
const WhyCooseUS: React.FC<Props> = ({ data }) => {
  return (
    <section className={`py-16 xl:py-0`}>
      <div className="global-container mx-auto px-4">
        <div className="flex flex-col items-center justify-start gap-20 min-[1100px]:flex-row">
          <div className="relative hidden min-h-[400px] max-w-[894px] overflow-hidden rounded-3xl bg-[#D9D9D9] xl:block">
            <Image
              src="/images/contact-section-image-1.png" // Add your image path here
              alt="Contact background"
              width={900}
              height={1200}
              className="top-[5px] aspect-[630/788] h-full max-h-[788px] w-full object-cover"
            />
          </div>

          <div className="flex max-w-[1000px] flex-col space-y-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#1E3C6F] lg:text-4xl">
              {data.heading}
            </h2>
            {/* Warranty Points */}
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
              <div className="flex flex-col space-y-6">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                      <HiCheck className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-lg">
                      <h3 className="inline-block font-semibold">
                        {feature.title}
                      </h3>
                      {" - "}
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex w-fit items-center gap-2 rounded-full bg-[#FFA600] px-8 py-4 text-lg text-white transition-colors hover:bg-[#FF9500]">
              Request a free estimate
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCooseUS;
