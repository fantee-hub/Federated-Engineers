import { ArrowRight } from "lucide-react";
import React from "react";

const WhoWeServe = () => {
  return (
    <section className="w-full bg-white page relative mt-20 border-t border-[#E6E6E6]">
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className=" w-full">
          <div className="flex justify-center">
            <div className="bg-white flex flex-col justify-center flex-1 w-full">
              <div className="max-w-140 pl-10">
                <span className="rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
                  Who We Serve
                </span>

                <h3 className="text-[20px] leading-relaxed text-[#2E2E2E] my-6">
                  Whether you are a bootcamp graduate looking for production
                  experience, or an enterprise team upskilling for the GenAI
                  revolution, we provide the platform to build your future, one
                  simulation at a time.
                </h3>

                <button className=" gap-2 rounded-lg bg-[#7632F9] w-49.5 h-14 flex items-center justify-center font-semibold text-white transition-all hover:brightness-110 cursor-pointer">
                  Join Our Pool <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative w-full overflow-hidden">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src="/assets/who-we-serve.png"
                    alt="Our Mission"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
