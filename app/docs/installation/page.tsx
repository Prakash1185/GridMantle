import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import InstallationContent from "@/lib/docs/content/installation/installation";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Installation"
        description="Learn how to set up your project and start using GridMantle blocks."
      />

      <InstallationContent />

      <div className=" ">
        <NextPrev
          prev={{
            title: "Introduction",
            slug: "introduction",
            category: "Getting Started",
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
