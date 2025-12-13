import { ColumnGrid } from "@/components/ui/column-grid";

export default function MyPage() {
  return (
    <ColumnGrid 
      columns={{ default: 1, sm: 2, md: 3, lg: 4 }} 
      gap={6}
      animate={true}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </ColumnGrid>
  );
}