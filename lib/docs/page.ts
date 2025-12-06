export interface DocPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
}

export const docPages: DocPage[] = [
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
    slug: "normal-grid",
    title: "Normal Grid",
    description: "Simple and flexible grid layout system",
    category: "Components",
    order: 3,
  },
  {
    slug: "advanced-grid",
    title: "Advanced Grid",
    description: "Responsive grid with breakpoint controls",
    category: "Components",
    order: 4,
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