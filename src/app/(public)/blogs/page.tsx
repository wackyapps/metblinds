import BlogsBanner from "@/components/blogs/BlogsBanner";
import BlogRadioButtons from "@/components/blogs/BlogRadioButtons";
import BlogsContainerSection from "@/components/blogs/BlogsContainerSection";

const page = () => {
  return (
    <div>
      <BlogsBanner />
      <BlogRadioButtons />
      <BlogsContainerSection />
    </div>
  );
};

export default page;
