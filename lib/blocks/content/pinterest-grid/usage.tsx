import { PinterestGrid, PinterestCard } from "@/components/ui/pinterest-grid";

const images = [
  {
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    alt: "Sneakers",
    title: "High Top Sneakers",
    description: "Minimal sneaker photography",
  },
  {
    src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    alt: "Running shoes",
    title: "Sport Sneakers",
  },
];

export default function MyPage() {
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