import {
  TestimonialsGrid,
  TestimonialColumn,
  TestimonialCard,
  VideoTestimonialCard,
  FeaturedTestimonialCard,
} from "@/components/ui/testimonials-grid";

export default function MyPage() {
  return (
    <TestimonialsGrid speed={40} direction="left">
      {/* Column 1 */}
      <TestimonialColumn>
        <TestimonialCard
          quote="Amazing product that changed our workflow."
          author="Sarah Chen"
          role="Product Manager"
          company="Stripe"
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        />
        <FeaturedTestimonialCard
          quote="The best tool we've ever used."
          author="Michael Rodriguez"
          role="Engineering Lead"
          company="Vercel"
          backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
        />
      </TestimonialColumn>

      {/* Column 2 */}
      <TestimonialColumn>
        <VideoTestimonialCard
          videoSrc="https://videos.pexels.com/video-files/3129671/3129671-uhd_1440_2560_30fps.mp4"
          author="Emily Watson"
          role="CEO"
          company="TechFlow"
        />
        <TestimonialCard
          quote="Outstanding support and features."
          author="David Kim"
          role="CTO"
          company="Acme Inc"
        />
      </TestimonialColumn>

      {/* Column 3 */}
      <TestimonialColumn>
        <TestimonialCard
          quote="Clean, fast, and reliable. Everything we needed."
          author="Lisa Park"
          role="Designer"
          company="Figma"
          variant="expanded"
        />
        <TestimonialCard
          quote="Incredible value for money."
          author="Kevin Lee"
          role="Founder"
          company="LaunchPad"
        />
      </TestimonialColumn>

    </TestimonialsGrid>
  );
}