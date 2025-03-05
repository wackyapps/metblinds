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
  contactInfoHeading: "Contact Info",
  hoursDescription:
    "Hours:\n Monday to Friday: 10am - 6pm \n Saturday & Sunday: By Appointment Only",
  quickLinksHeading: "QUICK LINKS",
  quickLinks: [
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
  constrolSystemsHeading: "Control system",
  controlSystem: [
    {
      title: "Corded Blinds",
      link: "/",
    },
    {
      title: "Cordless Blinds",
      link: "/",
    },
    {
      title: "Electric Blinds",
      link: "/",
    },
    {
      title: "Manual wand Blinds",
      link: "/",
    },
    {
      title: "Motorized Blinds",
      link: "/",
    },
    {
      title: "Smart Control",
      link: "/",
    },
  ],
  blindsNavigationHeading: "Blinds",
  blindsNavigation: [
    { title: "Zebra Blinds", link: "/" },
    { title: "Roller Blinds", link: "/" },
    { title: "Solar Shades", link: "/" },
    { title: "Motorized Blinds", link: "/" },
    { title: "Smart Blinds", link: "/" },
    { title: "Warranty", link: "/" },
    { title: "Testimonials", link: "/" },
    { title: "Request a Consultation", link: "/" },
    { title: "Blinds Calgary", link: "/" },
    { title: "Blinds Red Deer", link: "/" },
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
};
