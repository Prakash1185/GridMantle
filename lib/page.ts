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

  // Components
  {
    title: "Column Grid",
    slug: "column-grid",
    category: "Blocks",
    description: "Responsive column grid with animations",
  },

];

export const categories = ["Getting Started", "Blocks"];

export function getPagesByCategory(category: string): DocPage[] {
  return docPages.filter((page) => page.category === category);
}

export function getAllPages(): DocPage[] {
  return docPages;
}

// Helper to generate sidebar sections
export function getSidebarSections() {
  return categories.map((category) => ({
    title: category,
    items: getPagesByCategory(category).map((page) => ({
      title: page.title,
      href: `/docs/${page.slug}`,
    })),
  }));
}