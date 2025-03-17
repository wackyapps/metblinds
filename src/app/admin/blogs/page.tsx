import BlogsContainerAdmin from "@/components/admin/BlogsContainerAdmin";
import Link from "next/link";
import { Suspense } from "react";
import { FaPlus } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsContainerAdmin />
      </Suspense>
      <Link
        href="/admin/blogs/add"
        className="fixed bottom-10 right-10 z-40 rounded-full bg-red-400 p-4 text-2xl text-white"
      >
        <FaPlus />
      </Link>
    </div>
  );
};

export default Blogs;
