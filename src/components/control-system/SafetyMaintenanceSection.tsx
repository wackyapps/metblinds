// components/SafetyMaintenanceSection.jsx
import { inter } from "@/fonts";
type Props = {
  data: {
    heading: string;
    subHeading: string;
    features: {
      title: string;
      description: string;
      image: string;
    }[];
  };
};
export default function SafetyMaintenanceSection({ data }: Props) {
  return (
    <div className="safety-maintenance-section px-4 py-24">
      {/* Title Section */}
      <div className="mb-14 flex flex-col items-center">
        <h2
          className={`${inter.className} relative mb-10 text-5xl font-bold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
        >
          {data.heading}
        </h2>
        <p className="max-w-[1300px] text-center text-xl font-medium text-[#767676] sm:text-2xl">
          {data.subHeading}
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid mx-auto mt-12 grid max-w-[1430px] grid-cols-1 gap-8 md:grid-cols-3">
        {/* Feature Item 1: Child-Safe */}
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="feature-item flex flex-col items-center space-y-4"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="h-32 w-32"
            />
            <h4 className="text-center text-xl font-semibold text-[#666666] md:text-2xl">
              {feature.title}
            </h4>
            <p className="text-center text-lg text-[#767676] md:text-xl">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
