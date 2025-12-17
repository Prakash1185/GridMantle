"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicesGridProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  borderClass?: string;
}

export function ServicesGrid({
  children,
  className,
  animate = true,
  borderClass = "",
}: ServicesGridProps) {
  const items = React.Children.toArray(children);

  return (
    <motion.div
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {items.map((child, index) => (
        <GridCell
          key={index}
          index={index}
          total={items.length}
          borderClass={borderClass}
          animate={animate}
        >
          {child}
        </GridCell>
      ))}
    </motion.div>
  );
}

/* ---------------------------------- */

interface GridCellProps {
  children: React.ReactNode;
  index: number;
  total: number;
  borderClass: string;
  animate: boolean;
}

function GridCell({
  children,
  index,
  total,
  borderClass,
  animate,
}: GridCellProps) {
  const cols = { lg: 3, md: 2, sm: 1 };

  // Desktop
  const lgRow = Math.floor(index / cols.lg);
  const lgCol = index % cols.lg;
  const lgTotalRows = Math.ceil(total / cols.lg);

  // Tablet
  const mdRow = Math.floor(index / cols.md);
  const mdCol = index % cols.md;
  const mdTotalRows = Math.ceil(total / cols.md);

  // Border
  const isLastLgCol = lgCol === cols.lg - 1;
  const isLastLgRow = lgRow === lgTotalRows - 1;
  const isLastMdCol = mdCol === cols.md - 1;
  const isLastMdRow = mdRow === mdTotalRows - 1;
  const isLastItem = index === total - 1;

  return (
    <motion.div
      className={cn(
        "relative",
        // Desktop 
        !isLastLgCol && "lg:border-r-2",
        !isLastLgRow && "lg:border-b-2",
        // Tablet
        !isLastMdCol && "md:border-r-2",
        !isLastMdRow && "md:border-b-2",
        // Mobile
        !isLastItem && "max-md:border-b-2",
        // Reset for tablet
        isLastLgCol && !isLastMdCol && "lg:border-r-2-0 md:border-r-2",
        "border-dashed",
        borderClass
      )}
      variants={
        animate
          ? {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }
          : undefined
      }
    >
      {/* Plus sign  */}
      {!isLastLgCol && !isLastLgRow && (
        <div className="absolute -b-2ottom-[5px] -r-2ight-[5px] w-[10px] h-[10px] z-10 hidden lg:block">
          <div className={cn("absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2", borderClass.replace("border-", "bg-"))} />
          <div className={cn("absolute left-1/2 top-0 w-[1px] h-full -translate-x-1/2", borderClass.replace("border-", "bg-"))} />
        </div>
      )}

      {/* Tablet plus signs */}
      {!isLastMdCol && !isLastMdRow && (
        <div className="absolute -b-2ottom-[5px] -r-2ight-[5px] w-[10px] h-[10px] z-10 hidden md:block lg:hidden">
          <div className={cn("absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2", borderClass.replace("border-", "bg-"))} />
          <div className={cn("absolute left-1/2 top-0 w-[1px] h-full -translate-x-1/2", borderClass.replace("border-", "bg-"))} />
        </div>
      )}

      {children}
    </motion.div>
  );
}