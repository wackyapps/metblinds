import React from "react";

const BlogFormSkeleton = () => {
  return (
    <div className="mx-auto p-6">
      <div className="space-y-6 rounded-lg">
        <div className="flex flex-col [column-gap:10px] [row-gap:30px] lg:flex-row">
          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:order-2 lg:basis-[30%] xl:basis-1/4">
            {/* Title Skeleton */}
            <div>
              <div className="mb-2 h-5 w-20 animate-pulse rounded bg-gray-200"></div>
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
            </div>

            {/* Featured Image Skeleton */}
            <div>
              <div className="mb-2 h-5 w-28 animate-pulse rounded bg-gray-200"></div>
              <div className="aspect-video w-full animate-pulse rounded-lg bg-gray-200"></div>
            </div>

            {/* Post Status Skeleton */}
            <div>
              <div className="mb-2 h-5 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
            </div>
          </div>

          {/* Left Column - Rich Text Editor Skeleton */}
          <div className="row-span-2 lg:order-1 lg:basis-[70%] xl:basis-3/4">
            <div className="mb-2 h-5 w-24 animate-pulse rounded bg-gray-200"></div>
            <div className="h-[500px] w-full animate-pulse rounded-lg bg-gray-200"></div>
          </div>
        </div>

        {/* Submit Button Skeleton */}
        <div>
          <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogFormSkeleton;
