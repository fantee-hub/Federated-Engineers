import FAQSection from "@/src/components/sections/FaqSection";
import ForBusinesses from "@/src/components/sections/ForBusinesses";
import ForEngineers from "@/src/components/sections/ForEngineers";
import Hero from "@/src/components/sections/HeroSection/Hero";
import HowItWorks from "@/src/components/sections/HowItWorks";
import ReadyToBuild from "@/src/components/sections/ReadyToBuild";
import WhatWeDo from "@/src/components/sections/WhatWeDo";
import WhyChoose from "@/src/components/sections/WhyChoose";

export default function Home() {
  return (
    <div className="font-mori pt-18">
      <Hero />
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <div id="engineers">
        <ForEngineers />
      </div>
      <ReadyToBuild />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="businesses">
        <ForBusinesses />
      </div>
      <WhyChoose />
      <FAQSection className="border-y border-[#E6E6E6] lg:my-20 my-10" />
    </div>
  );
}
