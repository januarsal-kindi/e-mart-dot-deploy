export function CardShimmer() {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden animate-pulse">
      {/* Header with badge */}
      <div className="relative">
        <div className="absolute top-0 w-full p-2 flex justify-between items-center z-10">
          <div className="flex justify-between items-start w-full">
            <div className="bg-gray-300 h-6 w-20 rounded-full" />
          </div>
        </div>
        {/* Image shimmer */}
        <div className="relative h-28 md:h-32 lg:h-36 w-full bg-gray-200" />
      </div>
      {/* Details */}
      <div className="mt-2 px-4 pb-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 bg-gray-200 rounded-full" />
            <div className="h-4 w-8 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="h-6 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardShimmer;
