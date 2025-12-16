import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import BentoGridContent from "@/lib/blocks/content/bento-grid/bento-grid";

export default function BentoGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Bento Grid"
          description="A flexible bento-style grid layout with asymmetric cards. Perfect for feature showcases, dashboards, and landing pages."
        />
      </div>

      <BentoGridContent />

      <div className="max-w-4xl  mt-10">
        <NextPrev
          prev={{
            title: "Services Grid",
            slug: "services-grid",
            category: "Blocks",
          }}
          next={{
            title: "Masonry Grid",
            slug: "masonry-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}