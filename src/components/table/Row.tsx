import { tech } from '@/tech';
import { TableCell, TableRow } from '../ui/table';
import type { ProjectWithSlug } from './Table';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { format } from 'date-fns/format';
import { StackLabel } from '../StackLabel';

export const Row = ({
  title,
  company,
  stack,
  slug,
  startDate,
  endDate,
}: ProjectWithSlug) => {
  const constructStack = () => {
    const stackList = tech
      .filter(({ label }) => stack.includes(label))
      .map(({ label, bg, text }) => ({
        label,
        bg,
        text,
      }));

    const firstFour = stackList.slice(0, 4);
    const remaining = stackList.slice(4);

    return (
      <>
        {firstFour.map(({ label, bg, text }) => (
          <StackLabel key={label} label={label} bg={bg} text={text} />
        ))}
        {remaining.length > 0 && (
          <HoverCard openDelay={0}>
            <HoverCardTrigger className="font-mono text-xs rounded-sm px-2 py-1">
              +{remaining.length}
            </HoverCardTrigger>
            <HoverCardContent className="flex gap-2 flex-wrap">
              {remaining.map(({ label, bg, text }) => (
                <StackLabel key={label} label={label} bg={bg} text={text} />
              ))}
            </HoverCardContent>
          </HoverCard>
        )}
      </>
    );
  };

  return (
    <>
      <TableRow
        onClick={() => (window.location.href = '/projects/' + slug)}
        className="cursor-pointer border-b-0 lg:border-b"
      >
        <TableCell>{title}</TableCell>
        <TableCell className="py-4 hidden lg:table-cell">{company}</TableCell>
        <TableCell className="font-mono hidden lg:table-cell">
          {format(startDate.toString(), 'yyyy/MM')}
        </TableCell>
        <TableCell className="font-mono hidden lg:table-cell">
          {endDate == null ? 'Current' : format(endDate.toString(), 'yyyy/MM')}
        </TableCell>
        <TableCell className="hidden lg:table-cell">
          <div className="flex gap-2 lg:max-w-96">{constructStack()}</div>
        </TableCell>
      </TableRow>
      <TableRow className="table-row lg:hidden">
        <TableCell colSpan={5} className="pb-4">
          <div className="flex gap-2">{constructStack()}</div>
        </TableCell>
      </TableRow>
    </>
  );
};
