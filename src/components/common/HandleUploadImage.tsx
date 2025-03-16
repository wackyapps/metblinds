import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Spinner,
} from "@heroui/react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { twMerge } from "tailwind-merge";
interface HandleUploadImageProps {
  image: string;
  setImage: ({ url, id }: { url: string; id: string }) => void;
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
        setImage({ url: response.data.file.url, id: response.data.id });
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
          {(onClose: () => void): React.ReactElement => (
            <>
              <ModalHeader>Upload Image</ModalHeader>
              <ModalBody>
                {loading ? (
                  <div
                    className="flex aspect-video flex-col items-center justify-center bg-gray-50"
                    style={{ border: "2px dashed #ccc" }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <Spinner size="lg" color="primary" />
                      <p className="text-sm text-gray-500">
                        Uploading image...
                      </p>
                    </div>
                  </div>
                ) : (
                  <label
                    style={{
                      border: "2px dashed #ccc",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    className="flex aspect-video flex-col items-center justify-center"
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
                  </label>
                )}
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
