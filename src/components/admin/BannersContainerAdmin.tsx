"use client";
import BannerItem from "../common/BannerItem";
import { useEffect, useState } from "react";
import PaginationComponent from "../common/Pagination";
import BannerItemSkeleton from "../common/BannerItemSkeleton";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/configs/consts";

/**
 * Post status filter options for banner management
 * Allows admins to filter banners by their publication status
 */
const postStatusArray = [
  { name: "All", value: "'draft','published'" },
  { name: "Published", value: "'published'" },
  { name: "Draft", value: "'draft'" },
];

/**
 * BannersContainerAdmin Component
 *
 * This component manages the display and filtering of banners in the admin panel.
 * It provides functionality for:
 * - Fetching banners from the API with pagination
 * - Filtering banners by publication status (draft/published)
 * - Displaying banners with edit and delete options
 * - Handling loading states and errors
 */
const BannersContainerAdmin = () => {
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
  const [error, setError] = useState(null); // Stores any API errors
  const [banners, setBanners] = useState([]); // Stores the banner data
  const [pagination, setPagination] = useState({
    total: 0, // Total number of banners
    page: 1, // Current page
    limit: 5, // Items per page
    pages: 0, // Total number of pages
  });

  // Pagination configuration
  const limit = 5; // Number of banners per page
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
  }, [searchParams]);

  /**
   * Effect hook to fetch banners from the API
   * Triggers when page or post status filter changes
   */
  useEffect(() => {
    async function fetchBanners() {
      setIsLoading(true);
      try {
        // API call to fetch banners with pagination and filtering
        const res = await axios(
          `${BASE_URL}/banners/list?page=${page}&limit=${limit}&post_status=${postStatus.value}`,
        );
        setBanners([]);
        setAjaxCalled(true);
        const data = res.data;

        // Update banners state if data exists and is an array
        if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
          setBanners(data?.data?.data);
        }

        // Update pagination information
        if (data?.data?.pagination) {
          setPagination(data?.data?.pagination);
        }
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
        setAjaxCalled(true);
      } finally {
        setIsLoading(false);
        setAjaxCalled(true);
      }
    }
    fetchBanners();
  }, [page, postStatus]);

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
      setBanners([]);
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
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((index) => (
          <BannerItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Display error message if API call fails
  if (error) {
    return (
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {JSON.stringify(
              (error as any)?.data?.message || "An error occurred",
            )}
          </span>
        </div>
      </div>
    );
  }

  // Main component render with banners and filtering options
  return (
    <div className="space-y-4">
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
        {Array.isArray(banners) && banners.length === 0 && ajaxCalled ? (
          <div className="flex h-full min-h-[50vh] flex-col items-center justify-center">
            <div
              className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">No banners found</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {" "}
            {/* Banner items list */}
            {banners.map((banner: any, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <BannerItem
                  banner={{
                    id: banner?.id,
                    backgroundImage: banner?.background_image.url,
                    coverImage: banner?.cover_image.url,
                    heading: banner?.product_offering_headline,
                    description: banner?.offer_description,
                    buttonText: banner?.button_text,
                    link: banner?.redirect_url || "/",
                    postStatus: banner?.post_status,
                    subtitle: banner?.subtitle,
                    discount_percentage: banner?.discount_percentage,
                  }}
                  banners={banners}
                  setBanners={setBanners as (banners: any[]) => void}
                  isAdminDelete={true} // Enable delete functionality for admin
                  isAdminEdit={true} // Enable edit functionality for admin
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination component */}
      <PaginationComponent
        total={pagination?.pages}
        totalItems={pagination?.total}
        limit={limit}
        page={page}
        setPage={handlePageChange}
      />
    </div>
  );
};

export default BannersContainerAdmin;
