import Link from "next/link";
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import Logo from "@/components/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { href: "/collections/women", label: "Women" },
        { href: "/collections/men", label: "Men" },
        { href: "/collections/accessories", label: "Accessories" },
        { href: "/new-arrivals", label: "New Arrivals" },
        { href: "/sale", label: "Sale" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { href: "/contact", label: "Contact Us" },
        { href: "/size-guide", label: "Size Guide" },
        { href: "/shipping", label: "Shipping & Returns" },
        { href: "/faq", label: "FAQ" },
        { href: "/care-instructions", label: "Care Instructions" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Luxiq" },
        { href: "/careers", label: "Careers" },
        { href: "/sustainability", label: "Sustainability" },
        { href: "/press", label: "Press" },
        { href: "/stores", label: "Store Locator" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://instagram.com/luxiq", icon: FiInstagram, label: "Instagram" },
    { href: "https://twitter.com/luxiq", icon: FiTwitter, label: "Twitter" },
    { href: "https://facebook.com/luxiq", icon: FiFacebook, label: "Facebook" },
    { href: "mailto:hello@luxiq.com", icon: FiMail, label: "Email" },
  ];

  return (
    <footer className="bg-obsidian dark:bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-gold/20 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to receive exclusive offers and the latest fashion updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card/20 border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="px-6 py-3 bg-gold text-obsidian font-medium rounded-lg hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Logo size="lg" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Redefining luxury fashion with timeless elegance and contemporary design. 
                Crafted for those who appreciate the finer things in life.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.href}
                      href={social.href}
                      className="w-10 h-10 bg-card/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-gold transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Luxiq. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-300 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-300 hover:text-gold transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span>Secure payments</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-card/30 rounded flex items-center justify-center text-xs font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-card/30 rounded flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-card/30 rounded flex items-center justify-center text-xs font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}