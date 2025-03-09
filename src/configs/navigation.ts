import { IoHomeOutline } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { LuBlinds } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IconType } from "react-icons";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import controlSystemPages from "./pages-data/control-systems";
import blinds from "./pages-data/blinds";
// main navbar navigation type
type NavigationType = {
  title: string;
  link?: string;
  icon: IconType;
  isButton?: boolean;
  items?: { title: string; link: string; image: string }[];
  itemsCount?: number;
  itemsContainerWidth?: number;
};

// main navbarLinks
export const mainNavbarNavigation: NavigationType[] = [
  {
    title: "Home",
    link: "/",
    icon: IoHomeOutline,
  },
  {
    title: "About Us",
    link: "/about",
    icon: LuInfo,
  },
  {
    title: "Blinds",
    icon: LuBlinds,
    items: blinds.map((blind) => ({
      title: blind.title,
      link: `/blinds/${blind.slug}`,
      image: blind.icon,
    })),
    itemsCount: 3,
    itemsContainerWidth: 400,
  },
  {
    title: "Control System",
    icon: CiSettings,
    link: "/control-system",
    items: controlSystemPages.map((controlSystem) => ({
      title: controlSystem.title,
      link: `/control-system/${controlSystem.slug}`,
      image: controlSystem.icon,
    })),
  },
  {
    title: "Blogs",
    link: "/blogs",
    icon: TiDocumentText,
  },
  {
    title: "Contact Us",
    link: "/contact",
    icon: MdOutlinePermContactCalendar,
    isButton: true,
  },
];

export const footer = {
  logo: "/metblinds-logo.png",
  footerDescription:
    "Explore the variety of window blinds offered by Calgary Blinds Company Met Blinds. From controlling light flow with Zebra blinds to the practical option of Roller blinds, we have it all. If you want UV protection while still allowing natural light to filter, we offer Solar shades. For more energy efficiency, opt for motorized window blinds.",
  contactInfoHeading: "Contact Info",
  hoursDescription:
    "Hours:\n Monday to Friday: 10am - 6pm \n Saturday & Sunday: By Appointment Only",
  quickLinksHeading: "QUICK LINKS",
  copyRightNote:
    " Copyright © 2025 Met Blinds. All rights reserved. Blog | Privacy Policy",
  quickLinks: [
    { title: "Zebra Blinds", link: "/blinds/zebra-blinds" },
    { title: "Roller Blinds", link: "/blinds/roller-blinds" },
    { title: "Sun Screen blinds", link: "/blinds/sun-shaded-blinds" },
    { title: "Motorized Blinds", link: "/control-system/motorized-blinds" },
    {
      title: "Warranty",
      link: "/",
    },
    {
      title: "Testimonials",
      link: "/",
    },
    {
      title: "Request a Consultation",
      link: "/",
    },
  ],

  socialLinks: [
    {
      icon: FaFacebookF,
      link: "/",
    },
    {
      icon: FaInstagram,
      link: "/",
    },
    {
      icon: FaTwitter,
      link: "/",
    },
    {
      icon: FaLinkedinIn,
      link: "/",
    },
  ],
  locationsHeading: "Locations",
  locations: [
    {
      title: "Calgary",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.028559542614!2d-114.0092282243737!3d51.08948044114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164e533eaaaab%3A0x344c8b0dd9aa902d!2s2221%2041%20Ave%20NE%20Unit%20%2314%2C%20Calgary%2C%20AB%20T2E%206P2%2C%20Canada!5e0!3m2!1sen!2s!4v1741544570020!5m2!1sen!2s",
      description: "2221 41 Ave NE Unit #14, Calgary, AB T2E 6P2, Canada",
    },
    {
      title: "Red Deer",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.0873204172854!2d-113.85034432428387!3d52.296269552771065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53745458b32e147d%3A0x3f5deabf6ea77c96!2s6720%2071%20St%20%232%2C%20Red%20Deer%2C%20AB%20T4P%203Y7%2C%20Canada!5e0!3m2!1sen!2s!4v1741544664454!5m2!1sen!2s",
      description: "6720 71 St #2, Red Deer, AB T4P 3Y7, Canada",
    },
  ],
};
