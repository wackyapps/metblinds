import { contactPage } from "@/configs/pages-data/contact";
import ContactForm from "./forms/ContactForm";

type Props = {
  data: typeof contactPage.contactSection;
};

const ContactSection = ({ data }: Props) => {
  const { heading, subHeading, image } = data;
  return (
    <section className="w-full bg-[#F7F9FA]">
      <div className="global-container mx-auto flex flex-col gap-[122px] xl:flex-row">
        {/* Left Image Section */}
        <div className="relative hidden min-h-[500px] max-w-[894px] overflow-hidden bg-[#D9D9D9] xl:block">
          <img
            src={image}
            alt="Contact section image"
            width={900}
            height={1200}
            className="top-[5px] h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col items-stretch gap-[61px] py-[69px]">
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col gap-[18px]">
              <div className="relative mb-2 w-[249px]">
                <div className="absolute left-[20px] top-[6px] z-0 h-[61px] w-[218px] rounded-[42px] bg-[#FFA600]" />
                <h2 className="relative z-10 text-[32px] font-semibold text-[#014768]">
                  {heading}
                </h2>
              </div>
              <p className="text-lg text-gray-600">{subHeading}</p>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
