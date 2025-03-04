"use client";
import ContactForm from "@/components/common/forms/ContactForm";
import { aboutPage } from "@/configs/pages-data/about";
// import {} from // Modal,
// ModalContent,
// ModalHeader,
// ModalBody,
// ModalFooter,
// Button,
// useDisclosure,
// "@heroui/react";
import React from "react";

type Props = {
  data: typeof aboutPage.aboutBanner;
};

const AboutBanner: React.FC<Props> = ({ data }) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div
        className="relative min-h-[944px] w-full py-[151px]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${data.coverImage})`,
        }}
      >
        {/* Content container */}
        <div className="global-container relative z-10 mx-auto flex flex-col items-start justify-between gap-[50px] px-4 lg:flex-row">
          {/* Left content */}
          <div className="mt-[152px] flex w-full flex-col gap-[41px] lg:w-[758px]">
            <div className="flex flex-col -space-y-14">
              <h1 className="relative z-10 text-4xl font-bold text-white lg:text-5xl">
                {data.heading}
              </h1>
              <div className="h-[61px] w-[134px] rounded-[42px] bg-[#FFA600]" />
            </div>
            <p className="text-lg leading-relaxed text-white">
              {data.subHeading}
            </p>
            <div>
              <button
                // onClick={onOpen}
                type="submit"
                className={`inline-block rounded-full bg-[#FFA600] px-6 py-2 text-white lg:hidden`}
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
      {/* <Modal
        className="lg:hidden"
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {(onClose) => (
            <div className="w-full sm:min-w-[500px]">
              <div className="w-full rounded-3xl bg-white p-8">
                <ContactForm />
              </div>
            </div>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default AboutBanner;
