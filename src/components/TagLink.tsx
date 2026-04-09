import Link from "next/link";

type Props = {
  tag: string;
  color?: string;
  className?: string;
};

export function TagLink({ tag, color, className }: Props) {
  const style = color
    ? {
        backgroundColor: `${color}0D`,
        color: `${color}99`,
        borderColor: `${color}14`,
      }
    : undefined;

  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className={
        className ??
        "text-[10px] px-2.5 py-1 rounded-md font-medium tracking-wide border transition-opacity hover:opacity-70"
      }
      style={style}
    >
      {tag}
    </Link>
  );
}
