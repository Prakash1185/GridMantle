"use client";

import { PinterestGrid, PinterestCard } from "@/components/ui/pinterest-grid";

const images = [
  {
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    alt: "Sneakers product",
    title: "High Top Sneakers",
    description: "Minimal sneaker product photography",
  },
  {
    src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    alt: "Running shoes",
    title: "Sport Sneakers",
    description: "Athletic footwear product shot",
  },
  {
    src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    alt: "Casual sneakers",
    title: "Everyday Sneakers",
    description: "Casual lifestyle footwear",
  },
  {
    src: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    alt: "White sneakers",
    title: "Clean Whites",
    description: "Studio sneaker photography",
  },
  {
    src: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
    alt: "Sneakers top view",
    title: "Top View Kicks",
    description: "Flat lay sneaker shot",
  },
  {
    src: "https://images.unsplash.com/photo-1584735175097-719d848f8449",
    alt: "Designer sneakers",
    title: "Designer Drop",
    description: "Premium sneaker photography",
  },
  {
    src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    alt: "Sneakers lifestyle",
    title: "Street Kicks",
    description: "Urban sneaker lifestyle shot",
  },
  {
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    alt: "Classic sneakers",
    title: "Classic Style",
    description: "Timeless sneaker design",
  },
  {
    src: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    alt: "Sneakers close up",
    title: "Detail Shot",
    description: "Close-up sneaker texture",
  },
  {
    src: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    alt: "Modern sneakers",
    title: "Modern Fit",
    description: "Contemporary sneaker design",
  },
  {
    src: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
    alt: "Sneakers outdoor",
    title: "Outdoor Wear",
    description: "Sneakers in outdoor setup",
  },
  {
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    alt: "Sneakers collection",
    title: "Sneaker Wall",
    description: "Sneaker collection display",
  },
];

export function PinterestGridDemo() {
  return (
    <PinterestGrid columns={4} gap={16}>
      {images.map((image, index) => (
        <PinterestCard
          key={index}
          src={image.src}
          alt={image.alt}
          title={image.title}
          description={image.description}
        />
      ))}
    </PinterestGrid>
  );
}