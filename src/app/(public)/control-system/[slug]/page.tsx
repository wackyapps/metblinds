import ProductionSteps from "@/components/common/ProductionSteps";
import ControlSystemBanner from "@/components/control-system/ControlSystemBanner";
import WhyChooseControlSlider from "@/components/control-system/WhyChooseControlSlider";

import QuoteCTASection from "@/components/control-system/QuoteCTASection";
import CompatibleBlinds from "@/components/control-system/CompatibleBlinds";
import SafetyMaintenanceSection from "@/components/control-system/SafetyMaintenanceSection";
import HowItWorks from "@/components/control-system/HowItWorks";
import controlSystemPages from "@/configs/pages-data/control-systems";

export async function generateStaticParams() {
  // Replace this with your actual logic to fetch slugs
  return controlSystemPages.map((controlSystem) => ({
    slug: controlSystem.slug, // Maps each slug to the [slug] param
  }));
}

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const controlSystem = controlSystemPages.find(
    (controlSystem) => controlSystem.slug === slug,
  );
  if (!controlSystem) {
    return <div>Control system not found</div>;
  }
  return (
    <div>
      {/*
       * control system banner
       */}
      <ControlSystemBanner data={controlSystem.controlSystemBanner} />
      {/*
       * why choose control slider
       */}
      <WhyChooseControlSlider data={controlSystem.whyChooseControlSlider} />
      {/*
       * production steps
       */}
      <ProductionSteps data={controlSystem.productionSteps} />
      {/*
       * compatible blinds
       */}
      <CompatibleBlinds data={controlSystem.compatibleBlinds} />
      {/*
       * how it works
       */}
      <HowItWorks data={controlSystem.howItWorks} />
      {/*
       * safety & maintenance
       */}
      <SafetyMaintenanceSection data={controlSystem.safetyMaintenance} />
      {/*
       * quote cta section
       */}
      <QuoteCTASection data={controlSystem.quoteCTASection} />
    </div>
  );
};

export default page;
