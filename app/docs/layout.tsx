import React from "react";
import { DocsSidebar } from "@/components/docs/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 py-6">
        {/* Sidebar - Hidden on mobile, visible on md+ */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebar />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:py-8">
          <div className="mx-auto w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}