"use client";
import { useGetBannersQuery } from "@/store/services/bannersApi";
import BannerItem from "../common/BannerItem";
import { useEffect, useState } from "react";
import PaginationComponent from "../common/Pagination";
import BannerItemSkeleton from "../common/BannerItemSkeleton";
import { useSearchParams, useRouter } from "next/navigation";

const BannersContainerAdmin = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [pagination, setPagination] = useState({
    total: 7,
    page: 0,
    limit: 6,
    pages: 0,
  });

  const limit = 5;
  // Get page from URL query params or default to 1
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, error } = useGetBannersQuery({
    page: page,
    limit: limit,
  });

  useEffect(() => {
    if (data?.data?.data?.length > 0 && Array.isArray(data?.data?.data)) {
      setBanners(data?.data?.data);
    }
    if (data?.data?.pagination) {
      setPagination(data?.data?.pagination);
    }
  }, [data]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
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
    return <div>Error: {JSON.stringify(error)}</div>;
  }

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
