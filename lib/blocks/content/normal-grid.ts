import { DocContent } from "@/lib/docs/content/types";

export const normalGridContent: DocContent = {
  title: "Normal Grid",
  description:
    "A simple and flexible grid layout system with customizable columns and gaps.",
  usage: `import { NormalGrid } from "@/components/ui/normal-grid";

export default function Demo() {
  return (
    <NormalGrid columns={3} gap={16}>
      <div className="bg-blue-500/20 p-6 rounded-lg border">Item 1</div>
      <div className="bg-purple-500/20 p-6 rounded-lg border">Item 2</div>
      <div className="bg-pink-500/20 p-6 rounded-lg border">Item 3</div>
      <div className="bg-green-500/20 p-6 rounded-lg border">Item 4</div>
      <div className="bg-orange-500/20 p-6 rounded-lg border">Item 5</div>
      <div className="bg-cyan-500/20 p-6 rounded-lg border">Item 6</div>
    </NormalGrid>
  );
}`,
  preview: {
    component: "NormalGridDemo",
    code: `"use client";

import { NormalGrid } from "@/components/ui/normal-grid";

export default function NormalGridDemo() {
  const items = [
    { id: 1, color: "from-blue-500/20 to-blue-500/5" },
    { id: 2, color: "from-purple-500/20 to-purple-500/5" },
    { id: 3, color: "from-pink-500/20 to-pink-500/5" },
    { id: 4, color: "from-green-500/20 to-green-500/5" },
    { id: 5, color: "from-orange-500/20 to-orange-500/5" },
    { id: 6, color: "from-cyan-500/20 to-cyan-500/5" },
  ];

  return (
    <NormalGrid columns={3} gap={16}>
      {items.map((item) => (
        <div
          key={item.id}
          className={\`bg-gradient-to-br \${item.color} p-8 rounded-xl border flex items-center justify-center h-32\`}
        >
          <span className="text-xl font-semibold">Item {item.id}</span>
        </div>
      ))}
    </NormalGrid>
  );
}`,
  },
  api: {
    props: [
      {
        name: "columns",
        type: "number",
        default: "3",
        description: "Number of columns in the grid",
      },
      {
        name: "gap",
        type: "number",
        default: "16",
        description: "Gap between grid items in pixels",
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
      title: "Basic Usage",
      description: "Create a simple 3-column grid",
      code: `<NormalGrid columns={3} gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</NormalGrid>`,
    },
    {
      title: "Custom Columns",
      description: "Adjust the number of columns",
      code: `<NormalGrid columns={4} gap={24}>
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</NormalGrid>`,
    },
    {
      title: "Component Code",
      description: "Copy this code to components/ui/normal-grid.tsx",
      code: `"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NormalGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export function NormalGrid({
  children,
  columns = 3,
  gap = 16,
  className,
}: NormalGridProps) {
  return (
    <div
      className={cn("grid w-full", className)}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gap: \`\${gap}px\`,
      }}
    >
      {children}
    </div>
  );
}`,
    },
  ],
};