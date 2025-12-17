import fs from "fs";
import path from "path";

interface RegistryFile {
  path: string;
  type: string;
  content?: string;
  target?: string;
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface RegistryIndexItem {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
}

interface RegistryIndex {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryIndexItem[];
}

const components = [
  {
    name: "column-grid",
    title: "Column Grid",
    description: "Responsive column grid with animations",
    dependencies: ["framer-motion"],
    files: ["components/ui/column-grid.tsx"],
  },
  {
    name: "auto-fill-grid",
    title: "Auto Fill Grid",
    description: "Grid that auto-adjusts columns based on width",
    dependencies: ["framer-motion"],
    files: ["components/ui/auto-fill-grid.tsx"],
  },
  {
    name: "services-grid",
    title: "Services Grid",
    description: "A responsive services grid for listing features",
    dependencies: ["framer-motion"],
    files: ["components/ui/services-grid.tsx"],
  },
  {
    name: "bento-grid",
    title: "Bento Grid",
    description: "A flexible bento-style grid layout component",
    dependencies: ["framer-motion"],
    files: ["components/ui/bento-grid.tsx"],
  },
  {
    name: "bento-grid-2",
    title: "Bento Grid 2",
    description: "An alternate bento-style grid with different layout options",
    dependencies: ["framer-motion"],
    files: ["components/ui/bento-grid-2.tsx"],
  },
  {
    name: "pinterest-grid",
    title: "Pinterest Grid",
    description: "Masonry-style pinterest grid layout",
    dependencies: ["framer-motion"],
    files: ["components/ui/pinterest-grid.tsx"],
  },
  {
    name: "testimonials-grid",
    title: "Testimonials Grid",
    description: "Horizontal scrolling testimonials grid with video support",
    dependencies: ["framer-motion", "@remixicon/react"],
    files: ["components/ui/testimonials-grid.tsx"],
  },
  {
    name: "testimonials-grid-2",
    title: "Testimonials Grid 2",
    description: "Vertical scrolling testimonials grid with video support",
    dependencies: ["framer-motion", "@remixicon/react"],
    files: ["components/ui/testimonials-grid-2.tsx"],
  },
];

const ROOT_DIR = process.cwd();
const REGISTRY_DIR = path.join(ROOT_DIR, "public", "r");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readFileContent(filePath: string): string {
  const fullPath = path.join(ROOT_DIR, filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(fullPath, "utf-8");
}

function buildRegistry() {
  console.log("Building GridMantle Registry...\n");

  ensureDir(REGISTRY_DIR);

  const indexItems: RegistryIndexItem[] = [];

  for (const component of components) {
    const registryItem: RegistryItem = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: component.name,
      type: "registry:ui",
      title: component.title,
      description: component.description,
      dependencies: component.dependencies,
      devDependencies: [],
      registryDependencies: [],
      files: component.files.map((file) => ({
        path: file,
        type: "registry:ui",
        target: file,
        content: readFileContent(file),
      })),
    };

    const outputPath = path.join(REGISTRY_DIR, `${component.name}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
    console.log(`Built: ${component.name}.json`);

    indexItems.push({
      name: component.name,
      type: "registry:ui",
      title: component.title,
      description: component.description,
      dependencies: component.dependencies,
      devDependencies: [],
      registryDependencies: [],
    });
  }

  const registryIndex: RegistryIndex = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "gridmantle",
    homepage: "https://gridmantle.vercel.app",
    items: indexItems,
  };

  fs.writeFileSync(
    path.join(REGISTRY_DIR, "index.json"),
    JSON.stringify(registryIndex, null, 2)
  );
  console.log(`Built: index.json`);
  console.log("\nRegistry build complete!");
}

buildRegistry();