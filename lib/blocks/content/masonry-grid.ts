import { BlockContent } from "./types";

export const masonryGridBlock: BlockContent = {
  name: "Masonry Grid",
  description:
    "A Pinterest-style masonry grid layout that arranges items in columns with varying heights.",
  installCommand:
    "npx shadcn-ui add masonry-grid --registry=https://gridmantle.dev/registry.json",
  dependencies: ["framer-motion"],
  code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MasonryGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export function MasonryGrid({
  children,
  columns = 3,
  gap = 16,
  className,
}: MasonryGridProps) {
  return (
    <div
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gap: \`\${gap}px\`,
      }}
    >
      {children}
    </div>
  );
}`,
  component: "masonry-grid.tsx",
  usage: `import { MasonryGrid } from "@/components/ui/masonry-grid";

export default function Demo() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <MasonryGrid columns={3} gap={16}>
      {items.map((item) => (
        <div
          key={item}
          className="bg-primary/10 p-6 rounded-lg"
        >
          Item {item}
        </div>
      ))}
    </MasonryGrid>
  );
}`,
};