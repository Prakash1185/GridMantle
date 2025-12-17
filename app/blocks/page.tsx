"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Import all demos
import { BentoGridDemo } from "@/lib/blocks/content/bento-grid/bento-grid-demo";
import { TestimonialsGridDemo } from "@/lib/blocks/content/testimonials-grid/testimonials-grid-demo";
import { TestimonialsGrid2Demo } from "@/lib/blocks/content/testimonials-grid-2/testimonials-grid-2-demo";
import { PinterestGridDemo } from "@/lib/blocks/content/pinterest-grid/pinterest-grid-demo";
import { ServicesGridDemo } from "@/lib/blocks/content/services-grid/services-grid-demo";
import { BentoGrid2Demo } from "@/lib/blocks/content/bento-grid-2/bento-grid-2-demo";
import { ColumnGridPreview } from "@/lib/blocks/content/column-grid/preview";
import { AutoFillGridDemo } from "@/lib/blocks/content/auto-fill-grid/auto-fill-demo";

// Blocks data array
const blocks = [
  {
    name: "Testimonials Grid",
    slug: "testimonials-grid",
    description: "Horizontal scrolling testimonials",
    demo: TestimonialsGridDemo,
  },
  {
    name: "Testimonials Grid 2",
    slug: "testimonials-grid-2",
    description: "Vertical scrolling testimonials",
    demo: TestimonialsGrid2Demo,
  },
  {
    name: "Bento Grid",
    slug: "bento-grid",
    description: "A flexible bento-style grid layout",
    demo: BentoGridDemo,
  },
  {
    name: "Bento Grid 2",
    slug: "bento-grid-2",
    description: "A flexible bento-style grid layout",
    demo: BentoGrid2Demo,
  },

  {
    name: "Services Grid",
    slug: "services-grid",
    description: "A grid based layout for services listing.",
    demo: ServicesGridDemo,
  },
  {
    name: "Pinterest Grid",
    slug: "pinterest-grid",
    description: "Pinterest style gird for images",
    demo: PinterestGridDemo,
  },
  {
    name: "Column Grid",
    slug: "column-grid",
    description: "A responsive grid layout with fixed columns",
    demo: ColumnGridPreview,
  },
  {
    name: "Auto Fill Grid",
    slug: "auto-fill-grid",
    description: "A responsive grid layout with fixed columns",
    demo: AutoFillGridDemo,
  },
];


// Block card component
function BlockCard({
  name,
  slug,
  demo: DemoComponent,
}: {
  name: string;
  slug: string;
  description: string;
  demo: React.ComponentType;
}) {
  return (
    <Link href={`/docs/${slug}`} className="group block">
      <div className="space-y-3">
        {/* Preview Box */}
        <div
          className={cn(
            "relative overflow-hidden rounded-xl border-2 border-dashed border-border/60",
            "bg-background transition-all duration-300",
            "group-hover:border-primary/50 group-hover:shadow-lg",
            "h-[280px] sm:h-[320px] md:h-[360px]"
          )}
        >
          {/* Inner Demo Box */}
          <div
            className={cn(
              "absolute inset-3 sm:inset-4 overflow-hidden rounded-lg",
              "bg-background border border-border/50 shadow-sm"
            )}
          >
            {/* Demo Preview */}
            <div className="w-full h-full overflow-hidden pointer-events-none">
              <div className="transform scale-[0.6] sm:scale-[0.65] md:scale-[0.7] origin-top-left w-[166%] sm:w-[154%] md:w-[143%] h-[166%] sm:h-[154%] md:h-[143%]">
                <DemoComponent />
              </div>
            </div>

            {/* Hover Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-primary/5 opacity-0",
                "group-hover:opacity-100 transition-opacity duration-300",
                "flex items-center justify-center"
              )}
            >
              <span
                className={cn(
                  "px-4 py-2 rounded-lg bg-primary text-primary-foreground",
                  "text-sm font-medium opacity-0 transform translate-y-2",
                  "group-hover:opacity-100 group-hover:translate-y-0",
                  "transition-all duration-300 delay-100"
                )}
              >
                View Documentation
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlocksPage() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-medium text-primary">
                {blocks.length} Blocks Available
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Grid Blocks
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Live preview of all grid components. Click any block to view
              documentation.
            </p>
          </div>

          {/* Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blocks.map((block) => (
              <BlockCard key={block.slug} {...block} />
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              More blocks coming soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
