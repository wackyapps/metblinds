import BannerAdvanced from "@/components/common/BannerAdvanced";
import BlindsShowcase from "@/components/common/BlindsShowcase";
import ProductionSteps from "@/components/common/ProductionSteps";
import BlindsAdvantages from "@/components/home/BlindsAdvantages";
import BlindsCustomization from "@/components/home/BlindsCustomization";
import MediaSpotlight from "@/components/home/MediaSpotlight";
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
      {/*
       * blind advantages section
       */}
      <BlindsAdvantages data={homePage.blindsAdvantages} />
      {/*
       * blinds showcase
       */}
      <BlindsShowcase data={homePage.blindsShowcase} />
      {/*
       * production steps
       */}
      <ProductionSteps data={homePage.productionSteps} />
      {/*
       *media spotlight section
       */}
      <MediaSpotlight data={homePage.mediaSpotlight} />
    </div>
  );
};

export default page;
