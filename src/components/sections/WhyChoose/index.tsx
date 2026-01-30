"use client";

import ReasonCard from "./ReasonCard";

const reasons = [
  {
    title: "Engineering Pool",
    description:
      "Engineers work across teams to build full data platforms and gain production-ready, cross-functional experience.",
    icon: "/assets/icons/users-group.svg",
  },
  {
    title: "Foundational Infrastructure",
    description:
      "We start by architecting the core scalable infrastructure—not local pipelines. Engineers build this collaboratively using GitOps.",
    icon: "/assets/icons/solar-documents.svg",
  },
  {
    title: "Build Data Platforms that Power AI",
    description:
      "Gain experience building scalable data platforms that power AI and other production workloads.",
    icon: "/assets/icons/bxs_data.svg",
  },
  {
    title: "Shift-Left Governance",
    description:
      "We treat Data Quality, Security, and FinOps as first-class citizens from day one, not afterthoughts.",
    icon: "/assets/icons/calendar.svg",
  },
  {
    title: "Cost-Aware Cloud Engineering",
    description:
      "We focus on efficient architecture and cost awareness to help engineers build responsibly and reduce cloud spend.",
    icon: "/assets/icons/cloud-lock.svg",
  },
  {
    title: "Structured Workflow and Support",
    description:
      "Shared tools and Project Standard Procedures (PSPs) give engineers clarity, while businesses get organized, predictable delivery.",
    icon: "/assets/icons/flow-tree.svg",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6]">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-10 pt-20 pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            Why Choose Federated Engineers
          </span>
          <h2 className="max-w-4xl text-[48px] font-semibold leading-14 text-[#2F1464]">
            A Collaborative Engineering <br /> Pool You Can Trust
          </h2>
          <p className="max-w-139.5 pt-2 text-[#5C5C5C]">
            Our pool brings vetted engineers, shared standards, and structured
            collaboration to deliver dependable data and AI support.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-[#E6E6E6] bg-[#E6E6E6] md:grid-cols-2 lg:grid-cols-3 gap-px">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
