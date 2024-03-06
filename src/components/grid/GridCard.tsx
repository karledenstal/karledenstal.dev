import { tech } from '@/tech';
import type { ProjectWithSlug } from '../table/Table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { StackLabel } from '../StackLabel';

export const GridCard = ({
  title,
  company,
  stack,
  slug,
  period,
}: ProjectWithSlug) => {
  const constructStack = () => {
    const stackList = tech
      .filter(({ label }) => stack.includes(label))
      .map(({ label, bg, text }) => ({
        label,
        bg,
        text,
      }));

    return (
      <>
        {stackList.map(({ label, bg, text }) => (
          <StackLabel key={label} label={label} bg={bg} text={text} />
        ))}
      </>
    );
  };

  return (
    <Card
      className="cursor-pointer"
      onClick={() => (window.location.href = '/projects/' + slug)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company}, <span className="font-mono">{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">{constructStack()}</div>
      </CardContent>
    </Card>
  );
};
