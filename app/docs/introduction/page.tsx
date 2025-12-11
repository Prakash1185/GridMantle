import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import IntroductionContent from "@/lib/docs/content/introduction/introduction";

export default function IntroductionPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Introduction"
        description="GridMantle is a modern, lightweight set of grid layouts and examples for React and Next.js"
      />

      <IntroductionContent />

      <NextPrev
        prev={null}
        next={{ title: "Installation", slug: "installation", category: "Getting Started" }}
      />
    </div>
  );
}