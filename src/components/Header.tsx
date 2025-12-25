'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top announcement bar */}
      <div className="w-full bg-[#356DB5] text-white">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-2 text-sm">
          {/* Center message */}
          <span className="mx-auto text-center">
            It&apos;s Here! Your next big learning journey starts today.{" "}
            <Link
              href="/learn-more"
              className="underline underline-offset-4 font-semibold"
            >
              Download Now &gt;
            </Link>
          </span>

          {/* Right-side links */}
          <div className="absolute right-6 hidden items-center gap-6 font-semibold md:flex">
            <Link href="/login" className="hover:opacity-90">
              Login
            </Link>
            <Link href="/contact" className="hover:opacity-90">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
