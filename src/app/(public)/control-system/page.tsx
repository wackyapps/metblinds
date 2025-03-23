import ControlSystemBanner from "@/components/control-system/ControlSystemBanner";
import ControlSystemDetailSlider from "@/components/control-system/ControlSystemDetailSlider";
import ControlSystemTable from "@/components/control-system/ControlSystemTable";
import QuoteCTASection from "@/components/control-system/QuoteCTASection";
import { controlSystemPage } from "@/configs/pages-data/control-systems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: controlSystemPage.metaData.title,
  description: controlSystemPage.metaData.description,
};

const page = () => {
  return (
    <div>
      <ControlSystemBanner data={controlSystemPage.controlSystemBanner} />
      <ControlSystemTable data={controlSystemPage.controlSystemTable} />
      <ControlSystemDetailSlider
        data={controlSystemPage.controlSystemDetails}
      />
      <QuoteCTASection data={controlSystemPage.quoteCTASection} />
    </div>
  );
};

export default page;
