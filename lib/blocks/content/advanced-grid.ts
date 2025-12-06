import { DocContent } from "@/lib/docs/content/types";

export const advancedGridContent: DocContent = {
  title: "Advanced Grid",
  description:
    "A masonry-style responsive grid with auto-placement and dense packing. Items can span multiple rows and columns with intelligent flow.",
  usage: `import { AdvancedGrid } from "@/components/ui/advanced-grid";

export default function Demo() {
  return (
    <AdvancedGrid 
      columns={{ sm: 1, md: 2, lg: 3 }} 
      gap={16}
      autoRows="minmax(100px, auto)"
    >
      <div className="row-span-2 bg-blue-500/20 p-6 rounded-lg border">
        Tall Item
      </div>
      <div className="bg-purple-500/20 p-6 rounded-lg border">Item 2</div>
      <div className="col-span-2 bg-pink-500/20 p-6 rounded-lg border">
        Wide Item
      </div>
    </AdvancedGrid>
  );
}`,
  preview: {
    component: "AdvancedGridDemo",
    code: `"use client";

import { AdvancedGrid } from "@/components/ui/advanced-grid";

export default function AdvancedGridDemo() {
  return (
    <AdvancedGrid 
      columns={{ sm: 1, md: 2, lg: 3 }} 
      gap={16}
      autoRows="minmax(100px, auto)"
    >
      <div className="row-span-2 bg-gradient-to-br from-violet-500/20 to-violet-500/5 p-8 rounded-xl border flex items-center justify-center">
        <span className="text-xl font-semibold">Tall Item</span>
      </div>
      <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
        <span className="text-xl font-semibold">Item 2</span>
      </div>
      <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
        <span className="text-xl font-semibold">Item 3</span>
      </div>
      <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-green-500/20 to-green-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
        <span className="text-xl font-semibold">Wide Item</span>
      </div>
      <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
        <span className="text-xl font-semibold">Item 5</span>
      </div>
      <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
        <span className="text-xl font-semibold">Item 6</span>
      </div>
    </AdvancedGrid>
  );
}`,
  },
  api: {
    props: [
      {
        name: "columns",
        type: "{ sm?: number; md?: number; lg?: number }",
        default: "{ sm: 1, md: 2, lg: 3 }",
        description: "Responsive column configuration for different breakpoints",
      },
      {
        name: "gap",
        type: "number",
        default: "16",
        description: "Gap between grid items in pixels",
      },
      {
        name: "autoRows",
        type: "string",
        default: "auto",
        description: "CSS grid-auto-rows value for dynamic row heights",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Grid items to be rendered",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
      },
    ],
  },
  examples: [
    {
      title: "Masonry Layout",
      description: "Create items with different heights and spans",
      code: `<AdvancedGrid 
  columns={{ sm: 1, md: 2, lg: 3 }} 
  gap={16}
  autoRows="minmax(100px, auto)"
>
  <div className="row-span-2">Tall Item</div>
  <div>Normal Item</div>
  <div className="col-span-2">Wide Item</div>
</AdvancedGrid>`,
    },
    {
      title: "Component Code",
      description: "Copy this code to components/ui/advanced-grid.tsx",
      code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AdvancedGridProps {
  children: React.ReactNode;
  columns?: { sm?: number; md?: number; lg?: number };
  gap?: number;
  autoRows?: string;
  className?: string;
}

export function AdvancedGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 16,
  autoRows = "auto",
  className,
}: AdvancedGridProps) {
  const getGridCols = () => {
    const classes = [];
    if (columns.sm) classes.push(\`grid-cols-\${columns.sm}\`);
    if (columns.md) classes.push(\`md:grid-cols-\${columns.md}\`);
    if (columns.lg) classes.push(\`lg:grid-cols-\${columns.lg}\`);
    return classes.join(" ");
  };

  return (
    <div
      className={cn("grid w-full", getGridCols(), className)}
      style={{
        gap: \`\${gap}px\`,
        gridAutoRows: autoRows,
        gridAutoFlow: "dense",
      }}
    >
      {children}
    </div>
  );
}`,
    },
  ],
};