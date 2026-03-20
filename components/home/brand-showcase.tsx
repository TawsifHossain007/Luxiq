"use client";

import Image from "next/image";

const brands = [
  { name: "Nike", logo: "/assets/Logo.png" },
  { name: "Adidas", logo: "/assets/Logo.png" },
  { name: "Puma", logo: "/assets/Logo.png" },
  { name: "Under Armour", logo: "/assets/Logo.png" },
  { name: "Reebok", logo: "/assets/Logo.png" },
  { name: "New Balance", logo: "/assets/Logo.png" }
];

export function BrandShowcase() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted Brands
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We partner with the world's leading brands to bring you quality products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-24 h-16">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}