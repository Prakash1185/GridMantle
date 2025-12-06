"use client";

import React, { useState } from "react";
import { DocsSidebar } from "@/components/docs/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Container matches navbar width */}
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

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-200"
                onClick={() => setSidebarOpen(false)}
              />
              <aside className="fixed left-0 top-0 bottom-0 w-72 bg-background border-r z-50 lg:hidden animate-in slide-in-from-left duration-300">
                <ScrollArea className="h-full p-6">
                  <DocsSidebar />
                </ScrollArea>
              </aside>
            </>
          )}

          {/* Main Content - Responsive width */}
          <main className="flex-1 py-6 lg:py-8 w-full overflow-x-hidden px-4 lg:px-0">
            <div className="max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Toggle - Bottom Fixed with Animation */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 lg:hidden z-30 h-12 w-12 rounded-xl shadow-lg transition-transform hover:scale-110 active:scale-95"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <PanelLeft className="h-6 w-6" />
      </Button>
    </div>
  );
}