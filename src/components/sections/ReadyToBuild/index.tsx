"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ReadyToBuild = () => {
  const industryIcons = [
    "/assets/icons/slack.svg",
    "/assets/icons/aws.svg",
    "/assets/icons/atlassian.svg",
    "/assets/icons/git.svg",
    "/assets/icons/dbt-bit.svg",
  ];

  const processIcons = [
    "/assets/icons/job-search.svg",
    "/assets/icons/solar-money-bag.svg",
    "/assets/icons/partnership.svg",
    "/assets/icons/solar-graph.svg",
    "/assets/icons/material-symbols.svg",
  ];
  return (
    <section className="w-full bg-white border-b border-t lg:border-t-0 border-[#E6E6E6] page px-4 lg:px-0">
      <div className="w-full flex justify-center gap-px mx-auto max-w-300">
        <div>
          <img
            src="/assets/readytobuildline1.svg"
            alt="Ghost Box Left"
            className="lg:w-full h-full w-4 object-cover"
          />
        </div>
        <div className="flex-1 bg-[#7632F9] relative overflow-hidden  p-6 lg:p-0 flex flex-col items-center justify-center text-center text-white">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -8 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="lg:absolute lg:top-6 lg:left-6 bg-[#5E28C7]  rounded-2xl p-4 lg:block"
          >
            <div className="flex gap-2 mb-2">
              {industryIcons.map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white border border-[#E6E6E6] rounded-lg flex items-center justify-center shadow-sm"
                >
                  <div className="w-6 h-6 rounded">
                    <img
                      src={i}
                      alt="Industry Icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white font-medium text-left">
              Industry-designed workflows
            </p>
          </motion.div>

          <h2 className="text-[28px] lg:text-[40px] font-semibold mb-2 max-w-2xl lg:leading-12 leading-8 mt-10 lg:mt-0">
            Ready to Build With the Pool?
          </h2>
          <p className="text-[#F5F5F5] lg:text-lg max-w-159 mb-6 lg:leading-7 leading-6">
            Build real data and AI systems with experienced{" "}
            <span className="font-semibold text-white">
              Production Competent
            </span>{" "}
            engineers and increase your chances of getting recommended for
            better opportunities.
          </p>

          <button className="bg-white text-[#7632F9] mb-10 gap-2 lg:mb-0 text-lg lg:w-45 h-15 w-full flex items-center justify-center rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
            Join The Pool
            <ArrowRight className="lg:hidden block" />
          </button>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 8 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="lg:absolute lg:bottom-6 right-6 bg-[#5E28C7]  rounded-2xl p-4  lg:block text-right"
          >
            <div className="flex gap-2 mb-2 justify-end">
              {processIcons.map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white border border-[#E6E6E6] rounded-lg flex items-center justify-center shadow-sm"
                >
                  <div className="w-6 h-6  rounded-full">
                    <img
                      src={i}
                      alt="Process Icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white font-medium text-left">
              Process That Pays Off
            </p>
          </motion.div>
        </div>
        <div>
          <img
            src="/assets/readytobuildline1.svg"
            alt="Ghost Box Left"
            className="lg:w-full h-full w-4 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
