import Link from "next/link";
import { FiHome, FiShoppingBag } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-background to-gold-muted flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-display font-light text-gold mb-4 drop-shadow-sm">404</div>
          <h1 className="text-3xl font-heading font-light text-obsidian mb-2 tracking-wide">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved. 
            Let's get you back to discovering luxury fashion.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <Link 
            href="/"
            className="w-full bg-linear-to-r from-gold to-gold/90 text-obsidian hover:from-gold/90 hover:to-gold flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <FiHome className="w-4 h-4" />
            Back to homepage
          </Link>
          
          <Link 
            href="/collections"
            className="w-full border-2 border-gold/30 bg-card/80 backdrop-blur-sm text-foreground hover:bg-gold/10 hover:border-gold/50 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FiShoppingBag className="w-4 h-4" />
            Browse collections
          </Link>
        </div>

        <div className="border-t border-gold/20 pt-8 bg-card/40 backdrop-blur-sm rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-heading font-light text-foreground mb-4">
            Popular destinations
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link 
              href="/collections/women" 
              className="text-muted-foreground hover:text-gold transition-colors duration-200 py-2 px-3 rounded hover:bg-gold-muted"
            >
              Women's Collection
            </Link>
            <Link 
              href="/collections/men" 
              className="text-muted-foreground hover:text-gold transition-colors duration-200 py-2 px-3 rounded hover:bg-gold-muted"
            >
              Men's Collection
            </Link>
            <Link 
              href="/new-arrivals" 
              className="text-muted-foreground hover:text-violet transition-colors duration-200 py-2 px-3 rounded hover:bg-violet-muted"
            >
              New Arrivals
            </Link>
            <Link 
              href="/sale" 
              className="text-muted-foreground hover:text-violet transition-colors duration-200 py-2 px-3 rounded hover:bg-violet-muted"
            >
              Sale Items
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/20">
          <p className="text-sm text-muted-foreground">
            Need help finding something specific?{" "}
            <Link 
              href="/contact" 
              className="text-gold hover:text-violet font-medium transition-colors duration-200 hover:underline"
            >
              Contact our style experts
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}