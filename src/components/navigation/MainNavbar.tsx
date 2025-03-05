"use client";
import { websiteInfo } from "@/configs/info";
import { mainNavbarNavigation } from "@/configs/navigation";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const MainNavbar = () => {
  const logo = websiteInfo.logo;
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
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
      <Link className="group/link items-center space-y-3.5" href={link}>
        <img
          src={image}
          alt={title}
          className="mx-auto aspect-square w-[79px] max-w-full duration-300 group-hover/link:[filter:sepia(1)_hue-rotate(40deg)_saturate(2)]"
        />
        <div className="text-center text-xs text-[#A6A3A3]">{title}</div>
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
          <div className="py-10 xl:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={onOpenChange}
              size={30}
              color="#013F68"
            />
          </div>
          {/* Navigation  for desktop */}
          <div className="hidden items-center gap-10 xl:flex">
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
                    onClick={() => {
                      if (navigation.link) {
                        router.push(navigation.link);
                      }
                    }}
                  >
                    <navigation.icon className="h-5 w-5" />
                    <span> {navigation.title}</span>
                    <div
                      className={`absolute top-[calc(100%+20px)] z-50 grid -translate-x-1/2 cursor-default overflow-auto rounded-lg bg-white px-10 py-9 opacity-0 duration-300 [column-gap:50px] [row-gap:19px] [visibility:hidden] group-hover:visible group-hover:top-full group-hover:opacity-100`}
                      style={{
                        gridTemplateColumns: navigation?.itemsCount
                          ? `repeat(${navigation?.itemsCount}, 1fr)`
                          : "repeat(2, 1fr)",
                        minWidth: navigation?.itemsContainerWidth
                          ? `${navigation?.itemsContainerWidth}px`
                          : "300px",
                      }}
                    >
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
