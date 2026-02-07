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
              Accelerating the journey from local <br /> sandbox to
              production-scale reality.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="max-w-186.5 pt-2 text-[#5C5C5C] lg:text-lg">
              Federated Engineers provides a high-fidelity mirror of production
              ecosystems, allowing Engineers to master the complexities of live
              Data Platforms behind Analytics and Artificial Intelligence.
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

          <div className=" bg-white p-6 lg:px-16 lg:pb-20 pb-10 relative">
            <div className="max-w-260 space-y-6">
              <ScrollReveal delay={0.4}>
                <p className="lg:text-[20px] text-lg leading-8 text-[#2E2E2E]">
                  The global datasphere is surging, projected to reach a
                  staggering{" "}
                  <span className="font-semibold text-[#000000]">
                    221 zettabytes.
                  </span>{" "}
                  This explosion of data, driven by the rise of{" "}
                  <span className="font-semibold text-[#000000]">
                    Agentic AI,
                  </span>{" "}
                  has made Data Domain Engineers sought after—no longer a
                  luxury, but a foundational requirement for modern enterprises.
                  Despite this massive and growing demand, a critical obstacle
                  persists:{" "}
                  <span className="font-semibold text-[#000000]">
                    The Production Gap.
                  </span>
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p className="lg:text-[20px] text-lg leading-8 text-[#2E2E2E]">
                  <span className="font-semibold text-[#000000]">
                    Self-Learners
                  </span>{" "}
                  often gain a strong theoretical grasp of tools but falter when
                  confronted with the complexities of scale. Meanwhile, many
                  engineers get hands-on coding experience but lack production
                  visibility—the high-stakes reality of managing live Data
                  Platforms where a single misstep can result in thousands in
                  cloud expenditure or cripple a downstream AI model.
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
