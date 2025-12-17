import { BentoGrid2, BentoCard2 } from "@/components/ui/bento-grid-2";
import {
  RiSparklingLine,
  RiBarChartBoxLine,
  RiFlashlightLine,
  RiShieldLine,
  RiCodeLine,
  RiRocketLine,
} from "@remixicon/react";

export default function MyPage() {
  return (
    <BentoGrid2>
      <BentoCard2
        title="AI Analytics"
        description="Intelligent insights powered by ML."
        icon={<RiSparklingLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-1 lg:row-start-1 lg:row-end-2"
      />

      <BentoCard2
        title="Real-time Dashboard"
        description="Monitor your metrics in real-time."
        icon={<RiBarChartBoxLine className="w-6 h-6" />}
        pattern="grid"
        className="lg:col-start-2 lg:row-start-1 lg:row-end-3"
      />

      <BentoCard2
        title="Lightning Fast"
        description="Optimized for speed."
        icon={<RiFlashlightLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-3 lg:row-start-1 lg:row-end-2"
      />

      <BentoCard2
        title="Enterprise Security"
        description="Bank-grade encryption."
        icon={<RiShieldLine className="w-6 h-6" />}
        pattern="grid"
        className="lg:col-start-1 lg:row-start-2 lg:row-end-4"
      />

      <BentoCard2
        title="Developer Tools"
        description="Powerful APIs."
        icon={<RiCodeLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-2 lg:row-start-3 lg:row-end-4"
      />

      <BentoCard2
        title="Scalable Infrastructure"
        description="Auto-scaling cloud."
        icon={<RiRocketLine className="w-6 h-6" />}
        pattern="grid"
        className="lg:col-start-3 lg:row-start-2 lg:row-end-4"
      />
    </BentoGrid2>
  );
}