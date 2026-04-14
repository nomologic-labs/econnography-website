export default function Loading() {
  return (
    <div className="grid grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
      <div className="col-span-12 space-y-10 lg:col-span-8">
        <div className="space-y-5">
          <div className="skeleton-pulse aspect-video w-full rounded-xl" />
          <div className="skeleton-pulse h-4 w-24 rounded-full" />
          <div className="skeleton-pulse h-10 w-5/6 max-w-2xl rounded-md" />
          <div className="skeleton-pulse h-5 w-full max-w-xl rounded-md" />
          <div className="flex gap-2">
            <div className="skeleton-pulse h-8 w-28 rounded-full" />
            <div className="skeleton-pulse h-8 w-32 rounded-full" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="skeleton-pulse h-8 w-48 rounded-md" />
          <div className="skeleton-pulse aspect-video w-full rounded-xl" />
          <div className="skeleton-pulse aspect-video w-full rounded-xl" />
        </div>
      </div>
      <aside className="col-span-12 space-y-6 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
        <div className="skeleton-pulse h-7 w-40 rounded-md" />
        <div className="skeleton-pulse aspect-square w-full max-w-[8rem] rounded-lg" />
        <div className="skeleton-pulse aspect-square w-full max-w-[8rem] rounded-lg" />
      </aside>
    </div>
  );
}
