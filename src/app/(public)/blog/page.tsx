import BlogsBanner from "@/components/blogs/BlogsBanner";
import BlogsContainerSection from "@/components/blogs/BlogsContainerSection";
import { Suspense } from "react";
import { blogsPage } from "@/configs/pages-data/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: blogsPage.metaData.title,
  description: blogsPage.metaData.description,
};

const page = () => {
  return (
    <div>
      <BlogsBanner
        heading={blogsPage.blogsBanner.heading}
        description={blogsPage.blogsBanner.description}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsContainerSection />
      </Suspense>
    </div>
  );
};

export default page;
