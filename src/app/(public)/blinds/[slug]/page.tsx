import BlindsBanner from "@/components/blinds/BlindsBanner";
import WhyChooseBlindsSlider from "@/components/blinds/WhyChooseBlindsSlider";
import FAQsSection from "@/components/common/FAQsSection";
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
  return (
    <div>
      <BlindsBanner />
      <WhyChooseBlindsSlider />
      <WhyCooseUS data={data} />
      <FAQsSection />
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
