"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="w-full bg-white page relative overflow-hidden">
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <div className="lg:border-x lg:border-[#E6E6E6] mx-auto max-w-300">
        <div className=" w-full  gap-px lg:border-t border-[#E6E6E6]">
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
              className="px-4 lg:px-0"
            >
              <div className="bg-white flex flex-col justify-center flex-1 border-x border-[#E6E6E6] lg:border-none px-6 py-8 lg:p-0">
                <div className="max-w-130">
                  <span className="rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
                    Our Mission
                  </span>

                  <h3 className="lg:text-[20px] text-base lg:leading-relaxed leading-6 text-[#2E2E2E] my-6">
                    Analytics and Artificial Intelligence rely on Data to
                    flourish. We transform aspiring engineers into{" "}
                    <span className="font-bold text-[#000000]">
                      "production-competent"
                    </span>{" "}
                    specialists capable of delivering resilient, scalable and
                    cost-efficient Data Platforms.
                  </h3>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className=" gap-2 rounded-lg bg-[#7632F9] lg:w-49.5 w-full h-14 flex items-center lg:justify-center justify-between px-4 lg:px-0 font-semibold text-white transition-all hover:brightness-110 cursor-pointer"
                  >
                    Join Our Pool <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
