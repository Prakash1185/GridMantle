import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import PinterestGridContent from "@/lib/blocks/content/pinterest-grid/pinterest-grid";

export default function PinterestGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Pinterest Grid"
          description="A masonry-style grid layout inspired by Pinterest. Perfect for displaying images, cards, and content of varying heights in a visually appealing waterfall layout."
        />
      </div>

      <PinterestGridContent />

      <div className="max-w-4xl border-t pt-6 mt-10">
        <NextPrev
          prev={{
            title: "Bento Grid 2",
            slug: "bento-grid-2",
            category: "Blocks",
          }}
          next={{
            title: "Gallery Grid",
            slug: "gallery-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}