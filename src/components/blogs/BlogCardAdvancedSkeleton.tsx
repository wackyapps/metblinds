import React from "react";

interface BlogCardAdvancedSkeletonProps {
  textDirection?: "left" | "right";
}

const BlogCardAdvancedSkeleton: React.FC<BlogCardAdvancedSkeletonProps> = ({
  textDirection = "left",
}) => {
  return (
    <div className="w-full animate-pulse overflow-hidden rounded-[42px] bg-[#FAFAFA]">
      <div className="relative flex flex-col items-center lg:flex-row">
        {/* Image Skeleton */}
        <div
          className={`relative h-full max-h-[600px] min-h-96 w-full lg:flex-1 ${textDirection == "left" ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}
        >
          <div className="absolute left-0 top-0 h-full w-full bg-gray-300"></div>
        </div>
        {/* Content Skeleton */}
        <div
          className={`w-full bg-[#F7F9FA] p-8 lg:w-1/2 lg:max-w-[600px] lg:p-12 xl:max-w-[700px] ${textDirection == "left" ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}
        >
          <div className="flex h-full flex-col">
            {/* Category Skeleton */}
            <div className="mb-6 h-4 w-1/4 bg-gray-300"></div>

            {/* Title and Description Skeleton */}
            <div className="flex-grow">
              <div className="mb-8 h-6 w-3/4 bg-gray-300"></div>
              <div className="mb-8 h-4 w-full bg-gray-300"></div>
              <div className="mb-8 h-4 w-5/6 bg-gray-300"></div>
              {/* Footer Skeleton */}
              <div className="flex items-center justify-between text-sm text-[#6E6E73]">
                <div className="h-4 w-1/4 bg-gray-300"></div>
                <div className="h-4 w-1/4 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardAdvancedSkeleton;
