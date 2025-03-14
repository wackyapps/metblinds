"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
}

const BlogCard: React.FC<BlogCardProps> = ({ data, isAdminEdit }) => {
  const { title, date, featured_image, author } = data;
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/admin/blogs/edit?id=${data.id}`);
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
      {isAdminEdit && (
        <FaEdit
          onClick={handleEditClick}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            cursor: "pointer",
            color: "#555",
          }}
        />
      )}
      <img
        src={featured_image.url}
        alt={featured_image.alt_text}
        className="aspect-video w-full object-cover"
        style={{ width: "100%", height: "auto" }}
      />
      <div style={{ padding: "16px" }}>
        <h2 style={{ margin: "0 0 4px 0" }}>{title}</h2>
        <p style={{ color: "#777", marginBottom: "4px" }}>{author}</p>
        <p style={{ color: "#777", margin: "0" }}>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
