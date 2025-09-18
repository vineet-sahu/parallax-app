"use client";

import { useAppContext } from "@/context/ParallaxContext";
import Link from "next/link";
import { useState } from "react";

// export const navItems = [
//   { label: "Home", url: "/" },
//   { label: "Explore AI", url: "/explore-ai" },
//   { label: "Services", url: "/services" },
//   { label: "E-commerce", url: "/ecommerce" },
//   { label: "Products", url: "/products" },
//   { label: "Blogs", url: "/blogs" },
//   { label: "About Us", url: "/about" },
//   { label: "Contact Us", url: "/contact" },
// ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar } = useAppContext();


  if (navbar.isLoading) return <div>Loading...</div>;
  if (navbar.error) return <div>Error loading navbar</div>;


  const navItems = navbar.data?.data?.menuItems || [];

  // console.log("Navbar data:", navbar.data);

 
  return (
    <header className="fixed top-0 left-0 w-full bg-[#010201] backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-xl">
          ParallaxShowcase
        </Link>

        <nav className="hidden md:flex gap-8">
          {/* {
            navbar.data?.attributes.menu.map((item) => (
              <Link
                key={item.id}
                href={item.isExternal ? item.url : item.url}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="text-white hover:text-purple-400 transition"
              >
                {item.label}
              </Link>
            ))
          } */}
          {navItems.map((item) => {
            const href = item.url.startsWith("/") ? `#${item.url.replace("/", "")}` : item.url;
            return <Link
              key={item.label}
              href={href}
              className="text-white hover:text-purple-400 transition"
            >
              {item.label}
            </Link>
          })}
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
              key={item.label}
              href={item.url}
              className="text-white hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
