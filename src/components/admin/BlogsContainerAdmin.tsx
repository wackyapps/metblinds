"use client";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import PaginationComponent from "../common/Pagination";
import BlogCardSkeleton from "../common/BlogCardSkeleton";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/configs/consts";

const BlogsContainerAdmin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [counter, setCounter] = useState(0);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0,
  });
  const limit = 12;
  const page = Number(searchParams?.get("page")) || 1;

  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      try {
        const res = await axios(
          `${BASE_URL}/posts/list?page=${page}&limit=${limit}`,
        );
        const data = res.data;
        if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
          setBlogs(data?.data?.data);
        }
        if (data?.data?.pagination) {
          setPagination(data?.data?.pagination);
        }
        setIsLoading(false);
      } catch (error: any) {
        seterror(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, [page, counter]);

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
  if (error)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {JSON.stringify((error as any).data.message)}
          </span>
        </div>
      </div>
    );

  if (Array.isArray(blogs) && blogs.length == 0)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">No blogs found</span>
        </div>
      </div>
    );

  return (
    <div className="mb-2">
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog: any, index: number) => (
          <BlogCard
            blogs={blogs}
            setBlogs={(newBlogs: any) => {
              setBlogs(newBlogs);
              setCounter(counter + 1);
            }}
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
