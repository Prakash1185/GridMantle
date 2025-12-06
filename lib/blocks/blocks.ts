export interface Block {
  slug: string;
  name: string;
  description: string;
  category: string;
  preview?: string;
}

export const blocks: Block[] = [
  {
    slug: "masonry-grid",
    name: "Masonry Grid",
    description: "Pinterest-style masonry grid layout with responsive columns",
    category: "Grids",
  },
  {
    slug: "bento-grid",
    name: "Bento Grid",
    description: "Modern bento-style grid layout inspired by Apple design",
    category: "Grids",
  },
  {
    slug: "responsive-grid",
    name: "Responsive Grid",
    description: "Fully responsive grid system that adapts to all screen sizes",
    category: "Grids",
  },
];

export const blockCategories = Array.from(
  new Set(blocks.map((block) => block.category))
);

export function getBlockBySlug(slug: string): Block | undefined {
  return blocks.find((block) => block.slug === slug);
}

export function getBlocksByCategory(category: string): Block[] {
  return blocks.filter((block) => block.category === category);
}