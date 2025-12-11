import { docPages } from "./page";

export interface SearchItem {
  title: string;
  description?: string;
  href: string;
  category: "Getting Started" | "Components" | "Pages";
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
    description: "Browse all available grid blocks",
    href: "/blocks",
    category: "Pages",
  },
  
  // Dynamic doc pages from docPages array
  ...docPages.map((page) => ({
    title: page.title,
    href: `/docs/${page.slug}`,
    category: page.category as "Getting Started" | "Components",
  })),
];