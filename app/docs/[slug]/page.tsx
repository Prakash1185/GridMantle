import { notFound } from "next/navigation";
import { getPageBySlug, getNextPage, getPrevPage, docPages } from "@/lib/docs/page";
import { getContentBySlug } from "@/lib/docs/content";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { DemoPreview } from "@/components/docs/demo-preview";
import { ApiTable } from "@/components/docs/api-table";
import { NextPrev } from "@/components/docs/next-prev";

export function generateStaticParams() {
  return docPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function DocPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const content = getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  const nextPage = getNextPage(slug);
  const prevPage = getPrevPage(slug);

  return (
    <div className="space-y-10">
      <PageHeader title={content.title} description={content.description} />

      {content.installCommand && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <CodeBlock code={content.installCommand} language="bash" />
        </section>
      )}

      {content.usage && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <CodeBlock code={content.usage} language="tsx" />
        </section>
      )}

      {content.preview && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <DemoPreview code={content.preview.code} />
        </section>
      )}

      {content.api && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
          <ApiTable props={content.api.props} />
        </section>
      )}

      {content.examples && content.examples.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
          {content.examples.map((example, index) => (
            <div key={index} className="space-y-3">
              <div>
                <h3 className="text-xl font-medium mb-1">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
              <CodeBlock code={example.code} language="tsx" />
            </div>
          ))}
        </section>
      )}

      <NextPrev prev={prevPage} next={nextPage} />
    </div>
  );
}