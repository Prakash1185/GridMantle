export const bentoGrid2Props = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "BentoCard2 components to display in the grid",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes for the grid container",
  },
  {
    prop: "animate",
    type: "boolean",
    default: "true",
    description: "Enable staggered fade-in animations",
  },
];

export const bentoCard2Props = [
  {
    prop: "title",
    type: "string",
    default: "—",
    description: "Card title/heading",
  },
  {
    prop: "description",
    type: "string",
    default: "—",
    description: "Card description text",
  },
  {
    prop: "icon",
    type: "ReactNode",
    default: "—",
    description: "Icon element to display (Remix Icons recommended)",
  },
  {
    prop: "href",
    type: "string",
    default: "#",
    description: "Link URL for the CTA",
  },
  {
    prop: "cta",
    type: "string",
    default: "Learn more",
    description: "Call-to-action text",
  },
  {
    prop: "pattern",
    type: '"dots" | "grid" | "lines" | "none"',
    default: "dots",
    description: "Subtle background pattern (opacity ~5%)",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Grid positioning classes (lg:col-start, lg:row-start, etc.)",
  },
];