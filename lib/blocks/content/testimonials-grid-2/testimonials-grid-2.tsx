"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/docs/code-block";
import { DemoPreview } from "@/components/demos/demo-preview";
import { TestimonialsGrid2Demo } from "./testimonials-grid-2-demo";
import { useComponentSource } from "@/lib/hooks/use-component-source";
import {
  testimonialsGrid2Props,
  reviewCardProps,
  videoReviewCardProps,
  imageReviewCardProps,
} from "./props-data";
import { Terminal, FileCode } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PropsRow = {
  prop: string;
  default: string;
  description: string;
};

interface PropsTableProps {
  title: string;
  data: PropsRow[];
}

function PropsTable({ title, data }: PropsTableProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Default</TableHead>
              <TableHead className="font-semibold">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.prop} className="hover:bg-muted/30">
                <TableCell className="font-mono text-sm font-medium">
                  {row.prop}
                </TableCell>
                <TableCell>
                  <code className="text-xs px-2 py-0.5 rounded bg-muted">
                    {row.default}
                  </code>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const TestimonialsGrid2Content = () => {
  const [installTab, setInstallTab] = useState<"cli" | "manual">("cli");

  const { code: componentCode, loading: componentLoading } =
    useComponentSource("components/ui/testimonials-grid-2.tsx");

  const { code: previewCode, loading: previewLoading } = useComponentSource(
    "lib/blocks/content/testimonials-grid-2/testimonials-grid-2-demo.tsx"
  );

  const { code: usageCode, loading: usageLoading } = useComponentSource(
    "lib/blocks/content/testimonials-grid-2/usage.tsx"
  );

  const cliCommand = `npx shadcn@latest add @gridmantle/testimonials-grid-2`;
  const installDeps = `npm install framer-motion @remixicon/react`;

  return (
    <div className="space-y-12">
      {/* Preview Section */}
      <section className="w-full">
        {previewLoading ? (
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Loading preview...</span>
            </div>
          </div>
        ) : (
          <DemoPreview
            preview={
              <div className="w-full overflow-hidden">
                <TestimonialsGrid2Demo />
              </div>
            }
            code={previewCode}
          />
        )}
      </section>

      {/* Installation Section */}
      <section className="space-y-4 max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>

        <div className="flex items-center gap-2 border rounded-lg p-1 w-fit">
          <button
            onClick={() => setInstallTab("cli")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              installTab === "cli"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Terminal className="h-4 w-4" />
            CLI
          </button>
          <button
            onClick={() => setInstallTab("manual")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              installTab === "manual"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <FileCode className="h-4 w-4" />
            Manual
          </button>
        </div>

        {installTab === "cli" ? (
          <CodeBlock code={cliCommand} language="bash" />
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">1. Install dependencies</p>
              <CodeBlock code={installDeps} language="bash" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">2. Copy component code</p>
              {componentLoading ? (
                <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm">Loading component source...</span>
                  </div>
                </div>
              ) : (
                <>
                  <CodeBlock code={componentCode} language="tsx" />
                  <p className="text-xs text-muted-foreground">
                    Save as{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted">
                      components/ui/testimonials-grid-2.tsx
                    </code>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="space-y-4 max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        {usageLoading ? (
          <div className="border rounded-lg p-8 flex items-center justify-center bg-muted/30">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">Loading usage example...</span>
            </div>
          </div>
        ) : (
          <CodeBlock code={usageCode} language="tsx" />
        )}
      </section>

      {/* Props Tables */}
      <section className="space-y-8 max-w-4xl">
        <PropsTable title="TestimonialsGrid2 Props" data={testimonialsGrid2Props} />
        <PropsTable title="ReviewCard Props" data={reviewCardProps} />
        <PropsTable title="VideoReviewCard Props" data={videoReviewCardProps} />
        <PropsTable title="ImageReviewCard Props" data={imageReviewCardProps} />
      </section>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground border-t pt-6 max-w-4xl">
        Found an issue? Open an issue on{" "}
        <a
          href="https://github.com/yourusername/gridmantle/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default TestimonialsGrid2Content;