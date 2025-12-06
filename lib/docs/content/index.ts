import { DocContent } from "./types";
import { introductionContent } from "./introduction";
import { installationContent } from "./installation";
import { quickStartContent } from "./quick-start";
import { masonryGridContent } from "./masonry-grid";
import { bentoGridContent } from "./bento-grid";
import { responsiveGridContent } from "./responsive-grid";

export const contentMap: Record<string, DocContent> = {
  introduction: introductionContent,
  installation: installationContent,
  "quick-start": quickStartContent,
  "masonry-grid": masonryGridContent,
  "bento-grid": bentoGridContent,
  "responsive-grid": responsiveGridContent,
};

export function getContentBySlug(slug: string): DocContent | undefined {
  return contentMap[slug];
}