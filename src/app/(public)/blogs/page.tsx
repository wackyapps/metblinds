import BlogsBanner from "@/components/blogs/BlogsBanner";
import BlogsContainerSection from "@/components/blogs/BlogsContainerSection";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <BlogsBanner />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsContainerSection />
      </Suspense>
    </div>
  );
};

export default page;
