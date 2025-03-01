import { IoHomeOutline } from "react-icons/io5";
import { LuBlinds } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IconType } from "react-icons";

// main navbar navigation type
type NavigationType = {
  title: string;
  link?: string;
  icon: IconType;
  isButton?: boolean;
  items?: string[];
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
    items: [],
  },
  {
    title: "Control System",
    icon: CiSettings,
    items: [],
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
  footerNavigationHeading: "Window Coverings",
  footerNavigations: [
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
};
