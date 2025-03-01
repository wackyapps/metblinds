import { homePage } from "@/configs/pages/home";
import Image from "next/image";
import React from "react";

const OurPartners: React.FC<{ data: typeof homePage.ourPartners }> = ({
  data,
}) => {
  return (
    <div className="py-32">
      <div className="global-container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="relative mb-10 text-center text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-full after:w-[50%] after:rounded-full after:bg-[#FFA600]">
            {data.heading}
          </h2>
          <div className="flex flex-wrap items-center justify-center [column-gap:10px] [row-gap:40px]">
            {data.partners.map((partner, index) => (
              <div key={index} className="rounded-full border px-6 py-4">
                <Image src={partner.image} width={135} height={25} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
