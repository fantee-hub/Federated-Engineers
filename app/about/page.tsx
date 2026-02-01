import CoreValuesMarquee from "@/src/components/AboutPage/CoreValuesMarquee";
import HeroSection from "@/src/components/AboutPage/HeroSection";
import OurMission from "@/src/components/AboutPage/OurMission";
import WhoWeServe from "@/src/components/AboutPage/WhoWeServe";
import FAQSection from "@/src/components/sections/FaqSection";
import WhyChoose from "@/src/components/sections/WhyChoose";

const About = () => {
  return (
    <div className="font-mori pt-18">
      <HeroSection />
      <CoreValuesMarquee />
      <OurMission />
      <WhyChoose />
      <WhoWeServe />
      <FAQSection className="border-b border-[#E6E6E6] lg:mb-20 mt-10 lg:mt-0 mb-10 lg:border-t-0 border-t" />
      <CoreValuesMarquee />
    </div>
  );
};

export default About;
