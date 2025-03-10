"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";

// Define the schema with Zod
const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  coverImage: z
    .instanceof(File)
    .nullable()
    .refine((file) => file !== null, "Cover image is required"), // Ensure a file is uploaded
});

type BlogFormData = z.infer<typeof blogSchema>;

const AddBlogForm = () => {
  const [previewImage, setPreviewImage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      coverImage: undefined,
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("coverImage", file); // Manually set the file value for Zod validation
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    // Implement blog post submission logic here
    console.log("Form data:", data);
  };

  return (
    <div className="mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg">
        {/* Title Input */}
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Title Of The Blog
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
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <div className="relative rounded-lg border border-dashed border-gray-300 p-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <div className="text-center">
              {previewImage ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={previewImage}
                    alt="Cover preview"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ) : (
                <div className="py-4 text-gray-500">
                  <p>Add Cover Image</p>
                  <p className="text-sm">Click or drag and drop</p>
                </div>
              )}
            </div>
          </div>
          {errors.coverImage && (
            <p className="text-sm text-red-500">{errors.coverImage.message}</p>
          )}
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Add Text
          </label>

          <textarea
            {...register("content")}
            placeholder="Enter Blog"
            className="h-64 w-full rounded-b-lg border border-gray-300 p-3 focus:border-[#FFAD33] focus:outline-none"
          />
          {errors.content && (
            <p className="text-sm text-red-500">{errors.content.message}</p>
          )}
        </div>

        {/* Post Button */}
        <div>
          <button
            type="submit"
            className="rounded-lg bg-[#FFAD33] px-12 py-2.5 text-white transition-colors hover:bg-[#FF9900]"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;
