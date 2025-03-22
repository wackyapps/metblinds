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
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!Array.isArray(data?.data?.data)) return <div>An error occurred</div>;

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
