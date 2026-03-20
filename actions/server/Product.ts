"use server";

import { dbConnect, collections } from "@/lib/dbConnect";

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  subCategory: string;
  brand: string;
  images: string[];
  sizes: string[];
  colors: Array<{ name: string; value: string }>;
  tags: string[];
  occasion: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isOnSale: boolean;
  aiGeneratedDescription: boolean;
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const products = await collection.find({}).toArray();
    
    return products.map(product => ({
      ...product,
      _id: product._id.toString(),
    })) as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const products = await collection.find({ isFeatured: true }).toArray();
    
    return products.map(product => ({
      ...product,
      _id: product._id.toString(),
    })) as Product[];
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw new Error("Failed to fetch featured products");
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const products = await collection.find({ category }).toArray();
    
    return products.map(product => ({
      ...product,
      _id: product._id.toString(),
    })) as Product[];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw new Error("Failed to fetch products by category");
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const collection = await dbConnect(collections.PRODUCTS);
    const product = await collection.findOne({ slug });
    
    if (!product) return null;
    
    return {
      ...product,
      _id: product._id.toString(),
    } as Product;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    throw new Error("Failed to fetch product");
  }
}