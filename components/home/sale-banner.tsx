"use client";

import { Product } from "@/actions/server/Product";
import { ProductCard } from "@/components/cards/product-card";
import { Flame, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface SaleBannerProps {
  saleProducts: Product[];
}

export function SaleBanner({ saleProducts }: SaleBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-red-50 dark:bg-red-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Flash Sale
            </h2>
            <Flame className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Limited time offers - Don't miss out!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="w-6 h-6 text-red-500" />
            <div className="flex gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-red-500 text-white rounded-lg p-3 min-w-16">
                    <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 capitalize">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}