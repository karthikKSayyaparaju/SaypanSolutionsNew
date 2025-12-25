'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top announcement bar */}
      <div className="w-full bg-[#356DB5] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-sm">
          <span className="text-center">
            It&apos;s Here! Your next big learning journey starts today.{" "}
            <Link href="/learn-more" className="underline underline-offset-4 font-semibold">
              Download Now &gt;
            </Link>
          </span>

          {/* Top-right small links (desktop) */}
          <div className="ml-auto hidden items-center gap-6 text-sm font-semibold md:flex">
            <Link href="/login" className="hover:opacity-90">
              Login
            </Link>
            <Link href="/contact" className="hover:opacity-90">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="w-full bg-white text-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/30 flex items-center justify-center">
              <span className="text-xs font-bold"></span>
            </div>
            <span className="tracking-wide font-semibold">SAYPAN SOLUTIONS</span>
          </Link>

          {/* Right: CTA + Hamburger (like screenshot) */}
          <div className="flex items-center gap-4">
            <Link
              href="/start"
              className="rounded-full bg-[#1F5FFF] px-5 py-2 text-white font-semibold hover:opacity-90"
            >
              Start For Free
            </Link>

            {/* Hamburger */}
            <button
              aria-label="Open menu"
              className="rounded-md p-2 hover:bg-white/10"
              type="button"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-7 bg-white"></span>
                <span className="block h-0.5 w-7 bg-white"></span>
                <span className="block h-0.5 w-7 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
