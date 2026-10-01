"use client";

import Link from "next/link";
import { useState } from "react";

export type NavLink = { label: string; href: string };

export function MobileMenu({ navLinks = [] }: { navLinks?: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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

      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 w-[200px] bg-white rounded-[16px] p-4 shadow-xl flex flex-col gap-4 md:hidden text-brand-gray-950 z-50 animate-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`font-body text-[16px] ${
                idx === 0 ? "font-medium" : "font-normal"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <Link
            href="/login"
            className="font-body font-normal text-[16px] sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="font-body font-normal text-[16px] sm:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
}
