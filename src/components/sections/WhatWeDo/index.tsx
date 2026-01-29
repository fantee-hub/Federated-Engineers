"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Data Platforms",
    description:
      "We build scalable data environments for ingestion, transformation, and access, giving engineers real experience and businesses reliable data platforms.",
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
    title: "AI Platforms",
    description:
      "We build AI-ready systems for deployment, automation, and monitoring, giving engineers practical integration experience and businesses production-focused AI solutions.",
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
    title: "ML Infrastructure & Workflows",
    description:
      "We build pipelines and tools for training, evaluating, deploying, and maintaining models, giving engineers real ML workflow experience and companies reliable processes.",
    icons: [
      "/assets/icons/kubeflow.svg",
      "/assets/tenorflow.svg",
      "/assets/icons/mlflow.svg",
      "/assets/build ingestion.svg",
    ],
  },
  {
    title: "Analytics Environments",
    description:
      "We build dashboards, reports, and insight layers that support data-driven decisions, giving engineers real analytics experience and companies clear, reliable insights.",
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
      "We design cloud systems that balance performance and cost, giving engineers practical cloud architecture experience and companies efficient, scalable infrastructure.",
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
    title: "Cross-Discipline Integration",
    description:
      "We connect data, ML, platform, and analytics engineering into unified systems, giving engineers real cross-functional experience and companies seamless end-to-end solutions.",
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
    <div className="relative page">
      <div className="absolute border-[#E6E6E6] border-t w-full top-20"></div>
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <section className="mx-auto max-w-300 border-x border-[#E6E6E6] bg-white pt-30 ">
        <div className="flex flex-col items-center px-10 pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            What We Do
          </span>
          <h2 className="max-w-4xl text-[48px] font-semibold leading-14 text-[#2F1464]">
            A Collaborative Pool Building <br /> Data and AI Platforms
          </h2>
        </div>

        <div className="grid grid-cols-1 border-y border-[#E6E6E6] bg-[#E6E6E6] md:grid-cols-2 lg:grid-cols-3 gap-px">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col bg-white">
              <div className="flex flex-1 flex-col p-10 lg:px-6 lg:pt-6 lg:pb-4">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
