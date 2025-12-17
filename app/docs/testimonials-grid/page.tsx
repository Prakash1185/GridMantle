import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import TestimonialsGridContent from "@/lib/blocks/content/testimonials-grid/testimonials-grid";

export default function TestimonialsGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Testimonials Grid"
          description="An infinite scrolling testimonials grid with text cards, video testimonials, and featured cards. Supports pause on hover, customizable speed, and direction."
        />
      </div>

      <TestimonialsGridContent />

      <div className="max-w-4xl  mt-10">
        <NextPrev
          prev={{
            title: "Pinterest Grid",
            slug: "pinterest-grid",
            category: "Blocks",
          }}
          next={{
            title: "Testimonials Grid 2",
            slug: "testimonials-grid-2",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}