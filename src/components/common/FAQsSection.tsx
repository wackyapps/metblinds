"use client";
import { inter, rubik } from "@/fonts";
import { Accordion, AccordionItem } from "@heroui/react";

interface FAQItem {
  question: string;
  answer: string;
}

type Props = {
  data: {
    heading: string;
    faqs: FAQItem[];
  };
};
const FAQsSection = ({ data }: Props) => {
  return (
    <div className="py-24">
      <div className="global-container mx-auto w-full px-4">
        <div className="flex justify-center">
          <h2
            className={`${rubik.className} mb-14 rounded-full bg-[#FFBB3D] px-12 py-2.5 text-[40px] font-semibold text-[#013F68]`}
          >
            {data.heading}
          </h2>
        </div>

        <Accordion>
          {data.faqs.slice(1).map((faq, index) => (
            <AccordionItem
              HeadingComponent={(item) => {
                return (
                  <h3
                    className={`mb-3 rounded-xl duration-300 ${item["data-open"] ? "bg-[#FFBB3D] text-white" : "bg-[#F7F9FA] text-[#454545]"} px-6 py-4 text-[22px] font-semibold`}
                  >
                    {item.children}
                  </h3>
                );
              }}
              key={index}
              aria-label={faq.question}
              title={faq.question}
            >
              <div className="px-6 py-4 ps-4">
                <div
                  className={`${inter.className} border-l-4 border-[#FFBB3D] ps-2`}
                >
                  {faq.answer}
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsSection;
