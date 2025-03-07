const BlindsFeatures = () => {
  const features = [
    {
      icon: "/svgs/easy-operation.svg",
      title: "Easy Operation",
    },
    {
      icon: "/svgs/easy-to-manage.svg",
      title: "Easy to Manage",
    },
    {
      icon: "/svgs/customizability.svg",
      title: "Customizability",
    },
    {
      icon: "/svgs/versatility.svg",
      title: "Versatility",
    },
  ];

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-16">
        <div className="flex flex-col items-stretch gap-16 lg:flex-row">
          <div className="w-full py-10 lg:w-1/2">
            <h2 className="mb-12 text-left text-4xl font-bold text-[#FFA600]">
              HOW IT WORKS?
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={124}
                      height={124}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-medium text-[#767676]">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden w-full lg:block lg:w-1/2">
            <img
              src="/banners/home-banner-1.png"
              alt="How It Works"
              className="relative h-full min-h-[500px] w-full rounded-tl-[32px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsFeatures;
