"use client";

import { Shield, Truck, RefreshCw, Headphones, CreditCard, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Your data is protected with industry-standard encryption"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50, express delivery available"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy with hassle-free exchanges"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer service team is always here to help"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including buy now, pay later"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All products are carefully curated for quality and style"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}