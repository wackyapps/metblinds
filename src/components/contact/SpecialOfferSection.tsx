import { rubik } from "@/fonts";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface SpecialOfferData {
  title: string;
  mainHeading: string;
  features: string[];
  originalPrice: number;
  discountedPrice: number;
  quote: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
}

interface SpecialOfferSectionProps {
  data: SpecialOfferData;
}

const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({ data }) => {
  const {
    title,
    mainHeading,
    features,
    originalPrice,
    discountedPrice,
    quote,
    ctaText,
    imageSrc,
    imageAlt,
  } = data;

  return (
    <section className="relative bg-[#F7F9FA] py-16 lg:py-0">
      <div className="mx-auto flex max-w-[1460px] flex-col items-stretch justify-between gap-10 px-4 xl:flex-row xl:gap-20">
        <div className="flex w-full flex-col lg:gap-40 xl:w-[60%]">
          {/* Left Content */}
          <div className="flex max-w-[815px] flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:py-20">
            {/* Offer Text */}
            <div className="space-y-4">
              <h3
                className={`${rubik.className} text-2xl font-bold text-[#014168] sm:text-3xl lg:text-4xl`}
              >
                {title}
              </h3>
              <h2
                className={`${rubik.className} text-4xl font-bold leading-tight text-[#FFA600] sm:text-5xl md:text-6xl lg:text-[80px]`}
              >
                {mainHeading}
              </h2>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <ul className="list-disc ps-5">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-3 text-xl text-[#878787] lg:text-2xl"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <span className="text-2xl text-gray-500 line-through sm:text-3xl">
                  ${originalPrice}
                </span>
                <span className="text-2xl font-bold text-[#FFA600] sm:text-3xl">
                  ${discountedPrice}
                </span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-xl font-bold text-[#736D6D] sm:text-2xl">
              &ldquo;
              {quote.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < quote.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
              &#8221;
            </p>

            {/* CTA Button */}
            <div>
              <button className="flex items-center gap-2 rounded-full bg-[#FFA600] px-5 py-2.5 text-lg text-white transition-colors hover:bg-[#FF9500] sm:px-8 sm:py-4">
                {ctaText}
                <HiArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%]"></div>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[40%] xl:block">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SpecialOfferSection;
