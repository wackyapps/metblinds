import ProductionSteps from "@/components/common/ProductionSteps";
import ControlSystemBanner from "@/components/control-system/ControlSystemBanner";
import WhyChooseControlSlider from "@/components/control-system/WhyChooseControlSlider";
import { FaRegClock } from "react-icons/fa";
import { TbDeviceRemote } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { PiVolleyballLight } from "react-icons/pi";
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

const productionSteps = {
  heading: "Features",
  subHeading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  features: [
    {
      icon: FaRegClock,
      title: "Durability & Longevity",
      description: "Built to last with premium-quality cords.",
    },
    {
      icon: TbDeviceRemote,
      title: "Smooth & Effortless Control",
      description: "Adjust blinds with precision for better lighting.",
    },
    {
      icon: IoShieldCheckmarkOutline,
      title: "Child & Pet Safety",
      description: "Comes with a secure bottom lock for protection.",
    },
    {
      icon: IoAnalytics,
      title: "Customization Options",
      description: "Available in different cord materials and sizes.",
    },
    {
      icon: PiVolleyballLight,
      title: "Aesthetic Appeal",
      description: "Minimalist design that blends with any decor.",
    },
  ],
};
const page = () => {
  return (
    <div>
      <ControlSystemBanner />
      <WhyChooseControlSlider />
      <ProductionSteps data={productionSteps} />
      <CompatibleBlinds />
      <HowItWorks />
      <SafetyMaintenanceSection />
      <QuoteCTASection />
    </div>
  );
};

export default page;
