import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Apply",
    description:
      "Fill out the application form to show your interest and share your background.",
  },
  {
    step: "Step 2",
    title: "Complete a Task",
    description:
      "Receive a practical assessment task that helps evaluate your skill level for production competent work.",
  },
  {
    step: "Step 3",
    title: "Defend Your Work & Join the Pool",
    description:
      "Defend your task in a review session and join the pool once approved.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white page border-b border-[#E6E6E6]">
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className="flex flex-col items-center px-10 pt-20 pb-10 text-center">
          <span className="mb-2 rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
            How It Works
          </span>
          <h2 className="max-w-4xl text-[48px] font-semibold leading-14 text-[#2F1464]">
            Join the Engineering Pool in <br /> Three Simple Steps
          </h2>
          <p className="max-w-124 pt-2 text-[#5C5C5C]">
            A straightforward process built for clarity, quality, and
            collaboration.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#E6E6E6] border-t border-[#E6E6E6] gap-px md:gap-px">
          {steps.map((item, index) => (
            <div key={index} className="flex bg-white flex-col p-10 lg:p-6">
              <div className="mb-8">
                <span className="inline-block rounded-full px-4 py-3 text-sm font-semibold text-[#7632F9] bg-white border border-[#E6E6E6]">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-4 text-[20px] font-semibold text-[#2E2E2E]">
                {item.title}
              </h3>
              <p className="text-[16px] leading-6 text-[#5C5C5C] max-w-88">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
