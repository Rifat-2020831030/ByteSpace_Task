import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-[1440px] max-w-full h-[120px] flex items-center px-[122px] z-50 left-1/2 -translate-x-1/2">
      {/* Logo Area */}
      <div className="flex items-center absolute left-[122px] top-[35px]">
        <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="29" height="32" fill="#F5F5F6" rx="4" />
        </svg>
        <span className="text-[24px] font-bold text-[#f5f5f6] ml-[8px]">ByteSpace</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex items-center gap-[24px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Link href="/" className="text-[16px] font-medium text-[#f5f5f6]">Home</Link>
        <Link href="/courses" className="text-[16px] font-normal text-[#f5f5f6]">Courses</Link>
        <Link href="/creators" className="text-[16px] font-normal text-[#f5f5f6]">Creators</Link>
      </nav>

      {/* Auth & Actions */}
      <div className="flex items-center gap-[24px] absolute right-[120px] top-[48px]">
        <Link href="/signin" className="text-[16px] font-normal text-[#f5f5f6]">Sign In</Link>
        <Link href="/join" className="text-[16px] font-normal text-[#f5f5f6]">Join Us</Link>
        <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5F5F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        </div>
      </div>
    </header>
  );
}
