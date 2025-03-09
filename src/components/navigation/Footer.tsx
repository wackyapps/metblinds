import React from "react";
import Link from "next/link";

// import footer details
import { footer } from "@/configs/navigation";
import { websiteInfo } from "@/configs/info";

/**
 * Converts newline characters in a string to JSX line breaks
 * @param text The text to process
 * @returns JSX with line breaks
 */
const addLineBreaks = (text: string) => {
  return text.split("\n").map((str, index, array) => (
    <React.Fragment key={index}>
      {str}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

/**
 * Footer Component
 *
 * A responsive footer component that displays company information, contact details,
 * navigation links, and social media links. The footer is divided into four main sections
 * and includes a Google Maps embed for the company location.
 *
 * Layout:
 * - Single column on mobile
 * - Two columns on medium screens (md)
 * - Four columns on large screens (lg)
 */
const Footer = () => {
  return (
    <footer className="bg-[#01405F] text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 pb-8">
        {/* Main grid container - responsive layout */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
          {/* First Column: Logo, Description and Location */}
          <div className="space-y-6">
            {/* Logo and company description */}
            <div>
              <img
                src={footer.logo}
                alt="Met Blinds Logo"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-sm">{footer.footerDescription}</p>
            </div>
          </div>

          {/* Second Column: Contact Information */}
          <div>
            {/* contact info */}
            <h3 className="mb-3 text-xl font-semibold text-[#FFA600]">
              {footer.contactInfoHeading}
            </h3>
            <div className="space-y-4 text-sm">
              {/* Business hours */}
              <p>{addLineBreaks(footer.hoursDescription)}</p>
              {/* Phone numbers with clickable links */}
              <p>
                Phone:{" "}
                <a href={`tel:${websiteInfo.tollFreeNumber.link}`}>
                  {websiteInfo.tollFreeNumber.display}
                </a>
              </p>
              <p>
                Toll-free:{" "}
                <a href={`tel:${websiteInfo.phoneNumber.link}`}>
                  {websiteInfo.phoneNumber.display}
                </a>
              </p>
              {/* Email link */}
              <p>
                <a href={`mailto:${websiteInfo.email.link}`}>
                  {websiteInfo.email.display}
                </a>
              </p>
            </div>
          </div>

          {/* Third Column: Navigation Links */}
          <div className="lg:row-span-2">
            {/* quick links  */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-[#FFA600]">
                {footer.quickLinksHeading}
              </h3>
              <ul className="space-y-3 text-sm">
                {footer.quickLinks?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="transition-colors hover:text-[#FFA600]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fourth Column: Social Media and Additional Location Info */}
          <div className="lg:row-span-2">
            {/* Social Media Links */}
            <h3 className="mb-3 text-xl font-semibold text-[#FFA600]">
              Follow us
            </h3>
            <div className="flex space-x-4">
              {footer.socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="rounded bg-[#01405F] p-2.5 transition-colors hover:bg-[#FFA600]"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="justify-self-start md:col-span-2">
            {/* Location section with Google Maps embed */}
            <div>
              <h3 className="mb-2 text-xl font-bold text-[rgb(255,166,0)]">
                {footer.locationsHeading}
              </h3>
              <div className="flex flex-col justify-start gap-8 md:flex-row md:gap-16">
                {footer.locations.slice(0, 2).map((location, index) => (
                  <div key={index}>
                    <h4 className="mb-2 rounded text-2xl font-bold text-white">
                      {location.title}
                    </h4>
                    <iframe
                      src={location.src}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="mb-2 h-[150px] w-full"
                    ></iframe>
                    <p className="max-w-80 text-white">
                      {location.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="px-6">
          <div className="my-8 border-t border-[#35708F]" />
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm">
          <p>{footer.copyRightNote}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
