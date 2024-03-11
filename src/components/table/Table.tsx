import type { ProjectFrontMatter } from '@/content/config';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Row } from './Row';

export type ProjectWithSlug = ProjectFrontMatter & {
  slug: string;
  startDate: Date;
  endDate: Date | null;
};

interface TableProps {
  data: ProjectWithSlug[];
}

export const List = ({ data }: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Role + Project</TableHead>
          <TableHead className="hidden lg:table-cell">Company</TableHead>
          <TableHead className="hidden lg:table-cell">Start Date</TableHead>
          <TableHead className="hidden lg:table-cell">End Date</TableHead>
          <TableHead className="hidden lg:table-cell">Stack</TableHead>
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
