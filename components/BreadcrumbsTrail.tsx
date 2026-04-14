import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function BreadcrumbsTrail({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="font-sans text-sm text-zinc-600 dark:text-zinc-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const showLink = Boolean(item.href) && !isLast;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="select-none text-zinc-400 dark:text-zinc-600">
                  &gt;
                </span>
              ) : null}
              {showLink ? (
                <Link
                  href={item.href!}
                  className="text-brandPurple transition-colors hover:text-brandPurple hover:underline dark:text-brandPurple/90 dark:hover:text-brandPurple"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast ? "font-medium text-zinc-900 dark:text-zinc-100" : "text-zinc-700 dark:text-zinc-300"
                  }
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function InternalPageChrome({
  breadcrumbs,
  children,
}: {
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="-mx-4 mb-10 border-b border-zinc-200 bg-zinc-50/80 px-4 pb-4 pt-2 dark:border-zinc-800 dark:bg-zinc-950/50 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <BreadcrumbsTrail items={breadcrumbs} />
      </div>
      {children}
    </>
  );
}
