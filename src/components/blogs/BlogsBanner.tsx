import React from "react";

const BlogsBanner = () => {
  return (
    <div
      className="relative w-full py-32"
      style={{
        background:
          " linear-gradient(rgba(1, 63, 104, 0.7), rgba(1, 63, 104, 0.7)), url('/banners/about-banner-img.png')",
      }}
    >
      {/* Content */}
      <div className="global-container relative mx-auto flex h-full items-center px-6">
        <div className="max-w-[758px] space-y-6">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            Discover
          </h1>
          <p className="max-w-[541px] text-lg leading-relaxed text-[#E6E6E6]">
            Explore popular blogs that inspire, educate, and entertain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
