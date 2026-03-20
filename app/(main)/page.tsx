import { getFeaturedProducts, getAllProducts } from "@/actions/server/Product";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { StatsSection } from "@/components/home/stats-section";
import { CategoriesShowcase } from "@/components/home/categories-showcase";
import { Testimonials } from "@/components/home/testimonials";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { SaleBanner } from "@/components/home/sale-banner";
import { BrandShowcase } from "@/components/home/brand-showcase";
import { FeaturesGrid } from "@/components/home/features-grid";
import { TrendingNow } from "@/components/home/trending-now";

export default async function Home() {
  // Fetch data for dynamic components
  const [featuredProducts, allProducts] = await Promise.all([
    getFeaturedProducts(),
    getAllProducts()
  ]);

  // Filter products for different sections
  const saleProducts = allProducts.filter(product => product.isOnSale);
  const trendingProducts = allProducts
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <HeroSection />
      
      {/* Spacer */}
      <div className="h-8" />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Spacer */}
      <div className="h-12" />
      
      {/* Featured Products */}
      <FeaturedProducts products={featuredProducts} />
      
      {/* Spacer */}
      <div className="h-12" />
      
      {/* Categories Showcase */}
      <CategoriesShowcase />
      
      {/* Spacer */}
      <div className="h-16" />
      
      {/* Sale Banner with Timer */}
      <SaleBanner saleProducts={saleProducts} />
      
      {/* Spacer */}
      <div className="h-12" />
      
      {/* Trending Products */}
      <TrendingNow trendingProducts={trendingProducts} />
      
      {/* Spacer */}
      <div className="h-16" />
      
      {/* Features Grid */}
      <FeaturesGrid />
      
      {/* Spacer */}
      <div className="h-12" />
      
      {/* Brand Showcase */}
      <BrandShowcase />
      
      {/* Spacer */}
      <div className="h-16" />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
