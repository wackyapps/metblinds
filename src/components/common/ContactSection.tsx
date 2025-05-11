import { contactPage } from "@/configs/pages-data/contact";
import ContactForm from "./forms/ContactForm";
import { rubik } from "@/fonts";

type Props = {
  data: typeof contactPage.contactSection;
};

const ContactSection = ({ data }: Props) => {
  const { heading, subHeading, image } = data;
  return (
    <section className="relative w-full bg-[#F7F9FA]">
      <div className="absolute left-0 top-0 hidden h-full xl:block xl:w-[45%] 2xl:w-1/2">
        <img
          src={image}
          alt="Contact section image"
          width={900}
          height={1200}
          className="top-[5px] h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto flex max-w-[1560px] flex-col gap-[20px] px-3 xl:flex-row xl:gap-[122px]">
        {/* Right Form Section */}
        <div className="w-1/2"></div>
        <div className="flex flex-col items-stretch gap-[61px] py-[69px] xl:ps-10">
          <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col gap-[18px]">
              <div className="relative mb-2 flex justify-start">
                <h2
                  className={`${rubik.className} relative z-0 text-[32px] font-semibold text-[#014768] after:absolute after:left-[25%] after:top-0 after:-z-10 after:h-full after:w-[70%] after:rounded-full after:bg-[#FFA600]`}
                >
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
