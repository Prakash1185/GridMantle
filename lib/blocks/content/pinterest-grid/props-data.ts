export const pinterestGridProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "PinterestCard components to display in the grid",
  },
  {
    prop: "columns",
    type: "2 | 3 | 4 | 5 | 6",
    default: "4",
    description: "Number of columns at the largest breakpoint",
  },
  {
    prop: "gap",
    type: "number",
    default: "16",
    description: "Gap between columns in pixels",
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

export const pinterestCardProps = [
  {
    prop: "src",
    type: "string",
    default: "—",
    description: "Image source URL",
  },
  {
    prop: "alt",
    type: "string",
    default: "—",
    description: "Image alt text for accessibility",
  },
  {
    prop: "title",
    type: "string",
    default: "—",
    description: "Optional title shown on hover",
  },
  {
    prop: "description",
    type: "string",
    default: "—",
    description: "Optional description shown on hover",
  },
  {
    prop: "href",
    type: "string",
    default: "#",
    description: "Link URL when card is clicked",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];