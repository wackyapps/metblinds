export default function QuoteCTASection() {
  return (
    <div className="px-6 py-24">
      <section
        className="relative mx-auto w-full max-w-[1484px] overflow-hidden rounded-[92px] bg-orange-500 px-5 py-16 shadow-[0_4px_39px_rgba(0,0,0,0.1)] md:py-20 xl:py-24"
        style={{
          background:
            " linear-gradient(rgba(255, 166, 0, 0.8),rgba(255, 166, 0, 0.8)), url('/banners/about-banner-img.png')",
        }}
      >
        {/* Semi-transparent Overlay */}
        <div className="inset-0 bg-orange-500/50"></div>

        {/* Content Container */}
        <div className="flex flex-col items-center gap-12">
          {/* Text Container */}
          <div className="flex flex-col items-center gap-[30px]">
            <h2 className="max-w-[778px] text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Need Help Choosing the Right Control System?
            </h2>
            <p className="w-full text-center text-lg text-white md:text-xl">
              Contact us for expert recommendations and customized solutions
            </p>
          </div>

          {/* Button */}
          <button className="rounded-[31px] bg-white px-8 py-4 text-lg font-medium text-orange-500">
            Request a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
