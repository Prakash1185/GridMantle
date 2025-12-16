"use client";

import { BentoGrid2, BentoCard2 } from "@/components/ui/bento-grid-2";
import {
  RiSparklingLine,
  RiBarChartBoxLine,
  RiFlashlightLine,
  RiShieldLine,
  RiCodeLine,
  RiRocketLine,
} from "@remixicon/react";

export function BentoGrid2Demo() {
  return (
    <BentoGrid2>
      {/* Row 1, Col 1: SMALL */}
      <BentoCard2
        title="AI Analytics"
        description="Intelligent insights powered by machine learning algorithms."
        icon={<RiSparklingLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
      />

      {/* Row 1-2, Col 2: LARGE */}
      <BentoCard2
        title="Real-time Dashboard"
        description="Monitor your metrics in real-time with live data visualization. Get instant alerts and comprehensive reporting tools."
        icon={<RiBarChartBoxLine className="w-6 h-6" />}
        pattern="lines"
        className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
      />

      {/* Row 1, Col 3: SMALL */}
      <BentoCard2
        title="Lightning Fast"
        description="Optimized for blazing speed and peak performance."
        icon={<RiFlashlightLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
      />

      {/* Row 2-3, Col 1: LARGE */}
      <BentoCard2
        title="Enterprise Security"
        description="Bank-grade encryption with multi-layer protection. Full compliance with industry standards and regulations."
        icon={<RiShieldLine className="w-6 h-6" />}
        pattern="lines"
        className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4"
      />

      {/* Row 3, Col 2: SMALL */}
      <BentoCard2
        title="Developer Tools"
        description="Powerful APIs and SDKs for seamless integration."
        icon={<RiCodeLine className="w-6 h-6" />}
        pattern="dots"
        className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
      />

      {/* Row 2-3, Col 3: LARGE */}
      <BentoCard2
        title="Scalable Infrastructure"
        description="Auto-scaling cloud infrastructure that grows with your business. Handle millions of requests effortlessly."
        icon={<RiRocketLine className="w-6 h-6" />}
        pattern="lines"
        className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
      />
    </BentoGrid2>
  );
}