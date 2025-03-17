"use client";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import PaginationComponent from "../common/Pagination";
import BlogCardSkeleton from "../common/BlogCardSkeleton";
import { useSearchParams, useRouter } from "next/navigation";

const BlogsContainerAdmin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0,
  });
  const limit = 12;
  const page = Number(searchParams?.get("page")) || 1;
  const { data, isLoading, isError } = useGetBlogsQuery({ limit, page });

  useEffect(() => {
    if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
      setBlogs(data?.data?.data);
    }
    if (data?.data?.pagination) {
      setPagination(data?.data?.pagination);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (isLoading) {
    return (
      <div className="global-container pb-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(limit)].map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  if (isError) return <div>Error: {JSON.stringify(isError)}</div>;
  if (blogs.length === 0) return <div>No blogs found</div>;

  return (
    <div className="mb-2">
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog: any, index: number) => (
          <BlogCard
            blogs={blogs}
            setBlogs={setBlogs as (blogs: any[]) => void}
            key={index}
            data={blog}
            isAdminEdit={true}
            isAdminDelete={true}
          />
        ))}
      </div>
      <div>
        <PaginationComponent
          total={pagination?.pages}
          totalItems={pagination?.total}
          limit={limit}
          page={page}
          setPage={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogsContainerAdmin;
