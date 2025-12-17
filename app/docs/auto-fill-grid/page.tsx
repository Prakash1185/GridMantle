import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import AutoFillGridContent from "@/lib/blocks/content/auto-fill-grid/auto-fill-grid";

export default function AutoFillGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Auto Fill Grid"
          description="A content-driven grid that automatically adapts column count based on available space and minimum item width. No breakpoints required."
        />
      </div>

      <AutoFillGridContent />

      <div className="max-w-4xl mt-10">
        <NextPrev
          prev={{
            title: "Column Grid",
            slug: "column-grid",
            category: "Blocks",
          }}
          next={{
            title: "Services Grid",
            slug: "services-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}
