"use client";

import BlogCardAdvanced from "./BlogCardAdvanced";
import BlogCardAdvancedSkeleton from "./BlogCardAdvancedSkeleton";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { useState } from "react";
import PaginationComponent from "../common/Pagination";
const BlogsContainerSection = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = useGetBlogsQuery({
    page: page,
    limit: limit,
  });
  if (isLoading) {
    return (
      <div className="global-container pb-24">
        <div className="flex flex-col gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCardAdvancedSkeleton
              key={index}
              textDirection={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    );
  }
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!Array.isArray(data?.data?.data)) return <div>An error occurred</div>;
  if (data?.data?.data?.length === 0) return <div>No blogs found</div>;

  return (
    <div className="global-container pb-24">
      {/*
       * Blog Radio Buttons
       */}
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
      <div className="flex flex-col gap-8">
        {data?.data?.data?.map((blog: any, index: number) => (
          <BlogCardAdvanced
            key={index}
            textDirection={index % 2 == 0 ? "left" : "right"}
            data={blog}
          />
        ))}
        {/*
         * using pagination component of hero ui
         */}
        <div>
          <PaginationComponent
            total={data?.data?.pagination?.pages}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsContainerSection;
