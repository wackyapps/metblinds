import AboutBanner from "@/components/about/AboutBanner";
import MissionSection from "@/components/about/MissionSection";
import OurProcess from "@/components/about/OurProcess";
import WhyCooseUS from "@/components/common/WhyCooseUs";
import { aboutPage } from "@/configs/pages-data/about";

const page = () => {
  return (
    <div>
      <AboutBanner data={aboutPage.aboutBanner} />
      <MissionSection data={aboutPage.aboutMission} />
      <WhyCooseUS data={aboutPage.whyChooseUs} />
      <OurProcess data={aboutPage.aboutOurProcess} />
    </div>
  );
};

export default page;
