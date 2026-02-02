"use client";
import { ScrollReveal } from "../../ScrollReveal";
import { Variants, motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Apply",
    description:
      "Fill out the application form to show your interest and share your background.",
  },
  {
    step: "Step 2",
    title: "Complete a Task",
    description:
      "Receive a practical assessment task that helps evaluate your skill level for production competent work.",
  },
  {
    step: "Step 3",
    title: "Defend Your Work & Join the Pool",
    description:
      "Defend your task in a review session and join the pool once approved.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6] px-4 lg:px-0 mt-10 lg:mt-0 border-t lg:border-t-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <ScrollReveal>
          <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              How It Works
            </span>
            <h2 className="lg:max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              Join the Engineering Pool in <br className="hidden lg:block" />{" "}
              Three Simple Steps
            </h2>
            <p className="lg:max-w-124 pt-2 text-[#5C5C5C]">
              A straightforward process built for clarity, quality, and
              collaboration.
            </p>
          </div>
        </ScrollReveal>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#E6E6E6]"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex bg-white flex-col p-6 lg:border-r border-b border-[#E6E6E6] lg:first:border-b-0
                 last:border-r-0 last:border-b-0
                 md:border-r md:nth-[2n]:border-r-0 md:nth-last-[-n+2]:border-b-0
                 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 g:nth-last-[-n+3]:border-b-0"
            >
              <div className="mb-8">
                <span className="inline-block rounded-full px-4 py-3 text-sm font-semibold text-[#7632F9] bg-white border border-[#E6E6E6]">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-4 text-[20px] font-semibold text-[#2E2E2E]">
                {item.title}
              </h3>
              <p className="text-[16px] leading-6 text-[#5C5C5C] max-w-88">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
