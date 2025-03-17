"use client";
import React from "react";
import { FaEdit, FaSpinner, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDeleteBlogMutation } from "@/store/services/blogApi";
import { toast } from "react-toastify";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Spinner,
  Badge,
} from "@heroui/react";

interface BlogCardProps {
  data: {
    id: string;
    title: string;
    date: string;
    featured_image: {
      url: string;
      alt_text: string;
    };
    author: string;
    post_status?: string;
  };
  blogs?: any[];
  setBlogs?: (blogs: any[]) => void;
  isAdminEdit?: boolean;
  isAdminDelete?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  data,
  isAdminEdit,
  isAdminDelete,
  blogs,
  setBlogs,
}) => {
  const { title, date, featured_image, author } = data;
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [deleteBlog, { isLoading: isDeleteLoading }] = useDeleteBlogMutation();

  const handleEditClick = () => {
    router.push(`/admin/blogs/edit?id=${data.id}`);
  };

  const handleDeleteClick = async () => {
    // Add confirmation dialog
    try {
      const response: any = await deleteBlog({ id: data.id }).unwrap();
      console.log(response);
      if (response.data?.data?.status === "deleted") {
        toast.success(
          response.data.data.message || "Blog deleted successfully",
        );
        onClose();
        if (setBlogs) {
          setBlogs(blogs?.filter((blog) => blog.id !== data.id) as any[]);
        }
      } else if (response.error) {
        toast.error(response.error?.data?.message || "Failed to delete blog");
      }
    } catch (error) {
      toast.error(
        (error as any)?.message || "An error occurred while deleting the blog",
      );
    }
  };

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      className="w-full cursor-pointer"
      onClick={() => {
        if (isAdminEdit) {
          handleEditClick();
        } else {
          router.push(`/blogs?id=${data.id}`);
        }
      }}
    >
      <img
        src={featured_image.url}
        alt={featured_image.alt_text}
        className="aspect-video w-full object-cover"
        style={{ width: "100%", height: "auto" }}
      />

      <div style={{ padding: "16px" }}>
        {/* admin edit and delete */}
        <div className="mb-1 flex items-center justify-end gap-2">
          {isAdminEdit && data?.post_status && (
            <div className="text-sm text-gray-500">{data.post_status}</div>
          )}
          {isAdminEdit && (
            <FaEdit
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event
                handleEditClick();
              }}
              style={{
                cursor: "pointer",
                color: "#555",
              }}
            />
          )}
          {isAdminDelete && (
            <FaTrash
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event
                onOpen();
              }}
              style={{
                cursor: "pointer",
                color: "#d32f2f",
              }}
            />
          )}
        </div>
        <h2 style={{ margin: "0 0 4px 0" }}>{title}</h2>
        <p style={{ color: "#777", marginBottom: "4px" }}>{author}</p>
        <p style={{ color: "#777", margin: "0" }}>{date}</p>
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

export default BlogCard;
