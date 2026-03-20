"use client";

import React, { useState, useMemo } from 'react';
import { Product } from '@/actions/server/Product';
import { ProductCard } from '@/components/cards/product-card';
import { ProductFilters } from '@/components/filters/product-filters';
import { filterProducts, FilterOptions } from '@/lib/product-filters';

interface ClientCollectionsPageProps {
  initialProducts: Product[];
}

export function ClientCollectionsPage({ initialProducts }: ClientCollectionsPageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    category: "all",
    sortBy: "price-asc"
  });

  const filteredProducts = useMemo(() => 
    filterProducts(initialProducts, filters), 
    [initialProducts, filters]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Collections
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore our carefully curated selection of premium fashion and accessories, 
            designed to elevate your style with timeless elegance.
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8">
        <ProductFilters
          filters={filters}
          onFiltersChange={setFilters}
          totalProducts={initialProducts.length}
          filteredCount={filteredProducts.length}
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              We couldn&apos;t find any products matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={() => setFilters({
                search: "",
                category: "all", 
                sortBy: "price-asc"
              })}
              className="btn btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}