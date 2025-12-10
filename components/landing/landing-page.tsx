import React from "react";
import HeroSection from "./hero-section";
import PatternDivider from "./pattern-divider";
import BuiltUsingTech from "./built-using-tech";
import TitleBadge from "./title-badge";

const LandingPage = () => {
  return (
    <main className="md:mx-[16%] border-r border-l border-dashed min-h-screen">
      <HeroSection />
      <PatternDivider />
      {/* badge */}
      <TitleBadge title={"Built With"} />
      <div className="w-full border border-dashed"></div>
      <BuiltUsingTech />
      <div className="w-full border border-dashed"></div>
    </main>
  );
};

export default LandingPage;
