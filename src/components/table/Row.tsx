import { tech } from '@/tech';
import { TableCell, TableRow } from '../ui/table';
import type { ProjectWithSlug } from './Table';
import { HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { HoverCard } from '@radix-ui/react-hover-card';

export const Row = ({ title, company, stack, slug, period }: ProjectWithSlug) => {
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
          <span
            key={label}
            className="font-mono text-xs rounded-sm px-2 py-1 transition-all delay-75 hover:brightness-105 hover:scale-105"
            style={{ backgroundColor: bg, color: text }}
          >
            {label}
          </span>
        ))}
        {remaining.length > 0 && (
          <HoverCard>
            <HoverCardTrigger className="font-mono text-xs rounded-sm px-2 py-1 transition-all delay-75 hover:brightness-105 hover:scale-105">
              +{remaining.length}
            </HoverCardTrigger>
            <HoverCardContent className="flex gap-2 flex-wrap">
              {remaining.map(({ label, bg, text }) => (
                <span
                  key={label}
                  className="font-mono text-xs rounded-sm px-2 py-1 transition-all delay-75 hover:brightness-105 hover:scale-105"
                  style={{ backgroundColor: bg, color: text }}
                >
                  {label}
                </span>
              ))}
            </HoverCardContent>
          </HoverCard>
        )}
      </>
    );
  };

  return (
    <TableRow
      onClick={() => (window.location.href = '/projects/' + slug)}
      className="cursor-pointer"
    >
      <TableCell className="py-4">{title}</TableCell>
      <TableCell>{company}</TableCell>
      <TableCell className="font-mono">{period}</TableCell>
      <TableCell>
        <div className="flex gap-2 max-w-72">{constructStack()}</div>
      </TableCell>
    </TableRow>
  );
};
