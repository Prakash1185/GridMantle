import { DocContent } from "./types";

export const quickStartContent: DocContent = {
  title: "Quick Start",
  description: "Get up and running with GridMantle in minutes",
  usage: `import { MasonryGrid } from "@/components/ui/masonry-grid";

export default function Demo() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <MasonryGrid columns={3} gap={16}>
      {items.map((item) => (
        <div key={item} className="bg-primary/10 p-6 rounded-lg">
          Item {item}
        </div>
      ))}
    </MasonryGrid>
  );
}`,
  examples: [
    {
      title: "Basic Usage",
      description: "Create a simple masonry grid",
      code: `<MasonryGrid columns={3} gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</MasonryGrid>`,
    },
    {
      title: "Responsive Columns",
      description: "Adjust columns based on screen size",
      code: `<MasonryGrid 
  columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} 
  gap={16}
>
  {items.map(item => <Card key={item.id} />)}
</MasonryGrid>`,
    },
  ],
};