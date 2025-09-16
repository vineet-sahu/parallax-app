"use client";

import Link from "next/link";
import { useState } from "react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Explore AI", href: "/explore-ai" },
  { name: "Services", href: "/services" },
  { name: "E-commerce", href: "/ecommerce" },
  { name: "Products", href: "/products" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <header className="fixed top-0 left-0 w-full bg-[#010201] backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-xl">
          ParallaxShowcase
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-purple-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
