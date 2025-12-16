"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiArrowRightLine } from "@remixicon/react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function BentoGrid({
  children,
  className,
  animate = true,
}: BentoGridProps) {
  const Container = animate ? motion.div : "div";

  return (
    <Container
      className={cn(
        "grid gap-4",
        "grid-cols-1",
        "md:grid-cols-2",
        "lg:grid-cols-3 lg:grid-rows-2",
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

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  cta?: string;
  pattern?: "dots" | "grid" | "lines" | "cross" | "none";
  className?: string;
}

export function BentoCard({
  title,
  description,
  icon,
  href = "#",
  cta = "Learn more",
  pattern = "none",
  className,
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 min-h-[280px]",
        "transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {/* Pattern Background - Always visible */}
      <PatternBackground pattern={pattern} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted text-foreground">
          {icon}
        </div>

        {/* Text Content */}
        <div className="mt-auto">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* CTA */}
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group/link"
          >
            {cta}
            <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] transition-colors duration-300 group-hover:bg-accent/30" />
    </motion.div>
  );
}

/* ---------------------------------- */
/* Pattern Backgrounds                */
/* ---------------------------------- */

function PatternBackground({ pattern }: { pattern: string }) {
  if (pattern === "none") return null;

  const baseClass = "absolute inset-0 z-0";

  switch (pattern) {
    case "dots":
      return (
        <div
          className={cn(baseClass, "opacity-30 dark:opacity-10")}
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
          }}
        />
      );

    case "grid":
      return (
        <div
          className={cn(baseClass, "opacity-20 dark:opacity-5")}
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      );

    case "lines":
      return (
        <div
          className={cn(baseClass, "opacity-20 dark:opacity-5")}
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 8px,
              currentColor 8px,
              currentColor 9px
            )`,
          }}
        />
      );

    case "cross":
      return (
        <div className={cn(baseClass, "opacity-20 dark:opacity-5")}>
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="wave-pattern"
                x="0"
                y="0"
                width="40"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 10 Q10 0, 20 10 T40 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}