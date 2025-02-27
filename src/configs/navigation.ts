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
