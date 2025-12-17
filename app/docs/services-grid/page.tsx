import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import ServicesGridContent from "@/lib/blocks/content/services-grid/services-grid";

export default function ServicesGridPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-4xl">
        <PageHeader
          title="Services Grid"
          description="A n*n even layout based responsive services grid for listing out your features, deatails of your product services. "
        />
      </div>

      <ServicesGridContent />

      <div className="max-w-4xl mt-10">
        <NextPrev
          prev={{
            title: "Auto-Fill Grid",
            slug: "auto-fill-grid",
            category: "Blocks",
          }}
          next={{
            title: "Bento Grid",
            slug: "bento-grid",
            category: "Blocks",
          }}
        />
      </div>
    </div>
  );
}