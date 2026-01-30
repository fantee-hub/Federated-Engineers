import { ArrowRight } from "lucide-react";

const OurMission = () => {
  return (
    <section className="w-full bg-white page relative">
      <div className="absolute border-[#E6E6E6] border-b w-full bottom-0"></div>
      <div className="border-x border-[#E6E6E6] mx-auto max-w-300">
        <div className=" w-full  gap-px border-t border-[#E6E6E6]">
          <div className="flex justify-center gap-10">
            <div className="bg-white flex-1">
              <div className="relative w-full overflow-hidden">
                <div className="flex h-full w-full flex-col items-center justify-center text-gray-400">
                  <img
                    src="/assets/our-mission.png"
                    alt="Our Mission"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white flex flex-col justify-center flex-1">
              <div className="max-w-130">
                <span className="rounded-full bg-[#FAFAFA] px-6 py-4 font-semibold text-[#7632F9]">
                  Our Mission
                </span>

                <h3 className="text-[20px] leading-relaxed text-[#2E2E2E] my-6">
                  Analytics and Artificial Intelligence rely on Data to
                  flourish. We transform aspiring engineers into{" "}
                  <span className="font-bold text-[#000000]">
                    "production-competent"
                  </span>{" "}
                  specialists capable of delivering resilient, scalable and
                  cost-efficient Data Platforms.
                </h3>

                <button className=" gap-2 rounded-lg bg-[#7632F9] w-49.5 h-14 flex items-center justify-center font-semibold text-white transition-all hover:brightness-110 cursor-pointer">
                  Join Our Pool <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
