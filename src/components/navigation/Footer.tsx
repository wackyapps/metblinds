import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
// import footer details
import { footer } from "@/configs/navigation";
import { websiteInfo } from "@/configs/info";

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
      <div className="global-container mx-auto px-4 py-16">
        {/* Main grid container - responsive layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First Column: Logo, Description and Location */}
          <div className="space-y-6">
            {/* Logo and company description */}
            <div>
              <Image
                src="/metblinds-logo.png"
                alt="Met Blinds Logo"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-sm">
                Explore the variety of window blinds offered by Calgary Blinds
                Company Met Blinds. From controlling light flow with Zebra
                blinds to the practical option of Roller blinds, we have it all.
                If you want UV protection while still allowing natural light to
                filter, we offer Solar shades. For more energy efficiency, opt
                for motorized window blinds.
              </p>
            </div>
            {/* Location section with Google Maps embed */}
            <div>
              <h3 className="mb-2 text-xl font-bold text-[rgb(255,166,0)]">
                Locations
              </h3>
              <h4 className="mb-2 rounded text-2xl font-bold text-white">
                Calgary
              </h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.028559542614!2d-114.0092282243737!3d51.08948044114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371654643e628c3%3A0x83d9b8abe8cc7280!2sMET%20BLINDS%20Calgary!5e0!3m2!1sen!2s!4v1740803320068!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mb-2 h-[150px] w-full"
              ></iframe>
              <p className="max-w-80 text-white">
                2221 41 Ave NE Unit #14, Calgary, AB T2E 6P2, Canada
              </p>
            </div>
          </div>

          {/* Second Column: Contact Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              {footer.contactInfoHeading}
            </h3>
            <div className="space-y-4 text-sm">
              {/* Business hours */}
              <p>{footer.hoursDescription}</p>
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
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              {footer.footerNavigationHeading}
            </h3>
            {/* Navigation links with hover effect */}
            <ul className="space-y-3 text-sm">
              {footer.footerNavigations.map((item, index) => (
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

          {/* Fourth Column: Social Media and Additional Location Info */}
          <div>
            {/* Social Media Links */}
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              Follow us
            </h3>
            <div className="flex space-x-4">
              {/* Facebook - orange background */}
              <Link
                href="/"
                className="rounded border border-[#FFA600] bg-[#FFA600] p-2.5 transition-colors hover:bg-[#01405F]"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              {/* Other social media icons - dark background with hover effect */}
              <Link
                href="/"
                className="rounded border border-[#01405F] bg-[#01405F] p-2.5 transition-colors hover:bg-[#FFA600]"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="rounded border border-[#01405F] bg-[#01405F] p-2.5 transition-colors hover:bg-[#FFA600]"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="rounded border border-[#01405F] bg-[#01405F] p-2.5 transition-colors hover:bg-[#FFA600]"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </Link>
            </div>

            {/* Additional Location Information */}
            <div className="mt-12">
              <h4 className="mb-4 font-semibold text-[#FFA600]">Locations</h4>
              <p className="mb-2 text-sm">Calgary</p>
              <p className="text-sm">
                2221 41 Ave NE Unit #14, Calgary, AB T2E 6P2, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 border-t border-[#35708F]" />

        {/* Copyright Notice */}
        <div className="text-center text-sm">
          <p>
            Copyright © 2025 Met Blinds. All rights reserved. Blog | Privacy
            Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
