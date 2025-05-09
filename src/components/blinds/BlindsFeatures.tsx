type Feature = {
  icon: string;
  title: string;
};

type Props = {
  data: {
    heading: string;
    image: string;
    features: Feature[];
  };
};

const BlindsFeatures = ({ data }: Props) => {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-[1240px] px-4 py-16">
        <div className="flex flex-col items-stretch gap-16 lg:flex-row">
          <div className="w-full py-10 ps-4 sm:ps-6 lg:w-1/2">
            <h2 className="mb-12 text-left text-4xl font-bold text-[#FFA600] max-lg:text-center">
              {data.heading}
            </h2>
            <div className="grid grid-cols-2 [column-gap:80px] [row-gap:36px] lg:pr-10">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 lg:items-start"
                >
                  <div className="flex-shrink-0 items-center">
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
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-full lg:block lg:w-[45%] 2xl:w-1/2">
        <img
          src={data.image}
          alt="Contact section image"
          width={900}
          height={1200}
          className="relative h-full min-h-[500px] w-full rounded-tl-[32px] object-cover"
        />
      </div>
    </div>
  );
};

export default BlindsFeatures;
