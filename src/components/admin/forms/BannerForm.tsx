"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, Suspense, useEffect } from "react";
import HandleUploadImage from "@/components/common/HandleUploadImage";
import { IoMdClose } from "react-icons/io";
import {
  useCreateBannerMutation,
  useGetBannerByIdQuery,
  useUpdateBannerMutation,
} from "@/store/services/bannersApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import BannerFormSkeleton from "./BannerFormSkeleton";
import { postStatuses } from "@/lib/consts";
import { FaSpinner } from "react-icons/fa";
// Define the Zod schema for form validation
const bannerSchema = z.object({
  offerHeading: z.string(),
  subTitle: z.string(),
  offerDescription: z.string(),
  discountPercentage: z.string(),
  offerEndsIn: z.string(),
  buttonText: z.string(),
  buttonLink: z.string(),
  coverImage: z
    .object({
      url: z.string(),
      id: z.number().nullish(),
    })
    .optional(),
  backgroundImage: z.object({
    url: z.string(),
    id: z.number().nullish(),
  }),
  post_status: z.enum(["published", "draft"]).default("draft"),
});

type BannerFormData = z.infer<typeof bannerSchema>;

// Define post status options

const BannerForm = ({ isEdit }: { isEdit?: boolean }) => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  // State for image previews
  const [coverImage, setCoverImage] = useState<{
    url: string;
    id: number | undefined;
  }>({
    url: "",
    id: undefined,
  });
  const [backgroundImage, setBackgroundImage] = useState<{
    url: string;
    id: number | undefined;
  }>({
    url: "",
    id: undefined,
  });

  /**
   * redux mutation and query
   */
  const {
    data: bannerData,
    isLoading,
    isError: bannerGettingError,
  } = useGetBannerByIdQuery({ id: id as string }, { skip: !id });

  const router = useRouter();
  // create mutation
  const [createBanner, { isLoading: isBannerLoading }] =
    useCreateBannerMutation();
  const [updateBanner, { isLoading: isBannerUpdating }] =
    useUpdateBannerMutation();

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
      discountPercentage: "",
      offerDescription: "",
      offerEndsIn: undefined,
      buttonText: "",
      buttonLink: "/",
      coverImage: {
        url: "",
        id: undefined,
      },
      backgroundImage: {
        url: "",
        id: undefined,
      },
      post_status: "draft",
    },
  });

  useEffect(() => {
    const BannerData2 = bannerData?.data?.data;
    if (BannerData2) {
      setValue("offerHeading", BannerData2.product_offering_headline);
      setValue("discountPercentage", BannerData2.discount_percentage);
      setValue("offerDescription", BannerData2.offer_description);
      setValue(
        "offerEndsIn",
        new Date(BannerData2.offer_ends).toISOString().split("T")[0],
      );
      setValue("buttonText", BannerData2.button_text);
      setValue("buttonLink", BannerData2.redirect_url);
      setValue("post_status", BannerData2.post_status);
      setValue("coverImage", BannerData2.cover_image);
      setCoverImage(BannerData2.cover_image);
      setValue("backgroundImage", BannerData2.background_image);
      setBackgroundImage(BannerData2.background_image);
      setValue("subTitle", BannerData2.subtitle);
    }
  }, [bannerData]);

  const bannerCreateHandler = async (data: BannerFormData) => {
    try {
      const response = await createBanner({
        product_offering_headline: data.offerHeading,
        discount_percentage: data.discountPercentage,
        offer_description: data.offerDescription,
        offer_ends: data.offerEndsIn,
        cover_image_id: data.coverImage?.id,
        background_image_id: data.backgroundImage?.id,
        button_text: data.buttonText,
        author_id: 1,
        post_status: data.post_status,
        redirect_url: data.buttonLink,
        subtitle: data.subTitle,
      });
      if (response?.data?.data?.error) {
        toast.error(response?.data?.data?.error);
      }
      if ((response?.error as any)?.data?.error) {
        toast.error((response?.error as any)?.data?.error);
      }

      const bannerData = response?.data?.data;
      if (bannerData?.data) {
        toast.success("Banner created successfully");
        router.replace(`/admin/banners/edit?id=${bannerData.data.id}`);
      } else if (bannerData?.error) {
        toast.error(bannerData?.error);
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };
  const bannerUpdateHandler = async (data: BannerFormData) => {
    try {
      const response = await updateBanner({
        id: id as string,
        banner: {
          product_offering_headline: data.offerHeading,
          discount_percentage: data.discountPercentage,
          offer_description: data.offerDescription,
          offer_ends: data.offerEndsIn,
          cover_image_id: data.coverImage?.id,
          background_image_id: data.backgroundImage?.id,
          button_text: data.buttonText,
          author_id: 1,
          post_status: data.post_status,
          redirect_url: data.buttonLink,
          subtitle: data.subTitle,
        },
      });
      const bannerData = response?.data?.data;
      if (bannerData?.data) {
        toast.success("Banner updated successfully");
      } else if (bannerData?.error) {
        toast.error(bannerData?.error);
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  // Form submission handler
  const onSubmit = (data: BannerFormData) => {
    if (isEdit) {
      bannerUpdateHandler(data);
    } else {
      bannerCreateHandler(data);
    }
  };
  if (isLoading) {
    return <BannerFormSkeleton />;
  }
  if (bannerGettingError) {
    return <div>Error</div>;
  }
  if (!id && isEdit) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3 rounded-lg"
      >
        <div className="space-y-3">
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
          {/* Sub Title */}
          <div>
            <label
              htmlFor="subTitle"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              SUB TITLE
            </label>
            <textarea
              id="subTitle"
              {...register("subTitle")}
              placeholder="Enter sub title"
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            />
            {errors.subTitle && (
              <p className="text-sm text-red-500">{errors.subTitle.message}</p>
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

          {/* Discount Percentage */}
          <div>
            <label
              htmlFor="discountPercentage"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              DISCOUNT PERCENTAGE
            </label>
            <input
              id="discountPercentage"
              {...register("discountPercentage")}
              placeholder="Enter discount percentage"
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            />
            {errors.discountPercentage && (
              <p className="text-sm text-red-500">
                {errors.discountPercentage.message}
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
              {...register("offerEndsIn")}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            />
            {errors.offerEndsIn && (
              <p className="text-sm text-red-500">
                {errors.offerEndsIn.message}
              </p>
            )}
          </div>

          {/* Button Text */}
          <div>
            <label
              htmlFor="buttonText"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              BUTTON TEXT
            </label>
            <input
              type="text"
              id="buttonText"
              {...register("buttonText")}
              placeholder="Enter button text"
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            />
            {errors.buttonText && (
              <p className="text-sm text-red-500">
                {errors.buttonText.message}
              </p>
            )}
          </div>
          {/* Button Link */}
          <div>
            <label
              htmlFor="buttonText"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              BUTTON LINK
            </label>
            <input
              type="text"
              id="buttonLink"
              {...register("buttonLink")}
              placeholder="Enter button link"
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            />
            {errors.buttonLink && (
              <p className="text-sm text-red-500">
                {errors.buttonLink.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-3">
          {/* Post Status Dropdown */}
          <div>
            <label
              htmlFor="post_status"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              POST STATUS
            </label>
            <select
              id="post_status"
              {...register("post_status")}
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 focus:border-[#FFAD33] focus:outline-none"
            >
              {postStatuses.map((status) => (
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
          {/* Cover Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              COVER IMAGE
            </label>
            <div className="flex flex-col gap-2">
              <HandleUploadImage
                setImage={(data) => {
                  setValue("coverImage", {
                    url: data.url,
                    id: Number(data.id),
                  });
                  setCoverImage({ url: data.url, id: Number(data.id) });
                }}
                image={coverImage.url}
              />
              {coverImage.url && (
                <div className="relative inline-block max-w-[400px]">
                  <button
                    type="button"
                    className="absolute right-1 top-1 rounded-full bg-red-400 bg-opacity-80 p-2 text-white transition-colors"
                    onClick={() => {
                      setValue("coverImage", {
                        url: "",
                        id: undefined,
                      });
                      setCoverImage({ url: "", id: undefined });
                    }}
                  >
                    <IoMdClose />
                  </button>
                  <img
                    src={coverImage.url}
                    className="aspect-video w-full rounded-lg object-cover"
                    alt="Cover Image"
                  />
                </div>
              )}
            </div>

            {errors.coverImage?.url && (
              <p className="text-sm text-red-500">
                {errors.coverImage.url.message}
              </p>
            )}
          </div>

          {/* Background Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              BACKGROUND IMAGE
            </label>
            <div className="flex flex-col gap-2">
              <HandleUploadImage
                setImage={(data) => {
                  setValue("backgroundImage", {
                    url: data.url,
                    id: Number(data.id),
                  });
                  setBackgroundImage({ url: data.url, id: Number(data.id) });
                }}
                image={backgroundImage.url}
              />
              {backgroundImage.url && (
                <div className="relative inline-block max-w-[400px]">
                  <button
                    type="button"
                    className="absolute right-1 top-1 rounded-full bg-red-400 bg-opacity-80 p-2 text-white transition-colors"
                    onClick={() => {
                      setValue("backgroundImage", {
                        url: "",
                        id: undefined,
                      });
                      setBackgroundImage({ url: "", id: undefined });
                    }}
                  >
                    <IoMdClose />
                  </button>
                  <img
                    src={backgroundImage.url}
                    className="aspect-video w-full rounded-lg object-cover"
                    alt="Background Image"
                  />
                </div>
              )}
            </div>
            {errors.backgroundImage?.url && (
              <p className="text-sm text-red-500">
                {errors.backgroundImage.url.message}
              </p>
            )}
          </div>

          {/* Update Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[#FFAD33] px-12 py-2.5 text-white transition-colors hover:bg-[#FF9900]"
            >
              {isBannerLoading ? <FaSpinner /> : isEdit ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const BannerFormComponent = ({ isEdit }: { isEdit?: boolean }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BannerForm isEdit={isEdit} />
    </Suspense>
  );
};

export default BannerFormComponent;
