import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  RiSparklingLine,
  RiFlashlightLine,
  RiShieldLine,
  RiBarChartBoxLine,
} from "@remixicon/react";

export default function MyPage() {
  return (
    <BentoGrid className="lg:auto-rows-[280px]">
      <BentoCard
        title="AI-Powered Analytics"
        description="Harness the power of AI to analyze your data."
        icon={<RiSparklingLine className="w-6 h-6" />}
        pattern="dots"
        className="md:col-span-2 lg:col-span-2"
      />

      <BentoCard
        title="Real-time Monitoring"
        description="Track your metrics in real-time with live dashboards."
        icon={<RiBarChartBoxLine className="w-6 h-6" />}
        pattern="grid"
        className="md:col-span-2 lg:col-span-1 lg:row-span-2 order-4 lg:order-2"
      />

      <BentoCard
        title="Lightning Fast"
        description="Optimized performance with sub-millisecond response."
        icon={<RiFlashlightLine className="w-6 h-6" />}
        pattern="lines"
        className="md:col-span-1 order-2 lg:order-3"
      />

      <BentoCard
        title="Enterprise Security"
        description="Bank-grade encryption and compliance."
        icon={<RiShieldLine className="w-6 h-6" />}
        pattern="cross"
        className="md:col-span-1 order-3 lg:order-4"
      />
    </BentoGrid>
  );
}