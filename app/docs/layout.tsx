"use client";

import { DocsSidebar } from "@/components/docs/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="w-[calc(100%-2rem)] lg:w-[calc(100%-16rem)] mx-auto px-0">
        <div className="flex gap-6 lg:gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-20 h-[calc(100vh-5rem)]">
              <ScrollArea className="h-full py-6 pr-6">
                <DocsSidebar />
              </ScrollArea>
            </div>
          </aside>

          {/* Main Content*/}
          <main className="flex-1 py-6 lg:py-8 w-full overflow-x-hidden px-4 lg:px-0">
            <div className="max-w-4xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
