"use client";
import ContactForm from "@/components/common/forms/ContactForm";
import { aboutPage } from "@/configs/pages-data/about";
import { inter } from "@/fonts";
import { Modal, ModalContent, useDisclosure } from "@heroui/react";

import React from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  data: typeof aboutPage.aboutBanner;
};

const AboutBanner: React.FC<Props> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div
        className="relative min-h-[500px] w-full py-[151px] sm:min-h-[650px] md:min-h-[944px]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${data.coverImage})`,
        }}
      >
        {/* Content container */}
        <div className="relative z-10 mx-auto flex max-w-[1460px] flex-col items-start justify-between gap-[50px] px-4 lg:flex-row">
          {/* Left content */}
          <div className="flex w-full flex-col gap-5 sm:gap-7 md:mt-[152px] md:gap-[41px] lg:w-[758px]">
            <div className="flex justify-start">
              <h2
                className={`${inter.className} relative text-3xl font-semibold text-white after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:mb-2 md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl`}
              >
                {data.heading}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white sm:text-base md:text-lg">
              {data.subHeading}
            </p>
            <div>
              <button
                onClick={onOpen}
                type="submit"
                className={`inline-block rounded-full bg-[#FFA600] px-4 py-1.5 text-white sm:px-6 sm:py-2 lg:hidden`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right content - Contact Form */}
          <div className="hidden w-full rounded-[35px] bg-white p-4 lg:block lg:w-[605px]">
            <ContactForm isSmall={true} />
          </div>
        </div>
      </div>
      <Modal
        className="lg:hidden"
        scrollBehavior="inside"
        size="full"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          closeButton: "hidden",
        }}
      >
        <ModalContent className="w-full bg-transparent">
          {(onClose) => (
            <div className="flex h-full w-full items-center justify-center">
              <div className="relative w-full rounded-3xl bg-white">
                <button
                  onClick={onClose}
                  className="absolute right-1 top-1 rounded-full p-2 text-3xl duration-200 hover:bg-gray-100"
                >
                  <IoClose />
                </button>

                <ContactForm className="w-full" />
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AboutBanner;
