import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import TestimonialsGrid2Content from "@/lib/blocks/content/testimonials-grid-2/testimonials-grid-2";

export default function TestimonialsGrid2Page() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Testimonials Grid 2"
          description="A vertical infinite scrolling testimonials grid with multiple columns. Cards scroll from bottom to top with alternating directions. Supports text reviews, video reviews, and image reviews with varying heights."
        />
      </div>

      <TestimonialsGrid2Content />

      <div className="max-w-4xl border-t pt-6 mt-10">
        <NextPrev
          prev={{
            title: "Testimonials Grid",
            slug: "testimonials-grid",
            category: "Blocks",
          }}
          next={{
            title: "Feature Grid",
            slug: "feature-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}