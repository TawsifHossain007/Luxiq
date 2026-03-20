export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Skeleton */}
        <div className="space-y-4">
          <div className="relative w-full h-96 lg:h-150 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          {/* Brand */}
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />

          {/* Product Name */}
          <div className="space-y-2">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ))}
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          </div>

          {/* Sizes */}
          <div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-3 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-3 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Stock Status */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-full sm:w-32 animate-pulse" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
              </div>
            ))}
          </div>

          {/* Tags */}
          <div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-3 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Occasions */}
          <div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3 animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}