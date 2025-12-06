import { DocContent } from "./types";
import { introductionContent } from "./introduction";
import { installationContent } from "./installation";
// Import from blocks folder
import { normalGridContent } from "@/lib/blocks/content/normal-grid";
import { advancedGridContent } from "@/lib/blocks/content/advanced-grid";

export const contentMap: Record<string, DocContent> = {
  introduction: introductionContent,
  installation: installationContent,
  "normal-grid": normalGridContent,
  "advanced-grid": advancedGridContent,
};

export function getContentBySlug(slug: string): DocContent | undefined {
  return contentMap[slug];
}