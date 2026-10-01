"use client";

import Link from "next/link";
import React, { useEffect } from "react";

export type NavLink = { label: string; href: string };

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navLinks?: NavLink[];
};

export function MobileMenu({ isOpen, onClose, navLinks = [] }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] lg:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <button 
            onClick={onClose} 
            aria-label="Close Menu" 
            className="p-2 -mr-2 text-brand-gray-950 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-brand-gray-950">
          <Link href="/" className="font-body font-medium text-[18px]" onClick={onClose}>
            Home
          </Link>
          
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="font-body font-medium text-[18px]"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          
          <hr className="border-gray-200 my-2" />
          
          <Link
            href="/login"
            className="font-body font-medium text-[18px]"
            onClick={onClose}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="font-body font-medium text-[18px] text-brand-blue"
            onClick={onClose}
          >
            Join Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
