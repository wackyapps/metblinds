import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  icon?: IconType;
  title: string;
  description: string;
  index: number;
};

const ProcessStepCard: React.FC<{ data: Props; className?: string }> = ({
  data,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `group relative flex flex-col items-center justify-center gap-8 rounded bg-transparent p-10 shadow-lg duration-500 after:absolute after:bottom-0 after:left-0 after:z-10 after:h-2 after:w-full after:bg-[#FFA600] after:duration-700 after:content-[''] hover:bg-[#FFA600]`,
        className,
      )}
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
        className={`text-center text-[22px] font-bold text-[#706F6F] duration-500 group-hover:text-white sm:text-2xl md:text-3xl`}
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
