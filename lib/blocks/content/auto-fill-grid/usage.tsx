import { AutoFillGrid } from "@/components/ui/auto-fill-grid";

export default function MyPage() {
  return (
    <AutoFillGrid minItemWidth={220} gap={4}>
      <div className="p-4 rounded-xl bg-muted">
        <div className="h-3 w-24 bg-muted-foreground/20 rounded" />
      </div>

      <div className="p-4 rounded-xl bg-muted space-y-2">
        <div className="h-3 w-full bg-muted-foreground/20 rounded" />
        <div className="h-3 w-3/4 bg-muted-foreground/20 rounded" />
      </div>

      <div className="p-4 rounded-xl bg-muted space-y-2">
        <div className="h-3 w-full bg-muted-foreground/20 rounded" />
        <div className="h-3 w-4/5 bg-muted-foreground/20 rounded" />
        <div className="h-3 w-1/2 bg-muted-foreground/20 rounded" />
      </div>
    </AutoFillGrid>
  );
}
