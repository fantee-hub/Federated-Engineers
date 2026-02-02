"use client";
import { Check } from "lucide-react";
import { Variants, motion } from "framer-motion";
import { ScrollReveal } from "../../ScrollReveal";

const ForEngineers = () => {
  const cardVariants: Variants = {
    hidden: (initialPos: any) => ({
      opacity: 0,
      x:
        typeof window !== "undefined" && window.innerWidth < 1024
          ? 0
          : initialPos.x || 0,
      y:
        typeof window !== "undefined" && window.innerWidth < 1024
          ? 10
          : initialPos.y || 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const categories = [
    {
      role: "Data Platform Engineers",
      icon: "/assets/business-avatar1.svg",
      tasks: [
        "Design the storage and processing systems that power large-scale data workloads.",
        "Setting up CI/CD workflows for data and AI components",
        "Set up and maintain ETL/ELT pipelines and the orchestration systems that run them.",
        "Tune compute, storage, and cloud resources for efficiency and reliability.",
        "Supporting cross-functional teams across the pool",
      ],
      initial: { y: -50 },
      position: "lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:z-20",
    },
    {
      role: "Data Engineers",
      icon: "/assets/business-avatar2.svg",
      tasks: [
        "Designing and building data ingestion pipelines",
        "Structuring datasets for analytics, ML, or operational use",
        "Working with transformations, ETL/ELT flows, and storage layers",
        "Ensuring data quality, reliability, and accessibility",
        "Collaborating with ML engineers to provide training-ready data",
      ],
      initial: { x: -50 },
      position: "lg:bottom-0 lg:left-20 lg:z-20",
    },
    {
      role: "Machine Learning Engineers",
      icon: "/assets/business-avatar1.svg",
      tasks: [
        "Building features, pipelines, and model training workflows",
        "Preparing and validating datasets for model development",
        "Supporting deployment of ML models into usable environments",
        "Monitoring performance and refining workflows",
        "Collaborating with platform engineers to ensure scalable systems",
      ],
      initial: { x: 50 },
      position: "lg:bottom-0 lg:right-20 lg:z-20",
    },
  ];

  return (
    <section className="w-full bg-white border-t border-b border-[#E6E6E6] page mt-10 lg:mt-20 px-4 lg:px-0 mb-10 lg:mb-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300 pb-10 lg:pb-20">
        <ScrollReveal>
          <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              For Engineers
            </span>
            <h2 className="max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              What You’ll Work On as an Engineer in the Pool
            </h2>
            <p className="max-w-174.5 pt-2 text-[#5C5C5C]">
              Engineers gain experience building scalable data platforms that
              support AI and analytics workloads, working across Data, Data
              Platform, and Machine Learning engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-300 lg:h-212.5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-132 px-6 lg:px-0 lg:mb-0"
          >
            <div className="aspect-square lg:w-132 lg:h-132 overflow-hidden shadow-sm">
              <img
                src="/assets/forEngineersImage.png"
                alt="For Engineers Hero"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div className="flex lg:block overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar px-6 lg:px-0 gap-4 pb-4 -mt-24 lg:mt-0">
            {categories.map((card, idx) => (
              <motion.div
                key={idx}
                custom={card.initial}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className={`
                  shrink-0 snap-center w-73.5 lg:w-98 
                  lg:absolute ${card.position}
                  bg-white/20 p-1.5 lg:p-2 rounded-2xl 
                  lg:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 shadow-md
                `}
              >
                <div className="bg-white lg:py-5 lg:px-6 px-3 py-4 rounded-xl border border-gray-50 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={card.icon}
                        alt={card.role}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-[#2E2E2E]">{card.role}</h4>
                  </div>

                  <ul className="space-y-2 max-w-91.5">
                    {card.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex gap-3 lg:text-[14px] text-xs text-[#4A4A4A] leading-relaxed"
                      >
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#E8F6ED] flex items-center justify-center">
                          <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
                            <Check size={8} strokeWidth={4} />
                          </div>
                        </div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEngineers;
