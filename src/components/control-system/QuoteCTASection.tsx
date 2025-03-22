import { controlSystemPage } from "@/configs/pages-data/control-systems";
import { inter } from "@/fonts";
type Props = {
  data: typeof controlSystemPage.quoteCTASection;
};

export default function QuoteCTASection({ data }: Props) {
  return (
    <div className="px-6 py-16 sm:py-24">
      <section
        className="relative mx-auto w-full max-w-[1484px] overflow-hidden rounded-[46px] bg-orange-500 px-5 py-10 shadow-[0_4px_39px_rgba(0,0,0,0.1)] sm:rounded-[60px] sm:py-16 md:rounded-[92px] md:py-20 xl:py-24"
        style={{
          background: `linear-gradient(rgba(255, 166, 0, 0.8),rgba(255, 166, 0, 0.8)), url(${data.background})`,
        }}
      >
        {/* Semi-transparent Overlay */}
        <div className="inset-0 bg-orange-500/50"></div>

        {/* Content Container */}
        <div className="flex flex-col items-center gap-6 sm:gap-9 md:gap-12">
          {/* Text Container */}
          <div className="flex flex-col items-center gap-[30px]">
            <h2
              className={`${inter.className} max-w-[778px] text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl`}
            >
              {data.heading}
            </h2>
            <p className="w-full text-center text-base font-medium text-white sm:text-lg md:text-xl">
              {data.subHeading}
            </p>
          </div>

          {/* Button */}
          <button className="rounded-[31px] bg-white px-5 py-2 text-sm font-medium text-orange-500 sm:px-8 sm:py-3 sm:text-base md:px-11 md:py-4 md:text-lg">
            {data.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}
