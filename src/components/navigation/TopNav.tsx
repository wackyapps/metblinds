import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
/**
 * importing website info to show on top nav
 */
import { websiteInfo } from "@/configs/info";
const TopNav = () => {
  // extracting phone number form website info
  const phoneNumber = websiteInfo.phoneNumber;
  return (
    <div className="w-full bg-[#013F68] py-3">
      <div className="global-container flex flex-row items-center justify-between">
        {/* Left: Phone Number link with Icon */}
        <div className=" ">
          <a
            href={`tel:${phoneNumber.link}`}
            className="flex items-center justify-center gap-1 text-sm font-semibold sm:text-base md:text-lg"
          >
            <PhoneIcon className="h-5 w-5 text-white" />
            <span className="text-sm text-white">{phoneNumber.display}</span>
          </a>
        </div>
        {/* Center: Promotional Text */}
        <div className="hidden text-center text-sm font-semibold text-white sm:text-base md:block md:text-lg">
          <span className="text-orange-500">40%</span> OFF CUSTOM BLINDS AND
          FREE INSTALLATION
        </div>
        {/* Right: Catalogue Link */}
        <div className="text-center sm:text-right">
          <Link
            href="/"
            className="flex items-center justify-center gap-1 text-sm font-semibold text-white sm:text-base md:text-lg"
          >
            <ClipboardDocumentListIcon className="h-5 w-5" />
            <span>Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
