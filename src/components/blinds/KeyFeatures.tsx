import { rubik } from "@/fonts";
import React from "react";
import { FaCheck } from "react-icons/fa6";

type Props = {
  data: {
    heading: string;
    image: string;
    features: { title: string; description: string }[];
  };
};
const KeyFeatures: React.FC<Props> = ({ data }) => {
  return (
    <section className={`py-16 xl:py-0`}>
      <div className="global-container mx-auto px-4">
        <div className="flex flex-col items-center justify-start gap-20 min-[1100px]:flex-row">
          <div className="relative hidden min-h-[400px] max-w-[894px] overflow-hidden rounded-3xl bg-[#D9D9D9] xl:block">
            <img
              src={data.image} // Add your image path here
              alt="Contact background"
              width={900}
              height={1200}
              className="top-[5px] aspect-[630/788] h-full max-h-[788px] w-full object-cover"
            />
          </div>

          <div className="flex max-w-[1000px] flex-col items-start space-y-12 md:space-y-[73px]">
            {/* Heading */}
            <h2
              className={`${rubik.className} relative z-0 w-auto text-left text-3xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
            >
              {data.heading}
            </h2>
            {/* Warranty Points */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col space-y-12 md:space-y-[73px]">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFA600]">
                      <FaCheck className="h-5 w-5 text-white" />
                    </div>
                    <div className="w-full break-words text-2xl text-[#717171]">
                      <h3 className="inline-block font-semibold text-black">
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
      </div>
    </section>
  );
};

export default KeyFeatures;
