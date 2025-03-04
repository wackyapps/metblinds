import BlogCardAdvanced from "./BlogCardAdvanced";

const BlogsContainerSection = () => {
  const blogs = [
    {
      image: "/banners/home-banner-2.png",
      category: "Press Release",
      title: "How Smart Blinds Can Transform Your Home",
      description:
        "Zebra blinds, also known as dual-layer or day-and-night blinds, feature alternating bands of solid and sheer fabric. When adjusted, the layers",
      date: new Date(),
    },
    {
      image: "/banners/home-banner-2.png",
      category: "Press Release",
      title: "How Smart Blinds Can Transform Your Home",
      description:
        "Zebra blinds, also known as dual-layer or day-and-night blinds, feature alternating bands of solid and sheer fabric. When adjusted, the layers",
      date: new Date(),
    },
    {
      image: "/banners/home-banner-2.png",
      category: "Press Release",
      title: "How Smart Blinds Can Transform Your Home",
      description:
        "Zebra blinds, also known as dual-layer or day-and-night blinds, feature alternating bands of solid and sheer fabric. When adjusted, the layers",
      date: new Date(),
    },
    {
      image: "/banners/home-banner-2.png",
      category: "Press Release",
      title: "How Smart Blinds Can Transform Your Home",
      description:
        "Zebra blinds, also known as dual-layer or day-and-night blinds, feature alternating bands of solid and sheer fabric. When adjusted, the layers",
      date: new Date(),
    },
  ];
  return (
    <div className="global-container pb-24">
      <div className="flex flex-col gap-8">
        {blogs.map((blog, index) => (
          <BlogCardAdvanced
            key={index}
            textDirection={index % 2 == 0 ? "left" : "right"}
            data={blog}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsContainerSection;
