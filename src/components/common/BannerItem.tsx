"use client";
import { Link } from "@heroui/react";

interface BannerItemProps {
  banner: any;
}

const BannerItem: React.FC<BannerItemProps> = ({ banner }) => {
  return (
    <div
      className="bg-cover bg-center max-md:flex max-md:min-h-[550px] max-md:flex-col max-md:items-center max-md:justify-center max-md:py-12 md:h-[600px] lg:h-[700px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner.coverImage})`,
      }}
    >
      <div className="h-full px-4">
        <div className="mx-auto flex h-full max-w-[1450px] flex-col items-center justify-between gap-8 px-3 md:flex-row md:gap-4">
          {/* text container of heading subheading and button */}
          <div className="banner-text-container flex max-w-[700px] flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left">
            {banner.heading && (
              <h2 className="text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
                {banner.heading}
              </h2>
            )}

            {banner.subheading && (
              <h4 className="text-2xl text-white md:text-3xl">
                {banner.subheading}
              </h4>
            )}
            <img src="/svgs/divider-icon.svg" className="h-2 w-20" alt="" />
            {banner.description && (
              <p className="text-base text-white md:text-lg">
                {banner.description}
              </p>
            )}
            {banner.buttonText && (
              <div className="mt-3">
                <Link
                  href={banner.link}
                  className={`w-auto gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white transition-colors duration-300 hover:bg-[#FFB733]`}
                >
                  <span> {banner.buttonText}</span>
                </Link>
              </div>
            )}
          </div>
          {banner.bannerImage && (
            <div className="w-full max-md:hidden max-md:max-w-[450px] md:w-auto">
              <img
                alt="banner image"
                className="w-full rounded-xl rounded-bl-[100px] rounded-tr-[100px] border-4 border-[#FFA600] md:w-[300px] md:border-8 lg:w-[500px]"
                src={banner.bannerImage}
                width={500}
                height={500}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
