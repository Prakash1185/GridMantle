import { notFound } from "next/navigation";
import { getBlockBySlug, blocks } from "@/lib/blocks/blocks";
import { getBlockContentBySlug } from "@/lib/blocks/content";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { DemoPreview } from "@/components/docs/demo-preview";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blocks.map((block) => ({
    slug: block.slug,
  }));
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const block = getBlockBySlug(slug);

  if (!block) {
    notFound();
  }

  const content = getBlockContentBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <PageHeader title={content.name} description={content.description} />

        {/* Dependencies */}
        {content.dependencies && content.dependencies.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Dependencies</h2>
            <div className="flex flex-wrap gap-2">
              {content.dependencies.map((dep) => (
                <Badge key={dep} variant="secondary">
                  {dep}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Installation */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <CodeBlock code={content.installCommand} language="bash" />
        </section>

        {/* Manual Installation */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Manual Installation
          </h2>
          <p className="text-sm text-muted-foreground">
            Copy and paste the following code into{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
              components/ui/{content.component}
            </code>
          </p>
          <CodeBlock code={content.code} language="tsx" />
        </section>

        {/* Usage */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <CodeBlock code={content.usage} language="tsx" />
        </section>

        {/* Preview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <DemoPreview code={content.usage} />
        </section>
      </div>
    </div>
  );
}