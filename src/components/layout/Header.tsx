"use client";

import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

type NavLink = { label: string; href: string };

export function Header({ navLinks = [] }: { navLinks?: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full flex justify-between items-center h-[50px] md:h-[60px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-[28.8px] h-[31.5px]">
          <Image src={ASSETS.icons.logo} alt="ByteSpace" fill />
        </div>
        <span className="font-logo font-bold text-brand-gray-50 text-[24px]">
          ByteSpace
        </span>
      </Link>

      {/* Nav Links - Hidden on Mobile */}
      <nav className="hidden md:flex items-center gap-[24px] text-brand-gray-50">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={`font-body text-[16px] transition-colors ${
              idx === 0 ? "font-medium" : "font-normal hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Auth & Cart/Menu Button */}
      <div className="flex items-center gap-[24px] text-brand-gray-50">
        <Link
          href="#"
          className="font-body font-normal text-[16px] hidden sm:block hover:text-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="font-body font-normal text-[16px] hidden sm:block hover:text-white transition-colors"
        >
          Join Us
        </Link>

        {/* Cart Icon (Previously misnamed as menu) */}
        <button aria-label="Cart" className="relative w-[24px] h-[24px]">
          <Image src={ASSETS.icons.menu} alt="Cart" fill />
        </button>

        {/* Mobile Hamburger Menu Icon (Inline SVG) */}
        <button
          aria-label="Mobile Menu"
          className="md:hidden relative w-[28px] h-[28px] flex items-center justify-center ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}
