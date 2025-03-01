import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const SpecialOfferSection = () => {
  return (
    <section className="bg-[#F7F9FA] py-16 lg:py-0">
      <div className="global-container mx-auto px-4">
        <div className="flex flex-col items-stretch justify-between gap-10 lg:flex-row lg:gap-40">
          {/* Left Content */}
          <div className="flex max-w-[815px] flex-col space-y-12 lg:py-20">
            {/* Offer Text */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#014168] lg:text-4xl">
                SPECIAL OFFER:
              </h3>
              <h2 className="text-4xl font-bold leading-tight text-[#FFA600] lg:text-6xl">
                40% OFF Custom Blinds
              </h2>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <ul className="list-disc ps-3">
                <li className="mb-3 text-xl text-[#878787] lg:text-2xl">
                  FREE Window Blinds Installation
                </li>
                <li className="mb-3 text-xl text-[#878787] lg:text-2xl">
                  {" "}
                  Discounted Motorization Upgrade
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <span className="text-3xl text-gray-500 line-through">
                  $250
                </span>
                <span className="text-3xl font-bold text-[#FFA600]">$200</span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-2xl font-bold text-[#736D6D]">
              {`"Mention this offer when you request an estimate (phone, form, or
              email) & save!"`}
            </p>

            {/* CTA Button */}
            <div>
              <button className="flex items-center gap-2 rounded-full bg-[#FFA600] px-8 py-4 text-lg text-white transition-colors hover:bg-[#FF9500]">
                Request a free estimate
                <HiArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[400px] w-full lg:w-[747px]">
            <Image
              src="/images/white-blind.png"
              alt="Special Offer Blinds"
              fill
              className="h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
