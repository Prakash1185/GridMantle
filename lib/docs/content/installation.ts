import { DocContent } from "./types";

export const installationContent: DocContent = {
  title: "Installation",
  description: "Learn how to install and set up GridMantle in your project",
  usage: `# Install GridMantle
npm install gridmantle

# Or using the shadcn CLI
npx shadcn-ui@latest init

# Add a specific component
npx shadcn-ui add masonry-grid --registry=https://gridmantle.dev/registry.json`,
  examples: [
    {
      title: "Manual Installation",
      description: "Copy the component code directly into your project",
      code: `// Copy the component from the docs
// Paste it into your components folder
// Import and use it in your project

import { MasonryGrid } from "@/components/ui/masonry-grid";

export default function App() {
  return <MasonryGrid>{/* Your content */}</MasonryGrid>;
}`,
    },
    {
      title: "Using CLI",
      description: "Install components using the shadcn CLI",
      code: `npx shadcn-ui add masonry-grid --registry=https://gridmantle.dev/registry.json`,
    },
  ],
};