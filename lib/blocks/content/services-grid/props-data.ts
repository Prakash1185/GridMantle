export const servicesGridProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "Grid cell content to display in the grid",
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
  {
    prop: "borderClass",
    type: "string",
    default: "border-border",
    description: "Custom border color class",
  },
];