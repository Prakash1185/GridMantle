"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AdvancedGridProps {
  children: React.ReactNode;
  columns?: { sm?: number; md?: number; lg?: number };
  gap?: number;
  autoRows?: string;
  className?: string;
}

export function AdvancedGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 16,
  autoRows = "auto",
  className,
}: AdvancedGridProps) {
  const getGridCols = () => {
    const classes = [];
    if (columns.sm) classes.push(`grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    return classes.join(" ");
  };

  return (
    <div
      className={cn("grid w-full", getGridCols(), className)}
      style={{
        gap: `${gap}px`,
        gridAutoRows: autoRows,
        gridAutoFlow: "dense",
      }}
    >
      {children}
    </div>
  );
}