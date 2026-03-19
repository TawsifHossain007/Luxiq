import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ 
  className = "", 
  size = "md", 
  showText = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-3xl"
  };

  return (
    <Link 
      href="/" 
      className={`flex items-center space-x-3 group transition-all duration-300 hover:scale-105 ${className}`}
    >
      <div className="relative">
        <Image
          src="/assets/Logo.png"
          alt="Luxiq Logo"
          width={size === "sm" ? 24 : size === "md" ? 32 : 48}
          height={size === "sm" ? 24 : size === "md" ? 32 : 48}
          className={`${sizeClasses[size]} object-contain transition-all duration-300 group-hover:brightness-110`}
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-gold/20 to-violet/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </div>
      
      {showText && (
        <span className={`
          ${textSizeClasses[size]} 
          font-heading 
          font-light 
          text-foreground 
          tracking-wider 
          transition-all 
          duration-300 
          group-hover:text-gold
          bg-linear-to-r 
          from-foreground 
          via-gold/80 
          to-foreground 
          bg-clip-text 
          group-hover:from-gold 
          group-hover:via-violet 
          group-hover:to-gold
        `}>
          LUXIQ
        </span>
      )}
    </Link>
  );
}