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
      <WhatWeDo />
      <ForEngineers />
      <ReadyToBuild />
      <HowItWorks />
      <ForBusinesses />
      <WhyChoose />
    </div>
  );
}
