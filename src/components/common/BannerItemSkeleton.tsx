const BannerItemSkeleton = () => {
  return (
    <div className="relative h-[600px] w-full animate-pulse bg-gray-200">
      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-4">
          {/* Heading skeleton */}
          <div className="h-12 w-3/4 rounded-md bg-gray-300"></div>

          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-md bg-gray-300"></div>
            <div className="h-4 w-5/6 rounded-md bg-gray-300"></div>
            <div className="h-4 w-4/6 rounded-md bg-gray-300"></div>
          </div>

          {/* Button skeleton */}
          <div className="mt-6 h-12 w-40 rounded-md bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerItemSkeleton;
