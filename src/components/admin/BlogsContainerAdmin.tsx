"use client";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import PaginationComponent from "../common/Pagination";
import BlogCardSkeleton from "../common/BlogCardSkeleton";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/configs/consts";

/**
 * Post status filter options for blog management
 * Allows admins to filter blogs by their publication status
 */
const postStatusArray = [
  { name: "All", value: "'draft','published'" },
  { name: "Published", value: "'published'" },
  { name: "Draft", value: "'draft'" },
];

/**
 * BlogsContainerAdmin Component
 *
 * This component manages the display and filtering of blogs in the admin panel.
 * It provides functionality for:
 * - Fetching blogs from the API with pagination
 * - Filtering blogs by publication status (draft/published)
 * - Displaying blogs with edit and delete options in a grid layout
 * - Handling loading states and errors
 */
const BlogsContainerAdmin = () => {
  // Navigation and routing hooks for query parameter management
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get status from URL query params or default to the first option (All)
  const statusFromUrl = searchParams?.get("status") || postStatusArray[0].value;
  const initialStatus =
    postStatusArray.find((s) => s.value === statusFromUrl) ||
    postStatusArray[0];

  // State management
  const [isLoading, setIsLoading] = useState(false); // Tracks API loading state
  const [ajaxCalled, setAjaxCalled] = useState(false); // Tracks if API has been called at least once
  const [postStatus, setPostStatus] = useState(initialStatus); // Selected filter for post status
  const [error, seterror] = useState(null); // Stores any API errors
  const [blogs, setBlogs] = useState([]); // Stores the blog data
  const [counter, setCounter] = useState(0); // Counter to trigger refetch when blogs are updated

  // Pagination configuration
  const [pagination, setPagination] = useState({
    page: 1, // Current page
    limit: 12, // Items per page
    total: 0, // Total number of blogs
    pages: 0, // Total number of pages
  });
  const limit = 12; // Number of blogs per page
  // Get current page from URL query params or default to 1
  const page = Number(searchParams?.get("page")) || 1;

  // Update postStatus when URL status parameter changes
  useEffect(() => {
    const statusFromUrl =
      searchParams?.get("status") || postStatusArray[0].value;
    const newStatus =
      postStatusArray.find((s) => s.value === statusFromUrl) ||
      postStatusArray[0];
    if (newStatus.value !== postStatus.value) {
      setPostStatus(newStatus);
    }
  }, [searchParams, postStatus.value]);

  /**
   * Effect hook to fetch blogs from the API
   * Triggers when page, counter, or post status filter changes
   */
  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      try {
        // API call to fetch blogs with pagination and filtering
        const res = await axios(
          `${BASE_URL}/posts/list?page=${page}&limit=${limit}&post_status=${postStatus.value}`,
        );
        setAjaxCalled(true);
        const data = res.data;

        // Update blogs state if data exists and is an array
        if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
          setBlogs(data?.data?.data);
        }

        // Update pagination information
        if (data?.data?.pagination) {
          setPagination(data?.data?.pagination);
        }
        setIsLoading(false);
        setAjaxCalled(true);
      } catch (error: any) {
        seterror(error);
        setIsLoading(false);
        setAjaxCalled(true);
      } finally {
        setIsLoading(false);
        setAjaxCalled(true);
      }
    }
    fetchBlogs();
  }, [page, counter, postStatus]);

  /**
   * Handles page change in pagination
   * Updates URL with new page parameter and preserves other parameters
   * @param newPage - The page number to navigate to
   */
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  /**
   * Handles status filter change
   * Updates the selected post status and resets pagination to page 1
   * Updates URL to reflect the selected status
   * @param e - Select element change event
   */
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = postStatusArray.find(
      (status) => status.value === e.target.value,
    );
    if (selectedStatus) {
      setBlogs([]);
      setAjaxCalled(false);
      setPostStatus(selectedStatus);

      // Update URL query params with new status and reset to page 1
      const params = new URLSearchParams(searchParams?.toString());
      params.set("status", selectedStatus.value);
      params.set("page", "1");
      router.push(`?${params.toString()}`, { scroll: false });
    }
  };

  // Display loading skeleton while fetching data
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

  // Display error message if API call fails
  if (error)
    return (
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {JSON.stringify((error as any)?.data?.message)}
          </span>
        </div>
      </div>
    );

  // Display message when no blogs are found after API has been called

  // Main component render with blogs grid and filtering options
  return (
    <div className="mb-2">
      {/* Status filter dropdown */}

      <div className="mb-4 flex justify-end">
        <div className="flex items-center">
          <label htmlFor="statusFilter" className="mr-2 text-sm font-medium">
            Status:
          </label>
          <select
            id="statusFilter"
            value={postStatus.value}
            onChange={handleStatusChange}
            className="block rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            {postStatusArray.map((status) => (
              <option key={status.value} value={status.value}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-h-[50vh]">
        {Array.isArray(blogs) && blogs.length == 0 && ajaxCalled ? (
          <div className="flex h-full min-h-[50vh] flex-col items-center justify-center">
            <div
              className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">No blogs found</span>
            </div>
          </div>
        ) : (
          <>
            {" "}
            {/* Blog cards grid layout */}
            <div className="mb-8 grid min-h-[50vh] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {blogs.map((blog: any, index: number) => (
                <BlogCard
                  blogs={blogs}
                  setBlogs={(newBlogs: any) => {
                    setBlogs(newBlogs);
                    setCounter(counter + 1); // Increment counter to trigger refetch
                  }}
                  key={index}
                  data={blog}
                  isAdminEdit={true} // Enable edit functionality for admin
                  isAdminDelete={true} // Enable delete functionality for admin
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination component */}
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
