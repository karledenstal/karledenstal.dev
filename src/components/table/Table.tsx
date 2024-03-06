import type { ProjectFrontMatter } from '@/content/config';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { tech } from '@/tech';
import { Row } from './Row';

export type ProjectWithSlug = ProjectFrontMatter & { slug: string };

interface TableProps {
  data: ProjectWithSlug[];
}

export const List = ({ data }: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Role + Project</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Period</TableHead>
          <TableHead>Stack</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <Row key={data.title} {...data} />
        ))}
      </TableBody>
    </Table>
  );
};
