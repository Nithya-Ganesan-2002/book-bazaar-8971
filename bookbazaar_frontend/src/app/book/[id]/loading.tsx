export default function LoadingBook() {
  return (
    <div className="py-16">
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 h-80 bg-gray-100 rounded-md" />
        <div className="md:col-span-2 space-y-3">
          <div className="h-8 bg-gray-100 rounded w-2/3" />
          <div className="h-4 bg-gray-100 rounded w-1/3" />
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-5/6" />
          <div className="h-10 bg-gray-100 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}
