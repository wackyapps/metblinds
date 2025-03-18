"use client";
import Link from "next/link";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useDeleteBannerMutation } from "@/store/services/bannersApi";
import { toast } from "react-toastify";
interface BannerItemProps {
  banner: any;
  isAdminDelete?: boolean;
  isAdminEdit?: boolean;
  banners?: any[];
  setBanners?: (banners: any[]) => void;
}

const BannerItem: React.FC<BannerItemProps> = ({
  banner,
  isAdminDelete,
  isAdminEdit,
  banners,
  setBanners,
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const router = useRouter();
  const [deleteBanner, { isLoading: isDeleteLoading }] =
    useDeleteBannerMutation();

  /**
   * handle delete click
   */
  const handleDeleteClick = async () => {
    try {
      const resp = await deleteBanner({ id: banner.id }).unwrap();
      if (resp.message.includes("deleted successfully")) {
        toast.success(resp.message);
        onClose();
        if (setBanners) {
          setBanners(banners?.filter((b) => b.id !== banner.id) as any[]);
        }
      } else {
        toast.error(resp.message);
      }
      if (resp?.data?.error) {
        toast.error(resp?.data?.error);
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  // Check if background image exists
  const hasBackgroundImage = !!banner.backgroundImage;
  // Text color class based on background image
  const textColorClass = hasBackgroundImage ? "text-white" : "text-black";

  return (
    <div
      className={cn(
        "relative bg-cover bg-center max-md:flex max-md:min-h-[550px] max-md:flex-col max-md:items-center max-md:justify-center max-md:py-12 md:h-[600px] lg:h-[700px]",
        isAdminEdit && "cursor-pointer",
        !hasBackgroundImage && "bg-white",
      )}
      style={{
        backgroundImage: hasBackgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner.backgroundImage})`
          : "none",
      }}
      onClick={() => {
        if (isAdminEdit) {
          router.push(`/admin/banners/edit?id=${banner.id}`);
        }
      }}
    >
      {(isAdminDelete || isAdminEdit) && (
        <div className="absolute right-0 top-0 flex items-center gap-2 px-2 py-3">
          {banner.postStatus && (
            <div className=" ">
              <button className="rounded bg-[#FFA600] px-3 py-1.5 text-white">
                {banner.postStatus}
              </button>
            </div>
          )}
          {isAdminDelete && (
            <div className="">
              <button
                className="rounded bg-red-400 px-3 py-1.5 text-white"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  onOpen();
                }}
              >
                <FaTrash />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="h-full px-4">
        <div className="mx-auto flex h-full max-w-[1450px] flex-col items-center justify-between gap-8 px-3 sm:px-5 md:flex-row md:gap-4 md:px-6 lg:px-7">
          {/* text container of heading subheading and button */}
          <div className="banner-text-container flex max-w-[700px] flex-1 flex-col items-center gap-5 text-center md:items-start md:text-left">
            {banner.heading && (
              <h2
                className={`text-4xl font-semibold md:text-5xl lg:text-6xl ${textColorClass}`}
              >
                {banner.heading}
              </h2>
            )}

            {banner.subtitle && (
              <h4 className={`text-2xl md:text-3xl ${textColorClass}`}>
                {banner.subtitle}
              </h4>
            )}
            <img src="/svgs/divider-icon.svg" className="h-2 w-20" alt="" />
            {banner.description && (
              <p className={`text-base md:text-lg ${textColorClass}`}>
                {banner.description}
              </p>
            )}
            {banner.buttonText && (
              <div>
                <Link
                  href={banner.link}
                  className={`w-auto gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white transition-colors duration-300 hover:bg-[#FFB733]`}
                >
                  <span> {banner.buttonText}</span>
                </Link>
              </div>
            )}
          </div>
          {/*
           * cover image
           */}
          {banner.coverImage && (
            <div className="relative mr-6 w-full max-md:hidden max-md:max-w-[450px] md:w-auto">
              {banner.discount_percentage && (
                <h5 className="absolute right-0 top-0 z-50 flex aspect-square -translate-y-1/3 translate-x-1/3 items-center justify-center rounded-[50%] bg-white p-5 text-[42px] font-bold text-[#013F68]">
                  <span>{banner.discount_percentage}</span>
                </h5>
              )}
              <img
                alt="banner image"
                className="max-h-[500px] w-full rounded-xl rounded-tr-[100px] border-4 border-[#FFA600] md:w-[300px] md:border-8 lg:w-[500px]"
                src={banner.coverImage}
                width={500}
                height={500}
              />
            </div>
          )}
        </div>
      </div>
      {/*
       * delete dialog
       */}
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        classNames={{
          closeButton: "hidden",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose: () => void): React.ReactElement => (
            <>
              <ModalHeader>
                Are you sure you want to delete this blog?
              </ModalHeader>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  disabled={isDeleteLoading}
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  disabled={isDeleteLoading}
                  onPress={handleDeleteClick}
                >
                  {isDeleteLoading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    "Delete"
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BannerItem;
