import OurProcess from "@/components/about/OurProcess";
import WhyCooseUS from "@/components/common/WhyCooseUs";

const page = () => {
  return (
    <div>
      <WhyCooseUS isBigImage={true} />
      <OurProcess />
    </div>
  );
};

export default page;
