export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse h-130 flex flex-col">
      {/* Image Skeleton */}
      <div className="relative w-full h-80 bg-gray-200 dark:bg-gray-700" />
      
      {/* Content Skeleton */}
      <div className="p-4 grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Brand */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          
          {/* Product Name */}
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded" />
              ))}
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8" />
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12" />
          </div>
          
          {/* Tags - Fixed height */}
          <div className="h-6">
            <div className="flex gap-1">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-12" />
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16" />
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-10" />
            </div>
          </div>
        </div>
        
        {/* Stock - Always at bottom */}
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20" />
      </div>
    </div>
  );
}