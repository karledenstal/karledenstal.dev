import type { ProjectWithSlug } from '../table/Table';
import { GridCard } from './GridCard';

interface GridProps {
  data: ProjectWithSlug[];
}

export const Grid = ({ data }: GridProps) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {data.map((data) => (
        <GridCard {...data} />
      ))}
    </div>
  );
};
