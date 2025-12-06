"use client";

import { CodeHighlight } from "@/components/code-highlighter";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "tsx", title }: CodeBlockProps) {
  return (
    <div className="space-y-2 w-full overflow-hidden">
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
      )}
      <div className="overflow-x-auto">
        <CodeHighlight code={code} language={language} />
      </div>
    </div>
  );
}