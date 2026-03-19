"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FiMenu,
  FiX,
  FiHome,
  FiShoppingBag,
  FiUser,
  FiStar,
} from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/themes/theme-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/collections", label: "Collections", icon: FiShoppingBag },
    { href: "/new-arrivals", label: "New Arrivals", icon: FiStar },
    { href: "/account", label: "Account", icon: FiUser },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-gold/20 shadow-sm sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - far left */}
          <div className="shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation - center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-1 transition-all duration-300 font-medium group relative ${
                      active
                        ? "text-gold"
                        : "text-muted-foreground hover:text-gold"
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-all duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`} />
                    <span className="relative">
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-gold to-violet transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </span>
                    {active && (
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons - far right */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <ThemeToggle />
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-gold hover:bg-gold-muted transition-all duration-300 px-4 py-2 min-h-9"
              >
                Sign In
              </Button>
            </Link>
            <Button
              size="sm"
              className="bg-linear-to-r from-gold to-gold/90 text-obsidian hover:from-gold/90 hover:to-gold hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium px-4 py-2 min-h-9"
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 ml-auto">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-muted-foreground hover:text-gold hover:bg-gold-muted transition-all duration-300"
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gold/20 py-4 bg-card/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium group transition-all duration-300 ${
                      active
                        ? "text-gold bg-gold-muted border-l-2 border-gold"
                        : "text-muted-foreground hover:text-gold hover:bg-gold-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className={`h-4 w-4 transition-all duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`} />
                    <span>{item.label}</span>
                    {active && (
                      <div className="ml-auto w-2 h-2 bg-gold rounded-full"></div>
                    )}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gold/20">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full text-muted-foreground hover:text-gold hover:bg-gold-muted transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </Link>
                <Button
                  size="sm"
                  className="justify-start w-full bg-linear-to-r from-gold to-gold/90 text-obsidian hover:from-gold/90 hover:to-gold transition-all duration-300 font-medium"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
