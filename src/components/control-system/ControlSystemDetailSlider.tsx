"use client";
import { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FiArrowRight } from "react-icons/fi";

interface ControlOption {
  name: string;
  description: string;
}

const controlOptions: ControlOption[] = [
  {
    name: "Corded binds",
    description:
      "Corded blinds offer a traditional yet practical solution for window coverings. Choose from durable materials like PVC, fabric, or stainless steel cords, all encased in a MET Sleeve for longevity. Our corded blinds come with a child-lock safety mechanism to ensure a secure environment for kids and pets.",
  },
  {
    name: "Cordless Blinds",
    description:
      "Eliminate the hassle of dangling cords with our advanced gravity control cordless system. Designed for smooth, precise operation, these blinds adjust effortlessly with a gentle push or pull. With almost no failure rate and no need for spring readjustments, cordless blinds provide a streamlined, hassle-free experience.",
  },
  {
    name: "Manual Wand",
    description:
      "“Simple, functional, and easy to use for everyday convenience.”For those who prefer a hands-on approach, our manual wand system provides seamless, direct control over your blinds. Available in various sizes, these wands offer effortless adjustments. Special extendable wands with hooks are available for skylight blinds, ensuring easy operation even for high windows.",
  },
  {
    name: "Electric Wand",
    description:
      "“A budget-friendly step towards automation.” Upgrade to an electric wand for an affordable yet sophisticated touch. Available in different colors and sizes, these wands add motorized convenience at a fraction of the cost of full automation. Perfect for those looking for ease of use without a major investment in smart home technology.",
  },
  {
    name: "Motorized Control",
    description:
      "“Experience next-level convenience with remote and wall switch controls.” Our motorized blinds come equipped with high-quality motors backed by a 5-year warranty, ensuring reliability and smooth operation. Control them via remote or a wall switch, making them ideal for large windows, offices, or modern homes.",
  },
  {
    name: "Smart Control",
    description:
      "“Complete control at your fingertips—anytime, anywhere.” Take automation to the next level with our smart control system. Use our intuitive mobile app to adjust your blinds remotely, set schedules, and sync with sunrise or sunset timings. Seamlessly integrate with your smart home ecosystem, including Alexa, Google Home, and other IoT devices, allowing voice-activated control for the ultimate hands-free experience.",
  },
];

const ControlSystemDetailSlider = () => {
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
          <h1 className="text-4xl font-bold text-[#023D64] md:text-5xl">
            Explore Control Options for Your Blinds
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-[#767676] md:text-2xl">
            Discover a range of control systems designed for convenience,
            safety, and style. Select the perfect option for your home.
          </p>
        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {controlOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(index)}
              className={`rounded-full px-6 py-2 text-xl transition-colors ${
                activeIndex === index
                  ? "bg-[#FFA600] text-white"
                  : "border-2 border-[#FFA600] text-[#767676] hover:bg-orange-500/10 md:text-2xl"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        <div className="glide" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {controlOptions.map((option, index) => (
                <li key={index} className="glide__slide">
                  <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-16">
                    <div className="w-full space-y-10 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
                      <h2 className="text-3xl font-medium text-[#023D64] md:text-4xl">
                        {option.name}
                      </h2>
                      <p className="text-xl text-[#767676] md:text-2xl">
                        {option.description}
                      </p>
                      <button className="flex items-center rounded-full border-2 border-[#FFA600] px-6 py-3 text-[#FFA600] hover:bg-orange-500/10">
                        Learn More <FiArrowRight className="ml-2" />
                      </button>
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
