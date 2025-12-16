import { ServicesGrid } from "@/components/ui/services-grid";
import { Code2, Palette, Smartphone, Cloud, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Build modern, responsive websites with cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces that users love.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Develop native and cross-platform mobile applications.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploy and manage scalable cloud infrastructure.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Implement robust security measures to protect your data.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize your applications for speed and efficiency.",
  },
];

export default function MyPage() {
  return (
    <div className="border border-dashed rounded-xl overflow-hidden">
      <ServicesGrid animate={true}>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="px-6 py-10 transition-colors duration-300 hover:bg-accent/50"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-muted mb-4 text-foreground">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </ServicesGrid>
    </div>
  );
}