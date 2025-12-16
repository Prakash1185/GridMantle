import {
  TestimonialsGrid2,
  ReviewCard,
  VideoReviewCard,
  ImageReviewCard,
} from "@/components/ui/testimonials-grid-2";

export default function MyPage() {
  return (
    <TestimonialsGrid2 columns={4} speed={25}>
      {/* Text Review - Small */}
      <ReviewCard
        quote="Amazing product that changed our workflow."
        author="Sarah Chen"
        role="Product Manager"
        company="Stripe"
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        size="sm"
      />

      {/* Video Review - Medium */}
      <VideoReviewCard
        videoSrc="https://videos.pexels.com/video-files/3129671/3129671-uhd_1440_2560_30fps.mp4"
        author="Emily Watson"
        role="CEO"
        company="TechFlow"
        size="md"
      />

      {/* Image Review - Large */}
      <ImageReviewCard
        quote="The best tool we've ever used."
        author="Michael Rodriguez"
        role="Engineering Lead"
        company="Vercel"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
        size="lg"
      />

      {/* Text Review - Large */}
      <ReviewCard
        quote="Outstanding support and incredible features that help us every day."
        author="David Kim"
        role="CTO"
        company="Acme Inc"
        size="lg"
      />

      {/* Add more cards... */}
    </TestimonialsGrid2>
  );
}