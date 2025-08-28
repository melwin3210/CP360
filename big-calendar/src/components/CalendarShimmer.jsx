export default function CalendarShimmer() {
  return (
    <div className="animate-pulse">
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 bg-gray-300 rounded w-32"></div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-gray-300 rounded"></div>
          <div className="h-8 w-8 bg-gray-300 rounded"></div>
        </div>
      </div>
      
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-8 bg-gray-300 rounded"></div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded border">
            <div className="p-1">
              <div className="h-4 bg-gray-300 rounded w-6 mb-1"></div>
              {Math.random() > 0.7 && (
                <div className="h-3 bg-blue-200 rounded w-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}