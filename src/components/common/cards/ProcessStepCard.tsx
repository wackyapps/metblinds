import React from "react";

type Props = {
  icon?: any;
  isHighlighted: boolean;
  title: string;
  description: string;
  index: number;
};

const ProcessStepCard: React.FC<{ data: Props }> = ({ data }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded border-b-8 border-[#FFA600] p-14 ${data?.isHighlighted ? "bg-[#FFA600]" : "bg-white"}`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${data?.isHighlighted ? "bg-white text-[#FFA600]" : "bg-[#FFA600] text-white"}`}
      >
        {data.icon ? (
          <data.icon className="h-5 w-5" />
        ) : (
          <span className="text-3xl font-bold">{data.index}</span>
        )}
      </div>
      <h4
        className={`text-center text-3xl font-bold ${data?.isHighlighted ? "text-white" : "text-[#706F6F]"}`}
      >
        {data.title}
      </h4>
      <p
        className={`text-center ${data?.isHighlighted ? "text-white" : "text-[#878787]"}`}
      >
        {data.description}
      </p>
    </div>
  );
};

export default ProcessStepCard;
