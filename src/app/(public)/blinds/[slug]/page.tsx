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
import blinds from "@/configs/pages-data/blinds";
import zebraBlinds from "@/configs/pages-data/blinds/zebra-blinds";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blind = blinds.find((blind) => blind.slug === slug);
  const data = {
    heading: "KEY FEATURES",
    features: [
      {
        title: "Material",
        description: "Fabric/Wood/Aluminum/Polyester",
      },
      {
        title: "Operation",
        description: "Manual, Cordless, Motorized, Smart Home Compatible",
      },
      {
        title: "Light Filtration",
        description: " Blackout, Light Filtering, UV Protection",
      },
      {
        title: "Smart Integration",
        description:
          "Compatible with Alexa, Google Home, Apple HomeKit (If applicable)",
      },
    ],
  };

  const data2 = zebraBlinds;
  return (
    <div>
      {/*
       * blinds banner
       */}
      <BlindsBanner data={data2.blindsBanner} />
      {/*
       * why choose blinds slider
       */}
      <WhyChooseBlindsSlider data={data2.whyChooseBlindsSlider} />
      {/*
       * key features
       */}
      <KeyFeatures data={data} />
      {/*
       * choose your fabric
       */}
      <ChooseYourFabric data={data2.chooseYourFabric} />
      {/*
       * choose hardware
       */}
      <ChooseHardware data={data2.chooseHardware} />
      {/*
       * blinds features
       */}
      <BlindsFeatures data={data2.blindsFeatures} />
      {/*
       * blinds testimonials
       */}
      <BlindsTestimonials data={data2.blindsTestimonials} />
      {/*
       * FAQs
       */}
      <FAQsSection data={data2.faqs} />
      {/*
       * info banner
       */}
      <InfoBanner data={data2.infoBanner} />
      <div className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20"></div>
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
