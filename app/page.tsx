import ForEngineers from "@/src/components/sections/ForEngineers";
import Hero from "@/src/components/sections/HeroSection/Hero";
import ReadyToBuild from "@/src/components/sections/ReadyToBuild";
import WhatWeDo from "@/src/components/sections/WhatWeDo";

export default function Home() {
  return (
    <div className="font-mori pt-18">
      <Hero />
      <WhatWeDo />
      <ForEngineers />
      <ReadyToBuild />
    </div>
  );
}
