import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function BreadcrumbsTrail({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="font-sans">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const showLink = Boolean(item.href) && !isLast;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-x-2">
              {index > 0 ? <span aria-hidden className="text-slate-400 dark:text-slate-600">/</span> : null}
              {showLink ? (
                <Link
                  href={item.href!}
                  className="text-slate-500 transition-colors hover:text-brandPurple dark:text-slate-500 dark:hover:text-brandPurpleLight"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    isLast
                      ? "text-slate-600 dark:text-editorial-muted"
                      : "text-slate-500 dark:text-slate-500"
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
      <div className="-mx-4 mb-8 border-b border-zinc-200/90 px-4 pb-4 pt-0.5 dark:border-white/[0.08] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <BreadcrumbsTrail items={breadcrumbs} />
      </div>
      {children}
    </>
  );
}
