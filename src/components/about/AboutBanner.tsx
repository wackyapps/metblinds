import ContactForm from "@/components/common/forms/ContactForm";

const bannerData = {
  title: "Who We Are",
  description:
    "At Met Blinds, we specialize in providing premium, custom window blinds that combine style, functionality, and smart technology to enhance your living and working spaces. Our commitment to quality craftsmanship, expert installation, and exceptional customer service has made us a trusted choice for homeowners and businesses looking to upgrade their interiors with elegant and efficient window treatments.",
};

const AboutBanner = () => {
  return (
    <div
      className="relative min-h-[944px] w-full py-[151px]"
      style={{
        background:
          " linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/banners/about-banner-img.png')",
      }}
    >
      {/* Content container */}
      <div className="global-container relative z-10 mx-auto flex flex-col items-start justify-between gap-[123px] px-4 lg:flex-row">
        {/* Left content */}
        <div className="mt-[152px] flex w-full flex-col gap-[41px] lg:w-[758px]">
          <div className="flex flex-col -space-y-14">
            <h1 className="relative z-10 text-4xl font-bold text-white lg:text-5xl">
              {bannerData.title}
            </h1>
            <div className="h-[61px] w-[134px] rounded-[42px] bg-[#FFA600]" />
          </div>
          <p className="text-lg leading-relaxed text-white">
            {bannerData.description}
          </p>
        </div>

        {/* Right content - Contact Form */}
        <div className="w-full rounded-[35px] bg-white p-4 lg:w-[605px]">
          <ContactForm isSmall={true} />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
