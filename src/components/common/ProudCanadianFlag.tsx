"use client";
import { bebasNeue } from "@/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  data: {
    heading: string;
    buttonText: string;
    buttonLink: string;
  };
};

const ProudCanadianFlag = ({ data }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate font size based on viewport width, capped at max container width
  const fontSize = windowWidth >= 1400 ? 115 : `${6.5}vw`;
  const imageSize = windowWidth >= 1400 ? 176 : `${12}vw`;
  const paddingSize = windowWidth >= 1400 ? 80 : `${5.5}vw`;

  return (
    <div className="px-3 py-[8vw] md:py-[6vw] lg:py-32">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[4vw] shadow-lg md:rounded-[5vw] lg:rounded-[92px]">
        <div className="">
          <div className="flex">
            <div className="flex-1 bg-[#EC1A23]"></div>
            <div className="flex flex-1 items-center justify-center p-[3vw] md:p-[4vw] lg:p-16">
              <img
                src={"/images/canadian-leaf.svg"}
                className="aspect-square object-contain"
                alt="canadian leaf"
                width={174}
                height={174}
                style={{ width: imageSize, height: imageSize }}
              />
            </div>
            <div className="flex-1 bg-[#EC1A23]"></div>
          </div>
          <div className="flex flex-col items-center gap-[3vw] p-[5vw] md:gap-[4vw] md:p-[6vw] lg:gap-14 lg:p-20">
            <h3
              className={`${bebasNeue.className} text-center text-[#013F68]`}
              style={{ fontSize }}
            >
              {data.heading}
            </h3>
            <Link
              href={data.buttonLink}
              className="rounded-full bg-[#EC1A23] text-white"
              style={{
                padding: `${windowWidth >= 1400 ? "16px" : "1.2vw"} ${windowWidth >= 1400 ? "48px" : "3.5vw"}`,
                fontSize: windowWidth >= 1400 ? "24px" : "1.8vw",
              }}
            >
              {data.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudCanadianFlag;
