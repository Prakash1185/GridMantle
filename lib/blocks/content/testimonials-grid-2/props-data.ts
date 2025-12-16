export const testimonialsGrid2Props = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "ReviewCard, VideoReviewCard, or ImageReviewCard components",
  },
  {
    prop: "columns",
    type: "2 | 3 | 4 | 5",
    default: "4",
    description: "Number of columns (responsive)",
  },
  {
    prop: "speed",
    type: "number",
    default: "25",
    description: "Duration in seconds for one complete scroll cycle",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const reviewCardProps = [
  {
    prop: "quote",
    type: "string",
    default: "—",
    description: "The testimonial text",
  },
  {
    prop: "author",
    type: "string",
    default: "—",
    description: "Name of the person",
  },
  {
    prop: "role",
    type: "string",
    default: "—",
    description: "Job title or role",
  },
  {
    prop: "company",
    type: "string",
    default: "—",
    description: "Company name",
  },
  {
    prop: "avatar",
    type: "string",
    default: "—",
    description: "Avatar image URL",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    default: "md",
    description: "Card size variant for varying heights",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const videoReviewCardProps = [
  {
    prop: "videoSrc",
    type: "string",
    default: "—",
    description: "Video source URL (plays muted, looped, no controls)",
  },
  {
    prop: "posterSrc",
    type: "string",
    default: "—",
    description: "Optional poster/thumbnail image shown before video loads",
  },
  {
    prop: "author",
    type: "string",
    default: "—",
    description: "Name of the person",
  },
  {
    prop: "role",
    type: "string",
    default: "—",
    description: "Job title or role",
  },
  {
    prop: "company",
    type: "string",
    default: "—",
    description: "Company name",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    default: "md",
    description: "Card size variant for varying heights",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const imageReviewCardProps = [
  {
    prop: "quote",
    type: "string",
    default: "—",
    description: "The testimonial text",
  },
  {
    prop: "author",
    type: "string",
    default: "—",
    description: "Name of the person",
  },
  {
    prop: "role",
    type: "string",
    default: "—",
    description: "Job title or role",
  },
  {
    prop: "company",
    type: "string",
    default: "—",
    description: "Company name",
  },
  {
    prop: "avatar",
    type: "string",
    default: "—",
    description: "Avatar image URL",
  },
  {
    prop: "backgroundImage",
    type: "string",
    default: "—",
    description: "Background image URL for the card",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    default: "md",
    description: "Card size variant for varying heights",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];