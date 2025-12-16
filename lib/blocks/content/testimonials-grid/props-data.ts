export const testimonialsGridProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "TestimonialColumn components containing cards",
  },
  {
    prop: "speed",
    type: "number",
    default: "30",
    description: "Duration in seconds for one complete scroll cycle",
  },
  {
    prop: "direction",
    type: '"left" | "right"',
    default: "left",
    description: "Direction of the infinite scroll",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const testimonialCardProps = [
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
    prop: "variant",
    type: '"compact" | "expanded"',
    default: "compact",
    description: "Card size variant",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const videoTestimonialCardProps = [
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
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const featuredTestimonialCardProps = [
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
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];

export const testimonialColumnProps = [
  {
    prop: "children",
    type: "ReactNode",
    default: "—",
    description: "Testimonial cards to display in the column",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes",
  },
];