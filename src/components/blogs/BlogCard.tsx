"use client";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDeleteBlogMutation } from "@/store/services/blogApi";
import { toast } from "react-toastify";

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
  };
  isAdminEdit?: boolean;
  isAdminDelete?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  data,
  isAdminEdit,
  isAdminDelete,
}) => {
  const { title, date, featured_image, author } = data;
  const router = useRouter();
  const [deleteBlog] = useDeleteBlogMutation();

  const handleEditClick = () => {
    router.push(`/admin/blogs/edit?id=${data.id}`);
  };

  const handleDeleteClick = async () => {
    // Add confirmation dialog
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      const response: any = await deleteBlog({ id: data.id });
      if (response.data?.data?.status === "deleted") {
        toast.success(
          response.data.data.message || "Blog deleted successfully",
        );
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
        <div className="mb-1 flex justify-end gap-2">
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
                handleDeleteClick();
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
    </div>
  );
};

export default BlogCard;
