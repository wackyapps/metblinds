"use client";
import WarrantyInfoSection from "../WarrantyInfoSection";
import { useWarrantyDialog } from "@/hooks/useWarrantyDialog";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

const WarrantyDialog = () => {
  const { isOpen, closeDialog, openDialog } = useWarrantyDialog();
  /**
   * data
   */
  const warrantyInfoSection = {
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
      <Modal isOpen={isOpen} onOpenChange={closeDialog}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{warrantyInfoSection.heading}</ModalHeader>
              <ModalBody>
                <WarrantyInfoSection data={warrantyInfoSection} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    
  );
};

export default WarrantyDialog;
