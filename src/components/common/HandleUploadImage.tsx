import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { twMerge } from "tailwind-merge";
interface HandleUploadImageProps {
  image: string;
  setImage: (url: string) => void;
  className?: string;
}

const HandleUploadImage: React.FC<HandleUploadImageProps> = ({
  image,
  setImage,
  className,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("files", acceptedFiles[0]);

    try {
      const response = await axios.post(
        "https://itelc.org/metblind_api/editor/upload",
        formData,
      );
      if (response.data.success) {
        setImage(response.data.file.url);
        // onOpenChange(false);
      } else {
        alert("Failed to upload file");
      }
    } catch (error) {
      alert("An error occurred while uploading the file");
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div>
      <Button className={twMerge(className)} onPress={onOpen}>
        Upload Image
      </Button>
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        classNames={{
          closeButton: "hidden",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Upload Image</ModalHeader>
              <ModalBody>
                <div
                  {...getRootProps()}
                  style={{
                    border: "2px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <input {...getInputProps()} />
                  {image ? (
                    <img
                      src={image}
                      className="aspect-video w-full"
                      alt="Uploaded Image"
                    />
                  ) : (
                    <p>
                      Drag &#39;n&#39; drop an image here, or click to select
                      one
                    </p>
                  )}
                </div>
                {loading && <p>Loading...</p>}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  disabled={loading}
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HandleUploadImage;
