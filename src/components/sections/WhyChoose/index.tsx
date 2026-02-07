"use client";

import ReasonCard from "./ReasonCard";
import { motion } from "framer-motion";
import { ScrollReveal } from "../../ScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const reasons = [
  {
    title: "Engineering Pool",
    description:
      "Engineers collaborate across specialized teams to architect end-to-end data platforms, gaining the production-grade, cross-functional expertise required to lead modern engineering life cycles",
    icon: "/assets/icons/users-group.svg",
  },
  {
    title: "Foundational Infrastructure",
    description:
      "We prioritize the architecture of scalable foundational infrastructure over the immediate development of local data workflows, ensuring all core systems are collaboratively deployed through a GitOps-driven framework.",
    icon: "/assets/icons/solar-documents.svg",
  },
  {
    title: 'The "Production-First" Stack',
    description:
      "Our production stack uses Amazon EKS with ArgoCD and Terraform for infrastructure, Airbyte and Airflow for pipelines, DBT for transformations, and Prometheus/Grafana for observability and many more.",
    icon: "/assets/icons/bxs_data.svg",
  },
  {
    title: "Shift-Left Governance",
    description:
      "Data Quality, Security, and FinOps are established as first-class citizens and integral parts of the process from day one, rather than being treated as subsequent considerations.",
    icon: "/assets/icons/calendar.svg",
  },
  {
    title: "Cloud FinOps",
    description:
      "Our focus is on enabling Engineers to build responsibly by emphasizing efficient architecture and cost awareness, thereby significantly reducing cloud expenditure.",
    icon: "/assets/icons/cloud-lock.svg",
  },
  {
    title: "Structured Workflow and Support",
    description:
      "Clarity for Engineers is achieved through shared tools and our Internal Project Standard Procedures (PSP), which in turn provides businesses with organized and predictable delivery.",
    icon: "/assets/icons/flow-tree.svg",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6] mt-10 lg:mt-0 px-4 lg:px-0 border-t lg:border-t-0">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <ScrollReveal>
          <div className="flex flex-col items-center px-6 lg:px-10 pt-10 lg:pt-20 pb-8 lg:pb-10 text-center">
            <span className="mb-2 rounded-full bg-[#FAFAFA] lg:px-6 lg:py-4 px-4 py-2 font-semibold text-[#7632F9]">
              Why Choose Federated Engineers
            </span>
            <h2 className="lg:max-w-4xl lg:text-[48px] text-[28px] font-semibold lg:leading-14 leading-8 text-[#2F1464]">
              A Collaborative Engineering <br className="hidden lg:block" />{" "}
              Pool You Can Trust
            </h2>
            <p className="lg:max-w-139.5 pt-2 text-[#5C5C5C]">
              Our pool brings vetted engineers, shared standards, and structured
              collaboration to deliver dependable data and AI support.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 border-t border-[#E6E6E6] md:grid-cols-2 lg:grid-cols-3 "
        >
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
