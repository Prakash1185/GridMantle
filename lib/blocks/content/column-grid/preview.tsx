"use client";

import Image from "next/image";
import { ColumnGrid } from "@/components/ui/column-grid";
import { motion } from "framer-motion";
import { DEMO_IMAGES } from "./data";
import { useState } from "react";

export function ColumnGridPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ColumnGrid
      columns={{ default: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      gap={4}
      animate={true}
      className="w-full"
    >
      {DEMO_IMAGES.map((src, index) => (
        <motion.div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-muted shadow-lg"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {/* Image Container */}
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={hoveredIndex === index ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                
                <span className="text-sm font-medium">Product {index + 1}</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Corner Badge */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
              New
            </div>
          </div>

          {/* Border Glow Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </ColumnGrid>
  );
}

