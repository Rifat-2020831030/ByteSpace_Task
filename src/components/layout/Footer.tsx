import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white flex flex-col items-center pt-[71px] pb-[42px] border-t border-brand-gray-200">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-[120px] flex flex-col gap-[130px]">
        {/* Top Section: Nav and Newsletter */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-16 xl:gap-[92px]">
          {/* Left: Newsletter */}
          <div className="flex flex-col gap-[45px] max-w-[528px]">
            <div className="flex flex-col gap-[16px]">
              <Link href="/" className="flex items-center gap-[8.13px]">
                <div className="relative w-[28.875px] h-[31.5px]">
                  <Image src={ASSETS.icons.logoDark} alt="ByteSpace" fill />
                </div>
                <span className="font-logo font-bold text-brand-gray-950 text-[24px]">
                  ByteSpace
                </span>
              </Link>
              <p className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-[24px]">
              <form className="flex flex-col sm:flex-row gap-[24px] items-start sm:items-center">
                <div className="flex-1 w-full sm:max-w-[376px] h-[52px] px-[24px] rounded-[100px] border border-brand-gray-200 bg-white flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-full outline-none font-body font-normal text-[16px] text-brand-gray-950 placeholder:text-brand-gray-950"
                  />
                </div>
                <button
                  type="submit"
                  className="h-[52px] px-[24px] rounded-[24px] bg-brand-lime hover:bg-brand-lime-hover transition-colors flex items-center justify-center font-body font-medium text-[18px] leading-[1.2] text-brand-gray-950"
                >
                  Search
                </button>
              </form>
              <p className="font-body font-normal text-[12px] leading-[1.6] text-brand-gray-950 max-w-[504px]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-[40px] xl:max-w-[580px] w-full items-end">
            {/* Browse Column 1 */}
            <div className="flex flex-col gap-[24px] flex-1 min-w-[140px]">
              <h4 className="font-body font-normal text-[16px] leading-[24px] text-transparent select-none">
                Browse
              </h4>
              <div className="flex flex-col gap-[16px]">
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Featured Courses
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Featured Categories
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Business
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  IT
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Design
                </Link>
              </div>
            </div>

            {/* Browse Column 2 */}
            <div className="flex flex-col gap-[16px] flex-1 min-w-[140px]">
              <Link
                href="#"
                className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Development
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Marketing
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Finance
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Sport
              </Link>
            </div>

            {/* Platform Column */}
            <div className="flex flex-col gap-[24px] flex-1 min-w-[140px]">
              <h4 className="font-body font-normal text-[16px] leading-[24px] text-transparent select-none">
                Platform
              </h4>
              <div className="flex flex-col gap-[16px]">
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Become a Creator
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Affiliate Program
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  Help
                </Link>
                <Link
                  href="#"
                  className="font-body font-normal text-[14px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col gap-6 pt-6 border-t border-brand-gray-200 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-body font-normal text-[12px] leading-[1.6] text-brand-gray-950">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex items-center gap-[24px] flex-wrap">
              <Link
                href="#"
                className="font-body font-normal text-[12px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[12px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="font-body font-normal text-[12px] leading-[1.6] text-brand-gray-950 hover:text-brand-blue transition-colors"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
