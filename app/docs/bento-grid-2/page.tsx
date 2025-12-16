import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import BentoGrid2Content from "@/lib/blocks/content/bento-grid-2/bento-grid-2";

export default function BentoGrid2Page() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Bento Grid 2"
          description="An alternating height bento grid with short and tall card variants. Perfect for balanced feature showcases with visual rhythm."
        />
      </div>

      <BentoGrid2Content />

      <div className="max-w-4xl border-t pt-6 mt-10">
        <NextPrev
          prev={{
            title: "Bento Grid",
            slug: "bento-grid",
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