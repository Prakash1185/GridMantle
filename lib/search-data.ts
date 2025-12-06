import { docPages } from "./docs/page";
import { blockComponents } from "./blocks/content";

export interface SearchItem {
  title: string;
  description?: string;
  href: string;
  category: "Getting Started" | "Components" | "Pages" | "Blocks";
}

export const searchData: SearchItem[] = [
  // Static pages
  {
    title: "Home",
    description: "GridMantle - Modern grid layouts made simple",
    href: "/",
    category: "Pages",
  },
  {
    title: "Blocks",
    description: "Live preview of all grid components",
    href: "/blocks",
    category: "Pages",
  },
  
  // Dynamic doc pages
  ...docPages.map((page) => ({
    title: page.title,
    // description: page.description,
    href: `/docs/${page.slug}`,
    category: page.category as "Getting Started" | "Components",
  })),
  
  // // Dynamic block pages (redirects to docs)
  // ...blockComponents.map((block) => ({
  //   title: `${block.name} Block`,
  //   // description: block.content.description,
  //   href: `/docs/${block.slug}`,
  //   category: "Blocks" as const,
  // })),
];