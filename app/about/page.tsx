import CoreValuesMarquee from "@/src/components/AboutPage/CoreValuesMarquee";
import HeroSection from "@/src/components/AboutPage/HeroSection";
import OurMission from "@/src/components/AboutPage/OurMission";
import WhoWeServe from "@/src/components/AboutPage/WhoWeServe";
import WhyChoose from "@/src/components/sections/WhyChoose";

const About = () => {
  return (
    <div className="font-mori pt-18">
      <HeroSection />
      <CoreValuesMarquee />
      <OurMission />
      <WhyChoose />
      <WhoWeServe />
    </div>
  );
};

export default About;
