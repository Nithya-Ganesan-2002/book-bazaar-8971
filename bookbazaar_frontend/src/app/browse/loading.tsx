export default function LoadingBrowse() {
  return (
    <div className="py-6">
      <div className="h-10 bg-gray-100 rounded w-80 mb-6 animate-pulse" />
      <div className="flex gap-6">
        <div className="hidden md:block w-64">
          <div className="h-8 bg-gray-100 rounded mb-3 animate-pulse" />
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-6 bg-gray-100 rounded animate-pulse" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-64 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
