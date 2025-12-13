export const columnGridProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "The content to be displayed in grid cells",
  },
  {
    prop: "columns",
    type: "object",
    default: "{ default: 1, sm: 2, md: 2, lg: 3, xl: 4 }",
    description: "Number of columns at each breakpoint",
  },
  {
    prop: "gap",
    type: "number",
    default: "6",
    description: "Space between grid items (1-12)",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
  {
    prop: "animate",
    type: "boolean",
    default: "true",
    description: "Enable staggered entrance animations",
  },
];