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
          {/* Facebook Logo */}
          <svg preserveAspectRatio="none" overflow="visible" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <path id="Vector" d="M36.6667 20C36.6667 10.7952 29.2048 3.33332 20 3.33332C10.7952 3.33332 3.33333 10.7952 3.33333 20C3.33333 28.3188 9.42809 35.2139 17.3958 36.4642V24.8177H13.1641V20H17.3958V16.3281C17.3958 12.151 19.884 9.84374 23.6911 9.84374C25.5145 9.84374 27.4219 10.1693 27.4219 10.1693V14.2708H25.3202C23.2498 14.2708 22.6042 15.5556 22.6042 16.8736V20H27.2266L26.4876 24.8177H22.6042V36.4642C30.5719 35.2139 36.6667 28.3188 36.6667 20Z" fill="black"/>
            </g>
          </svg>
        </button>
        
        <button className="w-[72px] h-[72px] border border-[#d1d1d1] rounded-[24px] flex items-center justify-center hover:bg-gray-50 transition-colors">
          {/* Google Logo */}
          <svg preserveAspectRatio="none" overflow="visible" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <g id="Vector">
                <path d="M35.9583 20.375C35.9583 19.2778 35.8611 18.2361 35.6944 17.2222H20V23.4861H28.9861C28.5833 25.5417 27.4028 27.2778 25.6528 28.4583V32.625H31.0139C34.1528 29.7222 35.9583 25.4444 35.9583 20.375Z" fill="black"/>
                <path d="M20 9.93056C22.4583 9.93056 24.6528 10.7778 26.3889 12.4306L31.1389 7.68056C28.2639 4.98611 24.5 3.33333 20 3.33333C13.4861 3.33333 7.86111 7.08334 5.125 12.5278L10.6528 16.8194C11.9722 12.8611 15.6528 9.93056 20 9.93056Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20 36.6667C13.4861 36.6667 7.86111 32.9167 5.125 27.4722L10.6528 23.1806C11.9722 27.1389 15.6528 30.0694 20 30.0694C22.25 30.0694 24.1528 29.4583 25.6528 28.4583L31.0139 32.625C28.2639 35.1667 24.5 36.6667 20 36.6667ZM10.6528 16.8194V12.5278H5.125L10.6528 16.8194Z" fill="black"/>
                <path d="M5.125 23.1806H10.6528C10.3056 22.1806 10.125 21.1111 10.125 20C10.125 18.8889 10.3194 17.8194 10.6528 16.8194L5.125 12.5278C3.98611 14.7778 3.33333 17.3056 3.33333 20C3.33333 22.6944 3.98611 25.2222 5.125 27.4722V23.1806Z" fill="black"/>
                <path d="M10.6528 23.1806H5.125V27.4722L10.6528 23.1806Z" fill="black"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
