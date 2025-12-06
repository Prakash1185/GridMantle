"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";

interface DemoPreviewProps {
  code: string;
  preview?: React.ReactNode;
}

export function DemoPreview({ code, preview }: DemoPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid w-full max-w-[400px] grid-cols-2">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-4">
        <div className="border rounded-lg p-6 sm:p-8 bg-muted/30">
          <div className="flex items-center justify-center min-h-[300px]">
            {preview || (
              <p className="text-sm text-muted-foreground">
                Component preview will appear here
              </p>
            )}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        <CodeBlock code={code} language="tsx" />
      </TabsContent>
    </Tabs>
  );
}