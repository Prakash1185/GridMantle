import { DocContent } from "./types";

export const bentoGridContent: DocContent = {
  title: "Bento Grid",
  description:
    "A modern bento-style grid layout inspired by Apple's design language.",
  installCommand:
    "npx shadcn-ui add bento-grid --registry=https://gridmantle.dev/registry.json",
  usage: `import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export default function Demo() {
  return (
    <BentoGrid>
      <BentoCard span="col-span-2" className="bg-primary/10">
        Large Card
      </BentoCard>
      <BentoCard className="bg-secondary/10">Small Card</BentoCard>
      <BentoCard className="bg-accent/10">Small Card</BentoCard>
      <BentoCard span="col-span-2" className="bg-muted/50">
        Large Card
      </BentoCard>
    </BentoGrid>
  );
}`,
  preview: {
    component: "BentoGridDemo",
    code: `export default function BentoGridDemo() {
  return (
    <BentoGrid>
      <BentoCard 
        span="col-span-2 row-span-2" 
        className="bg-gradient-to-br from-violet-500/20 to-violet-500/5"
      >
        <h3 className="text-2xl font-semibold mb-2">Featured</h3>
        <p className="text-muted-foreground">Large featured card</p>
      </BentoCard>
      <BentoCard className="bg-gradient-to-br from-blue-500/20 to-blue-500/5">
        <h4 className="font-medium">Card 1</h4>
      </BentoCard>
      <BentoCard className="bg-gradient-to-br from-pink-500/20 to-pink-500/5">
        <h4 className="font-medium">Card 2</h4>
      </BentoCard>
      <BentoCard 
        span="col-span-2" 
        className="bg-gradient-to-br from-green-500/20 to-green-500/5"
      >
        <h4 className="font-medium">Wide Card</h4>
      </BentoCard>
    </BentoGrid>
  );
}`,
  },
  api: {
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "BentoCard components",
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
      title: "Custom Spans",
      description: "Control card sizes with Tailwind span classes",
      code: `<BentoGrid>
  <BentoCard span="col-span-2 row-span-2">
    Large Card
  </BentoCard>
  <BentoCard span="col-span-1">Small</BentoCard>
  <BentoCard span="col-span-3">Wide</BentoCard>
</BentoGrid>`,
    },
  ],
};