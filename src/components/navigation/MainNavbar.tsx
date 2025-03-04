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

  const ImageInnerNavigation = ({
    title,
    link,
    image,
  }: {
    title: string;
    link: string;
    image: string;
  }) => {
    return (
      <Link
        className="group/link flex flex-col items-center gap-2 p-4"
        href={link}
      >
        <img
          src={image}
          alt={title}
          className="aspect-square w-full max-w-24 duration-300 group-hover/link:brightness-125 group-hover/link:filter"
        />
        <span className="text-[#A6A3A3]">{title}</span>
      </Link>
    );
  };
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
                    <div className="absolute top-[calc(100%+20px)] z-50 grid h-[500px] min-w-[300px] max-w-[400px] -translate-x-1/2 cursor-default grid-cols-2 overflow-auto rounded-lg bg-white opacity-0 duration-300 [visibility:hidden] group-hover:visible group-hover:top-full group-hover:opacity-100">
                      {navigation.items.map((item, index) => (
                        <ImageInnerNavigation
                          key={index}
                          title={item.title}
                          link={item.link}
                          image={item.image}
                        />
                      ))}
                    </div>
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
