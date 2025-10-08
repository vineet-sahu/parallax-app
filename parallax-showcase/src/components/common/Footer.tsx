import Link from "next/link";
import React from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D13] text-white pt-12 border-t border-gray-800 px-20 pb-8">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-12 pb-12 border-b border-gray-800 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                alt="logo"
                src={Logo.src}
                width={Logo.width}
                height={Logo.height}
                quality={100}
              />
              <h2 className="text-2xl font-semibold">Parallaxshowcase</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Not just about software & Product development; we’re your tech partners, crafting
              modern digital solutions for next-gen excellence!
            </p>

            <div className="flex gap-4 mt-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
            </div>

            <div className="mt-6 space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-sky-600" />
                <span className="text-white font-bold">+1 315 308 0901</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-sky-600" />
                <span className="text-white font-bold">sales@Parallaxshowcase.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-20">
            <div className="space-y-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Career</FooterLink>
              <FooterLink href="#">Case Study</FooterLink>
              <div className="flex justify-between gap-10 items-center mt-10">
                <p className="text-lg font-semibold mb-2">Join the Team </p>
                <span className="text-gray-700/60">&gt;</span>
              </div>
            </div>

            <div className="space-y-3">
              <FooterLink href="#">AI</FooterLink>
              <FooterLink href="#">MVP</FooterLink>
              <FooterLink href="#">SaaS</FooterLink>
              <FooterLink href="#">E-commerce</FooterLink>
              <div className="flex justify-between gap-10 items-center mt-10">
                <Link href="#" className="text-[#2563EB] hover:underline text-base font-medium">
                  Work with us
                </Link>
                <span className="text-gray-700/60">&gt;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500 pt-6">
          <p>
            Copyright © 2024 | Parallaxshowcase, All Rights Reserved |{" "}
            <span className="underline">
              Designed by{" "}
              <Link
                href="https://parallax-showcase-nine.vercel.app/"
                className="text-gray-300 hover:text-white transition"
              >
                Parallax
              </Link>
            </span>
          </p>

          <div className="flex flex-col justify-between">
            <div className="">
              <p className="text-sm text-gray-400 mb-3">Connect with us:</p>
              <div className="flex items-center gap-5 text-gray-400">
                <Link href="#" className="hover:text-white transition">
                  <Facebook size={18} className="text-white" />
                </Link>
                <Link href="#" className="hover:text-white transition text-white">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="hover:text-white transition text-white">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-700/60 pb-3">
      <Link href={href} className="block text-gray-400 hover:text-white transition text-sm">
        {children}
      </Link>
      <span className="text-gray-700/60">&gt;</span>
    </div>
  );
}
