import React from "react";

const BannerFormSkeleton = () => {
  return (
    <div className="mx-auto p-6">
      <div className="space-y-6 rounded-lg">
        {/* Offer Heading */}
        <div>
          <div className="mb-2 h-5 w-32 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Discount Percentage */}
        <div>
          <div className="mb-2 h-5 w-44 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Offer Description */}
        <div>
          <div className="mb-2 h-5 w-40 animate-pulse rounded bg-gray-200"></div>
          <div className="h-24 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Offer Ends In */}
        <div>
          <div className="mb-2 h-5 w-48 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Cover Image */}
        <div>
          <div className="mb-2 h-5 w-28 animate-pulse rounded bg-gray-200"></div>
          <div className="aspect-video w-full max-w-[400px] animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Background Image */}
        <div>
          <div className="mb-2 h-5 w-36 animate-pulse rounded bg-gray-200"></div>
          <div className="aspect-video w-full max-w-[400px] animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Post Status */}
        <div>
          <div className="mb-2 h-5 w-24 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Button Text */}
        <div>
          <div className="mb-2 h-5 w-28 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Button Link */}
        <div>
          <div className="mb-2 h-5 w-28 animate-pulse rounded bg-gray-200"></div>
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>

        {/* Submit Button */}
        <div>
          <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerFormSkeleton;
