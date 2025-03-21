"use client";
import { rubik } from "@/fonts";
import FAQsCard from "./cards/FAQsCard";

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
      <div className="mx-auto w-full max-w-[1420px] px-4">
        <div className="flex justify-center">
          <h2
            className={`${rubik.className} mb-14 rounded-full bg-[#FFBB3D] px-12 py-2.5 text-[40px] font-semibold text-[#013F68]`}
          >
            {data.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {data.faqs.map((faq, index) => (
            <FAQsCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
