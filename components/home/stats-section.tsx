"use client";

import { Users, ShoppingBag, Star, Truck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
    description: "Satisfied shoppers worldwide"
  },
  {
    icon: ShoppingBag,
    value: "10K+",
    label: "Products Sold",
    description: "Items delivered successfully"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Based on customer reviews"
  },
  {
    icon: Truck,
    value: "24h",
    label: "Fast Delivery",
    description: "Express shipping available"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}