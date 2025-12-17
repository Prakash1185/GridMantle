import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import ColumnGridContent from "@/lib/blocks/content/column-grid/column-grid";

export default function ColumnGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Column Grid"
          description="A responsive grid layout with fixed columns that smoothly adapts across all screen sizes with beautiful animations."
        />
      </div>

      <ColumnGridContent />

      <div className="max-w-4xl   mt-10">
        <NextPrev
          prev={{
            title: "Installation",
            slug: "installation",
            category: "Getting Started",
          }}
          next={{
            title: "Auto Fill Grid",
            slug: "auto-fill-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}