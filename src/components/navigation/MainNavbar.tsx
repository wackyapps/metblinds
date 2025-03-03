"use client";
import { websiteInfo } from "@/configs/info";
import { mainNavbarNavigation } from "@/configs/navigation";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MainNavbar = () => {
  const logo = websiteInfo.logo;
  const pathname = usePathname();

  useEffect(() => {
    // Move console.log inside useEffect for client-side only execution
    console.log("pathname:", pathname);
  }, [pathname]);

  return (
    <div>
      <div className="global-container">
        <div className="flex items-center justify-between px-3">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img width={200} height={50} src={logo.src} alt={logo.alt} />
            </Link>
          </div>
          {/* Right: Navigation */}
          <div className="flex items-center gap-5">
            {mainNavbarNavigation.map((navigation, index) => {
              if (navigation.isButton && navigation.link) {
                return (
                  <Link
                    key={index}
                    href={navigation.link}
                    className={`my-8 flex items-center gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white`}
                  >
                    <navigation.icon className="h-5 w-5" />
                    <span> {navigation.title}</span>
                  </Link>
                );
              } else if (navigation.link && !navigation.isButton) {
                return (
                  <Link
                    key={index}
                    className={`flex items-center gap-1 py-10 text-sm duration-150 ${pathname == navigation.link ? "text-[#FFA600]" : "text-[#013F68] hover:text-[#FFA600]"}`}
                    href={navigation.link}
                  >
                    <navigation.icon className="h-5 w-5" />
                    <span> {navigation.title}</span>
                  </Link>
                );
              } else if (navigation.items) {
                return (
                  <button
                    key={index}
                    className="group relative flex items-center gap-1 py-10 text-sm text-[#013F68] duration-150 hover:text-[#FFA600]"
                  >
                    <navigation.icon className="h-5 w-5" />
                    <span> {navigation.title}</span>
                    <div className="absolute top-[calc(100%+20px)] z-50 h-[500px] w-[400px] -translate-x-1/2 cursor-default bg-blue-400 opacity-0 duration-300 [visibility:hidden] group-hover:visible group-hover:top-full group-hover:opacity-100"></div>
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
