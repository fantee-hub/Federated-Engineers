"use client";

import { motion } from "framer-motion";

const COMPARISON_DATA = [
  {
    feature: "Environment",
    selfLearner: {
      title: "Localhost",
      desc: 'Runs on a single laptop in a "happy path" scenario.',
    },
    federated: {
      title: "Cloud-Scale Simulation",
      desc: "Runs in a cloud environment under production-level load.",
    },
  },
  {
    feature: "Ingestion",
    selfLearner: {
      title: "Basic Consumer",
      desc: "Reads from a local Kafka topic and prints to the console.",
    },
    federated: {
      title: "Resilient Pipeline",
      desc: 'Uses Manual Offset Management and a Dead Letter Queue (DLQ) to handle "poison pill" events.',
    },
  },
  {
    feature: "Storage",
    selfLearner: {
      title: "CSV/JSON Files",
      desc: "Stored locally in a single folder without structure.",
    },
    federated: {
      title: "Optimized Data Lake",
      desc: "Partitioned Apache Parquet in Data Lakes with a Data Catalog for instant query ability.",
    },
  },
  {
    feature: "Performance",
    selfLearner: {
      title: "Good Enough",
      desc: "Works fine with 100,000 rows of data.",
    },
    federated: {
      title: "Battle-Tested",
      desc: "Uses Query Engines with partition pruning to query millions of rows in seconds.",
    },
  },
  {
    feature: "Security & Ops",
    selfLearner: {
      title: "None",
      desc: "Root access, no logs, and hardcoded credentials.",
    },
    federated: {
      title: "Production-Ready",
      desc: "Implements IAM Roles, KMS Encryption, Secrets and Prometheus/Grafana for real-time monitoring.",
    },
  },
  {
    feature: "Cost",
    selfLearner: {
      title: "Unmonitored",
      desc: "Could accidentally run up a $500 bill overnight.",
    },
    federated: {
      title: "FinOps-Aware",
      desc: "Built using Spot Instances, Reserved Instances and Lifecycle Policies to keep costs at a minimum.",
    },
  },
];

const ProductionGap = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6] px-4 lg:px-0 my-10 lg:my-20 border-t lg:border-t">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl lg:text-5xl font-bold text-[#2D1663] mb-4"
          >
            The Production Gap: A Tale <br className="hidden lg:block" /> of Two
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm lg:text-base"
          >
            Experience that makes data engineers hire-ready.
          </motion.p>
        </div>

        <div className="hidden lg:block border-t  border-[#E6E6E6]">
          <div className="sticky top-18 z-30 grid grid-cols-3 bg-white border-b border-[#E6E6E6]">
            <div className="p-6 font-semibold text-black text-xl bg-[#FAFAFA]">
              Feature
            </div>
            <div className="p-6 font-semibold text-black text-xl bg-[#FAFAFA] border-l border-[#E6E6E6]">
              The "Self-Learner" Project
            </div>
            <div className="p-6 font-semibold text-white text-xl bg-[#7632F9]">
              The "Federated Engineers" Project
            </div>
          </div>

          {COMPARISON_DATA.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 border-b border-[#E6E6E6] last:border-0"
            >
              <div className="p-6 font-semibold text-black flex items-center bg-white">
                {row.feature}
              </div>
              <div className="p-6 border-x border-[#E6E6E6] flex gap-4 bg-white">
                <img
                  src="/assets/XCircle.svg"
                  alt="x circle icon"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="font-semibold text-black mb-1">
                    {row.selfLearner.title}
                  </p>
                  <p className="text-base text-[#5C5C5C] leading-relaxed">
                    {row.selfLearner.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 flex gap-4 bg-white">
                <img
                  src="/assets/checkCircle.svg"
                  alt="check circle icon"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="font-semibold text-black mb-1">
                    {row.federated.title}
                  </p>
                  <p className="text-base text-[#5C5C5C] leading-relaxed">
                    {row.federated.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Version  */}
        <div className="lg:hidden border-t border-[#E6E6E6]">
          {/* Sticky Header */}
          <div className="sticky top-18 z-20 flex grid-cols-2 bg-white border-b border-[#E6E6E6]">
            <div className="flex-1 p-4 text-center text-sm font-semibold text-black bg-[#FAFAFA]">
              The "Self-Learner" <br /> Project
            </div>
            <div className="flex-1 p-4 text-center text-sm font-bold text-white bg-[#7632F9]">
              The "Federated <br /> Engineers" Project
            </div>
          </div>

          {COMPARISON_DATA.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="border-b border-[#E6E6E6] last:border-0"
            >
              <div className=" p-6 text-left font-semibold text-black border-b border-[#E6E6E6]">
                {row.feature}
              </div>

              <div className="flex flex-col">
                <div className="flex-1 p-6 border-b border-[#E6E6E6] flex flex-col ">
                  <div className="flex gap-4 ">
                    <img
                      src="/assets/XCircle.svg"
                      alt="x circle icon"
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        {row.selfLearner.title}
                      </p>
                      <p className="text-sm text-[#5C5C5C] leading-tight">
                        {row.selfLearner.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col ">
                  <div className="flex gap-4">
                    <img
                      src="/assets/checkCircle.svg"
                      alt="check circle icon"
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-black text-sm mb-1">
                        {row.federated.title}
                      </p>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed">
                        {row.federated.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionGap;
