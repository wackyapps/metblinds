import React from "react";

function ControlSystemBanner() {
  return (
    <div
      className="min-h-[600px] w-full md:min-h-[700px] lg:min-h-[850px]"
      style={{
        background:
          " linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/banners/about-banner-img.png')",
      }}
    >
      <div className="global-container flex flex-col items-start gap-[57px] pt-[227px]">
        {/* Content Section */}
        <div className="flex flex-col items-start gap-[35px]">
          <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Introducing Smart Control Systems
          </h1>
          <p className="max-w-[985px] text-xl text-white md:text-2xl lg:text-3xl">
            Discover the perfect control system for your blinds, from classic
            corded options to smart home integrations. Choose the best fit for
            convenience, safety, and style.
          </p>
          {/* Button */}
          <button className="flex h-[66px] items-center justify-center rounded-full bg-orange-500 px-10 text-lg text-white">
            Request free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlSystemBanner;
