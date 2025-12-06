import React from "react";
import Link from "next/link";
import { blocks, blockCategories } from "@/lib/blocks/blocks";
import { ArrowRight } from "lucide-react";

export default function BlocksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Blocks</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built grid components ready to copy and paste into your project.
          </p>
        </div>

        {blockCategories.map((category) => (
          <section key={category} className="space-y-6">
            <h2 className="text-2xl font-semibold">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blocks
                .filter((block) => block.category === category)
                .map((block) => (
                  <Link
                    key={block.slug}
                    href={`/blocks/${block.slug}`}
                    className="group border rounded-xl p-6 hover:border-primary transition-colors space-y-3"
                  >
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {block.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {block.description}
                    </p>
                    <div className="flex items-center text-sm text-primary pt-2">
                      View Block
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}