"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { codeToHtml } from "shiki";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface CodeHighlightProps {
  code: string;
  language?: string;
}

export function CodeHighlight({ code, language = "tsx" }: CodeHighlightProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState("");
  const { theme, resolvedTheme } = useTheme();
  
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    if (!mounted) return;

    const highlightCode = async () => {
      const currentTheme = theme === "system" ? resolvedTheme : theme;
      const shikiTheme = currentTheme === "dark" ? "aurora-x" : "github-light-high-contrast";

      const highlighted = await codeToHtml(code, {
        lang: language,
        theme: shikiTheme,
      });
      setHtml(highlighted);
    };

    highlightCode();
  }, [code, language, theme, resolvedTheme, mounted]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative rounded-lg border overflow-hidden animate-pulse">
        <div className="h-10 bg-muted/80 border-b" />
        <div className="h-32 bg-muted/50" />
      </div>
    );
  }

  return (
    <div className="relative rounded-lg border overflow-hidden bg-[#ffffff] dark:bg-[#0d1117]">
      <div className="flex items-center justify-end px-4 py-2 border-b bg-muted/80 dark:bg-muted/80">
        <Button
          size="sm"
          variant="ghost"
          className="h-7 w-7 p-0"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </Button>
      </div>
      <div 
        className="overflow-x-auto [&_pre]:m-0 [&_pre]:p-4 [&_pre]:bg-transparent [&_pre]:!bg-transparent"
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}