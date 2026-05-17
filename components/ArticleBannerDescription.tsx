type Props = {
  text: string;
  className?: string;
  lines?: 2 | 3 | 4;
};

const lineClampClass: Record<NonNullable<Props["lines"]>, string> = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
};

export function ArticleBannerDescription({ text, className = "", lines = 3 }: Props) {
  return (
    <p
      className={`overflow-hidden text-ellipsis ${lineClampClass[lines]} ${className}`.trim()}
      title={text}
    >
      {text}
    </p>
  );
}
