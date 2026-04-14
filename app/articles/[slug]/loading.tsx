export default function ArticleLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-3">
        <div className="skeleton-pulse h-4 w-40 rounded-full" />
        <div className="skeleton-pulse h-12 w-full rounded-md" />
        <div className="skeleton-pulse h-6 w-5/6 rounded-md" />
        <div className="skeleton-pulse h-4 w-64 rounded-md" />
        <div className="flex gap-2 pt-2">
          <div className="skeleton-pulse h-8 w-28 rounded-full" />
          <div className="skeleton-pulse h-8 w-32 rounded-full" />
        </div>
      </div>
      <div className="skeleton-pulse aspect-[16/9] w-full max-w-5xl rounded-xl" />
      <div className="space-y-4">
        <div className="skeleton-pulse h-4 w-full rounded-md" />
        <div className="skeleton-pulse h-4 w-full rounded-md" />
        <div className="skeleton-pulse h-4 w-11/12 rounded-md" />
        <div className="skeleton-pulse h-4 w-full rounded-md" />
        <div className="skeleton-pulse h-4 w-10/12 rounded-md" />
      </div>
    </div>
  );
}
