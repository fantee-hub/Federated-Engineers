"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is the engineering pool and who is it for?",
    answer:
      "The pool is a collaborative group of data, ML, platform, and analytics engineers who work together on building data and AI systems. It’s for engineers seeking structured, hands-on work experience and for businesses needing vetted technical talent.",
  },
  {
    question: "What experience do engineers gain by joining the pool?",
    answer:
      "Engineers work on data and ai building projects across data, ML, platform, and analytics engineering, following shared standards and collaborating with skilled peers to build systems used by businesses.",
  },
  {
    question: "How are engineers vetted before joining?",
    answer:
      "Every engineer goes through a structured assessment including technical evaluations, interviews, and collaboration checks to ensure they meet the engineering and teamwork standards expected in the pool.",
  },
  {
    question:
      "What kind of engineering talent can businesses hire from the pool?",
    answer:
      "Businesses can access vetted engineers across data platform development, AI platforms, ML engineering, analytics engineering, and cloud architecture — all trained to work collaboratively and follow consistent engineering practices.",
  },
  {
    question: "How does the process work for joining or hiring from the pool?",
    answer:
      "Engineers apply and go through vetting before joining. Businesses share their requirements, and we match them with engineers who fit the needed skills and engineering standards. Once matched, work begins through shared workflows and structured procedures.",
  },
];

const FAQSection = ({ className }: { className: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`w-full bg-white page ${className} px-4 lg:px-0`}>
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
            FAQs
          </span>
          <h2 className="lg:max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
            Answers to Common Questions
          </h2>
          <p className="lg:max-w-108.5 pt-2 text-[#5C5C5C]">
            Here are key details engineers and businesses often want to know
            about joining the pool or hiring from it.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 bg-[#E6E6E6] gap-px ">
          <div className="col-span-3 bg-white">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-[#F0F0F0] last:border-b-0 first:border-t ${
                  openIndex === index ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between lg:px-7 p-4 gap-2 lg:py-6 text-left cursor-pointer transition-colors hover:bg-[#FAFAFA]"
                >
                  <span className="lg:text-[20px] text-lg text-black">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full bg-[#E4D6FE]"
                  >
                    <div className="w-6 h-6 flex items-center justify-center rounded-full text-white bg-[#7632F9]">
                      <Plus size={16} />
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="lg:px-7 px-4 pb-6 text-[#5C5C5C] leading-6 max-w-170">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
