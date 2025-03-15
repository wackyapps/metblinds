"use client";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { useState } from "react";
import BlogCard from "../blogs/BlogCard";
import PaginationComponent from "../common/Pagination";

const BlogsContainerAdmin = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const { data, isLoading, isError } = useGetBlogsQuery({ limit, page });

  if (isLoading) {
    return (
      <div className="global-container pb-24">
        <div className="flex flex-col gap-8">Loading</div>
      </div>
    );
  }
  if (isError) return <div>Error: {JSON.stringify(isError)}</div>;
  if (!Array.isArray(data?.data?.data)) return <div>An error occurred</div>;
  if (data?.data?.data?.length === 0) return <div>No blogs found</div>;

  return (
    <div className="global-container pb-24">
      {/* <div className="mb-8">
        <PaginationComponent
          total={data?.data?.pagination?.pages}
          totalItems={data?.data?.pagination?.total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div> */}
      <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.data?.map((blog: any, index: number) => (
          <BlogCard
            key={index}
            data={blog}
            isAdminEdit={true}
            isAdminDelete={true}
          />
        ))}
      </div>
      <div>
        <PaginationComponent
          total={data?.data?.pagination?.pages}
          totalItems={data?.data?.pagination?.total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default BlogsContainerAdmin;
