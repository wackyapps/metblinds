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
  FaLink,
  FaSearch,
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
    link: "/blog",
    icon: TiDocumentText,
  },
  {
    title: "About Us",
    link: "/about",
    icon: LuInfo,
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
  controlSystem: controlSystemPages.map((controlSystem) => ({
    title: controlSystem.title,
    link: `/control-system/${controlSystem.slug}`,
  })),
  blindsNavigationHeading: "Blinds",
  blindsNavigation: blinds.map((blind) => ({
    title: blind.title,
    link: `/blinds/${blind.slug}`,
  })),
  socialLinks: [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/metblinds/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/metblindsca/",
    },
    {
      icon: '/icons/footer/BBB.svg',
      link: "https://www.bbb.org/ca/ab/calgary/profile/window-coverings/met-blinds-0017-132364/#sealclick",
    },
    {
      icon: '/icons/footer/Search.svg',
      link: "https://www.renovationfind.com/companies/met-blinds-7816",
    },
  ],

  googleMap: {
    heading: "Locations",
    title: "Calgary",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.028559542614!2d-114.0092282243737!3d51.08948044114894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371654643e628c3%3A0x83d9b8abe8cc7280!2sMET%20BLINDS%20Calgary!5e0!3m2!1sen!2s!4v1740803320068!5m2!1sen!2s",
    description: "2221 41 Ave NE Unit #14, Calgary, AB T2E 6P2, Canada",
  },

  /**
   * bottom footer note for copyright
   */
  copyRightNote:
    "Copyright © 2025 Met Blinds. All rights reserved. Blog | Privacy Policy",
};
