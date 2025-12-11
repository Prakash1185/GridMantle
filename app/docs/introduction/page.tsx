import { PageHeader } from "@/components/docs/page-header";
import { NextPrev } from "@/components/docs/next-prev";
import IntroductionContent from "@/lib/docs/content/introduction/introduction";

export default function IntroductionPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Introduction"
        description="Welcome to GridMantle - A modern grid layout library for React"
      />

      <IntroductionContent />

      <NextPrev
        prev={null}
        next={{ title: "Installation", slug: "installation", category: "Getting Started" }}
      />
    </div>
  );
}