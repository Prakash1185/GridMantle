"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiDoubleQuotesL } from "@remixicon/react";

interface TestimonialsGrid2Props {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  speed?: number;
  className?: string;
}

export function TestimonialsGrid2({
  children,
  columns = 4,
  speed = 25,
  className,
}: TestimonialsGrid2Props) {
  const childrenArray = React.Children.toArray(children);

  const columnArrays: React.ReactNode[][] = Array.from(
    { length: columns },
    () => []
  );

  childrenArray.forEach((child, index) => {
    columnArrays[index % columns].push(child);
  });

  const columnClasses = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  const getVisibilityClass = (columnIndex: number): string => {
    if (columnIndex % 2 === 1) {
      return "hidden lg:block";
    }
    return "";
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Top Fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-20 md:h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-20 md:h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Columns Container */}
      <div
        className={cn(
          "grid gap-4 md:gap-6 h-[600px] md:h-[700px]",
          columnClasses[columns]
        )}
      >
        {columnArrays.map((columnChildren, columnIndex) => (
          <TestimonialColumn2
            key={columnIndex}
            speed={speed}
            direction={columnIndex % 2 === 0 ? "up" : "down"}
            className={getVisibilityClass(columnIndex)}
          >
            {columnChildren}
          </TestimonialColumn2>
        ))}
      </div>
    </div>
  );
}

/* Testimonial Column 2 */

interface TestimonialColumn2Props {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export function TestimonialColumn2({
  children,
  speed = 25,
  direction = "up",
  className,
}: TestimonialColumn2Props) {
  return (
    <div className={cn("relative h-full overflow-hidden", className)}>
      <motion.div
        className="flex flex-col gap-4 md:gap-6"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          willChange: "transform",
        }}
      >
        {/* Original + Duplicate for loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}


/* Review Card  */

interface ReviewCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ReviewCard({
  quote,
  author,
  role,
  company,
  avatar,
  size = "md",
  className,
}: ReviewCardProps) {
  const sizeClasses = {
    sm: "p-4 md:p-5",
    md: "p-5 md:p-6",
    lg: "p-6 md:p-8",
  };

  const quoteClasses = {
    sm: "text-sm line-clamp-3",
    md: "text-sm md:text-base line-clamp-4",
    lg: "text-base md:text-lg line-clamp-6",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background",
        "transition-all duration-300",
        "dark:bg-background",
        sizeClasses[size],
        className
      )}
    >
      {/* Quote Icon */}
      <RiDoubleQuotesL className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-muted-foreground/10" />

      {/* Quote */}
      <p
        className={cn(
          "text-foreground/90 leading-relaxed mb-4 md:mb-5",
          quoteClasses[size]
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-border/50 hidden sm:block"
          />
        ) : (
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-sm font-semibold text-primary">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">
            {author}
          </span>
          {(role || company) && (
            <span className="text-xs text-muted-foreground">
              {role}
              {role && company && " · "}
              {company}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* Video Review Card  */

interface VideoReviewCardProps {
  videoSrc: string;
  posterSrc?: string;
  author: string;
  role?: string;
  company?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function VideoReviewCard({
  videoSrc,
  posterSrc,
  author,
  role,
  company,
  size = "md",
  className,
}: VideoReviewCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    sm: "aspect-[4/3]",
    md: "aspect-[4/5]",
    lg: "aspect-[3/4]",
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background",
        "transition-all duration-300",
        "dark:bg-background",
        className
      )}
    >
      {/* Video Container */}
      <div className={cn("relative overflow-hidden bg-muted", aspectClasses[size])}>
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loop
          muted
          playsInline
          autoPlay
          onLoadedData={() => setIsLoaded(true)}
        />

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Author Info on Video */}
        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
          <span className="text-sm font-semibold text-white">{author}</span>
          {(role || company) && (
            <p className="text-xs text-white/70 mt-0.5">
              {role}
              {role && company && " · "}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* Image Review Card   */

interface ImageReviewCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  backgroundImage: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ImageReviewCard({
  quote,
  author,
  role,
  company,
  avatar,
  backgroundImage,
  size = "md",
  className,
}: ImageReviewCardProps) {
  const heightClasses = {
    sm: "min-h-[280px] md:min-h-[320px]",
    md: "min-h-[320px] md:min-h-[380px]",
    lg: "min-h-[380px] md:min-h-[450px]",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/50",
        "transition-all duration-300",
        heightClasses[size],
        className
      )}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-4 md:p-6">
        {/* Quote Icon */}
        <RiDoubleQuotesL className="w-6 h-6 md:w-8 md:h-8 text-white/30 mb-2 md:mb-3" />

        {/* Quote */}
        <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 md:mb-5 line-clamp-3">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/30 hidden sm:block"
            />
          ) : (
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold text-white">
              {author.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">{author}</span>
            {(role || company) && (
              <span className="text-xs text-white/60">
                {role}
                {role && company && " · "}
                {company}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}