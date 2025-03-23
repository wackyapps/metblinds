import { FaClipboardCheck, FaTools, FaClock, FaMedal } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export const aboutPage = {
  metaData: {
    title: "About Us - Met Blinds",
    description:
      "Discover who we are and our commitment to providing premium window blinds that enhance your living and working spaces.",
  },

  aboutBanner: {
    heading: "Who We Are",
    subHeading:
      "At Met Blinds, we specialize in providing premium, custom window blinds that combine style, functionality, and smart technology to enhance your living and working spaces. Our commitment to quality craftsmanship, expert installation, and exceptional customer service has made us a trusted choice for homeowners and businesses looking to upgrade their interiors with elegant and efficient window treatments.",
    coverImage: "/banners/about-banner-img.png",
  },
  aboutMission: {
    heading: "Our Mission",
    subHeading:
      "To bring high-quality, stylish, and innovative window coverings that improve privacy, energy efficiency, and interior aesthetics, all while ensuring ease of use through smart automation.",
    features: [
      {
        icon: FaClipboardCheck,
        title: "FREE ESTIMATES",
      },
      {
        icon: FaTools,
        title: "UPGRADE AS NEEDED",
      },
      {
        icon: FaClock,
        title: "INSTALLED IN 8-10 BUSINESS DAYS",
      },
      {
        icon: FaMedal,
        title: "10 YEAR WARRANTY",
      },
    ],
  },

  whyChooseUs: {
    heading: "WHY CHOOSE US?",
    features: [
      {
        title: "High-Quality Materials",
        description:
          "Our blinds are made from durable, premium fabrics for long-lasting performance.",
      },
      {
        title: "Customization at Its Best",
        description:
          "A variety of colors, patterns, and materials to match your unique style.",
      },
      {
        title: "Expert Installation",
        description:
          "Hassle-free, professional installation is included with every purchase.",
      },
      {
        title: "Smart Home Integration",
        description:
          "Control your blinds remotely with a smartphone, remote, or voice commands.",
      },
      {
        title: "Customer Satisfaction Guaranteed",
        description:
          "We strive to provide a seamless experience from selection to installation.",
      },
    ],
  },
  aboutOurProcess: {
    heading: "OUR PROCESS",
    features: [
      {
        id: 1,
        title: "Free Consultation",
        description:
          "Our experts help you choose the best blinds for your space.",
        icon: FaComments,
        bgColor: "bg-[#FFA633]",
        textColor: "text-white",
      },
      {
        id: 2,
        title: "Custom Manufacturing",
        description: "Each blind is made to your specifications.",
        icon: MdFactory,
        bgColor: "bg-[#F7F9FA]",
        textColor: "text-gray-600",
      },
      {
        id: 3,
        title: "Professional Installation",
        description: "We ensure a perfect fit and seamless operation.",
        icon: BsTools,
        bgColor: "bg-[#F7F9FA]",
        textColor: "text-gray-600",
      },
      {
        id: 4,
        title: "After-Sales Support",
        description: "We provide guidance on maintenance and smart features.",
        icon: BiSupport,
        bgColor: "bg-[#F7F9FA]",
        textColor: "text-gray-600",
      },
    ],
  },
};
