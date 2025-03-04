"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { WiDaySunny } from "react-icons/wi";
import { MdSecurity, MdOutlineDesignServices } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { IconType } from "react-icons";

interface Feature {
  icon: IconType;
  title: string;
  description?: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: WiDaySunny,
    title: "Superior Light Control",
    description: "Adjust natural light to your preference",
    image: "/images/contact-section-image-1.png",
  },
  {
    icon: MdSecurity,
    title: "Enhanced Privacy",
    description: "Maintain your privacy with adjustable blinds",
    image: "/images/contact-section-image-1.png",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Modern Aesthetic",
    description: "Enhance your interior with stylish designs",
    image: "/images/contact-section-image-1.png",
  },
  {
    icon: BsLightningChargeFill,
    title: "Energy Efficient",
    description: "Save energy with optimized light control",
    image: "/images/contact-section-image-1.png",
  },
];

const WhyChooseBlindsSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    glideInstance.current = new Glide(sliderRef.current, {
      type: "carousel",
      perView: 1,
      gap: 0,
      autoplay: 5000,
    });

    glideInstance.current.on("run.after", () => {
      setActiveIndex(glideInstance.current!.index);
    });

    glideInstance.current.mount();

    return () => {
      glideInstance.current?.destroy();
    };
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    glideInstance.current?.go(`=${index}`);
  };

  return (
    <div className="w-full py-16">
      <div className="global-container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-16 px-8 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <h2 className="relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
                Why Choose Zebra Blinds
              </h2>
            </div>

            {/* Features Rendering Section */}
            <div className="flex flex-col items-stretch gap-2">
              {features.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center gap-5 rounded-xl px-5 py-3 transition duration-300 ${
                      isActive ? "scale-105 bg-[#FFAD33] text-white" : ""
                    }`}
                    onClick={() => handleFeatureClick(index)}
                  >
                    <div className="">
                      <feature.icon
                        className={`h-full w-full text-6xl ${
                          isActive ? "text-white" : "text-gray-500"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          isActive ? "text-primary" : "text-gray-600"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p
                          className={`mt-1 ${isActive ? "text-white" : "text-gray-600"} `}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Slider */}
          <div className="aspect-[749/753] h-full w-full lg:w-1/2">
            <div className="glide h-full" ref={sliderRef}>
              <div className="glide__track h-full" data-glide-el="track">
                <ul className="glide__slides h-full">
                  {features.map((feature, index) => (
                    <li key={index} className="glide__slide h-full">
                      <div className="relative h-full">
                        <img
                          width={1000}
                          height={1000}
                          src={feature.image}
                          alt={feature.title}
                          className="h-full w-full rounded-[42px] object-cover"
                        />
                        {/* Dots Indicator */}
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                          {features.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => handleFeatureClick(i)}
                              className={`h-3 w-3 rounded-full transition-all ${
                                activeIndex === i
                                  ? "w-6 bg-gray-500"
                                  : "bg-gray-300"
                              }`}
                            ></button>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBlindsSlider;
