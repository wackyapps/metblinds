import { bebasNeue } from "@/fonts";

const ProudCanadianFlag = () => {
  return (
    <div className="py-32">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[92px] px-3 shadow-lg">
        <div className="">
          <div className="flex">
            <div className="flex-1 bg-[#EC1A23]"></div>
            <div className="flex flex-1 items-center justify-center p-16">
              <img
                src={"/images/canadian-leaf.svg"}
                className="aspect-square w-32 object-contain sm:w-36 md:w-40 lg:w-44"
                alt="canadian leaf"
                width={174}
                height={174}
              />
            </div>
            <div className="flex-1 bg-[#EC1A23]"></div>
          </div>
          <div className="flex flex-col items-center gap-14 p-20">
            <h3
              className={`${bebasNeue.className} xl:text-10xl text-center text-5xl text-[#013F68] sm:text-7xl md:text-8xl lg:text-9xl`}
            >
              PROUD CANADIAN BLINDS
            </h3>
            <button className="rounded-full bg-[#EC1A23] px-12 py-4 text-2xl font-medium text-white">
              GIVE US A CALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudCanadianFlag;
