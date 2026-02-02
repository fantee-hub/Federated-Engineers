"use client";
import { TextSwitcher } from "./TextSwitcher";
import { TaskCard } from "./TaskCard";
import { FloatingCloud } from "./FloatingCloud";
import { ArrowRight, Scroll } from "lucide-react";
import { ScrollReveal } from "../../ScrollReveal";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] 2xl:min-h-0 2xl:py-30 flex flex-col justify-center w-full overflow-hidden bg-[#180A32] lg:pl-30 text-white page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FloatingCloud
          src="/assets/cloud aesthetics 1.svg"
          className="top-0 left-[5%] lg:top-0 lg:left-[10%]"
        />
        <FloatingCloud
          src="/assets/cloud aesthetics 2.svg"
          className="top-0 right-0 lg:block"
          delay={1}
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-center pt-20 lg:pt-0">
        <div className="flex-1 space-y-6 lg:space-y-4 max-w-full lg:max-w-155.75 z-10 px-4 lg:px-0">
          <ScrollReveal>
            <h1 className="text-[32px] lg:text-[56px] font-semibold leading-tight lg:leading-16 tracking-tight">
              A Collaborative Pool of <br className="hidden lg:block" />
              <TextSwitcher /> <br className="hidden lg:block" />
              Building Data & AI Systems
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-full lg:max-w-140.5 text-base lg:text-lg leading-relaxed text-[#E6E6E6]">
              Join experienced <strong>Production Competent</strong> engineers
              delivering Data and AI Platforms for businesses, or hire engineers
              directly from this same pool.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col lg:flex-row gap-4 relative mt-8 ">
              <button className="w-full lg:w-auto rounded-lg flex items-center justify-between lg:justify-start gap-2 bg-[#7632F9] px-6 py-4 font-semibold cursor-pointer text-lg text-white transition-all hover:brightness-110">
                Join The Pool
                <ArrowRight size={20} />
              </button>
              <button className="w-full lg:w-auto rounded-lg flex items-center justify-between lg:justify-start gap-2 border border-[#7632F9] bg-[#180A32] cursor-pointer px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#3E2D75]/30">
                Hire From The Pool
                <ArrowRight size={20} />
              </button>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <FloatingCloud
                  src="/assets/cloud aesthetics 3.svg"
                  className="-bottom-14 left-[60%] -z-10  lg:block"
                  delay={2}
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-45 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 w-full lg:w-auto z-10"
        >
          <div className="relative h-full flex justify-center">
            <div className="overflow-hidden w-full max-w-125 lg:max-w-none rounded-t-3xl lg:rounded-none border-t border-x border-[#7632F9]/30 lg:border-none">
              <img
                src="/assets/outer background.png"
                alt="Engineering Team"
                className="w-full object-cover grayscale-[0.2] hidden lg:block"
              />
              <img
                src="/assets/outer background mobile.png"
                alt="Engineering Team Mobile"
                className="w-full object-cover lg:hidden"
              />
            </div>

            <div className="absolute -top-16 lg:static">
              <TaskCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
