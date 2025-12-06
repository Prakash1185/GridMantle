import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/docs/content";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { DemoPreview } from "@/components/docs/demo-preview";
import { ApiTable } from "@/components/docs/api-table";
import { NextPrev } from "@/components/docs/next-prev";
import {
  docPages,
  getNextPage,
  getPageBySlug,
  getPrevPage,
} from "@/lib/docs/page";
import { NormalGrid } from "@/components/normal-grid";
import { AdvancedGrid } from "@/components/advanced-grid";

export function generateStaticParams() {
  return docPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
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

  // Render live preview based on component
  const renderPreview = () => {
    if (slug === "normal-grid") {
      const items = [
        { id: 1, color: "from-blue-500/20 to-blue-500/5" },
        { id: 2, color: "from-purple-500/20 to-purple-500/5" },
        { id: 3, color: "from-pink-500/20 to-pink-500/5" },
        { id: 4, color: "from-green-500/20 to-green-500/5" },
        { id: 5, color: "from-orange-500/20 to-orange-500/5" },
        { id: 6, color: "from-cyan-500/20 to-cyan-500/5" },
      ];

      return (
        <NormalGrid columns={3} gap={16}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.color} p-8 rounded-xl border flex items-center justify-center h-32`}
            >
              <span className="text-xl font-semibold">Item {item.id}</span>
            </div>
          ))}
        </NormalGrid>
      );
    }

    if (slug === "advanced-grid") {
      return (
        <AdvancedGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          gap={16}
          autoRows="minmax(100px, auto)"
        >
          <div className="row-span-2 bg-gradient-to-br from-violet-500/20 to-violet-500/5 p-8 rounded-xl border flex items-center justify-center">
            <span className="text-xl font-semibold">Tall Item</span>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
            <span className="text-xl font-semibold">Item 2</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
            <span className="text-xl font-semibold">Item 3</span>
          </div>
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-green-500/20 to-green-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
            <span className="text-xl font-semibold">Wide Item</span>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
            <span className="text-xl font-semibold">Item 5</span>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 p-8 rounded-xl border flex items-center justify-center h-32">
            <span className="text-xl font-semibold">Item 6</span>
          </div>
        </AdvancedGrid>
      );
    }

    return null;
  };

  return (
    <div className="space-y-10">
      <PageHeader title={content.title} description={content.description} />

      {content.usage && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <CodeBlock code={content.usage} language="tsx" />
        </section>
      )}

      {content.preview && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <DemoPreview code={content.preview.code} preview={renderPreview()} />
        </section>
      )}

      {content.api && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            API Reference
          </h2>
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
