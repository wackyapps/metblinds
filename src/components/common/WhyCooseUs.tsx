import React from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  data: {
    heading: string;
    features: { title: string; description: string }[];
  };
};
const WhyCooseUS: React.FC<Props> = ({ data }) => {
  return (
    <section className={`relative py-16 xl:py-0`}>
      <div className="absolute left-0 top-0 hidden h-full min-h-[400px] w-[45%] overflow-hidden rounded-r-3xl bg-[#D9D9D9] min-[1100px]:block xl:w-1/2">
        <img
          src="/images/contact-section-image-1.png" // Add your image path here
          alt="Contact background"
          width={900}
          height={1200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto flex max-w-[1560px] flex-col items-center justify-start gap-20 px-4 min-[1100px]:flex-row">
        <div className="w-1/2"></div>

        <div className="flex max-w-[1000px] flex-col space-y-12 min-[1100px]:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#FFA600] lg:text-4xl">
            {data.heading}
          </h2>
          {/* Warranty Points */}
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
            <div className="flex flex-col space-y-12">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFA600]">
                    <FaCheck className="h-5 w-5 text-white" />
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
        </div>
      </div>
    </section>
  );
};

export default WhyCooseUS;
