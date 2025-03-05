import BlindsShowcase from "@/components/common/BlindsShowcase";
import ContactSection from "@/components/common/ContactSection";
import WarrantyInfoSection from "@/components/common/WarrantyInfoSection";
import SpecialOfferSection from "@/components/contact/SpecialOfferSection";
import BlindsAdvantages from "@/components/home/BlindsAdvantages";
import { contactPage } from "@/configs/pages-data/contact";
import BannerAdvanced from "@/components/common/BannerAdvanced";
import Testimonials from "@/components/common/Testimonials";

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
      <SpecialOfferSection data={contactPage.specialOffer} />
      {/*
       * blids showcase
       */}
      <BlindsShowcase data={contactPage.blindsShowCase} />
      {/*
       * warranty info section
       */}
      <WarrantyInfoSection data={contactPage.warrantyInfoSection} />
      {/* testimonial section */}
      <Testimonials data={contactPage.testimonials} />

      {/*
       *  Blind Advantages
       */}

      <BlindsAdvantages data={contactPage.blindsAdvantages} />
      {/*
       * contact form section
       */}
      <ContactSection data={contactPage.contactSection} />
    </div>
  );
};

export default page;
