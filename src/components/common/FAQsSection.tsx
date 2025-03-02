"use client";
import { Accordion, AccordionItem } from "@heroui/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Flash Loan",
    answer:
      "A Flash Loan is a type of decentralized loan that allows users to borrow funds instantly without collateral, provided the borrowed amount is returned within the same transaction.",
  },
  {
    question: "How long does it take to process a Flash Loan transaction?",
    answer:
      "Flash Loan transactions are processed instantly within a single blockchain block, typically taking only a few seconds to complete.",
  },
  {
    question: "Is Simplex regulated?",
    answer:
      "Yes, Simplex is a fully regulated financial institution that complies with all relevant financial regulations and security standards.",
  },
  {
    question: "How do I deposit funds into Simplex?",
    answer:
      "You can deposit funds into Simplex using various payment methods including credit/debit cards, bank transfers, and cryptocurrency transfers through our secure platform.",
  },
];

const FAQsSection = () => {
  return (
    <div className="py-24">
      <div className="global-container mx-auto w-full px-4">
        <div className="flex justify-center">
          <h2 className="mb-14 rounded-full bg-[#FFBB3D] px-12 py-2.5 text-[40px] font-semibold text-[#013F68]">
            FAQs{" "}
          </h2>
        </div>

        <Accordion>
          {faqs.slice(1).map((faq, index) => (
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
              children={
                <div className="px-6 py-4 ps-4">
                  <div className="border-l-4 border-[#FFBB3D] ps-2">
                    {faq.answer}
                  </div>
                </div>
              }
            >
              {/* {faq.answer} */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsSection;
