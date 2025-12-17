import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/docs/page-header";
import { Button } from "@/components/ui/button";
import { RiArrowRightUpLine } from "@remixicon/react";

const ContributePage = () => {
  const email = "your@email.com"; // Replace with your email

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <PageHeader
        title="Contribute"
        description="GridMantle is open source and we welcome contributions from the community."
      />

      {/* Why Contribute */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          Why Contribute?
        </h2>
        <p className="text-muted-foreground md:leading-7">
          Whether you&apos;re fixing bugs, adding new components, or improving
          documentation, every contribution helps make GridMantle better for
          everyone.
        </p>
      </section>

      {/* How to Contribute */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          How to Contribute
        </h2>
        <p className="text-muted-foreground md:leading-7">
          Follow these simple steps to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Fork the repository to your GitHub account</li>
          <li>
            Clone it locally:{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-sm">
              git clone https://github.com/yourusername/gridmantle.git
            </code>
          </li>
          <li>
            Create a new branch:{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-sm">
              git checkout -b feature/your-feature
            </code>
          </li>
          <li>Make your changes and test them</li>
          <li>Commit and push your changes</li>
          <li>Open a pull request with a clear description</li>
        </ol>
      </section>

      {/* Guidelines */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Follow existing code style and conventions</li>
          <li>Write clear commit messages</li>
          <li>Test your changes before submitting</li>
          <li>Keep pull requests focused and concise</li>
          <li>Update documentation if needed</li>
        </ul>
      </section>

      {/* CTA Buttons */}
      <div className="space-x-1.5 sm:space-x-2.5 py-4">
        <Link href="https://github.com/yourusername/gridmantle" target="_blank">
          <Button className="rounded-lg cursor-pointer">
            View on GitHub{" "}
            <span className="bg-secondary/50 rounded-full p-0.5">
              <RiArrowRightUpLine />
            </span>
          </Button>
        </Link>
        <Link
          href="https://github.com/yourusername/gridmantle/issues"
          target="_blank"
        >
          <Button className="rounded-lg cursor-pointer border-2 hover:bg-primary/10 bg-background text-foreground">
            Open an Issue
          </Button>
        </Link>
      </div>

      {/* Feedback */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Feedback</h2>
        <p className="text-muted-foreground md:leading-7">
          Have ideas, suggestions, or found a bug? We&apos;d love to hear from
          you. Your feedback helps us improve GridMantle and build better
          components for everyone. Reach out at{" "}
          <a
            href={`mailto:${email}`}
            className="text-primary hover:underline font-medium"
          >
            <code className="px-1.5 py-0.5 rounded bg-muted text-sm">
              {email}
            </code>
          </a>
        </p>
      </section>

     
    </div>
  );
};

export default ContributePage;