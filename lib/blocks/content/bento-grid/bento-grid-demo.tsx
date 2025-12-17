"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  RiSparklingLine,
  RiFlashlightLine,
  RiShieldLine,
  RiBarChartBoxLine,
} from "@remixicon/react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="lg:auto-rows-[280px]">
      <BentoCard
        title="AI-Powered Analytics"
        description="Harness the power of artificial intelligence to analyze your data and uncover hidden insights that drive growth."
        icon={<RiSparklingLine className="w-6 h-6" />}
        cta="Explore features"
        pattern="dots"
        className="md:col-span-2 lg:col-span-2 lg:row-span-1"
      />

      <BentoCard
        title="Real-time Monitoring"
        description="Track your metrics in real-time with live dashboards. Get instant alerts when something needs your attention. Monitor performance across all your applications and services."
        icon={<RiBarChartBoxLine className="w-6 h-6" />}
        cta="View dashboard"
        pattern="grid"
        className="md:col-span-2 lg:col-span-1 lg:row-span-2 order-4 md:order-4 lg:order-2"
      />

      <BentoCard
        title="Lightning Fast"
        description="Optimized performance with sub-millisecond response times."
        icon={<RiFlashlightLine className="w-6 h-6" />}
        cta="See benchmarks"
        pattern="lines"
        className="md:col-span-1 lg:col-span-1 order-2 md:order-2 lg:order-3"
      />

      <BentoCard
        title="Enterprise Security"
        description="Bank-grade encryption and compliance with industry standards."
        icon={<RiShieldLine className="w-6 h-6" />}
        cta="Learn more"
        pattern="cross"
        className="md:col-span-1 lg:col-span-1 order-3 md:order-3 lg:order-4"
      />
    </BentoGrid>
  );
}