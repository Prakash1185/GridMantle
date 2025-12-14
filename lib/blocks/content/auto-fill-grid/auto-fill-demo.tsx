"use client";

import { AutoFillGrid } from "@/components/ui/auto-fill-grid";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AutoFillGridDemo() {
  return (
    <AutoFillGrid
      minItemWidth={260}
      gap={6}
      animate
      className="w-full"
    >
      <Card title="Stats">
        <div className="h-3 w-20 rounded bg-muted" />
      </Card>

      <Card title="Overview">
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-3/4 rounded bg-muted" />
      </Card>

      <Card title="Actions">
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm">Save</Button>
        </div>
      </Card>

      <Card title="Details">
        <div className="h-3 w-4/5 rounded bg-muted" />
        <div className="flex gap-2 pt-3">
          <Badge variant="secondary">Grid</Badge>
          <Badge variant="secondary">Auto-Fill</Badge>
        </div>
      </Card>

      <Card title="Meta">
        <div className="h-20 w-24 rounded bg-muted" />
      </Card>

      <Card title="Settings">
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-2/3 rounded bg-muted" />
        <div className="h-3 w-1/2 rounded bg-muted" />
      </Card>

      <Card title="Publish">
        <Button size="sm" className="w-full">
          Publish
        </Button>
      </Card>

       <Card title="Text">
        <div className="h-10 w-24 rounded bg-muted" />
      </Card>

      <Card title="Details">
        <div className="h-3 w-4/5 rounded bg-muted" />
        <div className="flex gap-2 pt-3">
          <Badge variant="secondary">Grid</Badge>
          <Badge variant="secondary">Auto-Fill</Badge>
        </div>
      </Card>
    </AutoFillGrid>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="
        rounded-xl
        border border-border
        bg-card
        p-4
        transition-shadow
        hover:shadow-sm
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium">{title}</span>
      </div>

      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}
