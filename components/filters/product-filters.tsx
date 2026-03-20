"use client";

import { useState } from "react";
import { FilterOptions } from "@/lib/product-filters";
import { SearchBar } from "./search-bar";
import { CategoryFilter as CategoryFilterComponent } from "./category-filter";
import { SortDropdown } from "./sort-dropdown";
import { Filter, X } from "lucide-react";

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  totalProducts: number;
  filteredCount: number;
}

export function ProductFilters({ 
  filters, 
  onFiltersChange, 
  totalProducts, 
  filteredCount 
}: ProductFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const updateFilters = (updates: Partial<FilterOptions>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      search: "",
      category: "all",
      sortBy: "price-asc"
    });
  };

  const hasActiveFilters = 
    filters.search || 
    filters.category !== "all";

  return (
    <div className="space-y-6">
      {/* Header with Results Count */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
        
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="btn btn-ghost btn-sm flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white self-start sm:self-end"
          >
            <X className="h-4 w-4" />
            Reset filters
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-lg">
        <SearchBar
          value={filters.search}
          onChange={(search) => updateFilters({ search })}
          placeholder="Search by product name, brand, or category..."
        />
      </div>

      {/* Desktop Filters Bar */}
      <div className="hidden md:flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filter by category
            </span>
          </div>
          
          <div className="w-52">
            <CategoryFilterComponent
              value={filters.category}
              onChange={(category) => updateFilters({ category })}
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort by price
          </span>
          <div className="w-48">
            <SortDropdown
              value={filters.sortBy}
              onChange={(sortBy) => updateFilters({ sortBy })}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="btn btn-outline w-full flex items-center justify-center gap-3 py-3"
        >
          <Filter className="h-4 w-4" />
          <span>Filter & Sort Options</span>
          {hasActiveFilters && (
            <div className="badge badge-primary badge-sm ml-2">
              {[
                filters.search && "search",
                filters.category !== "all" && "category"
              ].filter(Boolean).length}
            </div>
          )}
        </button>
      </div>

      {/* Mobile Filters Panel */}
      {showMobileFilters && (
        <div className="md:hidden space-y-6 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filter & Sort Options</h3>
            <button
              onClick={() => setShowMobileFilters(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <CategoryFilterComponent
                value={filters.category}
                onChange={(category) => updateFilters({ category })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sort by Price
              </label>
              <SortDropdown
                value={filters.sortBy}
                onChange={(sortBy) => updateFilters({ sortBy })}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}