"use client";

import { useState } from "react";
import { CodeHighlight } from "@/components/code-highlighter";
import { cn } from "@/lib/utils";

interface DemoPreviewProps {
  code: string;
  preview?: React.ReactNode;
}

export function DemoPreview({ code, preview }: DemoPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full space-y-4 overflow-hidden">
      {/* Custom Tab Switcher */}
      <div className="flex items-center gap-2 border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-all relative whitespace-nowrap",
            activeTab === "preview"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Preview
          {activeTab === "preview" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-all relative whitespace-nowrap",
            activeTab === "code"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Code
          {activeTab === "code" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "preview" ? (
        <div className="border rounded-lg p-4 md:p-8 bg-muted/30 min-h-[400px] overflow-x-auto">
          <div className="flex items-center justify-center min-w-fit">
            {preview || (
              <p className="text-sm text-muted-foreground">
                Component preview will appear here
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <CodeHighlight code={code} language="tsx" />
        </div>
      )}
    </div>
  );
}