"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColumnGridProps {
  children: React.ReactNode;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
  gap?: number;
  className?: string;
  animate?: boolean;
}

export function ColumnGrid({
  children,
  columns = { default: 1, sm: 2, md: 2, lg: 3, xl: 4 },
  gap = 6,
  className,
  animate = true,
}: ColumnGridProps) {
  const Container = animate ? motion.div : "div";

  // Map column numbers to Tailwind classes (must be complete class names)
  const getColumnClass = (breakpoint: string, cols?: number) => {
    if (!cols) return "";
    
    const classMap: Record<string, Record<number, string>> = {
      default: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      },
      sm: {
        1: "sm:grid-cols-1",
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-4",
        5: "sm:grid-cols-5",
        6: "sm:grid-cols-6",
      },
      md: {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-6",
      },
      lg: {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6",
      },
      xl: {
        1: "xl:grid-cols-1",
        2: "xl:grid-cols-2",
        3: "xl:grid-cols-3",
        4: "xl:grid-cols-4",
        5: "xl:grid-cols-5",
        6: "xl:grid-cols-6",
      },
      "2xl": {
        1: "2xl:grid-cols-1",
        2: "2xl:grid-cols-2",
        3: "2xl:grid-cols-3",
        4: "2xl:grid-cols-4",
        5: "2xl:grid-cols-5",
        6: "2xl:grid-cols-6",
      },
    };

    return classMap[breakpoint]?.[cols] || "";
  };

  // Map gap values to Tailwind classes
  const getGapClass = (gapValue: number) => {
    const gapMap: Record<number, string> = {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
    };
    return gapMap[gapValue] || "gap-6";
  };

  return (
    <Container
      className={cn(
        "grid w-full",
        getColumnClass("default", columns.default),
        getColumnClass("sm", columns.sm),
        getColumnClass("md", columns.md),
        getColumnClass("lg", columns.lg),
        getColumnClass("xl", columns.xl),
        getColumnClass("2xl", columns["2xl"]),
        getGapClass(gap),
        className
      )}
      {...(animate && {
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.1,
            },
          },
        },
      })}
    >
      {React.Children.map(children, (child, index) =>
        animate ? (
          <motion.div
            key={index}
            variants={{
              hidden: { 
                opacity: 0, 
                scale: 0.9,
                y: 20,
              },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5,
                }
              },
            }}
          >
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </Container>
  );
}