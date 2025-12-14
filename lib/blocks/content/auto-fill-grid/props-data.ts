export const autoFillGridProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "Grid items to be rendered inside the layout",
  },
  {
    prop: "minItemWidth",
    type: "number",
    default: "280",
    description:
      "Minimum width (in px) for each grid item. Column count adapts automatically.",
  },
  {
    prop: "gap",
    type: "number",
    default: "6",
    description: "Spacing between grid items (Tailwind scale: 0–12)",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional classes applied to the grid container",
  },
  {
    prop: "animate",
    type: "boolean",
    default: "true",
    description: "Enable staggered entrance animations for grid items",
  },
];
