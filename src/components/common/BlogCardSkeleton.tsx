const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-md">
      {/* Image skeleton */}
      <div className="relative h-48 animate-pulse rounded-t-lg bg-gray-200" />

      {/* Content skeleton */}
      <div className="flex flex-col gap-3 p-4">
        {/* Title skeleton */}
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Date and author skeleton */}
        <div className="mt-2 flex items-center justify-between">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
