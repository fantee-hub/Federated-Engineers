import { Metadata } from "next";
import CoreValuesMarquee from "@/src/components/AboutPage/CoreValuesMarquee";
import HeroSection from "@/src/components/AboutPage/HeroSection";
import OurMission from "@/src/components/AboutPage/OurMission";
import WhoWeServe from "@/src/components/AboutPage/WhoWeServe";
import FAQSection from "@/src/components/sections/FaqSection";
import WhyChoose from "@/src/components/sections/WhyChoose";

export const metadata: Metadata = {
  title: "About Us | Federated Engineers",
  description:
    "Bridging the gap between local learning and production. We transform engineers into production-competent specialists capable of delivering resilient Data Platforms.",
  keywords: [
    "Data Platform Engineering",
    "Machine Learning Engineering",
    "Production Competent Engineers",
    "Engineering Pool",
    "Data Infrastructure",
    "Platform Engineers",
    "Analytics Engineers",
  ],
  openGraph: {
    title: "About Federated Engineers",
    description:
      "Discover how we simulate the high-stakes reality of building modern Data Platforms and AI products.",
    url: "https://federatedengineers.com/about",
    siteName: "Federated Engineers",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "Federated Engineers Team working in a server room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Federated Engineers",
    description:
      "Building the 'missing year' of experience for Data and AI Engineers.",
    images: ["/og-about.png"],
  },
};

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
