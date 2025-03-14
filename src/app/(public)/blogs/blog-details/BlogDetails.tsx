"use client";
import { useSearchParams } from "next/navigation";
import { useGetBlogByIdQuery } from "@/store/services/blogApi";

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
  // getting id from query params
  const id = searchParams.get("id");

  // getting blog details from api
  const { data, isLoading, error } = useGetBlogByIdQuery({ id: id as string });
  if (isLoading)
    return (
      <div className="mx-auto max-w-[1400px] animate-pulse px-3 py-10">
        <div className="mr-auto max-w-[1100px]">
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
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  if (!data) return <div>No data</div>;

  const blogDetails = data?.data?.data;
  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-3 py-10">
        <div className="mr-auto max-w-[1100px]">
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
          <div className="mb-4">
            <h1 className="text-4xl font-bold">{blogDetails.title}</h1>
          </div>

          {/*
           * featured image
           */}
          <div className="mb-8">
            <img
              src={blogDetails.featured_image.url}
              alt={blogDetails.featured_image.alt_text}
              className="aspect-[1194/670] h-auto w-full rounded-[25px]"
            />
          </div>
          {/*
           * content
           */}
          <div className="py-10 text-[#3b3b3b]">
            <div dangerouslySetInnerHTML={{ __html: blogDetails.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
