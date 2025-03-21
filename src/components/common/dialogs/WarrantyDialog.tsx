"use client";
import WarrantyInfoSection from "../WarrantyInfoSection";
import { useWarrantyDialog } from "@/hooks/useWarrantyDialog";
import { Modal, ModalContent } from "@heroui/react";
import { IoClose } from "react-icons/io5";

const WarrantyDialog = () => {
  const { isOpen, closeDialog, openDialog } = useWarrantyDialog();
  /**
   * data
   */
  const warrantyInfo = {
    heading: "Met Blinds Warranty Details",
    features: [
      "*10 Years* – All hardware & components for Zebra, Roller, Sunscreen, Tri-fold Blinds & Siderails (no questions asked).",
      "*5 Years* – Fabric for Zebra, Roller, Sunscreen & Tri-fold Blinds (manufacturing faults only).",
      "*2 Years* – Dream Curtains, Honeycomb & Honeycomb Day & Night Blinds.",
      "*5 Years* – Motors (if added) & Smart HUB.",
    ],
    ctaText: "Request a free estimate",
  };

  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onOpenChange={closeDialog}
      classNames={{ closeButton: "hidden" }}
    >
      <ModalContent className="w-[98vw] bg-transparent">
        {(onClose) => (
          <>
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative max-h-[90vh] overflow-y-auto rounded-[32px] bg-white px-3 sm:px-6 md:px-10 lg:px-12">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-2 text-3xl duration-200 hover:bg-gray-100"
                >
                  <IoClose />
                </button>
                <WarrantyInfoSection
                  className="bg-transparent"
                  data={warrantyInfo}
                />
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default WarrantyDialog;
