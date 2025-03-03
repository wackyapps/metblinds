import ControlSystemBanner from "@/components/control-system/ControlSystemBanner";
import ControlSystemDetailSlider from "@/components/control-system/ControlSystemDetailSlider";
import ControlSystemTable from "@/components/control-system/ControlSystemTable";
import QuoteCTASection from "@/components/control-system/QuoteCTASection";

const page = () => {
  return (
    <div>
      <ControlSystemBanner />

      <ControlSystemTable />
      <ControlSystemDetailSlider />
      <QuoteCTASection />
    </div>
  );
};

export default page;
