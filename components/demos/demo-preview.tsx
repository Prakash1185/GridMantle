"use client";

import { useState } from "react";
import { Eye, Code2 } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";

interface DemoPreviewProps {
  preview: React.ReactNode;
  code: string;
  language?: string;
}

export function DemoPreview({ preview, code, language = "tsx" }: DemoPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 border rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            activeTab === "preview"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <Eye className="h-4 w-4" />
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            activeTab === "code"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <Code2 className="h-4 w-4" />
          Code
        </button>
      </div>

      {activeTab === "preview" ? (
        <div className="border rounded-xl p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-muted/30 to-muted/10 max-h-[600px] overflow-y-auto">
          {preview}
        </div>
      ) : (
        <CodeBlock code={code} language={language} />
      )}
    </div>
  );
}