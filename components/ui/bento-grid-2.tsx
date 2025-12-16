"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiArrowRightLine } from "@remixicon/react";

interface BentoGrid2Props {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function BentoGrid2({
  children,
  className,
  animate = true,
}: BentoGrid2Props) {
  const Container = animate ? motion.div : "div";

  return (
    <Container
      className={cn(
        "grid gap-4",
        "grid-cols-1",
        // Fixed: 3 columns, 3 rows (not 4!) to avoid extra space
        "lg:grid-cols-3 lg:grid-rows-3",
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
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        },
      })}
    >
      {children}
    </Container>
  );
}

interface BentoCard2Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  cta?: string;
  pattern?: "dots" | "grid" | "lines" | "none";
  className?: string;
}

export function BentoCard2({
  title,
  description,
  icon,
  href = "#",
  cta = "Learn more",
  pattern = "dots",
  className,
}: BentoCard2Props) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background p-6",
        "transition-all duration-300 ease-out",
        "hover:border-foreground/20 hover:shadow-lg",
        // Dark mode shadow adjustment
        "dark:hover:shadow-neutral-900/50",
        className
      )}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {/* Pattern Background - Very subtle */}
      <PatternBackground pattern={pattern} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
          {icon}
        </div>

        {/* Text Content */}
        <div className="mt-auto space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* CTA */}
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground group/link pt-2"
          >
            {cta}
            <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Hover Overlay - Light/Dark compatible */}
      <div className="pointer-events-none absolute inset-0 z-[1] transition-colors duration-300 group-hover:bg-foreground/[0.02] dark:group-hover:bg-foreground/[0.03]" />
    </motion.div>
  );
}

/* ---------------------------------- */
/* Pattern Backgrounds - Very Subtle  */
/* ---------------------------------- */

function PatternBackground({ pattern }: { pattern: string }) {
  if (pattern === "none") return null;

  const baseClass = "absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]";

  switch (pattern) {
    case "dots":
      return (
        <div
          className={baseClass}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      );

    case "grid":
      return (
        <div
          className={baseClass}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
      );

    case "lines":
      return (
        <div
          className={baseClass}
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 6px,
              currentColor 6px,
              currentColor 7px
            )`,
          }}
        />
      );

    default:
      return null;
  }
}