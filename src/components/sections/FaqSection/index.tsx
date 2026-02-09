"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { ScrollReveal } from "../../ScrollReveal";

const faqs = [
  {
    question: "What is Federated Engineers?",
    answer:
      "Federated Engineers is a collaborative engineering pool where Data, Data Platform, and Machine Learning engineers build production-ready data platforms that support AI and analytics workloads, gaining real-world, cross-functional experience.",
  },
  {
    question: "Who is Federated Engineers for?",
    answer:
      "Federated Engineers is for engineers who want to move beyond tutorials and local projects — whether you’ve just finished school, self learning, completed a bootcamp, or want to level up your skills by working on real production systems.",
  },
  {
    question: "What kind of experience will I gain in the pool?",
    answer:
      "You’ll work on scalable, production-aligned systems alongside other engineers, learning how real platform dependencies, reliability, and cross-team collaboration work in production.",
  },
  {
    question: "What is the minimum requirement to join the pool?",
    answer:
      "You should have completed a few local projects and understand the fundamentals of Data Engineering and Infrastructure or ML Engineering. We’ll help you build production-level experience from that base.",
  },
  {
    question: "Do I need my own cloud account or tools to join?",
    answer:
      "No. Federated Engineers provides the infrastructure, tooling, and environment you need. You focus on building and learning without worrying about setup or cloud costs.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Engineers apply, complete a practical task to demonstrate production competency, defend their work, and join the pool once approved.",
  },
  {
    question: "Can businesses hire engineers from the pool?",
    answer:
      "Yes. Businesses can contact Federated Engineers to access vetted, production-competent engineers trained on real, scalable data platforms.",
  },
];

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const FAQSection = ({ className }: { className: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`w-full bg-white page ${className} px-4 lg:px-0`}>
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <ScrollReveal>
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
        </ScrollReveal>

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid w-full grid-cols-1 bg-[#E6E6E6] gap-px "
        >
          <div className="col-span-3 bg-white">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={listItem}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
