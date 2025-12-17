import { CodeBlock } from "@/components/docs/code-block";
import Link from "next/link";

const InstallationContent = () => {
  const createNextApp = `npx create-next-app@latest`;

  const installShadcn = `npx shadcn@latest init`;

  const blocksAdd = `npx shadcn@latest add @gridmantle/column-grid`;

  const importExample = `import { ColumnGrid } from "@/components/ui/column-grid";
  
  export default function MyPage() {
    return (
      <ColumnGrid 
        columns={{ default: 1, sm: 2, md: 3, lg: 4 }} 
        gap={6}
        animate={true}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </ColumnGrid>
    );
  }`;

  return (
    <>
      <section className="">
        <p className="text-muted-foreground md:leading-7">
          GridMantle follows the same setup flow as shadcn/ui because the
          components and blocks integrate directly with the shadcn CLI.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tighter sm:tracking-tight">
          <span className="px-2 py-0.5 md:px-3 md:py-1.5 border border-dashed mr-2 bg-primary/15 rounded-md text-primary">
            1
          </span>
          Create a Next.js Project
        </h2>
        <p className="text-muted-foreground md:leading-7">
          If you are starting fresh, create a Next.js app.
        </p>
        <CodeBlock code={createNextApp} language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tighter sm:tracking-tight">
          <span className="px-2 py-0.5 md:px-3 md:py-1.5 border border-dashed mr-2 bg-primary/15 rounded-md text-primary">
            2
          </span>
          Initialize Shadcn UI
        </h2>
        <p className="text-muted-foreground md:leading-7">
          GridMantle uses shadcn/ui structure for components and blocks.
        </p>
        <CodeBlock code={installShadcn} language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tighter sm:tracking-tight">
          <span className="px-2 py-0.5 md:px-3 md:py-1.5 border border-dashed mr-2 bg-primary/15 rounded-md text-primary">
            3
          </span>
          Add GridMantle Block
        </h2>
        <p className="text-muted-foreground md:leading-7">
          Now you can GridMantle blocks within your projects.
        </p>
        <CodeBlock code={blocksAdd} language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tighter sm:tracking-tight">
          <span className="px-2 py-0.5 md:px-3 md:py-1.5 border border-dashed mr-2 bg-primary/15 rounded-md text-primary">
            4
          </span>
          Import and use the components
        </h2>
        <p className="text-muted-foreground md:leading-7">
          After adding a block, import it into your project.
        </p>
        <CodeBlock code={importExample} language="tsx" />
      </section>
    </>
  );
};

export default InstallationContent;
