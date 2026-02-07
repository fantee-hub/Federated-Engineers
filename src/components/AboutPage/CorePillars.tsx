"use client";

import { Variants, motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";

const steps = [
  {
    step: "Resilient",
    title: "Fault-Tolerance by Design",
    description:
      "We move beyond basic consumers that run on your laptop. Our environment challenges you to build fault-tolerant Kafka consumers that navigate broker rebalance, handle 'poison pill' events via Dead Letter Queues.",
  },
  {
    step: "Scalable",
    title: "Growth Without Friction",
    description:
      "We bridge the gap from thousands to millions of events, guiding you to design cloud-native data lakes and distributed query engines that sustain sub-second performance, reliability, and scalability in production environments.",
  },
  {
    step: "Cost-Efficient",
    title: "Optimizing for the Bottom Line",
    description:
      "High performance shouldn’t mean high cost. Our engineers master storage tiering, partition strategies, and compute optimization to build Data and AI platforms that stay powerful, efficient, and cost-aware at scale.",
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

const CorePillars = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6] px-4 lg:px-0  lg:border-t-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <ScrollReveal>
          <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
            <h2 className="lg:max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              The Federated Engineers <br /> Core Pillars
            </h2>
            <p className="lg:max-w-124 pt-2 text-[#5C5C5C]">
              Building Platforms that Power the Future of AI
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
                <span className="inline-block rounded-full px-4 py-3 text-sm font-semibold text-white bg-[#7632F9] ">
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

export default CorePillars;
