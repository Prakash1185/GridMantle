"use client";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Sparkles, Zap, Shield, BarChart3 } from "lucide-react";

export function BentoGridDemo2() {
  return (
    <BentoGrid className="lg:auto-rows-[280px]">
      {/* Box 1 - Large, spans 2 cols on desktop */}
      <BentoCard
        title="AI-Powered Analytics"
        description="Harness the power of artificial intelligence to analyze your data and uncover hidden insights that drive growth."
        icon={<Sparkles className="w-6 h-6" strokeWidth={1.5} />}
        cta="Explore features"
        className="md:col-span-2 lg:col-span-2 lg:row-span-1"
        pattern="dots"
      />

      {/* Box 2 - Tall, spans 2 rows on desktop */}
      <BentoCard
        title="Real-time Monitoring"
        description="Track your metrics in real-time with live dashboards. Get instant alerts when something needs your attention. Monitor performance across all your applications and services."
        icon={<BarChart3 className="w-6 h-6" strokeWidth={1.5} />}
        cta="View dashboard"
        className="md:col-span-2 lg:col-span-1 lg:row-span-2 order-4 md:order-4 lg:order-2"
        pattern="cross"
      />

      {/* Box 3 - Small */}
      <BentoCard
        title="Lightning Fast"
        description="Optimized performance with sub-millisecond response times."
        icon={<Zap className="w-6 h-6" strokeWidth={1.5} />}
        cta="See benchmarks"
        className="md:col-span-1 lg:col-span-1 order-2 md:order-2 lg:order-3"
        pattern="lines"
      />

      {/* Box 4 - Small */}
      <BentoCard
        title="Enterprise Security"
        description="Bank-grade encryption and compliance with industry standards."
        icon={<Shield className="w-6 h-6" strokeWidth={1.5} />}
        cta="Learn more"
        className="md:col-span-1 lg:col-span-1 order-3 md:order-3 lg:order-4"
        pattern="dots"
      />

      {/* Box 5 - Small */}
      <BentoCard
        title="Enterprise Security"
        description="Bank-grade encryption and compliance with industry standards."
        icon={<Shield className="w-6 h-6" strokeWidth={1.5} />}
        cta="Learn more"
        className="md:col-span-1 lg:col-span-1 order-3 md:order-3 lg:order-4"
        pattern="none"
      />

      {/* Box 6 - Tall, spans 2 rows on desktop */}
      <BentoCard
        title="Real-time Monitoring"
        description="Track your metrics in real-time with live dashboards. Get instant alerts when something needs your attention. Monitor performance across all your applications and services."
        icon={<BarChart3 className="w-6 h-6" strokeWidth={1.5} />}
        cta="View dashboard"
        className="md:col-span-2 lg:col-span-1 lg:row-span-2 order-4 md:order-4 lg:order-2"
        pattern="cross"
      />
    </BentoGrid>
  );
}
