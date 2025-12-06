import { normalGridContent } from "./normal-grid";
import { advancedGridContent } from "./advanced-grid";

export const blockComponents = [
  {
    slug: "normal-grid",
    name: "Normal Grid",
    content: normalGridContent,
  },
  {
    slug: "advanced-grid",
    name: "Advanced Grid",
    content: advancedGridContent,
  },
];

export function getBlockBySlug(slug: string) {
  return blockComponents.find((block) => block.slug === slug);
}