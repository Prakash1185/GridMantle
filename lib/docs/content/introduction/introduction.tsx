import React from "react";

const IntroductionContent = () => {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          What is GridMantle?
        </h2>
        <p className="text-muted-foreground leading-7">
          GridMantle is a powerful and flexible grid layout system built with
          React and Tailwind CSS. It provides easy-to-use components for
          creating responsive grid layouts.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Responsive grid layouts</li>
          <li>Easy customization</li>
          <li>TypeScript support</li>
          <li>Tailwind CSS integration</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why GridMantle?
        </h2>
        <p className="text-muted-foreground leading-7">
          Building complex grid layouts can be time-consuming and frustrating.
          GridMantle simplifies this process by providing pre-built,
          customizable grid components that work seamlessly with your existing
          Tailwind CSS setup.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Key Benefits</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-4 space-y-2">
            <h3 className="font-semibold">🚀 Fast Development</h3>
            <p className="text-sm text-muted-foreground">
              Build layouts in minutes, not hours
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 space-y-2">
            <h3 className="font-semibold">📱 Responsive First</h3>
            <p className="text-sm text-muted-foreground">
              Mobile-first design that scales beautifully
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 space-y-2">
            <h3 className="font-semibold">🎨 Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Tailwind CSS integration for unlimited styling
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4 space-y-2">
            <h3 className="font-semibold">💪 Type Safe</h3>
            <p className="text-sm text-muted-foreground">
              Full TypeScript support out of the box
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionContent;