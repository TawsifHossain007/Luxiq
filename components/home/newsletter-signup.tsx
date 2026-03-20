"use client";

import { Users, Heart, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

const communityStats = [
  {
    icon: Users,
    value: "50K+",
    label: "Community Members",
    description: "Join our growing fashion community"
  },
  {
    icon: Heart,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Based on verified reviews"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "From thousands of reviews"
  },
  {
    icon: TrendingUp,
    value: "Daily",
    label: "New Arrivals",
    description: "Fresh styles added regularly"
  }
];

export function NewsletterSignup() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 dark:from-primary/5 dark:via-accent/3 dark:to-primary/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-6">
            Join Our Fashion Community
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of a community that celebrates style, quality, and individuality. 
            Connect with fellow fashion enthusiasts and stay ahead of the trends.
          </p>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-card border rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-light text-foreground mb-4">
              Ready to Elevate Your Style?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover curated collections, exclusive deals, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/collections"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Start Shopping
              </Link>
              <Link 
                href="/register"
                className="border border-border hover:bg-accent/10 text-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Free shipping over $50
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              30-day returns
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Secure checkout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}