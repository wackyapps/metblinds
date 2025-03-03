// components/SafetyMaintenanceSection.jsx
export default function SafetyMaintenanceSection() {
  const features = [
    {
      title: "Child-Safe Design",
      description:
        "Corded blinds come with a built-in safety lock to prevent accidents.",
      image: "/svgs/child-safe.svg",
    },
    {
      title: "Easy Cleaning",
      description: "Wipe with a dry cloth or light vacuuming for dust removal.",
      image: "/svgs/easy-cleaning.svg",
    },
    {
      title: "Durability Check",
      description: "Inspect the cord tension regularly to avoid fraying.",
      image: "/svgs/durability-check.svg",
    },
  ];

  return (
    <div className="safety-maintenance-section px-4 py-24">
      {/* Title Section */}
      <div className="mb-14 flex flex-col items-center">
        <h2 className="relative mb-10 text-5xl font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]">
          Safety & Maintenance{" "}
        </h2>
        <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Feature Item 1: Child-Safe */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item flex flex-col items-center space-y-4"
          >
            <img
              src={feature.image}
              alt="Child-Safe Design"
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
