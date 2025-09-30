"use client";

import { useAppContext } from "@/context/ParallaxContext";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar } = useAppContext();

  if (navbar.isLoading) return <div>Loading...</div>;
  if (navbar.error) return <div>Error loading navbar</div>;

  const navItems = navbar.data?.data?.menuItems || [];
 
  return (
    <header className="fixed top-0 left-0 w-full bg-[#010201] backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-xl">
          ParallaxShowcase
        </Link>

        <div className="flex h-full items-center gap-2 max-sm:hidden">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="min-h-4 min-w-4 text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-xs placeholder:text-[rgb(255,255,255,60%)] max-[1140px]:hidden"
          />
        </div>


        <nav className="hidden md:flex gap-8">
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

        <div className="ml-auto flex items-center gap-8 max-lg:gap-4">
          <Link className="text-xs font-medium" href="#HeroSection">About Us</Link>
          <Link className="h-full w-[115px] cursor-pointer text-nowrap rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium max-lg:w-fit max-lg:px-2.5 max-lg:text-xs" href="/#contactFormSection">Contact Us</Link>
          </div>

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
