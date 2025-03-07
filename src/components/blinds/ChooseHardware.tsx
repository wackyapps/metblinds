"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";

import { roboto } from "@/fonts";

interface HardwareOption {
  image: string;
  name: string;
}

type Props = {
  data: {
    heading: string;
    subHeading: string;
    hardwareOptions: HardwareOption[];
  };
};

const ChooseHardware = ({ data }: Props) => {
  const [selectedImage, setSelectedImage] = useState(
    data.hardwareOptions[0].image,
  );
  const glideRef = useRef<HTMLDivElement>(null);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (glideRef.current) {
      glideInstance.current = new Glide(glideRef.current, {
        type: "slider",
        perView: 4,
        gap: 19,
        breakpoints: {
          600: {
            perView: 3,
          },
          400: {
            perView: 2,
          },
          300: {
            perView: 1,
          },
        },
      });

      glideInstance.current.mount();

      return () => {
        if (glideInstance.current) {
          glideInstance.current.destroy();
        }
      };
    }
  }, []);

  const handleSlideClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="py-24">
      <div className="mx-auto flex max-w-[1560px] flex-col items-center gap-[90px] px-3 sm:px-6 xl:flex-row">
        {/* Main Image */}
        <div className="order-2 h-[493px] w-full overflow-hidden rounded-[49px] xl:order-1 xl:w-[828px] xl:flex-1">
          <img
            src={selectedImage}
            alt="Selected Hardware"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Slider Section */}
        <div className="order-1 w-full space-y-[26px] xl:order-2 xl:w-[673px] xl:flex-shrink">
          {/* Title Section */}
          <div className="space-y-[18px]">
            <div className="relative">
              <h2
                className={` ${roboto.className} relative text-2xl font-semibold text-[#023D64] md:text-3xl`}
              >
                {data.heading}
              </h2>
            </div>
            <p className="text-lg text-[#767676]">{data.subHeading}</p>
          </div>

          {/* Glide Slider */}
          <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {data.hardwareOptions.map((option, index) => (
                  <li key={index} className="glide__slide">
                    <div
                      className={`h-[184px] w-[154px] cursor-pointer overflow-hidden rounded-[34px] transition-all duration-300 ${
                        selectedImage === option.image
                          ? "border-3 border-[#FFA600]"
                          : ""
                      }`}
                      onClick={() => handleSlideClick(option.image)}
                    >
                      <img
                        src={option.image}
                        alt={option.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseHardware;
