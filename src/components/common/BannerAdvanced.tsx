"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
// Import core styles
// Import theme styles
import "./BannerAdvanced.css";
import BannerItem from "./BannerItem";
import BannerItemSkeleton from "./BannerItemSkeleton";
import { useGetBannersQuery } from "@/store/services/bannersApi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerAdvanced: React.FC = ({}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetBannersQuery({
    page: 1,
    limit: 100000,
  });

  const bannerData = data?.data?.data;

  useEffect(() => {
    if (sliderRef.current && bannerData?.length > 0) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 1,
        gap: 20,
        autoplay: 5000,
        hoverpause: true,
      });
      glide.mount();
      return () => {
        glide.destroy();
      };
    }
  }, [bannerData]);

  if (isLoading) {
    return (
      <div className="relative overflow-hidden">
        <div className="glide__track">
          <ul className="glide__slides">
            {[1].map((index) => (
              <li key={index} className="glide__slide">
                <BannerItemSkeleton />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!bannerData || bannerData.length == 0 ? (
        <div className="min-h-[100px] bg-[#F7F9FA]"></div>
      ) : (
        <div className="relative overflow-hidden" ref={sliderRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {bannerData?.map((banner: any, index: number) => (
                <li key={index} className="glide__slide">
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
                      discount_percentage: banner?.discount_percentage,
                      subtitle: banner?.subtitle,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="absolute left-1 top-1/2 z-10 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFA600] text-white min-[1460px]:left-5"
              data-glide-dir="<"
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-1 top-1/2 z-10 flex aspect-square w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#FFA600] text-white min-[1460px]:right-5"
              data-glide-dir=">"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerAdvanced;
