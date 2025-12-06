import { BlockContent } from "./types";

export const bentoGridBlock: BlockContent = {
  name: "Bento Grid",
  description:
    "A modern bento-style grid layout inspired by Apple's design language.",
  installCommand:
    "npx shadcn-ui add bento-grid --registry=https://gridmantle.dev/registry.json",
  code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: string;
}

export function BentoCard({ children, className, span }: BentoCardProps) {
  return (
    <div className={cn("p-6 rounded-xl border bg-card", span, className)}>
      {children}
    </div>
  );
}`,
  component: "bento-grid.tsx",
  usage: `import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function Demo() {
  return (
    <BentoGrid>
      <BentoCard span="col-span-2" className="bg-primary/10">
        <h3 className="text-xl font-semibold">Large Card</h3>
      </BentoCard>
      <BentoCard className="bg-secondary/10">
        <h4 className="font-medium">Small Card</h4>
      </BentoCard>
      <BentoCard className="bg-accent/10">
        <h4 className="font-medium">Small Card</h4>
      </BentoCard>
      <BentoCard span="col-span-2" className="bg-muted/50">
        <h4 className="font-medium">Large Card</h4>
      </BentoCard>
    </BentoGrid>
  );
}`,
};