"use client";
import { useState, useRef, Suspense, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IoMdClose } from "react-icons/io";
import RichTextEditor from "@/components/common/forms/RichTextEditor";
import {
  useCreateBlogMutation,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "@/store/services/blogApi";
import { useSearchParams } from "next/navigation";
import HandleUploadImage from "@/components/common/HandleUploadImage";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const postStatuses = [
  { label: "Published", value: "published" },
  { label: "Archived", value: "archived" },
  { label: "Draft", value: "draft" },
];

// Define the schema with Zod
const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  featuredImage: z.string().min(1, "Cover image is required"),
  post_status: z.enum(["published", "archived", "draft"]).default("draft"),
});
type BlogFormData = z.infer<typeof blogSchema>;

const BlogForm = ({ isEdit }: { isEdit?: boolean }) => {
  const searchParams = useSearchParams();
  // getting id from query params
  const id = searchParams.get("id");
  /**
   * featured image state
   */
  const [featuredImage, setFeaturedImage] = useState("");

  /**
   * redux mutation and queries
   */

  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const [updateBlog, { isLoading: isUpdating }] = useUpdateBlogMutation();
  const {
    data: blog,
    isLoading: isBlogLoading,
    error: blogGettingError,
  } = useGetBlogByIdQuery({ id: id as string }, { skip: !id });
  const blogData = blog?.data?.data;
  /**
   * useForm for zod resolver
   */
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      featuredImage: undefined,
      post_status: "draft",
    },
  });

  const createBlogHandler = async (data: BlogFormData) => {
    try {
      const response: any = await createBlog({
        title: data.title,
        content: data.content,
        author_id: 1,
        post_status: data.post_status,
      });
      if (response?.data?.data) {
        toast.success("Blog created successfully");
      }
      if (response?.error?.error as any) {
        toast.error(
          (response?.error?.error as any)?.data?.message ||
            "An error occurred while creating the blog",
        );
      }
    } catch (error) {
      toast.error(
        (error as any)?.message || "An error occurred while creating the blog",
      );
    }
  };

  const updateBlogHandler = async (data: BlogFormData) => {
    try {
      const response: any = await updateBlog({
        id: id as string,
        blog: {
          title: data.title,
          content: data.content,
          author_id: 1,
          post_status: data.post_status,
        },
      });
      if (response?.data?.data) {
        toast.success("Blog updated successfully");
      }
      if (response?.error?.error as any) {
        toast.error(
          (response?.error?.error as any)?.data?.message ||
            "An error occurred while updating the blog",
        );
      }
    } catch (error) {
      toast.error(
        (error as any)?.message || "An error occurred while updating the blog",
      );
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    if (isEdit) {
      await updateBlogHandler(data);
    } else {
      await createBlogHandler(data);
    }
  };

  /**
   * useeffect
   */
  useEffect(() => {
    if (blogData) {
      setValue("title", blogData.title);
      setValue("content", blogData.content);
      setValue("featuredImage", blogData?.featured_image?.url);
      setValue("post_status", blogData?.post_status || "draft");
      setFeaturedImage(blogData?.featured_image?.url);
    }
  }, [blog]);

  if (isBlogLoading) {
    return <div>Loading...</div>;
  }
  if (blogGettingError) {
    return <div>Error</div>;
  }
  if (!id) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg">
        <div className="flex flex-col [column-gap:10px] [row-gap:30px] lg:flex-row">
          <div className="flex flex-col gap-4 lg:order-2 lg:basis-[30%] xl:basis-1/4">
            {/* Title Input */}
            <div className="">
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title")}
                placeholder="Enter The Title Of The Blog"
                className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>
            {/* Cover Image Upload */}
            <div className="">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <div className="flex flex-col gap-2">
                <HandleUploadImage
                  setImage={(url) => {
                    setValue("featuredImage", url);
                    setFeaturedImage(url);
                  }}
                  image={featuredImage}
                />
                {featuredImage && (
                  <div className="relative">
                    <button
                      type="button"
                      className="absolute right-1 top-1 rounded-full bg-red-400 bg-opacity-80 p-2 text-white transition-colors"
                      onClick={() => {
                        setValue("featuredImage", "");
                        setFeaturedImage("");
                      }}
                    >
                      <IoMdClose />
                    </button>
                    <img
                      src={featuredImage}
                      className="aspect-video h-48 w-full rounded-lg object-cover"
                      alt="Cover Image"
                    />
                  </div>
                )}
              </div>

              {errors.featuredImage && (
                <p className="text-sm text-red-500">
                  {errors.featuredImage.message}
                </p>
              )}
            </div>
            {/* Post Status Dropdown */}
            <div className="">
              <label
                htmlFor="post_status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Post Status
              </label>
              <select
                id="post_status"
                {...register("post_status")}
                className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
              >
                {postStatuses.map((status, index) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
              {errors.post_status && (
                <p className="text-sm text-red-500">
                  {errors.post_status.message}
                </p>
              )}
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="row-span-2 lg:order-1 lg:basis-[70%] xl:basis-3/4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Blog Content
            </label>

            <Controller
              name="content"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RichTextEditor onChange={onChange} value={value} />
              )}
            />

            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>
        </div>

        {/* Post Button */}
        <div>
          <button
            type="submit"
            className="rounded-lg bg-[#FFAD33] px-12 py-2.5 text-white transition-colors hover:bg-[#FF9900]"
            disabled={isLoading}
          >
            {isLoading || isUpdating
              ? "Posting..."
              : isEdit
                ? "Update"
                : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

const BlogFormComponent = ({ isEdit }: { isEdit?: boolean }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogForm isEdit={isEdit} />
    </Suspense>
  );
};

export default BlogFormComponent;
