import Link from "next/link";
import {
  ClipboardDocumentListIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
const TopNav = () => {
  return (
    <div className="flex w-full flex-row items-center px-4 justify-between bg-[#013F68]  py-3 sm:px-6">
      {/* Left: Phone Number link with Icon */}
      <div className=" ">
        <a
          href="tel:+1 403 668 7855"
          className="flex items-center justify-center gap-1 text-lg font-semibold"
        >
          <PhoneIcon className="h-5 w-5 text-white" />
          <span className="text-sm text-white sm:text-base">
            (403) 668 7855
          </span>
        </a>
      </div>
      {/* Center: Promotional Text */}
      <div className="hidden text-center text-lg font-semibold text-white md:block">
        <span className="text-orange-500">40%</span> OFF CUSTOM BLINDS AND FREE
        INSTALLATION
      </div>
      {/* Right: Catalogue Link */}
      <div className="text-center sm:text-right">
        <Link
          href="/catalogue"
          className="flex items-center justify-center gap-1 text-lg font-semibold text-white sm:text-base"
        >
          <ClipboardDocumentListIcon className="h-5 w-5" />
          <span>Catalogue</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
