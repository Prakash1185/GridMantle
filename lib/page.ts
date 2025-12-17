export interface DocPage {
  title: string;
  slug: string;
  category: string;
  description?: string;
}

export const docPages: DocPage[] = [
  {
    title: "Introduction",
    slug: "introduction",
    category: "Getting Started",
    description: "Get started with GridMantle",
  },
  {
    title: "Installation",
    slug: "installation",
    category: "Getting Started",
    description: "Install GridMantle in your project",
  },
  {
    title: "Column Grid",
    slug: "column-grid",
    category: "Blocks",
    description: "Responsive column grid with animations",
  },
  {
    title: "Auto Fill Grid",
    slug: "auto-fill-grid",
    category: "Blocks",
    description: "Grid that auto-adjusts columns based on width",
  },
  {
    title: "Services Grid",
    slug: "services-grid",
    category: "Blocks",
    description: "A responsive services grid for listing features",
  },
  {
    title: "Bento Grid",
    slug: "bento-grid",
    category: "Blocks",
    description: "A flexible bento-style grid layout component",
  },
  {
    title: "Bento Grid 2",
    slug: "bento-grid-2",
    category: "Blocks",
    description: "An alternate bento-style grid with different layout options",
  },
  {
    title: "Pinterest Grid",
    slug: "pinterest-grid",
    category: "Blocks",
    description: "Masonry-style pinterest grid layout",
  },
  {
    title: "Testimonials Grid",
    slug: "testimonials-grid",
    category: "Blocks",
    description: "Horizontal scrolling testimonials grid with video support",
  },
  {
    title: "Testimonials Grid 2",
    slug: "testimonials-grid-2",
    category: "Blocks",
    description: "Vertical scrolling testimonials grid with video support",
  },
  {
    title: "Contribute",
    slug: "contribute",
    category: "Extras",
    description: "Learn how to contribute to GridMantle",
  },
];

export const categories = ["Getting Started", "Blocks", "Extras"];

export function getPagesByCategory(category: string): DocPage[] {
  return docPages.filter((page) => page.category === category);
}

export function getAllPages(): DocPage[] {
  return docPages;
}

export function getSidebarSections() {
  return categories.map((category) => ({
    title: category,
    items: getPagesByCategory(category).map((page) => ({
      title: page.title,
      href: `/docs/${page.slug}`,
    })),
  }));
}