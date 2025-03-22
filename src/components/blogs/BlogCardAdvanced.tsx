import { abeezee, inter, rubik } from "@/fonts";
import React from "react";
import { useRouter } from "next/navigation";

interface BlogCardAdvancedProps {
  textDirection?: "left" | "right";
  data: {
    id: string;
    category: string;
    title: string;
    post_short_content: string;
    slug: string;
    date: string | Date;
    featured_image: {
      url: string;
      alt_text: string;
    };
  };
}

const BlogCardAdvanced: React.FC<BlogCardAdvancedProps> = ({
  textDirection = "left",
  data,
}) => {
  const {
    id,
    category,
    title,
    post_short_content,
    date,
    featured_image,
    slug,
  } = data;
  const router = useRouter();
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div
      className="w-full cursor-pointer overflow-hidden rounded-[42px] bg-[#FAFAFA]"
      onClick={() => router.push(`/blogs/blog-details?slug=${slug}`)}
    >
      <div className="relative flex flex-col items-center lg:flex-row">
        {/* Image Section */}
        <div
          className={`relative h-full max-h-[600px] min-h-48 w-full sm:min-h-56 md:min-h-96 lg:flex-1 ${textDirection == "left" ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}
        >
          {featured_image?.url ? (
            <img
              src={featured_image.url}
              alt={featured_image.alt_text}
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute left-0 top-0 h-full w-full bg-gray-200"></div>
          )}
        </div>
        {/* Content Section */}
        <div
          className={`w-full bg-[#F7F9FA] p-8 lg:w-1/2 lg:max-w-[600px] lg:p-12 xl:max-w-[700px] ${textDirection == "left" ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}
        >
          <div className="flex h-full flex-col">
            {/* Category */}
            <p className="mb-6 text-sm font-semibold text-[#6E6E73]">
              {category}
            </p>

            {/* Title and post_short_content */}
            <div className="flex-grow">
              <h2
                className={`${inter.className} mb-8 text-2xl font-semibold lg:text-3xl`}
              >
                {title}
              </h2>
              <p
                className={`${rubik.className} mb-8 text-base text-[#999999] lg:text-lg`}
              >
                {post_short_content}
              </p>
              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-[#6E6E73]">
                <span className="font-bold">{formattedDate}</span>
                <button
                  onClick={() => router.push(`/blogs/blog-details?id=${id}`)}
                  className={`${abeezee.className} cursor-pointer transition-colors hover:text-black`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardAdvanced;
