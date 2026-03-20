"use client";

import { CATEGORIES, CategoryFilter } from "@/lib/product-filters";

interface CategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as CategoryFilter)}
      className="select select-bordered select-sm w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary"
    >
      {CATEGORIES.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}