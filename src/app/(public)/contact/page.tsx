import BlindsShowcase from "@/components/common/BlindsShowcase";
import ContactSection from "@/components/common/ContactSection";
import WarrantyInfoSection from "@/components/common/WarrantyInfoSection";
import SpecialOfferSection from "@/components/contact/SpecialOfferSection";
import BlindsAdvantages from "@/components/home/BlindsAdvantages";
import { contactPage } from "@/configs/pages-data/contact";
import Testimonials from "@/components/common/Testimonials";
import ContactBanner from "@/components/contact/ContactBanner";

const page = () => {
  return (
    <div>
      {/*
       * advanced banner component for homepage
       */}
      <ContactBanner data={contactPage.banners} />
      {/*
       * speacial offer hero section
       */}
      <SpecialOfferSection data={contactPage.specialOffer} />
      {/*
       * blids showcase
       */}
      <BlindsShowcase isSlider={true} data={contactPage.blindsShowCase} />
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
