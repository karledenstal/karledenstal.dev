interface Props {
  label: string;
  bg: string;
  text: string;
}

export const StackLabel = ({
  label,
  bg,
  text,
}: Props) => (
  <span
    className="font-mono text-xs rounded-sm px-2 py-1"
    style={{ backgroundColor: bg, color: text }}
  >
    {label}
  </span>
);
