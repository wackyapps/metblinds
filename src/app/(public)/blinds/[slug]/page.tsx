import BlindsBanner from "@/components/blinds/BlindsBanner";
// import ChooseYourFabric from "@/components/blinds/ChooseYourFabric";
import KeyFeatures from "@/components/blinds/KeyFeatures";
import WhyChooseBlindsSlider from "@/components/blinds/WhyChooseBlindsSlider";
// import BlindsFeatures from "@/components/blinds/BlindsFeatures";
import FAQsSection from "@/components/common/FAQsSection";
import InfoBanner from "@/components/common/InfoBanner";
import ChooseHardware from "@/components/blinds/ChooseHardware";
import ChooseYourFabric from "@/components/blinds/ChooseYourFabric";
import BlindsFeatures from "@/components/blinds/BlindsFeatures";
import BlindsTestimonials from "@/components/blinds/BlindsTestimonials";
import ChooseControlSystem from "@/components/blinds/ChooseControlSystem";
import blinds from "@/configs/pages-data/blinds";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blind = blinds.find((blind) => blind.slug === slug);

  if (!blind) {
    return <div>Blind not found</div>;
  }

  return (
    <div>
      {/*
       * blinds banner
       */}
      <BlindsBanner data={blind.blindsBanner} />
      {/*
       * why choose blinds slider
       */}
      <WhyChooseBlindsSlider data={blind.whyChooseBlindsSlider} />
      {/*
       * key features
       */}
      <KeyFeatures data={blind.keyFeaures} />
      {/*
       * choose your fabric
       */}
      <ChooseYourFabric data={blind.chooseYourFabric} />
      {/*
       * choose hardware
       */}
      <ChooseHardware data={blind.chooseHardware} />
      {/*
       * choose control system
       */}
      <ChooseControlSystem data={blind.chooseControlSystem} />
      {/*
       * blinds features
       */}
      <BlindsFeatures data={blind.blindsFeatures} />
      {/*
       * blinds testimonials
       */}
      <BlindsTestimonials data={blind.blindsTestimonials} />
      {/*
       * FAQs
       */}
      <FAQsSection data={blind.faqs} />
      {/*
       * info banner
       */}
      <InfoBanner data={blind.infoBanner} />
      <div className="h-10 sm:h-12 md:h-14 lg:h-20 xl:h-28"></div>
    </div>
  );
};

export default page;
export async function generateStaticParams() {
  // Replace this with your actual logic to fetch slugs
  const slugs = ["post-1", "post-2", "post-3"]; // Example slugs
  return slugs.map((slug) => ({
    slug, // Maps each slug to the [slug] param
  }));
}
