import Image from "next/image";
import { FaHandPaper, FaCog, FaSlidersH, FaArrowsAltH } from "react-icons/fa";

const BlindsFeatures = () => {
  const features = [
    {
      icon: <FaHandPaper size={124} color="#FFA600" />,
      title: "Easy Operation",
    },
    {
      icon: <FaCog size={124} color="#FFA600" />,
      title: "Easy To Manage",
    },
    {
      icon: <FaSlidersH size={124} color="#FFA600" />,
      title: "Customizability",
    },
    {
      icon: <FaArrowsAltH size={124} color="#FFA600" />,
      title: "Versatility",
    },
  ];

  return (
    <div className="relative w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-12 text-left text-4xl font-bold text-[#FFA600]">
              HOW IT WORKS?
            </h2>
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <p className="text-lg font-medium text-[#767676]">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] lg:h-[1001px]">
              <Image
                src="/banners/home-banner-1.png"
                alt="How It Works"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsFeatures;
