"use client";

import { Product } from "@/actions/server/Product";
import { ProductCard } from "@/components/cards/product-card";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TrendingNowProps {
  trendingProducts: Product[];
}

export function TrendingNow({ trendingProducts }: TrendingNowProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Trending Now
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Most popular items this week
              </p>
            </div>
          </div>
          
          <Link 
            href="/collections?sort=trending"
            className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            View All Trending
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trendingProducts.slice(0, 4).map((product, index) => (
            <div key={product._id} className="relative">
              <div className="absolute -top-2 -left-2 z-10 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                #{index + 1}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link 
            href="/collections?sort=trending"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            View All Trending
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}