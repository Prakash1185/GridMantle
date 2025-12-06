"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { categories, getPagesByCategory } from "@/lib/docs/page";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {categories.map((category) => (
        <div key={category} className="pb-6">
          <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight">
            {category}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
            {getPagesByCategory(category).map((page) => (
              <Link
                key={page.slug}
                href={`/docs/${page.slug}`}
                className={cn(
                  "group flex w-full items-center rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === `/docs/${page.slug}`
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}