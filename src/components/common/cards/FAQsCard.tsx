import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FAQsCardProps {
  question: string;
  answer: string;
}

const FAQsCard = ({ question, answer }: FAQsCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);
  return (
    <div
      className={`box-border w-full overflow-hidden rounded-xl border duration-400 ${isOpen ? "border-[#FFB83D]" : "border-[#F7F9FA]"}`}
    >
      {/* Question header - always visible */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center justify-between duration-400 ${
          isOpen ? "bg-[#FFB83D]" : "bg-[#F7F9FA]"
        } px-11 py-5 transition-colors duration-300`}
      >
        <h3
          className={`text-xl font-bold duration-400 ${isOpen ? "text-white" : "text-[#454545]"}`}
        >
          {question}
        </h3>
        <div
          className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border ${
            isOpen ? "border-white" : "border-[#FFB83D]"
          }`}
        >
          <IoIosArrowDown
            className={`text-2xl duration-400 ${isOpen ? "rotate-180 text-white" : "text-[#FFB83D]"}`}
          />
        </div>
      </div>

      {/* Answer content with animation */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        ref={contentRef}
      >
        <div className="px-11 py-6">
          <div className="border-l-4 border-[#FFB83D] ps-3">
            <p className="text-lg text-[#585858]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsCard;
