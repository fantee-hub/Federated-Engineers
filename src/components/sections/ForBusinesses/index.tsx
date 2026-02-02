"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../../ScrollReveal";

const ForBusinesses = () => {
  return (
    <section className="w-full bg-white border-y border-[#E6E6E6]  page lg:mt-20 mt-10 px-4 lg:px-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <ScrollReveal>
          <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              For Businesses
            </span>

            <h2 className="lg:max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              Need Production Competent <br className="hidden lg:block" />{" "}
              Engineers?
            </h2>

            <p className="lg:max-w-124 pt-2 text-[#5C5C5C]">
              Hire vetted Data Platform, Data and Machine Learning Engineers
              with proven production competency and real project experience.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#7632F9] lg:w-48.25 w-full h-15 font-semibold text-white text-lg transition-all hover:brightness-110 cursor-pointer shadow-purple-200"
            >
              Contact Us <ArrowRight size={20} />
            </motion.button>
          </div>
        </ScrollReveal>

        <div className="w-full flex justify-center gap-px mx-auto max-w-300">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <img
              src="/assets/readytobuildline1.svg"
              alt="Ghost Box Left"
              className="lg:w-full w-4 h-full object-cover"
            />
          </motion.div>

          <div className="relative  w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex h-full w-full flex-col items-center justify-center"
            >
              <img
                src="/assets/forBusinessImage.png"
                alt="For Businesses Hero"
                className="object-cover w-full lg:h-full h-73.5"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <img
              src="/assets/readytobuildline1.svg"
              alt="Ghost Box Left"
              className="lg:w-full w-4 h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;
