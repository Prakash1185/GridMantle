import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocPage } from "../../lib/page";

interface NextPrevProps {
  prev: DocPage | null;
  next: DocPage | null;
}

export function NextPrev({ prev, next }: NextPrevProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t pt-8 mt-12">
      {prev ? (
        <Button variant="outline" asChild className="flex-1 max-w-[200px] ">
          <Link href={`/docs/${prev.slug}`} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <div className="flex  flex-col items-start gap-0.5">
              {/* <span className="text-xs text-muted-foreground">Previous</span> */}
              <span className="font-medium text-sm">{prev.title}</span>
            </div>
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Button variant="outline" asChild className="flex-1 max-w-[200px]">
          <Link
            href={`/docs/${next.slug}`}
            className="flex items-center gap-2 ml-auto"
          >
            <div className="flex flex-col items-end gap-0.5">
              {/* <span className="text-xs text-muted-foreground">Next</span> */}
              <span className="font-medium text-sm">{next.title}</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}