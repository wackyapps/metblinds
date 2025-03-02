import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  isHighlighted: boolean;
  title: string;
  description: string;
  index: number;
};

const ProcessStepCard: React.FC<{ data: Props }> = ({ data }) => {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center gap-3 rounded bg-[#FFA600] p-14 duration-500 after:absolute after:bottom-0 after:left-0 after:z-10 after:h-0 after:w-full after:bg-[#FFA600] after:duration-700 after:content-[''] hover:bg-transparent hover:after:h-2`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#FFA600] duration-500 group-hover:bg-[#FFA600] group-hover:text-white`}
      >
        {data.icon ? (
          <data.icon className="h-5 w-5" />
        ) : (
          <span className="text-3xl font-bold">{data.index}</span>
        )}
      </div>
      <h4
        className={`text-center text-3xl font-bold text-white duration-500 group-hover:text-[#706F6F]`}
      >
        {data.title}
      </h4>
      <p
        className={`text-center text-white duration-500 group-hover:text-[#878787]`}
      >
        {data.description}
      </p>
    </div>
  );
};

export default ProcessStepCard;
