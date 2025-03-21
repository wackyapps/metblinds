"use client";
import BannerItem from "../common/BannerItem";
import { useEffect, useState } from "react";
import PaginationComponent from "../common/Pagination";
import BannerItemSkeleton from "../common/BannerItemSkeleton";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/configs/consts";

const BannersContainerAdmin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [banners, setBanners] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 5,
    pages: 0,
  });

  const limit = 5;
  // Get page from URL query params or default to 1
  const page = Number(searchParams?.get("page")) || 1;

  useEffect(() => {
    async function fetchBanners() {
      setIsLoading(true);
      try {
        const res = await axios(
          `${BASE_URL}/banners/list?page=${page}&limit=${limit}&post_status='draft','published'`,
        );
        const data = res.data;
        if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
          setBanners(data?.data?.data);
        }
        if (data?.data?.pagination) {
          setPagination(data?.data?.pagination);
        }
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBanners();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((index) => (
          <BannerItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
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

  if (Array.isArray(banners) && banners.length === 0)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">No banners found</span>
        </div>
      </div>
    );

  return (
    <div className="space-y-4">
      {banners.map((banner: any, index) => (
        <BannerItem
          key={index}
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
          isAdminDelete={true}
          isAdminEdit={true}
        />
      ))}
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
