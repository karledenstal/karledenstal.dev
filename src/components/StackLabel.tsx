export const StackLabel = ({
  label,
  bg,
  text,
}: {
  label: string;
  bg: string;
  text: string;
}) => (
  <span
    className="font-mono text-xs rounded-sm px-2 py-1 transition-all delay-75 hover:brightness-105 hover:scale-105"
    style={{ backgroundColor: bg, color: text }}
  >
    {label}
  </span>
);
