import BlindsBanner from "@/components/blinds/BlindsBanner";
import WhyChooseBlindsSlider from "@/components/blinds/WhyChooseBlindsSlider";
import FAQsSection from "@/components/common/FAQsSection";
import InfoBanner from "@/components/common/InfoBanner";
import WhyCooseUS from "@/components/common/WhyCooseUs";

const page = () => {
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
  const infoBanner = {
    heading: "What We Have to Offer?",
    backgroundImage: "/images/home/info-banner-bg.png",
    points: [
      "Controlling your blinds has never been so easy. Contact us today to see how convenient motorized blinds really are. Our highly trained design consultants will help you make the right choice for your home or Call MET BLINDS!",
    ],
  };
  return (
    <div>
      <BlindsBanner />
      <WhyChooseBlindsSlider />
      <WhyCooseUS data={data} />
      <FAQsSection />
      <InfoBanner data={infoBanner} />
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
