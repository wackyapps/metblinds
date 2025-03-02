import AboutBanner from "@/components/about/AboutBanner";
import MissionSection from "@/components/about/MissionSection";
import OurProcess from "@/components/about/OurProcess";
import WhyCooseUS from "@/components/common/WhyCooseUs";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <MissionSection />
      <WhyCooseUS isBigImage={true} />
      <OurProcess />
    </div>
  );
};

export default page;
