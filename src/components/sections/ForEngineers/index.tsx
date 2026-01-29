import { Check } from "lucide-react";

const ForEngineers = () => {
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
      position: "top-0 left-1/2 -translate-x-1/2 z-20",
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
      position: "bottom-0 left-20 z-20",
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
      position: "bottom-0 right-20 z-20",
    },
  ];

  return (
    <section className="w-full bg-white border-t border-b border-[#E6E6E6] page mt-20 ">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300 pb-20 ">
        <div className="flex flex-col items-center px-10 pt-20 pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            For Engineers
          </span>
          <h2 className="max-w-182 text-[48px] font-semibold leading-14 text-[#2F1464]">
            What You’ll Work On as an Engineer in the Pool
          </h2>
          <p className="max-w-174.5 pt-2 text-[#5C5C5C]">
            Engineers gain experience building scalable data platforms that
            support AI and analytics workloads, working across Data, Data
            Platform, and Machine Learning engineering.
          </p>
        </div>

        <div className="relative mx-auto max-w-300 h-212.5 px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-132 h-132  overflow-hidden">
            <div className="flex items-center justify-center h-full font-medium">
              <img
                src="/assets/forEngineersImage.png"
                alt="For Engineers Hero"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {categories.map((card, idx) => (
            <div
              key={idx}
              className={`absolute ${card.position} w-95.5 bg-white/20 p-2 rounded-2xl  shadow-[0_8px_30px_rgb(0,0,0,0.06)] `}
            >
              <div className="bg-white py-4 px-6 rounded-lg ">
                <div className="flex items-center gap-3 mb-4 pt-3">
                  <span>
                    <img src={card.icon} alt={card.role} className="w-8 h-8" />
                  </span>
                  <h4 className="font-semibold text-[#2E2E2E]">{card.role}</h4>
                </div>
                <ul className="space-y-3 max-w-91.5 ">
                  {card.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-[#2E2E2E] leading-relaxed "
                    >
                      <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#E8F6ED] flex items-center justify-center">
                        <div className="w-4 h-4 flex items-center justify-center rounded-full bg-[#16A34A] text-white">
                          <Check size={10} />
                        </div>
                      </div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForEngineers;
