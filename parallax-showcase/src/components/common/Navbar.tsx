"use client";

import { useAppContext } from "@/context/ParallaxContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar } = useAppContext();

  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const navItems = navbar.data?.data?.menuItems || [];
    const handleHashChange = () => {};
    if (navItems.length !== 0) {
      const handleHashChange = () => {
        if (typeof window !== "undefined") {
          const navItemIndex = navItems.findIndex((item) => {
            const href = item.url.startsWith("/") ? `#${item.url.replace("/", "")}` : item.url;
            return href === window.location.hash;
          });
          setActive(navItemIndex);
        }
      };
      window.addEventListener("hashchange", handleHashChange);
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [navbar]);

  if (navbar.isLoading) return <div>Loading...</div>;
  if (navbar.error) return <div>Error loading navbar</div>;

  const navItems = navbar.data?.data?.menuItems || [];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#010201] backdrop-blur-md z-50">
      <div className="mx-auto flex items-center justify-between px-20 py-4 gap-4">
        <Link href="/" className="text-white font-bold text-xl flex items-center gap-2">
          <Image alt="logo" src={Logo.src} width={Logo.width} height={Logo.height} quality={100} />
          <span>ParallaxShowcase</span>
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

        <nav className="hidden md:flex gap-8 relative h-10 text-[13px] items-center px-5">
          <div className="w-full absolute h-0 border-1 border-t-0 border-gray-700 bottom-0 z-0 left-0"></div>
          {navItems.map((item, index) => {
            const href = item.url.startsWith("/") ? `#${item.url.replace("/", "")}` : item.url;
            const isActive = active === index;

            return (
              <div
                key={item.label}
                className={`transition z-1 flex h-full items-center ${
                  isActive
                    ? "font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded after:bg-gradient-to-r after:from-[#11deff] after:to-[#4380ff]"
                    : "text-white"
                }`}
              >
                <Link key={item.label} href={href} className="" onClick={() => setActive(index)}>
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-8 max-lg:gap-4">
          <Link className="text-xs font-medium" href="#HeroSection">
            About Us
          </Link>
          <Link
            className="h-full w-[115px] cursor-pointer text-nowrap rounded-[100px] bg-[#4380FF] px-5 py-2.5 text-sm font-medium max-lg:w-fit max-lg:px-2.5 max-lg:text-xs"
            href="/#contactFormSection"
          >
            Contact Us
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
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
