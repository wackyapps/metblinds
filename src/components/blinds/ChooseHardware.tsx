"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { roboto } from "@/fonts";

interface HardwareOption {
  id: string;
  image: string;
  name: string;
}

const hardwareOptions: HardwareOption[] = [
  {
    id: "1",
    image: "/images/hardwares/hardware-1.png",
    name: "Antique Brass",
  },
  {
    id: "2",
    image: "/images/hardwares/hardware-2.png",
    name: "Satin Nickel",
  },
  {
    id: "3",
    image: "/images/hardwares/hardware-3.png",
    name: "Oil Rubbed Bronze",
  },
  {
    id: "4",
    image: "/images/hardwares/hardware-4.png",
    name: "Polished Chrome",
  },
];

const ChooseHardware = () => {
  const [selectedImage, setSelectedImage] = useState(hardwareOptions[0].image);
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
        <div className="order-2 h-[493px] overflow-hidden rounded-[49px] xl:order-1 xl:w-[828px] xl:flex-1">
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
                Choose Your Hardware
              </h2>
            </div>
            <p className="text-lg text-[#767676]">
              We offer a variety of metal colours for hardware to ensure your
              new blinds will fit seamlessly into your existing home design.
            </p>
          </div>

          {/* Glide Slider */}
          <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {hardwareOptions.map((option) => (
                  <li key={option.id} className="glide__slide">
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
