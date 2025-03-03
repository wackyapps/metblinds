import React from "react";
import { FaArrowUp, FaLock, FaSun } from "react-icons/fa";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  isFilled?: boolean;
}

interface HowItWorksData {
  heading: string;
  subHeading: string;
  steps: Step[];
  image: {
    src: string;
    alt: string;
  };
}

const howItWorksData: HowItWorksData = {
  heading: "How It Works",
  subHeading: "Operating Corded Blinds in 3 Simple Steps",
  steps: [
    {
      icon: <FaArrowUp className="text-2xl text-white" />,
      title: "Adjust the Cord",
      description: "Pull the cord up or down to position the blinds as needed.",
      isFilled: true,
    },
    {
      icon: <FaLock className="text-2xl text-[#FFA600]" />,
      title: "Lock in Place",
      description:
        "Secure the blinds with the MET Sleeve & bottom safety lock.",
      isFilled: false,
    },
    {
      icon: <FaSun className="text-2xl text-[#FFA600]" />,
      title: "Enjoy Precise Light Control",
      description: "Adjust the tilt for privacy & lighting preferences.",
      isFilled: false,
    },
  ],
  image: {
    src: "/images/white-blind.png",
    alt: "How It Works",
  },
};

const StepItem: React.FC<Step> = ({
  icon,
  title,
  description,
  isFilled = false,
}) => (
  <div className="flex flex-row items-center gap-4 sm:gap-6">
    <div className="relative mx-auto sm:mx-0">
      <div className="h-[98px] w-[98px] rounded-full bg-[#F7F9FA]"></div>
      <div
        className={`absolute inset-[10px] flex items-center justify-center rounded-full ${
          isFilled ? "bg-[#FFA600]" : "border-8 border-[#FFA600]"
        }`}
      >
        {icon}
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-xl text-[#767676]">
        <h3 className="inline-block text-[22px] font-semibold text-black">
          {title}
        </h3>{" "}
        {" - "}
        {description}
      </div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-[#F7F9FA] px-4 py-24">
      <section className="global-container flex w-full flex-col items-center px-4 py-8 sm:py-16">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center">
          <h2 className="relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
            {howItWorksData.heading}
          </h2>
          <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
            {howItWorksData.subHeading}
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-[110px]">
          {/* Left Column - Steps */}
          <div className="flex w-full flex-col gap-10 lg:w-1/2">
            {howItWorksData.steps.map((step, index) => (
              <StepItem key={index} {...step} />
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[42px] sm:h-[400px] lg:h-[626px]">
              <img
                src={howItWorksData.image.src}
                alt={howItWorksData.image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
