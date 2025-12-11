import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { DemoPreview } from "@/components/docs/demo-preview";
import { ApiTable } from "@/components/docs/api-table";
import { NextPrev } from "@/components/docs/next-prev";
import { NormalGrid } from "@/components/normal-grid";

export default function NormalGridPage() {
  const items = [
    { id: 1, color: "from-blue-500/20 to-blue-500/5" },
    { id: 2, color: "from-purple-500/20 to-purple-500/5" },
    { id: 3, color: "from-pink-500/20 to-pink-500/5" },
    { id: 4, color: "from-green-500/20 to-green-500/5" },
    { id: 5, color: "from-orange-500/20 to-orange-500/5" },
    { id: 6, color: "from-cyan-500/20 to-cyan-500/5" },
  ];

  const previewComponent = (
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

  const usageCode = `import { NormalGrid } from "@/components/normal-grid";

export default function MyComponent() {
  return (
    <NormalGrid columns={3} gap={16}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </NormalGrid>
  );
}`;

  const previewCode = `<NormalGrid columns={3} gap={16}>
  {items.map((item) => (
    <div key={item.id} className="p-8 rounded-xl border">
      Item {item.id}
    </div>
  ))}
</NormalGrid>`;

  const apiProps = [
    {
      name: "columns",
      type: "number",
      default: "3",
      description: "Number of columns in the grid",
    },
    {
      name: "gap",
      type: "number",
      default: "16",
      description: "Gap between grid items in pixels",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "-",
      description: "Grid items to render",
    },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        title="Normal Grid"
        description="A simple and flexible grid component for creating layouts"
      />

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={usageCode} language="tsx" />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
        <DemoPreview code={previewCode} preview={previewComponent} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <ApiTable props={apiProps} />
      </section>

      <NextPrev
        prev={{ title: "Quick Start", slug: "quick-start" }}
        next={{ title: "Advanced Grid", slug: "advanced-grid" }}
      />
    </div>
  );
}