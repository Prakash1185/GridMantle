"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NormalGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export function NormalGrid({
  children,
  columns = 3,
  gap = 16,
  className,
}: NormalGridProps) {
  return (
    <div
      className={cn("grid w-full", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}