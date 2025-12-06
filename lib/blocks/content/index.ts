import { BlockContent } from "./types";
import { masonryGridBlock } from "./masonry-grid";
import { bentoGridBlock } from "./bento-grid";
import { responsiveGridBlock } from "./responsive-grid";

export const blockContentMap: Record<string, BlockContent> = {
  "masonry-grid": masonryGridBlock,
  "bento-grid": bentoGridBlock,
  "responsive-grid": responsiveGridBlock,
};

export function getBlockContentBySlug(slug: string): BlockContent | undefined {
  return blockContentMap[slug];
}