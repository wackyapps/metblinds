import Image from "next/image";
import ContactForm from "./forms/ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#F7F9FA]">
      <div className="global-container mx-auto flex flex-col gap-[122px] xl:flex-row">
        {/* Left Image Section */}
        <div className="relative hidden min-h-[500px] max-w-[894px] overflow-hidden bg-[#D9D9D9] xl:block">
          <Image
            src="/images/contact-section-image-1.png" // Add your image path here
            alt="Contact background"
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
                  Contact us
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Have any questions? Feel free to contact us at
                help@metblindsx.com or fill out the form.
              </p>
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
