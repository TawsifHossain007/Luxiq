"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/actions/server/Product";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/collections/${product.slug}`} className="group block">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-130 flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-80 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {!imageError && product.images?.[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={320}
              height={320}
              className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isOnSale && discountPercentage > 0 && (
              <div className="badge badge-error text-white font-semibold px-3 py-1">
                -{discountPercentage}%
              </div>
            )}
            {product.isFeatured && (
              <div className="badge badge-secondary font-semibold px-3 py-1">
                Featured
              </div>
            )}
            {!product.inStock && (
              <div className="badge badge-outline bg-white/90 font-semibold px-3 py-1">
                Out of Stock
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 shadow-sm"
          >
            <Heart 
              className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 grow flex flex-col">
          <div className="flex-1 space-y-2">
            {/* Brand */}
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {product.brand}
            </p>

            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-10">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.compareAtPrice}
                </span>
              )}
            </div>

            {/* Tags - Limited to 3 with fixed height */}
            <div className="min-h-6 flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <div key={tag} className="badge badge-outline badge-sm px-2 py-1">
                  {tag}
                </div>
              ))}
              {product.tags.length > 3 && (
                <div className="badge badge-outline badge-sm px-2 py-1">
                  +{product.tags.length - 3}
                </div>
              )}
            </div>
          </div>

          {/* Stock Status - Always at bottom with proper spacing */}
          <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="text-xs">
              {product.inStock ? (
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {product.stockCount > 10 ? 'In Stock' : `Only ${product.stockCount} left`}
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-400 font-medium">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}