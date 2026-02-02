"use client";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";

const HeroSection = () => {
  return (
    <section className="w-full bg-white page px-4 lg:px-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center lg:px-10 px-6 lg:pt-20 pt-10 pb-10 text-center">
          <ScrollReveal>
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              About Us
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="max-w-4xl mt-6 lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              Bridging the Gap Between Local <br /> Learning and Production.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="max-w-124 pt-2 text-[#5C5C5C] lg:text-lg">
              At{" "}
              <span className="font-semibold text-[#000000]">
                Federated Engineers
              </span>
              , we simulate the high-stakes reality of building modern
              <span className="font-semibold text-[#000000]">
                {" "}
                Data Platforms
              </span>{" "}
              that power Data and AI products.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid w-full grid-cols-1">
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <img
                src="/assets/readytobuildline1.svg"
                alt="Ghost Box Left"
                className="lg:w-full w-4 h-full object-cover"
              />
            </motion.div>

            <div className="relative w-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full w-full flex-col items-center justify-center"
              >
                <img
                  src="/assets/about-hero.png"
                  alt="For Businesses Hero"
                  className="object-cover w-full lg:h-full h-73.5"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <img
                src="/assets/readytobuildline1.svg"
                alt="Ghost Box Left"
                className="lg:w-full w-4 h-full object-cover"
              />
            </motion.div>
          </div>

          <div className=" bg-white p-6 lg:px-16 relative">
            <div className="max-w-260 space-y-6">
              <ScrollReveal delay={0.4}>
                <p className="lg:text-[20px] text-lg leading-8 text-[#2E2E2E]">
                  In an era where data volume has surpassed{" "}
                  <span className="font-semibold text-[#000000]">
                    221 zettabytes
                  </span>{" "}
                  and Agentic AI is rewriting the rules of the workforce,
                  traditional bootcamps are doing their best with first hand
                  exposure, but the{" "}
                  <span className="font-semibold text-[#000000]">
                    bigger picture (PRODUCTION) is missing
                  </span>
                  , hence bootcamps are no longer enough.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p className="lg:text-[20px] text-lg leading-8 text-[#2E2E2E]">
                  Federated Engineers provide the{" "}
                  <span className="font-semibold text-[#000000]">
                    "missing year"
                  </span>{" "}
                  of experience through immersive,{" "}
                  <span className="font-semibold text-[#000000]">
                    production-grade
                  </span>{" "}
                  simulations of building varieties of{" "}
                  <span className="font-semibold text-[#000000]">
                    Data Platforms
                  </span>{" "}
                  that support not only Analytics, but also{" "}
                  <span className="font-semibold text-[#000000]">
                    Artificial Intelligence (AI)
                  </span>
                  .
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
