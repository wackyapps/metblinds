"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FiArrowRight } from "react-icons/fi";
import controlSystemPages, {
  controlSystemPage,
} from "@/configs/pages-data/control-systems";
import { inter } from "@/fonts";
import Link from "next/link";
type Props = {
  data: typeof controlSystemPage.controlSystemDetails;
};

const ControlSystemDetailSlider: React.FC<Props> = ({ data }) => {
  const glideRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const glideInstance = useRef<Glide | null>(null);

  useEffect(() => {
    if (!glideRef.current) return;

    glideInstance.current = new Glide(glideRef.current, {
      type: "carousel",
      perView: 1,
      gap: 0,
      autoplay: false,
    });

    glideInstance.current.on("run", () => {
      setActiveIndex(glideInstance.current!.index);
    });

    glideInstance.current.mount();

    return () => {
      glideInstance.current?.destroy();
    };
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    glideInstance.current?.go(`=${index}`);
  };

  return (
    <div className="py-24">
      <div className="global-container mx-auto px-4">
        <div className="mb-14 space-y-4 text-center">
          <h1
            className={`${inter.className} mx-auto max-w-[700px] text-center text-4xl font-bold text-[#023D64] md:text-5xl`}
          >
            {data.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-xl text-[#767676] md:text-2xl">
            {data.subHeading}
          </p>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {controlSystemPages.map((option, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(index)}
              className={`rounded-full px-6 py-2 text-xl transition-colors ${
                activeIndex === index
                  ? "bg-[#FFA600] text-white"
                  : "border-2 border-[#FFA600] text-[#767676] hover:bg-orange-500/10 md:text-2xl"
              }`}
            >
              {option.title}
            </button>
          ))}
        </div>

        <div className="glide" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {controlSystemPages.map((option, index) => (
                <li key={index} className="glide__slide">
                  <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-16">
                    <div className="w-full space-y-10 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
                      <h2 className="text-3xl font-medium text-[#023D64] md:text-4xl">
                        {option.title}
                      </h2>
                      <p className="text-xl text-[#767676] md:text-2xl">
                        {option.description}
                      </p>
                      <Link
                        href={`/control-system/${option.slug}`}
                        className="inline-flex items-center rounded-full border-2 border-[#FFA600] px-6 py-3 text-[#FFA600] hover:bg-orange-500/10"
                      >
                        Learn More <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlSystemDetailSlider;
