import { Product } from "@/actions/server/Product";

export type SortOption = "price-asc" | "price-desc";
export type CategoryFilter = "all" | "clothing" | "bags" | "shoes" | "accessories";

export interface FilterOptions {
  search: string;
  category: CategoryFilter;
  sortBy: SortOption;
}

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filtered = [...products];

  // Search filter
  if (filters.search.trim()) {
    const searchTerm = filters.search.toLowerCase().trim();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Category filter
  if (filters.category !== "all") {
    filtered = filtered.filter(product => 
      product.category.toLowerCase() === filters.category
    );
  }

  // Sort products
  filtered.sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return filtered;
}

export const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All Categories" },
  { value: "clothing", label: "Clothing" },
  { value: "bags", label: "Bags" },
  { value: "shoes", label: "Shoes" },
  { value: "accessories", label: "Accessories" }
];

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" }
];