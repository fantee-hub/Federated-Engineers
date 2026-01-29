import { TextSwitcher } from "./TextSwitcher";
import { TaskCard } from "./TaskCard";
import { FloatingCloud } from "./FloatingCloud";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] 2xl:min-h-0 2xl:py-30 flex flex-col justify-center  w-full overflow-hidden bg-[#180A32] pl-30 text-white  page">
      <FloatingCloud
        src="/assets/cloud aesthetics 1.svg"
        className="top-0 left-[10%]"
      />
      <FloatingCloud
        src="/assets/cloud aesthetics 2.svg"
        className="top-0 right-0"
      />

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4 max-w-155.75">
          <h1 className="text-[56px] font-semibold leading-16 tracking-tight">
            A Collaborative Pool of <br />
            <TextSwitcher /> <br />
            Building Data & AI Systems
          </h1>

          <p className="max-w-140.5 text-lg leading-relaxed text-[#E6E6E6]">
            Join experienced <strong>Production Competent</strong> engineers
            delivering Data and AI Platforms for businesses, or hire engineers
            directly from this same pool.
          </p>

          <div className="flex flex-wrap gap-4 z-10 relative mt-8">
            <button className="rounded-lg bg-[#7632F9] px-8 py-4 font-semibold cursor-pointer text-lg text-white transition-all hover:brightness-110">
              Join The Pool
            </button>
            <button className="rounded-lg border-2 border-[#7632F9] bg-[#180A32] cursor-pointer px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#3E2D75]/30">
              Hire From The Pool
            </button>
            <FloatingCloud
              src="/assets/cloud aesthetics 3.svg"
              className="-bottom-14 left-[60%] -z-10"
              delay={2}
            />
          </div>
        </div>

        <div className="relative lg:absolute lg:right-0 lg:bottom-0 ">
          <div className="relative h-full">
            <div className="overflow-hidden">
              <img
                src="/assets/outer background.png"
                alt="Engineering Team"
                className="w-full object-cover grayscale-[0.2]"
              />
            </div>

            <TaskCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
