"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavLink = { label: string; href: string };

export function MobileMenu({
  navLinks = [],
  hideOn = "md",
}: {
  navLinks?: NavLink[];
  hideOn?: "md" | "lg";
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const hiddenClass = hideOn === "md" ? "md:hidden" : "lg:hidden";

  return (
    <>
      {/* Trigger Button */}
      <button
        aria-label="Mobile Menu"
        className={`${hiddenClass} relative w-[28px] h-[28px] flex items-center justify-center ml-2 text-inherit cursor-pointer`}
        onClick={() => setIsMenuOpen(true)}
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

      {/* Backdrop Overlay (closes menu on click) */}
      <div
        className={`fixed inset-0 bg-brand-gray-950/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${hiddenClass} ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Drawer (from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${hiddenClass} ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-heading font-semibold text-xl text-brand-gray-950">
            Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="text-brand-gray-400 hover:text-brand-gray-950 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-100 cursor-pointer"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6 overflow-y-auto">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`font-body text-lg text-brand-gray-950 hover:text-brand-blue transition-colors ${
                idx === 0 ? "font-medium" : "font-normal"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {navLinks.length > 0 && <hr className="border-gray-100 my-2" />}

          <Link
            href="/login"
            className="font-body font-medium text-lg text-brand-gray-950 sm:hidden hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="font-body font-medium text-lg text-brand-gray-950 sm:hidden hover:text-brand-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
}
