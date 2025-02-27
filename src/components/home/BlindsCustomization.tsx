import { homePage } from "@/configs/home";
import Image from "next/image";

const BlindsCustomization: React.FC<{
  data: typeof homePage.blindsCustomization;
}> = ({ data }) => {
  return (
    <div
      className="bg-[#F7F9FA] bg-cover bg-bottom py-20"
      style={{
        background: `linear-gradient(#F7F9FA, #f7f9fa75), 
              url(${data.background})`,
      }}
    >
      <div className="global-container">
        <div className="flex items-center justify-between gap-16">
          {/**
           * features container
           */}
          <div className="grid max-w-[500px] grid-cols-2 [column-gap:10px] [row-gap:30px]">
            {data.features.map((feature, index) => (
              <div className="flex flex-col items-center gap-3" key={index}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="aspect-square"
                />
                <h2 className="text-center font-semibold">{feature.title}</h2>
              </div>
            ))}
          </div>
          {/**
           * text details container
           */}
          <div className="flex max-w-[720px] flex-col items-stretch gap-4">
            <h4 className="text-2xl text-[#FFA600]">{data.subHeading}</h4>
            <h2 className="text-[40px] font-semibold text-[#1E3C6F]">
              {data.heading}
            </h2>
            <div>
              <button
                className={`w-auto gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white`}
              >
                <span> {data.buttonText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlindsCustomization;
