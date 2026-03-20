"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Men's Fashion",
    slug: "mens",
    image: "https://i.ibb.co.com/6c4N1yXj/image.png", // Using banner as placeholder
    description: "Stylish clothing for modern men"
  },
  {
    name: "Women's Fashion",
    slug: "womens",
    image: "https://i.ibb.co.com/Q7THNGy3/image.png",
    description: "Elegant styles for every occasion"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://i.ibb.co.com/84f0kbz5/image.png",
    description: "Complete your perfect look"
  },
  {
    name: "Footwear",
    slug: "footwear",
    image: "https://i.ibb.co.com/CsSvjVQQ/image.png",
    description: "Step out in style and comfort"
  }
];

export function CategoriesShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our diverse range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              href={`/collections?category=${category.slug}`}
              className="group block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}