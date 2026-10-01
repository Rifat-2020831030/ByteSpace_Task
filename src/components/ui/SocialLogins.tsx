import React from "react";

export function SocialLogins() {
  return (
    <div className="flex flex-col gap-[40px] items-center w-full">
      <div className="flex items-center gap-[11px] w-full max-w-[453px]">
        <div className="flex-1 h-[1px] bg-[#d1d1d1]" />
        <span className="font-body font-normal text-[18px] text-brand-text-tertiary leading-[1.6]">
          or
        </span>
        <div className="flex-1 h-[1px] bg-[#d1d1d1]" />
      </div>

      <div className="flex items-center gap-[16px]">
        <button className="w-[72px] h-[72px] border border-[#d1d1d1] rounded-[24px] flex items-center justify-center hover:bg-gray-50 transition-colors">
          {/* Mock Google Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </button>
        
        <button className="w-[72px] h-[72px] border border-[#d1d1d1] rounded-[24px] flex items-center justify-center hover:bg-gray-50 transition-colors">
          {/* Mock Apple Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.365 7.15c-.015-.05-.02-.1-.02-.14-.02-1.36.71-2.7 1.76-3.51-1.12-1.61-3.07-1.84-3.79-1.87-1.6-.16-3.13.94-3.95.94-.8 0-2.07-.91-3.39-.89-1.74.02-3.34 1.01-4.24 2.58-1.83 3.16-.47 7.82 1.3 10.37.88 1.25 1.9 2.66 3.25 2.61 1.3-.05 1.79-.83 3.35-.83s2 .83 3.37.81c1.4-.02 2.3-.1.3 3.17 1.24 1 1.83 2 1.88 2.02-.03.02-1.87.72-1.89 2.87-.02 1.8 1.49 2.67 1.57 2.71-1.34 1.97-2.68 1.95-3.04 1.95zM15.424 5.38c.67-.81 1.13-1.93 1.01-3.04-1.01.04-2.19.67-2.88 1.49-.6.71-1.14 1.85-1.01 2.94 1.11.09 2.22-.57 2.88-1.39z" fill="#000000" />
          </svg>
        </button>
      </div>
    </div>
  );
}
