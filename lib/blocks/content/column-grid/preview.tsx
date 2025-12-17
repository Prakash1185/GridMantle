"use client";

import Image from "next/image";
import { ColumnGrid } from "@/components/ui/column-grid";
import { motion } from "framer-motion";

import { useState } from "react";

export function ColumnGridPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=700&fit=crop",
  "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=800&h=650&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=550&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=700&fit=crop",
];

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

          

          

          {/* Border Glow Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </ColumnGrid>
  );
}

