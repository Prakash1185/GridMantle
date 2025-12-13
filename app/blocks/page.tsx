"use client";

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
              Live preview of all grid components. Click any grid to view
              documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
