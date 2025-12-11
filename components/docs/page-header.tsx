interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-3 pb-8 border-b">
      <h1 className="scroll-m-20 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}