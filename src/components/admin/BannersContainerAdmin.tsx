import BannerItem from "../common/BannerItem";

const BannersContainerAdmin = () => {
  const banners = [
    {
      coverImage: "/banners/home-banner-1.png",
      heading: "Leading Calgary Blinds Company!",
      description:
        "Met Blinds, your trusted Canadian blinds company in Calgary, Alberta, takes pride in transforming your living spaces with high-quality window coverings that seamlessly marry style and functionality.",
      buttonText: "Shop Sales",
      link: "/",
    },
    {
      coverImage: "/banners/home-banner-2.png",
      heading: "30% OFF SHADES",
      subheading: "Don’t Miss The Window to Saves!",
      description:
        "WE MANUFACTURE BLINDS IN CALGARY FOR ALBERTA HOMES & BUSINESSES. a variety of window shades and treatments that give you 100% privacy and add a modern elegant touch to your home.",
      buttonText: "Shop Sales",
      link: "/blinds",
      bannerImage: "/images/banner-side-image-2.png",
      textPosition: "left",
    },
    {
      coverImage: "/banners/home-banner-3.png",
      heading: "Buy 8 motors & get a smart hub free",
      subheading: "Ends in 3 days",
      buttonText: "Shop Sales",
      link: "/blinds",
      bannerImage: "/images/banner-side-image-3.png",
      textPosition: "right",
    },
  ];
  return (
    <div className="space-y-4">
      {banners.map((banner, index) => (
        <BannerItem key={index} banner={banner} />
      ))}
    </div>
  );
};

export default BannersContainerAdmin;
