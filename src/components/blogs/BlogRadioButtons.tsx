import React from "react";

const BlogRadioButtons = () => {
  return (
    <div className="flex justify-center gap-4 py-8">
      <button className="flex items-center justify-center rounded bg-[#FFAD33] px-6 py-2.5 text-base text-white">
        Recommended
      </button>
      <button className="flex items-center justify-center rounded border border-[#C3C4C5] bg-white px-6 py-2.5 text-base text-[#A7A7A7]">
        First posts
      </button>
      <button className="flex items-center justify-center rounded border border-[#C3C4C5] bg-white px-6 py-2.5 text-base text-[#A7A7A7]">
        Latest
      </button>
    </div>
  );
};

export default BlogRadioButtons;
