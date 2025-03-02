import AboutBanner from "@/components/about/AboutBanner";
import MissionSection from "@/components/about/MissionSection";
import OurProcess from "@/components/about/OurProcess";
import WhyCooseUS from "@/components/common/WhyCooseUs";
import { aboutPage } from "@/configs/pages/about";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <MissionSection />
      <WhyCooseUS data={aboutPage.whyChooseUs} />
      <OurProcess />
    </div>
  );
};

export default page;
