import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { RiArrowRightUpLine } from "@remixicon/react";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-10 sm:pb-20 px-5 overflow-hidden relative">

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-65"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,118,110,0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,118,110,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
            maskImage: "linear-gradient(to left, black 0%, transparent 70%), linear-gradient(to top, black 0%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 90%), linear-gradient(to top, black 0%, transparent 90%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        
        
      </div>

        <div className="relative z-10">
          {/* badge       */}
        <Badge className="flex items-center bg-primary/10 text-primary border border-primary/20 instrumental sm:text-sm md:text-lg mb-4">A Modern Grid Library</Badge>
        {/* Hero texts */}
        <div className="instrumental text-3xl sm:text-5xl md:text-7xl space-y-1.5">
          <h1 className="tracking-tighter min-[380px]:tracking-normal">Build <span className="text-primary">Beautiful</span> Grids Layouts</h1>
          <h1>In <span className="text-primary">Minutes</span> Not Hours</h1>
        </div>
        {/* CTA Buttons */}
        <div className="space-x-1.5 sm:space-x-2.5 py-8 ">
          <Button className="rounded-lg cursor-pointer">Get Started <span className="bg-secondary/50 rounded-full p-0.5"><RiArrowRightUpLine/></span></Button>
          <Button variant={"outline"} className="rounded-lg cursor-pointer border-2 dark:hover:bg-primary/10">Browse Blocks</Button>
        </div>
        </div>
    </div>
  );
};

export default HeroSection;
