"use client";

import {
  TestimonialsGrid,
  TestimonialColumn,
  TestimonialCard,
  VideoTestimonialCard,
  FeaturedTestimonialCard,
} from "@/components/ui/testimonials-grid";

export function TestimonialsGridDemo() {
  return (
    <TestimonialsGrid speed={40} direction="left">
      <TestimonialColumn>
        <TestimonialCard
          quote="This product completely transformed how our team collaborates. The interface is intuitive and powerful."
          author="Sarah Chen"
          role="Product Manager"
          company="Stripe"
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        />
        <FeaturedTestimonialCard
          quote="I've never seen such a well-designed tool. It's become essential to our daily workflow and boosted our productivity by 40%."
          author="Michael Rodriguez"
          role="Engineering Lead"
          company="Vercel"
          avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
          backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <VideoTestimonialCard
          videoSrc="https://cdn.pixabay.com/video/2025/10/04/307864_tiny.mp4"
          author="Amy Janson"
          role="CEO"
          company="Company"
        />
        <TestimonialCard
          quote="Outstanding support team. They resolved our issues within hours, not days."
          author="David Kim"
          role="CTO"
          company="Acme Inc"
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <TestimonialCard
          quote="The best investment we made this year. ROI was visible within the first month."
          author="Lisa Park"
          role="Marketing Director"
          company="Notion"
          avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
        />
        <TestimonialCard
          quote="Clean, fast, and reliable. Everything a modern SaaS should be."
          author="James Wilson"
          role="Founder"
          company="LaunchPad"
          avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        />
        <TestimonialCard
          quote="Switched from our previous tool and never looked back. The difference is night and day."
          author="Anna Martinez"
          role="Operations Lead"
          company="Figma"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <FeaturedTestimonialCard
          quote="This is the future of how teams will work. Absolutely game-changing technology."
          author="Robert Chang"
          role="VP of Product"
          company="Linear"
          avatar="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop"
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop"
        />
        <TestimonialCard
          quote="Simple to set up, powerful to use. Our team was up and running in minutes."
          author="Sophie Brown"
          role="Designer"
          company="Framer"
          avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <TestimonialCard
          quote="Finally, a tool that understands what developers actually need. The DX is exceptional."
          author="Alex Thompson"
          role="Senior Developer"
          company="GitHub"
          avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
        />
        <VideoTestimonialCard
          videoSrc="https://cdn.pixabay.com/video/2024/08/30/228847_tiny.mp4"
          author="Chris Anderson"
          role="Tech Lead"
          company="Shopify"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <TestimonialCard
          quote="We've tried many solutions, but this one stands out. Highly recommend to any growing team."
          author="Maria Garcia"
          role="Head of Growth"
          company="Webflow"
          avatar="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
        />
        <FeaturedTestimonialCard
          quote="The attention to detail is remarkable. Every feature feels carefully considered and beautifully executed."
          author="Tom Hughes"
          role="Creative Director"
          company="Dribbble"
          backgroundImage="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=500&fit=crop"
        />
      </TestimonialColumn>

      <TestimonialColumn>
        <TestimonialCard
          quote="Incredible value for money. Features that used to cost us thousands are now accessible."
          author="Kevin Lee"
          role="Finance Manager"
          company="Plaid"
        />
        <TestimonialCard
          quote="The analytics alone are worth the subscription. Data-driven decisions made easy."
          author="Rachel Green"
          role="Data Analyst"
          company="Amplitude"
          avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
        />
        <TestimonialCard
          quote="Security-first approach gave us confidence to adopt it company-wide."
          author="Mark Stevens"
          role="Security Lead"
          company="1Password"
        />
      </TestimonialColumn>
    </TestimonialsGrid>
  );
}
