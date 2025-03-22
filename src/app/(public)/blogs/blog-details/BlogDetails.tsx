"use client";
import { useSearchParams } from "next/navigation";
import { useGetBlogBySlugQuery } from "@/store/services/blogApi";
import { Suspense } from "react";

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};

const BlogDetails = () => {
  const searchParams = useSearchParams();
  // getting slug from query params
  const slug = searchParams?.get("slug");

  // getting blog details from api
  const { data, isLoading, error } = useGetBlogBySlugQuery({
    slug: slug as string,
  });
  if (isLoading)
    return (
      <div className="mx-auto max-w-[1400px] animate-pulse px-3 py-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-4 flex flex-wrap items-center justify-start gap-1.5 text-sm text-[#6E6E73]">
            <span className="h-6 w-20 rounded-md bg-[#F5F5F5] px-2 py-1"></span>
            <span className="h-6 w-20 rounded-md bg-[#F5F5F5] px-2 py-1"></span>
          </div>
          <div className="mb-4">
            <div className="h-10 w-3/4 rounded-md bg-[#F5F5F5]"></div>
          </div>
          <div className="mb-8">
            <div className="aspect-[1194/670] h-auto w-full rounded-[25px] bg-[#F5F5F5]"></div>
          </div>
          <div className="py-10 text-[#3b3b3b]">
            <div className="h-40 rounded-md bg-[#F5F5F5]"></div>
          </div>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="mx-auto max-w-[1400px] px-3 py-16 text-center">
        <div className="mx-auto max-w-[600px]">
          <div className="mb-6 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold">Unable to Load Blog</h2>
          <p className="mb-6 text-[#6E6E73]">
            We're having trouble loading this blog post. Please try again later
            or check our other posts.
          </p>
          <a
            href="/blogs"
            className="inline-block rounded-md bg-[#F5F5F5] px-6 py-2 font-medium transition-colors hover:bg-[#e5e5e5]"
          >
            Browse All Blogs
          </a>
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-[1400px] px-3 py-16 text-center">
        <div className="mx-auto max-w-[600px]">
          <div className="mb-6 text-[#6E6E73]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-bold">Blog Not Found</h2>
          <p className="mb-6 text-[#6E6E73]">
            This blog post may have been moved or deleted. Check out our other
            articles instead.
          </p>
          <a
            href="/blogs"
            className="inline-block rounded-md bg-[#F5F5F5] px-6 py-2 font-medium transition-colors hover:bg-[#e5e5e5]"
          >
            Browse All Blogs
          </a>
        </div>
      </div>
    );

  const blogDetails = data?.data?.data;

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-3 py-10 sm:px-5 md:px-7 lg:px-9 xl:px-12">
        <div className="mx-auto max-w-[1100px]">
          {/*
           * author and date
           */}
          <div className="mb-4 flex flex-wrap items-center justify-start gap-1.5 text-sm text-[#6E6E73]">
            <span className="rounded-md bg-[#F5F5F5] px-2 py-1">
              {blogDetails.author}
            </span>
            <span className="rounded-md bg-[#F5F5F5] px-2 py-1">
              {formatDate(blogDetails.date)}
            </span>
          </div>
          {/*
           * heading
           */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold">{blogDetails.title}</h1>
          </div>

          {/*
           * featured image
           */}
          {blogDetails.featured_image?.url && (
            <div className="mb-8">
              <img
                src={blogDetails.featured_image.url}
                alt={blogDetails.featured_image.alt_text}
                className="aspect-[1194/670] h-auto w-full rounded-[25px] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%]"
              />
            </div>
          )}
          {/*
           * content
           */}
          <div className="py-10 text-[#3b3b3b]">
            <div
              className="jodit-tailwind jodit-wysiwyg bg-transparent"
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogDetailsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetails />
    </Suspense>
  );
};
export default BlogDetailsPage;
