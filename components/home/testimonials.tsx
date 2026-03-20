"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    content: "Amazing quality and fast shipping! The products exceeded my expectations. Will definitely shop here again.",
    rating: 5,
    avatar: "/assets/Banner.png" // Using banner as placeholder
  },
  {
    name: "Mike Chen",
    role: "Regular Customer",
    content: "Great customer service and excellent product variety. The website is easy to navigate and checkout is smooth.",
    rating: 5,
    avatar: "/assets/Banner.png"
  },
  {
    name: "Emma Davis",
    role: "Style Blogger",
    content: "I love the curated selection and the attention to detail. Every purchase has been perfect so far!",
    rating: 5,
    avatar: "/assets/Banner.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 dark:text-blue-800" />
              
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}