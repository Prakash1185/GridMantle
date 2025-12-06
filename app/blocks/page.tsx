"use client";

import { AdvancedGrid } from "@/components/advanced-grid";
import { NormalGrid } from "@/components/normal-grid";
import Link from "next/link";

export default function BlocksPage() {
  return (
    <div className="min-h-screen py-12">
      {/* Container matches navbar width */}
      <div className="w-[calc(100%-2rem)] lg:w-[calc(100%-16rem)] mx-auto px-4 lg:px-0">
        <div className="max-w-6xl space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Grid Blocks</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Live preview of all grid components. Click any grid to view documentation.
            </p>
          </div>

          {/* Grid Blocks in 2 Columns - Responsive */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Normal Grid Block */}
            <Link
              href="/docs/normal-grid"
              className="group space-y-4 border rounded-xl p-6 hover:border-primary transition-all"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Normal Grid
                </h2>
                <p className="text-sm text-muted-foreground">
                  Simple and flexible grid layout system
                </p>
              </div>

              {/* Live Preview */}
              <div className="border rounded-lg p-4 md:p-6 bg-muted/30 h-80 overflow-hidden">
                <NormalGrid columns={3} gap={12}>
                  {Array.from({ length: 6 }).map((_, i) => {
                    const colors = [
                      "from-blue-500/30 to-blue-500/10",
                      "from-purple-500/30 to-purple-500/10",
                      "from-pink-500/30 to-pink-500/10",
                      "from-green-500/30 to-green-500/10",
                      "from-orange-500/30 to-orange-500/10",
                      "from-cyan-500/30 to-cyan-500/10",
                    ];
                    return (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${colors[i]} p-4 md:p-6 rounded-lg border flex items-center justify-center h-16 md:h-20`}
                      >
                        <span className="text-xs md:text-sm font-medium">{i + 1}</span>
                      </div>
                    );
                  })}
                </NormalGrid>
              </div>
            </Link>

            {/* Advanced Grid Block */}
            <Link
              href="/docs/advanced-grid"
              className="group space-y-4 border rounded-xl p-6 hover:border-primary transition-all"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Advanced Grid
                </h2>
                <p className="text-sm text-muted-foreground">
                  Responsive grid with breakpoint controls
                </p>
              </div>

              {/* Live Preview */}
              <div className="border rounded-lg p-4 md:p-6 bg-muted/30 h-80 overflow-hidden">
                <AdvancedGrid 
                  columns={{ sm: 1, md: 2, lg: 3 }} 
                  gap={12}
                  autoRows="minmax(80px, auto)"
                >
                  {Array.from({ length: 6 }).map((_, i) => {
                    const colors = [
                      "from-violet-500/30 to-violet-500/10",
                      "from-blue-500/30 to-blue-500/10",
                      "from-cyan-500/30 to-cyan-500/10",
                      "from-green-500/30 to-green-500/10",
                      "from-orange-500/30 to-orange-500/10",
                      "from-pink-500/30 to-pink-500/10",
                    ];
                    const isFirst = i === 0;
                    const isWide = i === 3;
                    
                    return (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${colors[i]} p-4 md:p-6 rounded-lg border flex items-center justify-center ${
                          isFirst ? "row-span-2" : ""
                        } ${isWide ? "col-span-1 md:col-span-2" : ""}`}
                      >
                        <span className="text-xs md:text-sm font-medium">{i + 1}</span>
                      </div>
                    );
                  })}
                </AdvancedGrid>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}