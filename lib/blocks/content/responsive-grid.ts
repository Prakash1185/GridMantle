import { BlockContent } from "./types";

export const responsiveGridBlock: BlockContent = {
  name: "Responsive Grid",
  description:
    "A fully responsive grid system that adapts to all screen sizes.",
  installCommand:
    "npx shadcn-ui add responsive-grid --registry=https://gridmantle.dev/registry.json",
  code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: number;
  className?: string;
}

export function ResponsiveGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 16,
  className,
}: ResponsiveGridProps) {
  const gridClasses = cn(
    "grid",
    columns.sm && \`grid-cols-\${columns.sm}\`,
    columns.md && \`md:grid-cols-\${columns.md}\`,
    columns.lg && \`lg:grid-cols-\${columns.lg}\`,
    columns.xl && \`xl:grid-cols-\${columns.xl}\`,
    className
  );

  return (
    <div className={gridClasses} style={{ gap: \`\${gap}px\` }}>
      {children}
    </div>
  );
}`,
  component: "responsive-grid.tsx",
  usage: `import { ResponsiveGrid } from "@/components/ui/responsive-grid";

export default function Demo() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <ResponsiveGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={16}
    >
      {items.map((item) => (
        <div
          key={item}
          className="bg-primary/10 p-8 rounded-lg"
        >
          Item {item}
        </div>
      ))}
    </ResponsiveGrid>
  );
}`,
};