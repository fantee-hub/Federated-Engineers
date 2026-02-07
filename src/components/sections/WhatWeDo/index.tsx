"use client";
import { Variants, motion } from "framer-motion";
import { ScrollReveal } from "../../ScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
};

const services = [
  {
    title: "Data Platforms",
    description:
      "We build high-performance data platforms that bridge the gap between raw data and actionable insights, providing engineers with practical experience and businesses with reliable systems.",
    icons: [
      "/assets/icons/apache.svg",
      "/assets/icons/cluster.svg",
      "/assets/build ingestion.svg",
      "/assets/icons/google_bigquery.svg",
      "/assets/icons/dbt-bit.svg",
      "/assets/icons/snowflake.svg",
    ],
  },
  {
    title: "Data Pipelines",
    description:
      "We build reliable Batch and Streaming ingestion, providing Engineers with production-grade workflow experience and businesses with high-integrity data systems.",
    icons: [
      "/assets/tenorflow.svg",
      "/assets/icons/unnamed-icon1.svg",
      "/assets/icons/mlflow.svg",
      "/assets/icons/fastapi.svg",
      "/assets/icons/docker.svg",
      "/assets/icons/google-cloud.svg",
    ],
  },
  {
    title: "AI Platform",
    description:
      "We build AI-ready infrastructure that bridges the gap between development and production, providing engineers with deep integration expertise and delivering automated, monitorable AI systems for businesses.",
    icons: [
      "/assets/icons/kubeflow.svg",
      "/assets/tenorflow.svg",
      "/assets/icons/mlflow.svg",
      "/assets/build ingestion.svg",
    ],
  },
  {
    title: "ML Infrastructures & Workflows",
    description:
      "We engineer end-to-end MLOps platforms that automate the training, evaluation, and deployment of models, equipping engineers with authentic machine learning workflow experience and businesses with robust, production-ready processes",
    icons: [
      "/assets/insights.svg",
      "/assets/icons/power-bi.svg",
      "/assets/icons/looker.svg",
      "/assets/icons/metabase.svg",
      "/assets/icons/dbt-bit.svg",
      "/assets/icons/apache-superset.svg",
    ],
  },
  {
    title: "Cloud Architecture",
    description:
      "We architect cost-optimized cloud systems and secure networking infrastructures that maximize performance, providing engineers with hands-on architectural experience and businesses with resilient, scalable, and efficient environments.",
    icons: [
      "/assets/icons/aws.svg",
      "/assets/icons/google-cloud.svg",
      "/assets/icons/microsoft_azure.svg",
      "/assets/icons/unnamed-icon1.svg",
      "/assets/icons/docker.svg",
      "/assets/icons/unnamed-icon2.svg",
    ],
  },
  {
    title: "Cross Functional Learning",
    description:
      "We unify Data, Machine Learning, and Platform Engineering to create a cross-functional environment where engineers master production workflows and businesses get integrated solutions.",
    icons: [
      "/assets/icons/github.svg",
      "/assets/icons/jira.svg",
      "/assets/icons/slack.svg",
      "/assets/icons/confluence.svg",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <div className="relative page px-4 lg:px-0 border-b border-[#E6E6E6] lg:border-none">
      <div className="absolute border-[#E6E6E6] border-t w-full top-20 hidden lg:block"></div>
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0 hidden lg:block"></div>
      <section className="mx-auto max-w-300 border-x border-[#E6E6E6] bg-white lg:pt-30 pt-10">
        <ScrollReveal>
          <div className="flex flex-col items-center px-10 pb-10 text-center">
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              What We Do
            </span>
            <h2 className="max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              A Collaborative Engineering Pool <br /> Building Data and AI
              Platforms
            </h2>
            <p className="max-w-124 pt-2 text-[#5C5C5C]">
              Local projects aren’t enough for real production systems. Our pool
              gives engineers the experience needed to work at scale.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 lg:border-y border-t border-[#E6E6E6]  md:grid-cols-2 lg:grid-cols-3 "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col bg-white border-r-0 border-b border-[#E6E6E6] 
           last:border-b-0 last:border-r-0 
           md:border-r md:nth-[2n]:border-r-0 md:nth-last-[-n+2]:border-b-0
           lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 lg:nth-last-[-n+3]:border-b-0"
            >
              <div className="flex flex-1 flex-col px-6 pt-6 pb-4">
                <h3 className="mb-3 text-[20px] font-semibold text-[#2F1464]">
                  {service.title}
                </h3>
                <p className="text-base leading-6 text-[#5C5C5C]">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#E6E6E6] p-4 overflow-hidden">
                {service.icons.map((icon, i) => (
                  <motion.div
                    key={i}
                    className="relative h-10 w-10"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center rounded-lg bg-[#FAFAFA] transition-transform hover:scale-110">
                      <img
                        src={icon}
                        alt={`Icon ${i + 1}`}
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default WhatWeDo;
