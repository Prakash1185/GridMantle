import { DocContent } from "./types";

export const masonryGridContent: DocContent = {
  title: "Masonry Grid",
  description:
    "A Pinterest-style masonry grid layout that arranges items in columns with varying heights.",
  installCommand:
    "npx shadcn-ui add masonry-grid --registry=https://gridmantle.dev/registry.json",
  usage: `import { MasonryGrid } from "@/components/ui/masonry-grid";

export default function Demo() {
  return (
    <MasonryGrid columns={3} gap={16}>
      <div className="bg-primary/10 p-4 rounded-lg h-40">Item 1</div>
      <div className="bg-primary/10 p-4 rounded-lg h-60">Item 2</div>
      <div className="bg-primary/10 p-4 rounded-lg h-32">Item 3</div>
      <div className="bg-primary/10 p-4 rounded-lg h-48">Item 4</div>
    </MasonryGrid>
  );
}`,
  preview: {
    component: "MasonryGridDemo",
    code: `export default function MasonryGridDemo() {
  const items = [
    { id: 1, height: "h-40", color: "from-blue-500/20 to-blue-500/5" },
    { id: 2, height: "h-60", color: "from-purple-500/20 to-purple-500/5" },
    { id: 3, height: "h-32", color: "from-pink-500/20 to-pink-500/5" },
    { id: 4, height: "h-48", color: "from-green-500/20 to-green-500/5" },
    { id: 5, height: "h-56", color: "from-orange-500/20 to-orange-500/5" },
    { id: 6, height: "h-40", color: "from-cyan-500/20 to-cyan-500/5" },
  ];

  return (
    <MasonryGrid columns={3} gap={16}>
      {items.map((item) => (
        <div
          key={item.id}
          className={\`bg-gradient-to-br \${item.color} p-6 rounded-xl border \${item.height} flex items-center justify-center\`}
        >
          <span className="text-2xl font-semibold">Item {item.id}</span>
        </div>
      ))}
    </MasonryGrid>
  );
}`,
  },
  api: {
    props: [
      {
        name: "columns",
        type: "number | ResponsiveColumns",
        default: "3",
        description: "Number of columns in the grid or responsive object",
      },
      {
        name: "gap",
        type: "number",
        default: "16",
        description: "Gap between items in pixels",
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
      title: "Responsive Columns",
      description: "Adjust columns based on screen size",
      code: `<MasonryGrid 
  columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} 
  gap={16}
>
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</MasonryGrid>`,
    },
    {
      title: "Custom Gap",
      description: "Control spacing between items",
      code: `<MasonryGrid columns={3} gap={24}>
  {items.map((item) => (
    <div key={item.id}>{item.content}</div>
  ))}
</MasonryGrid>`,
    },
  ],
};