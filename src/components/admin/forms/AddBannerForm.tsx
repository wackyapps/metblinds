"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

// Define the Zod schema for form validation
const bannerSchema = z.object({
  offerHeading: z.string().min(1, "Offer heading is required"),
  discountPercentage: z
    .number()
    .min(0, "Discount percentage must be at least 0")
    .max(100, "Discount percentage cannot exceed 100")
    .refine((val) => !isNaN(val), "Must be a valid number"),
  offerDescription: z.string().min(1, "Offer description is required"),
  offerEndsIn: z
    .date()
    .refine(
      (date) => date instanceof Date && !isNaN(date.getTime()),
      "Invalid date",
    )
    .optional(),
  coverImage: z
    .instanceof(File)
    .nullable()
    .refine((file) => file !== null, "Cover image is required"),
  backgroundImage: z.instanceof(File).nullable(),
});

type BannerFormData = z.infer<typeof bannerSchema>;

const AddBannerForm = () => {
  // State for image previews
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [backgroundPreview, setBackgroundPreview] = useState<string | null>(
    null,
  );

  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BannerFormData>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      offerHeading: "",
      discountPercentage: undefined,
      offerDescription: "",
      offerEndsIn: undefined,
      coverImage: undefined,
      backgroundImage: null,
    },
  });

  // Handle cover image upload
  const handleCoverImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("coverImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle background image upload
  const handleBackgroundImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("backgroundImage", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setValue("backgroundImage", null);
      setBackgroundPreview(null);
    }
  };

  // Form submission handler
  const onSubmit = (data: BannerFormData) => {
    // TODO: Implement banner submission logic (e.g., API call with FormData)
    console.log("Form data:", data);
  };

  return (
    <div className="mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg">
        {/* Offer Heading */}
        <div>
          <label
            htmlFor="offerHeading"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            OFFER HEADING
          </label>
          <input
            type="text"
            id="offerHeading"
            {...register("offerHeading")}
            placeholder="Enter offer heading"
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
          />
          {errors.offerHeading && (
            <p className="text-sm text-red-500">
              {errors.offerHeading.message}
            </p>
          )}
        </div>

        {/* Discount Percentage */}
        <div>
          <label
            htmlFor="discountPercentage"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            DISCOUNT PERCENTAGE
          </label>
          <input
            type="number"
            id="discountPercentage"
            {...register("discountPercentage", { valueAsNumber: true })}
            placeholder="Enter discount percentage"
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
          />
          {errors.discountPercentage && (
            <p className="text-sm text-red-500">
              {errors.discountPercentage.message}
            </p>
          )}
        </div>

        {/* Offer Description */}
        <div>
          <label
            htmlFor="offerDescription"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            OFFER DESCRIPTION
          </label>
          <textarea
            id="offerDescription"
            {...register("offerDescription")}
            placeholder="Enter offer description"
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
          />
          {errors.offerDescription && (
            <p className="text-sm text-red-500">
              {errors.offerDescription.message}
            </p>
          )}
        </div>

        {/* Offer Ends In */}
        <div>
          <label
            htmlFor="offerEndsIn"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            OFFER ENDS IN (OPTIONAL)
          </label>
          <input
            type="date"
            id="offerEndsIn"
            {...register("offerEndsIn", { valueAsDate: true })}
            className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
          />
          {errors.offerEndsIn && (
            <p className="text-sm text-red-500">{errors.offerEndsIn.message}</p>
          )}
        </div>

        {/* Cover Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            COVER IMAGE
          </label>
          <div className="relative rounded-lg border border-dashed border-gray-300 p-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <div className="text-center">
              {coverPreview ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={coverPreview}
                    alt="Cover preview"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ) : (
                <div className="py-4 text-gray-500">
                  <p>ADD COVER IMAGE</p>
                  <p className="text-sm">Click or drag and drop</p>
                </div>
              )}
            </div>
          </div>
          {errors.coverImage && (
            <p className="text-sm text-red-500">{errors.coverImage.message}</p>
          )}
        </div>

        {/* Background Image */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            BACKGROUND IMAGE (OPTIONAL)
          </label>
          <div className="relative rounded-lg border border-dashed border-gray-300 p-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundImageUpload}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <div className="text-center">
              {backgroundPreview ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={backgroundPreview}
                    alt="Background preview"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ) : (
                <div className="py-4 text-gray-500">
                  <p>ADD BACKGROUND IMAGE</p>
                  <p className="text-sm">Click or drag and drop</p>
                </div>
              )}
            </div>
          </div>
          {errors.backgroundImage && (
            <p className="text-sm text-red-500">
              {errors.backgroundImage.message}
            </p>
          )}
        </div>

        {/* Update Button */}
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

export default AddBannerForm;
