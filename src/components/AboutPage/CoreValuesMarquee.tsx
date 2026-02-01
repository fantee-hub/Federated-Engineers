"use client";
import { BadgeCheck } from "lucide-react";
import Marquee from "react-fast-marquee";

const CoreValuesMarquee = () => {
  const valueText =
    "Our core values center on authenticity and sustainable, cost-aware scaling.";

  return (
    <div className="relative w-full overflow-hidden bg-[#7632F9] lg:py-5 py-4 page">
      <Marquee>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <BadgeCheck className="text-white/50 w-6 h-6 mr-4 shrink-0" />
            <span className="text-white lg:text-xl text-lg font-semibold">
              {valueText}
            </span>
          </div>
        ))}
      </Marquee>

      <div className="absolute top-0 left-0 w-full h-px bg-white/10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-black/10 hidden lg:block" />
    </div>
  );
};

export default CoreValuesMarquee;
