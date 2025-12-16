"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PinterestGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: number;
  className?: string;
  animate?: boolean;
}

export function PinterestGrid({
  children,
  columns = 4,
  gap = 16,
  className,
  animate = true,
}: PinterestGridProps) {
  const Container = animate ? motion.div : "div";

  const columnClasses = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
    5: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5",
    6: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-6",
  };

  return (
    <Container
      className={cn(columnClasses[columns], className)}
      style={{ columnGap: `${gap}px` }}
      {...(animate && {
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.06,
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

interface PinterestCardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
  className?: string;
}

export function PinterestCard({
  src,
  alt,
  title,
  description,
  href = "#",
  className,
}: PinterestCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative mb-4 break-inside-avoid overflow-hidden rounded-xl",
        "bg-muted",
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
      <a href={href} className="block">
        {/* Image Container */}
        <div className="relative w-full overflow-hidden">
          {/* Using native img for dynamic aspect ratios */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={cn(
              "w-full h-auto object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Loading Skeleton */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 min-h-[200px] animate-pulse bg-muted" />
          )}

          {/* Error State */}
          {hasError && (
            <div className="flex items-center justify-center min-h-[200px] bg-muted text-muted-foreground text-sm">
              Failed to load image
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 dark:group-hover:bg-black/40" />

          {/* Content Overlay */}
          {(title || description) && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {title && (
                <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-xs text-white/80 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
}