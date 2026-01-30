import CoreValuesMarquee from "@/src/components/AboutPage/CoreValuesMarquee";
import HeroSection from "@/src/components/AboutPage/HeroSection";
import OurMission from "@/src/components/AboutPage/OurMission";

const About = () => {
  return (
    <div className="font-mori pt-18">
      <HeroSection />
      <CoreValuesMarquee />
      <OurMission />
    </div>
  );
};

export default About;
