import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ApiTableProps {
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
}

export function ApiTable({ props }: ApiTableProps) {
  return (
    <div className="w-full overflow-x-auto border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[180px] font-semibold">Prop</TableHead>
            <TableHead className="min-w-[200px] font-semibold">Type</TableHead>
            <TableHead className="min-w-[120px] font-semibold">Default</TableHead>
            <TableHead className="min-w-[300px] font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-sm font-medium">
                {prop.name}
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">
                {prop.type}
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">
                {prop.default || "-"}
              </TableCell>
              <TableCell className="text-sm">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}