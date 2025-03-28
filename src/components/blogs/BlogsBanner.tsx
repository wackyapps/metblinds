import React from "react";

type BlogsBannerProps = {
  heading: string;
  description: string;
};
const BlogsBanner = ({ heading, description }: BlogsBannerProps) => {
  return (
    <div
      className="relative w-full py-32"
      style={{
        background:
          " linear-gradient(rgba(1, 63, 104, 0.7), rgba(1, 63, 104, 0.7)), url('/banners/about-banner-img.png')",
      }}
    >
      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1500px] items-center px-3 sm:px-6">
        <div className="max-w-[758px] space-y-6">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            {heading}
          </h1>
          <p className="max-w-[541px] text-lg leading-relaxed text-[#E6E6E6]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
