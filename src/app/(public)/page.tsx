import BannerAdvanced from "@/components/common/BannerAdvanced";
import ServicesLocation from "@/components/home/ServicesLocation";
// importing home page data to show
import { homePage } from "@/configs/home";

const page = () => {
  return (
    <div>
      <BannerAdvanced banners={homePage.banner} />
      <ServicesLocation
        className="relative z-50 -translate-y-5"
        data={homePage.servicesLocation}
      />
    </div>
  );
};

export default page;
