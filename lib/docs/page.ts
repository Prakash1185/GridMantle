export interface DocPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
}

export const docPages: DocPage[] = [
  // Getting Started
  {
    slug: "introduction",
    title: "Introduction",
    description: "Welcome to GridMantle - Modern grid layouts made simple",
    category: "Getting Started",
    order: 1,
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Learn how to install and set up GridMantle in your project",
    category: "Getting Started",
    order: 2,
  },
  {
    slug: "quick-start",
    title: "Quick Start",
    description: "Get up and running with GridMantle in minutes",
    category: "Getting Started",
    order: 3,
  },
  // Components
  {
    slug: "masonry-grid",
    title: "Masonry Grid",
    description: "Pinterest-style masonry grid layout",
    category: "Components",
    order: 4,
  },
  {
    slug: "bento-grid",
    title: "Bento Grid",
    description: "Modern bento-style grid layout",
    category: "Components",
    order: 5,
  },
  {
    slug: "responsive-grid",
    title: "Responsive Grid",
    description: "Fully responsive grid system",
    category: "Components",
    order: 6,
  },
];

export const categories = Array.from(
  new Set(docPages.map((page) => page.category))
);

export function getPageBySlug(slug: string): DocPage | undefined {
  return docPages.find((page) => page.slug === slug);
}

export function getPagesByCategory(category: string): DocPage[] {
  return docPages.filter((page) => page.category === category);
}

export function getNextPage(currentSlug: string): DocPage | null {
  const currentIndex = docPages.findIndex((page) => page.slug === currentSlug);
  return currentIndex < docPages.length - 1
    ? docPages[currentIndex + 1]
    : null;
}

export function getPrevPage(currentSlug: string): DocPage | null {
  const currentIndex = docPages.findIndex((page) => page.slug === currentSlug);
  return currentIndex > 0 ? docPages[currentIndex - 1] : null;
}