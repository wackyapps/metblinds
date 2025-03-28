import BannerAdvanced from "@/components/common/BannerAdvanced";
import BlindsShowcase from "@/components/common/BlindsShowcase";
import ContactSection from "@/components/common/ContactSection";
import OurPartners from "@/components/common/OurPartners";
import ProductionSteps from "@/components/common/ProductionSteps";
import ProudCanadianFlag from "@/components/common/ProudCanadianFlag";
import Testimonials from "@/components/common/Testimonials";
import BlindsAdvantages from "@/components/home/BlindsAdvantages";
import BlindsCustomization from "@/components/home/BlindsCustomization";
import InfoBanner from "@/components/common/InfoBanner";
import MediaSpotlight from "@/components/home/MediaSpotlight";
import ServicesLocation from "@/components/home/ServicesLocation";
// importing home page data to show
import { homePage } from "@/configs/pages-data/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: homePage.metaData.title,
  description: homePage.metaData.description,
};

const page = () => {
  return (
    <div>
      {/*
       * advanced banner component for homepage
       */}
      <BannerAdvanced />
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
      {/*
       * our partners section
       */}
      <OurPartners data={homePage.ourPartners} />
      {/*
       * testimonials section for home
       */}
      <Testimonials data={homePage.testimonials} />
      {/*
       * Info banner for home
       */}
      <InfoBanner data={homePage.infoBanner} />
      {/*
       * end of homepage content 1*
       */}
      <ProudCanadianFlag data={homePage.proudCanadianFlag} />
      {/*
       * contact section
       */}
      <ContactSection data={homePage.contactSection} />
    </div>
  );
};

export default page;
