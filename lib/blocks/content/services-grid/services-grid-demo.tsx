"use client";

import { ServicesGrid } from "@/components/ui/services-grid";
import {
  Code2,
  Palette,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Webhook,
  GitBranch,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, scalable, production-ready web solutions.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Clean interfaces focused on usability and clarity.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform and native app development.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud deployments.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Best practices for application and data safety.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized experiences across devices.",
  },
  {
    icon: Webhook,
    title: "API Development",
    description: "RESTful and GraphQL APIs built to scale.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description: "CI/CD pipelines and infrastructure automation.",
  },
  {
    icon: MessageCircle,
    title: "Consulting",
    description: "Strategic guidance for technical decisions.",
  },
];

export function ServicesGridDemo() {
  return (
    <div className="border-2 border-dashed rounded-xl overflow-hidden">
      <ServicesGrid>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group relative px-6 py-10 transition-colors duration-300 hover:bg-accent/50 cursor-pointer"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-muted mb-4 text-foreground">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow  */}
              <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </ServicesGrid>
    </div>
  );
}