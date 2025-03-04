import { homePage } from "@/configs/pages-data/home";

const BlindsCustomization: React.FC<{
  data: typeof homePage.blindsCustomization;
}> = ({ data }) => {
  return (
    <div
      className="bg-[#F7F9FA] bg-cover bg-bottom py-10 md:py-20"
      style={{
        background: `linear-gradient(#F7F9FA, #f7f9fa75), 
              url(${data.background})`,
      }}
    >
      <div className="global-container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
          {/**
           * features container
           */}
          <div className="grid grid-cols-2 gap-5 md:max-w-[500px] md:[column-gap:10px] md:[row-gap:30px]">
            {data.features.map((feature, index) => (
              <div
                className="flex flex-col items-center gap-3 text-center"
                key={index}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="aspect-square w-[60px] md:w-[100px]"
                />
                <h2 className="text-sm font-semibold md:text-base">
                  {feature.title}
                </h2>
              </div>
            ))}
          </div>
          {/**
           * text details container
           */}
          <div className="flex flex-col items-center text-center md:max-w-[400px] md:items-stretch md:text-left lg:max-w-[600px] xl:max-w-[720px]">
            <h4 className="text-xl text-[#FFA600] md:text-2xl">
              {data.subHeading}
            </h4>
            <h2 className="mt-2 text-2xl font-semibold text-[#1E3C6F] md:mt-4 md:text-3xl lg:text-4xl xl:text-[40px] xl:[line-height:1.5]">
              {data.heading}
            </h2>
            <div className="mt-4">
              <button className="w-auto gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white transition-all hover:bg-[#e69500]">
                <span>{data.buttonText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsCustomization;
