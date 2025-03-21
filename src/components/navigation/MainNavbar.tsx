"use client";
import { websiteInfo } from "@/configs/info";
import { mainNavbarNavigation } from "@/configs/navigation";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  useDisclosure,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import { PiMedal } from "react-icons/pi";
import useWarrantyDialog from "@/hooks/useWarrantyDialog";

const MainNavbar = () => {
  const logo = websiteInfo.logo;
  const pathname = usePathname();
  // onOpen,
  const { isOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const { openDialog } = useWarrantyDialog();

  useEffect(() => {
    // Move console.log inside useEffect for client-side only execution
    console.log("pathname:", pathname);
  }, [pathname]);

  const ImageInnerNavigation = ({
    title,
    link,
    image,
    onClose,
  }: {
    title: string;
    link: string;
    image: string;
    onClose?: () => void;
  }) => {
    return (
      <Link
        className="group/link items-center space-y-3.5"
        href={link}
        onClick={onClose}
      >
        <img
          src={image}
          alt={title}
          className={`mx-auto aspect-square w-[79px] max-w-full duration-300 group-hover/link:[filter:invert(13%)_sepia(99%)_saturate(2083%)_hue-rotate(1deg)_brightness(102%)_contrast(101%)] ${pathname == link ? "[filter:invert(13%)_sepia(99%)_saturate(2083%)_hue-rotate(1deg)_brightness(102%)_contrast(101%)]" : "group-hover/link:[filter:invert(13%)_sepia(99%)_saturate(2083%)_hue-rotate(1deg)_brightness(102%)_contrast(101%)]"}`}
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
              /**
               * warranty will appear if the link is button
               */
              if (navigation.isButton && navigation.link) {
                return (
                  <div key={index} className="flex items-center gap-10">
                    <button
                      className={`flex items-center gap-1 py-10 text-sm text-[#013F68] duration-150 hover:text-[#FFA600]`}
                      onClick={openDialog}
                    >
                      <PiMedal className="h-5 w-5" />
                      <span>Warranty</span>
                    </button>

                    <Link
                      href={navigation.link}
                      className={`my-8 flex items-center gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white`}
                    >
                      <navigation.icon className="h-5 w-5" />
                      <span> {navigation.title}</span>
                    </Link>
                  </div>
                );
              } else if (
                navigation.link &&
                !navigation.isButton &&
                !navigation.items
              ) {
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
                  <div key={index} className="group relative inline-block">
                    <button
                      className="flex items-center gap-1 py-10 text-sm text-[#013F68] duration-150 hover:text-[#FFA600]"
                      onClick={() => {
                        if (navigation.link) {
                          router.push(navigation.link);
                        }
                      }}
                    >
                      <navigation.icon className="h-5 w-5" />
                      <span> {navigation.title}</span>
                    </button>
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
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        size="lg"
        className="rounded-none xl:hidden"
        onOpenChange={onOpenChange}
      >
        <DrawerContent className="rounded-none">
          {(onClose) => (
            <nav className="flex-col items-start p-4 xl:flex">
              {mainNavbarNavigation.map((navigation, index) => {
                if (navigation.items) {
                  return (
                    <div key={index}>
                      <Accordion className="px-0">
                        <AccordionItem
                          className="px-0"
                          HeadingComponent={(item) => (
                            <div className="m-0 flex items-center justify-between p-0">
                              <button
                                className={`flex items-center gap-3 whitespace-nowrap rounded-full px-5 py-6 text-lg text-[#013F68] ${pathname == navigation.link ? "text-[#FFA600]" : "hover:text-[#FFA600]"}`}
                                onClick={() => {
                                  if (navigation.link) {
                                    router.push(navigation.link);
                                    onClose();
                                  } else {
                                    console.log("item", item);
                                  }
                                }}
                              >
                                <navigation.icon className="h-5 w-5" />
                                {navigation.title}
                              </button>{" "}
                              {item.children}
                            </div>
                          )}
                        >
                          <div className="grid w-full grid-cols-3 gap-5">
                            {navigation.items.map((item, index) => (
                              <ImageInnerNavigation
                                key={index}
                                onClose={() => {
                                  onClose();
                                }}
                                {...item}
                              />
                            ))}
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <Link
                        href={navigation?.link || ""}
                        onClick={() => {
                          onClose();
                        }}
                        className={`flex items-center gap-3 rounded-full px-5 py-6 text-lg text-[#013F68] ${pathname == navigation.link ? "text-[#FFA600]" : "hover:text-[#FFA600]"}`}
                      >
                        <navigation.icon className="h-5 w-5" />
                        <span> {navigation.title}</span>
                      </Link>
                    </div>
                  );
                }
              })}
              <div>
                <button
                  onClick={() => {
                    openDialog();
                    onClose();
                  }}
                  className={`flex items-center gap-3 rounded-full px-5 py-6 text-lg text-[#013F68] hover:text-[#FFA600]`}
                >
                  <PiMedal className="h-5 w-5" />
                  <span> Warranty</span>
                </button>
              </div>
            </nav>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainNavbar;
