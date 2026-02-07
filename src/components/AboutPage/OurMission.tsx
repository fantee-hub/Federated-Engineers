"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openModal } from "@/src/lib/redux/slices/modalSlice";

const OurMission = () => {
  const dispatch = useDispatch();
  return (
    <section className="w-full bg-white page relative overflow-hidden">
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <div className="absolute border-[#E6E6E6] border-t w-full top-0"></div>

      <div className="lg:border-x lg:border-[#E6E6E6] mx-auto max-w-300">
        <div className="w-full gap-px lg:border-t-0 border-b border-[#E6E6E6] lg:border-b-0">
          <div className="flex justify-center items-center lg:gap-10 lg:flex-row flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:bg-white flex-1"
            >
              <div className="relative w-full overflow-hidden">
                <div className="flex h-full w-full flex-col items-center justify-center text-gray-400">
                  <img
                    src="/assets/our-mission.png"
                    alt="Our Mission"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="px-4 lg:px-0 flex-1"
            >
              <div className="bg-white flex flex-col justify-center border-x border-[#E6E6E6] lg:border-none px-6 py-8 lg:p-0">
                <div className="max-w-130">
                  <span className="rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
                    Our Mission
                  </span>

                  <h3 className="lg:text-[20px] lg:pr-4 text-base lg:leading-relaxed leading-6 text-[#2E2E2E] my-6">
                    To power the future of Analytics and AI by transforming
                    aspiring talent into production-competent engineers,
                    equipped to architect resilient, scalable, and
                    cost-efficient Data Platforms that the modern world demands.
                  </h3>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => dispatch(openModal("join"))}
                    className="gap-2 rounded-lg bg-[#7632F9] lg:w-41.5 w-full h-14 flex items-center justify-center lg:justify-center  px-4 lg:px-0 font-semibold text-white transition-all hover:brightness-110 cursor-pointer"
                  >
                    Join Our Pool
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full border-t border-[#E6E6E6] px-4 lg:px-0 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex items-center justify-center px-5 py-4 lg:py-20 border-x lg:border-l-0 lg:border-r border-[#E6E6E6]"
          >
            <p className="max-w-md text-[#2E2E2E] text-base lg:text-xl leading-relaxed">
              In today's market, where 60% of so-called "entry-level" positions
              require 3 or more years of experience, a simple local portfolio is
              insufficient to demonstrate true job-readiness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex-1 bg-[#7632F9] text-white flex items-center justify-center lg:px-10 px-5 py-4 lg:py-20"
          >
            <p className=" text-base lg:text-xl leading-relaxed">
              <span className="font-semibold">Federated Engineers</span> is
              designed to bridge this gap through our unique{" "}
              <span className="font-semibold">
                Production Readiness Environment
              </span>
              . We immerse you in a production-grade ecosystem that functions as
              a high-fidelity replica of real-world infrastructure, delivering
              the <span className="font-semibold">experience</span> the modern
              market demands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
