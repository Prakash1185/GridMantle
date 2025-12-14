"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AutoFillGridProps {
  children: React.ReactNode;
  minItemWidth?: number;
  gap?: number;
  className?: string;
  animate?: boolean;
}

export function AutoFillGrid({
  children,
  minItemWidth = 280,
  gap = 6,
  className,
  animate = true,
}: AutoFillGridProps) {
  const Container = animate ? motion.div : "div";

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
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${minItemWidth}px, 100%), 1fr))`,
      }}
      className={cn("w-full will-change", getGapClass(gap), className)}
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
                },
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