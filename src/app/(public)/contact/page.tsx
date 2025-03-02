import BlindsShowcase from "@/components/common/BlindsShowcase";
import ContactSection from "@/components/common/ContactSection";
import WarrantyInfoSection from "@/components/common/WarrantyInfoSection";
import SpecialOfferSection from "@/components/contact/SpecialOfferSection";
import BlindsAdvantages from "@/components/home/BlindsAdvantages";
import { contactPage } from "@/configs/pages/contact";
import BannerAdvanced from "@/components/common/BannerAdvanced";

const page = () => {
  return (
    <div>
      {/*
       * advanced banner component for homepage
       */}
      <BannerAdvanced banners={contactPage.banners} />
      {/*
       * speacial offer hero section
       */}
      <SpecialOfferSection />
      {/*
       * blids showcase
       */}
      <BlindsShowcase data={contactPage.blindsShowCase} />
      {/*
       * warranty info section
       */}
      <WarrantyInfoSection />
      {/*
       *  Blind Advantages
       */}

      <BlindsAdvantages data={contactPage.blindsAdvantages} />
      {/*
       * contact form section
       */}
      <ContactSection />
    </div>
  );
};

export default page;
