import React from "react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import Image from "next/image";

type Props = {
  isBigImage?: boolean;
};
const WhyCooseUS: React.FC<Props> = ({ isBigImage }) => {
  return (
    <section
      className={`bg-[#F7F9FA] ${isBigImage ? "py-16 xl:py-0" : "py-16 lg:py-24"}`}
    >
      <div className="global-container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 min-[1100px]:flex-row">
          {/* 10 Year Warranty Image */}
          {isBigImage ? (
            <div className="relative hidden min-h-[400px] max-w-[894px] overflow-hidden bg-[#D9D9D9] xl:block">
              <Image
                src="/images/contact-section-image-1.png" // Add your image path here
                alt="Contact background"
                width={900}
                height={1200}
                className="top-[5px] h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="relative h-[530px] w-[530px] flex-shrink-0">
              <Image
                src="/images/ten-year-warranty.svg"
                alt="10 Year Warranty"
                fill
                className="h-full w-full object-contain"
                priority
              />
            </div>
          )}
          <div className="flex max-w-[1000px] flex-col space-y-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#1E3C6F] lg:text-4xl">
              WHY CHOOSE US?
            </h2>

            {/* Warranty Points */}
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
              <div className="flex flex-col space-y-6">
                {/* Warranty Point 1 */}
                <div className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">
                    <strong>High-Quality Materials</strong>
                    {" - "}
                    Our blinds are made from durable, premium fabrics for
                    long-lasting performance.
                  </p>
                </div>

                {/* Warranty Point 2 */}
                <div className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">
                    <strong>Customization at Its Best</strong> {" - "}A variety
                    of colors, patterns, and materials to match your unique
                    style.
                  </p>
                </div>

                {/* Warranty Point 3 */}
                <div className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">
                    <strong>Expert Installation</strong> {" - "} Hassle-free,
                    professional installation is included with every purchase.
                  </p>
                </div>

                {/* Warranty Point 4 */}
                <div className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">
                    <strong>Smart Home Integration</strong> {" - "} Control your
                    blinds remotely with a smartphone, remote, or voice
                    commands.
                  </p>
                </div>
                {/* Warranty Point 4 */}
                <div className="flex items-start space-x-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFA600]">
                    <HiCheck className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg">
                    <strong>Customer Satisfaction Guaranteed</strong> {" - "} We
                    strive to provide a seamless experience from selection to
                    installation.
                  </p>
                </div>
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
