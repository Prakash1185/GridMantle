import React from "react";
import HeroSection from "./hero-section";
import PatternDivider from "./pattern-divider";
import BuiltUsingTech from "./built-using-tech";
import TitleBadge from "./title-badge";
import Features from "./features";
import CTA from "./cta";
import Footer from "./footer";
import FooterText from "./footer-text";

const LandingPage = () => {
  return (
    <main className="md:mx-[16%] border-r border-l border-dashed min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <PatternDivider />

      {/* built with badge  and section*/}
      <TitleBadge title={"Built With"} />
      <div className="w-full border-b border-dashed"></div>
      <BuiltUsingTech />
      <div className="w-full border-b"></div>

      {/* features badge and section*/}
      <TitleBadge title={"Features"} />
      <div className="w-full border-b border-dashed"></div>
      <Features />
      <div className="w-full border-b "></div>

      {/* Call to Action */}
      <CTA />
      <div className="w-full border-b "></div>

      {/* Footer -> only on landing page */}
      <Footer />
      <div className="w-full border-b border-dashed"></div>
      <FooterText />
    </main>
  );
};

export default LandingPage;
