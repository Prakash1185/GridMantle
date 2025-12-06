import { DocContent } from "./types";

export const installationContent: DocContent = {
  title: "Installation",
  description: "Learn how to install and set up GridMantle in your project",
  usage: `Follow these steps to get started with GridMantle in your Next.js project.`,
  examples: [
    {
      title: "Step 1: Initialize Shadcn UI",
      description: "First, initialize Shadcn UI in your project",
      code: `npx shadcn@latest init`,
    },
    {
      title: "Step 2: Install Dependencies",
      description: "Install required dependencies for GridMantle",
      code: `npm install clsx tailwind-merge`,
    },
    {
      title: "Step 3: Create Grid Component",
      description: "Copy the grid component code into your project",
      code: `mkdir -p components/ui
touch components/ui/normal-grid.tsx`,
    },
    {
      title: "Step 4: Import and Use",
      description: "Import the component in your page",
      code: `import { NormalGrid } from "@/components/ui/normal-grid";

export default function Page() {
  return (
    <NormalGrid columns={3} gap={16}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </NormalGrid>
  );
}`,
    },
  ],
};