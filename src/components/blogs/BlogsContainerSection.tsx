"use client";

import { useSearchParams, useRouter } from "next/navigation";
import BlogCardAdvanced from "./BlogCardAdvanced";
import BlogCardAdvancedSkeleton from "./BlogCardAdvancedSkeleton";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import PaginationComponent from "../common/Pagination";

const BlogsContainerSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const limit = 10;

  // Get page from URL query params or default to 1
  const page = Number(searchParams?.get("page")) || 1;

  const { data, isLoading, error } = useGetBlogsQuery({
    page: page,
    limit: limit,
  });

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[1500px] px-3 py-24">
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
  if (error)
    return (
      <div className="mx-auto max-w-[1500px] px-3 py-24">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-red-200 bg-red-50 p-8 text-center">
          <svg
            className="h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Failed to load blogs
          </h3>
          <p className="text-gray-600">
            We encountered a problem while fetching the blog posts. Please try
            again later.
          </p>
          <button
            onClick={() => router.refresh()}
            className="mt-2 rounded bg-[#FFAD33] px-6 py-2.5 text-base text-white transition-colors hover:bg-[#E69D23]"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  if (!Array.isArray(data?.data?.data))
    return (
      <div className="mx-auto max-w-[1500px] px-3 py-24">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
          <svg
            className="h-16 w-16 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            No blog data available
          </h3>
          <p className="text-gray-600">
            The blog content could not be loaded correctly. Please try again
            later.
          </p>
          <button
            onClick={() => router.refresh()}
            className="mt-2 rounded bg-[#FFAD33] px-6 py-2.5 text-base text-white transition-colors hover:bg-[#E69D23]"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );

  return (
    <div className="mx-auto max-w-[1500px] px-3 py-24">
      {/*
       * Blog Radio Buttons
       */}

      <div className="mb-8 flex flex-col gap-8">
        {data?.data?.data?.map((blog: any, index: number) => (
          <BlogCardAdvanced
            key={index}
            textDirection={index % 2 == 0 ? "left" : "right"}
            data={blog}
          />
        ))}
        {data?.data?.data?.length === 0 && (
          <div className="min-h-[60vh]">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-lg font-medium">No blogs found</p>
            </div>
          </div>
        )}
        {/*
         * using pagination component of hero ui
         */}
        {/* <div>
          <PaginationComponent
            totalItems={data?.data?.pagination?.total}
            limit={limit}
            total={data?.data?.pagination?.pages}
            page={page}
            setPage={handlePageChange}
          />
        </div> */}
      </div>
      <div className="flex items-center justify-between gap-4">
        {/* prev button */}
        {page <= 1 ? (
          <div></div>
        ) : (
          <button
            onClick={() => page > 1 && handlePageChange(page - 1)}
            className="flex items-center justify-center rounded bg-[#FFAD33] px-6 py-2.5 text-base text-white"
            disabled={page <= 1}
          >
            Prev
          </button>
        )}
        <span className="text-sm">
          {limit * (page - 1) + 1} -{" "}
          {Math.min(limit * page, data?.data?.pagination?.total)} of{" "}
          {data?.data?.pagination?.total}{" "}
        </span>
        {/* next button */}
        {page >= data?.data?.pagination?.pages ? (
          <div></div>
        ) : (
          <button
            onClick={() =>
              page < data?.data?.pagination?.pages && handlePageChange(page + 1)
            }
            className="flex items-center justify-center rounded bg-[#FFAD33] px-6 py-2.5 text-base text-white"
            disabled={page >= data?.data?.pagination?.pages}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogsContainerSection;
