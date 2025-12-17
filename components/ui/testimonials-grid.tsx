"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiDoubleQuotesL } from "@remixicon/react";

interface TestimonialsGridProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function TestimonialsGrid({
  children,
  speed = 30,
  direction = "left",
  className,
}: TestimonialsGridProps) {

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-r from-background to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-32 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling Container */}
      <div
        className="flex"

      >
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            x: {
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            willChange: "transform",
          }}
         
        >
          {children}
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/* Testimonial Column   */

interface TestimonialColumnProps {
  children: React.ReactNode;
  className?: string;
}

export function TestimonialColumn({
  children,
  className,
}: TestimonialColumnProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:gap-6 shrink-0", className)}>
      {children}
    </div>
  );
}

/* Text Testimonial Card              */

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  variant?: "compact" | "expanded";
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  variant = "compact",
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background p-5 md:p-6",
        "transition-all duration-300 hover:border-border hover:shadow-lg",
        "dark:hover:shadow-neutral-900/30",
        variant === "compact"
          ? "w-[280px] md:w-[320px]"
          : "w-[280px] md:w-[320px]",
        className
      )}
    >
      {/* Quote Icon */}
      <RiDoubleQuotesL className="absolute top-4 right-4 w-8 h-8 text-muted-foreground/10" />

      {/* Quote */}
      <p
        className={cn(
          "text-sm md:text-base text-foreground/90 leading-relaxed mb-5",
          variant === "compact" ? "line-clamp-4" : "line-clamp-6"
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
            className="w-10 h-10 rounded-full object-cover border-2 border-border/50"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-sm font-semibold text-primary">
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

/* Video Testimonial Card */

interface VideoTestimonialCardProps {
  videoSrc: string;
  posterSrc?: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
}

export function VideoTestimonialCard({
  videoSrc,
  posterSrc,
  author,
  role,
  company,
  className,
}: VideoTestimonialCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
      });
    }
  }, []);

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background",
        "transition-all duration-300 hover:border-border hover:shadow-lg",
        "dark:hover:shadow-neutral-900/30",
        "w-[280px] md:w-[320px]",
        className
      )}
    >
      {/* Video Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
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
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Author Info on Video */}
        <div className="absolute bottom-4 left-4 right-4">
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

/* Featured Testimonial Card          */
interface FeaturedTestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  backgroundImage?: string;
  className?: string;
}

export function FeaturedTestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  backgroundImage,
  className,
}: FeaturedTestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/50",
        "transition-all duration-300 hover:border-border hover:shadow-xl",
        "dark:hover:shadow-neutral-900/30",
        "w-[280px] md:w-[320px] min-h-[380px] md:min-h-[420px]",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6">
        {/* Quote Icon */}
        <RiDoubleQuotesL className="w-8 h-8 text-white/30 mb-3" />

        {/* Quote */}
        <p className="text-sm md:text-base text-white/90 leading-relaxed mb-5 line-clamp-4">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold text-white">
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
