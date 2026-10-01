import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu, NavLink } from "./MobileMenu";

export function Header({ navLinks = [] }: { navLinks?: NavLink[] }) {
  return (
    <header className="relative z-50 w-full flex justify-between items-center h-[50px] md:h-[60px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-[28.8px] h-[31.5px]">
          <Image src={ASSETS.icons.logo} alt="ByteSpace" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          href="/login"
          className="font-body font-normal text-[16px] hidden sm:block hover:text-white transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="font-body font-normal text-[16px] hidden sm:block hover:text-white transition-colors"
        >
          Join Us
        </Link>

        {/* Cart Icon */}
        <button aria-label="Cart" className="relative w-[24px] h-[24px]">
          <Image src={ASSETS.icons.menu} alt="Cart" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </button>

        {/* Shared Mobile Menu Component */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}
