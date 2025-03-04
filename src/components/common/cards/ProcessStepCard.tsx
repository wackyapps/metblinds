import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  title: string;
  description: string;
  index: number;
};

const ProcessStepCard: React.FC<{ data: Props }> = ({ data }) => {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center gap-8 rounded bg-transparent px-10 py-16 duration-500 after:absolute after:bottom-0 after:left-0 after:z-10 after:h-2 after:w-full after:bg-[#FFA600] after:duration-700 after:content-[''] hover:bg-[#FFA600]`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-[#FFA600] text-white duration-500 group-hover:bg-white group-hover:text-[#FFA600]`}
      >
        {data.icon ? (
          <data.icon className="text-3xl" />
        ) : (
          <span className="text-3xl font-bold">{data.index}</span>
        )}
      </div>
      <h4
        className={`text-center text-3xl font-bold text-[#706F6F] duration-500 group-hover:text-white`}
      >
        {data.title}
      </h4>
      <p
        className={`mb-4 text-center text-[#878787] duration-500 group-hover:text-white`}
      >
        {data.description}
      </p>
    </div>
  );
};

export default ProcessStepCard;
