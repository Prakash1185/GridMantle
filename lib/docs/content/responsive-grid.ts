import { DocContent } from "./types";

export const responsiveGridContent: DocContent = {
  title: "Responsive Grid",
  description:
    "A fully responsive grid system that adapts to all screen sizes.",
  installCommand:
    "npx shadcn-ui add responsive-grid --registry=https://gridmantle.dev/registry.json",
  usage: `import { ResponsiveGrid } from "@/components/ui/responsive-grid";

export default function Demo() {
  return (
    <ResponsiveGrid 
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} 
      gap={16}
    >
      <div className="bg-primary/10 p-6 rounded-lg">Item 1</div>
      <div className="bg-primary/10 p-6 rounded-lg">Item 2</div>
      <div className="bg-primary/10 p-6 rounded-lg">Item 3</div>
      <div className="bg-primary/10 p-6 rounded-lg">Item 4</div>
    </ResponsiveGrid>
  );
}`,
  preview: {
    component: "ResponsiveGridDemo",
    code: `export default function ResponsiveGridDemo() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <ResponsiveGrid 
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} 
      gap={16}
    >
      {items.map((item) => (
        <div
          key={item}
          className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-xl border flex items-center justify-center"
        >
          <span className="text-2xl font-semibold">Item {item}</span>
        </div>
      ))}
    </ResponsiveGrid>
  );
}`,
  },
  api: {
    props: [
      {
        name: "columns",
        type: "ResponsiveColumns",
        default: "{ sm: 1, md: 2, lg: 3 }",
        description: "Number of columns at each breakpoint",
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
      title: "Auto-fit Grid",
      description: "Automatically fit columns based on minimum width",
      code: `<ResponsiveGrid 
  columns="auto-fit" 
  minWidth={250}
  gap={16}
>
  {items.map(item => <Card key={item.id} />)}
</ResponsiveGrid>`,
    },
  ],
};