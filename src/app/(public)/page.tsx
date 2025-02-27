import BannerAdvanced from "@/components/common/BannerAdvanced";
import BlindsCustomization from "@/components/home/BlindsCustomization";
import ServicesLocation from "@/components/home/ServicesLocation";
// importing home page data to show
import { homePage } from "@/configs/home";

const page = () => {
  return (
    <div>
      {/*
       * advanced banner component for homepage
       */}
      <BannerAdvanced banners={homePage.banner} />
      {/*
       * services location component for homepage
       */}
      <ServicesLocation data={homePage.servicesLocation} />
      {/*
       * blinds customization section
       */}
      <BlindsCustomization data={homePage.blindsCustomization} />
    </div>
  );
};

export default page;
