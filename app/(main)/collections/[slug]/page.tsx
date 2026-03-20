import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug } from '@/actions/server/Product';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative w-full h-96 lg:h-150 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            {product.images?.[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-400">No Image Available</span>
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isOnSale && discountPercentage > 0 && (
                <div className="badge badge-error text-white font-semibold px-3 py-1">
                  -{discountPercentage}% OFF
                </div>
              )}
              {product.isFeatured && (
                <div className="badge badge-secondary font-semibold px-3 py-1">
                  Featured
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Brand */}
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            {product.brand}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-xl text-gray-500 line-through">
                ${product.compareAtPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-primary transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:border-primary transition-colors"
                  >
                    {color.name || `Color ${index + 1}`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock Status */}
          <div className="text-sm">
            {product.inStock ? (
              <span className="text-green-600 dark:text-green-400 font-medium">
                {product.stockCount > 10 ? 'In Stock' : `Only ${product.stockCount} left in stock`}
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400 font-medium">Out of Stock</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              disabled={!product.inStock}
              className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Wishlist
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Free Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Secure Payment</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Easy Returns</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <div key={tag} className="badge badge-outline px-3 py-1">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Occasions */}
          {product.occasion && product.occasion.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Perfect For</h3>
              <div className="flex flex-wrap gap-2">
                {product.occasion.map((occ) => (
                  <div key={occ} className="badge badge-secondary px-3 py-1">
                    {occ}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}