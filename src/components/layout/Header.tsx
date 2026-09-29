import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-[120px] items-center justify-between px-8 md:px-[120px] max-w-[1440px] mx-auto w-full">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Placeholder for the exact vector path */}
          <rect x="0" y="0" width="29" height="32" fill="var(--color-primary)" rx="4" />
        </svg>
        <span className="text-xl font-bold tracking-tight">ByteSpace</span>
      </div>

      {/* Main Navigation (Hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
        <Link href="/courses" className="text-sm font-medium hover:text-primary text-muted-foreground transition-colors">Courses</Link>
        <Link href="/creators" className="text-sm font-medium hover:text-primary text-muted-foreground transition-colors">Creators</Link>
      </nav>

      {/* Auth & Actions */}
      <div className="flex items-center gap-4">
        <Link href="/signin" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
        <Link href="/join" className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">Join Us</Link>
        {/* Mobile menu icon placeholder */}
        <button className="md:hidden flex items-center justify-center p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
