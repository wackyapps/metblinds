import { roboto } from "@/fonts";

type Props = {
  data: {
    heading: string;
    subHeading: string;
    buttonText: string;
  };
};

const ChooseControlSystem = ({ data }: Props) => {
  return (
    <div>
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-10 py-24">
        <h2
          className={`${roboto.className} relative z-[1] text-[32px] font-semibold text-[#013F68] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600]`}
        >
          {data.heading}
        </h2>
        <p className="max-w-[1300px] text-center text-xl text-[#767676] sm:text-2xl">
          {data.subHeading}
        </p>
        <button
          className={`rounded-full bg-[#FFA600] px-8 py-2.5 text-2xl text-white`}
        >
          <span> {data.buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default ChooseControlSystem;
