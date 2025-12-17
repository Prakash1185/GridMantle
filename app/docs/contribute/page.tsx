import { PageHeader } from "@/components/docs/page-header";

const ContributePage = () => {
  const email = "prakashh.official221@gmail.com";

  return (
    <div className="space-y-8 max-w-4xl">
      <PageHeader
        title="Contribute"
        description="GridMantle is open source and we welcome contributions from the community."
      />

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
              git clone https://github.com/Prakash1185/GridMantle.git
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

     

      <section className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Feedback</h2>
        <p className="text-muted-foreground md:leading-7">
          Have ideas, suggestions, or found a bug? We&apos;d love to hear from
          you. Your feedback helps us improve GridMantle and build better
          components for everyone. Reach out{" "}
          <a
            href={`mailto:${email}`}
            className="text-primary hover:underline bg-primary/10 rounded-md font-medium"
          >
            <code className="px-1.5 py-0.5  text-sm">Here</code>
          </a>
        </p>
      </section>
    </div>
  );
};

export default ContributePage;
