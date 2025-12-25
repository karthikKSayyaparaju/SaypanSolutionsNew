import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      {/* 1) Top announcement bar */}
      <div className="w-full bg-[#356DB5] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex items-center justify-center py-2 text-sm">
            {/* Center message */}
            <div className="text-center">
              <span>It&apos;s Here! Confluent&apos;s 2026 Data + AI Predictions Report</span>
              <span className="mx-2 opacity-70">|</span>
              <Link
                href="/learn-more"
                className="underline underline-offset-4 font-semibold hover:opacity-90"
              >
                Download Now &gt;
              </Link>
            </div>

            {/* Right-side links */}
            <nav className="absolute right-0 hidden items-center gap-8 font-semibold md:flex">
              <Link href="/login" className="underline underline-offset-4 hover:opacity-90">
                Login
              </Link>
              <Link href="/contact" className="underline underline-offset-4 hover:opacity-90">
                Contact Sales
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* 2) Main black nav */}
      <div className="w-full bg-white text-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-6">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/30">
                <span className="text-black font-bold tracking-wider">SS</span>
              </div>
              <span className="text-black tracking-[0.2em] font-medium">
                SAYPAN
              </span>
            </Link>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/start"
                className="rounded-full bg-[#1F5FFF] px-6 py-3 text-sm font-semibold hover:opacity-90"
              >
                Start For Free
              </Link>

              <button
                type="button"
                aria-label="Open menu"
                className="rounded-md p-2 hover:bg-black/10"
              >
                <div className="space-y-2">
                  <span className="block h-0.5 w-8 bg-white" />
                  <span className="block h-0.5 w-8 bg-white" />
                  <span className="block h-0.5 w-8 bg-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3) Sub-nav tabs */}
      {/* <div className="w-full bg-[#F4F6F9]">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-end gap-10 overflow-x-auto py-6 text-sm font-semibold text-black/40">
            <Link
              href="/event-driven-apps"
              className="border-b-4 border-[#1F5FFF] pb-3 text-black"
            >
              Event-Driven Apps &amp; Agents
            </Link>

            <Link href="/realtime-ai" className="pb-3 hover:text-black/70">
              Real-Time Data for AI
            </Link>

            <Link href="/shift-left" className="pb-3 hover:text-black/70">
              Shift-Left Data Processing
            </Link>

            <Link href="/hybrid-cloud" className="pb-3 hover:text-black/70">
              Hybrid Cloud Integration
            </Link>

            <Link href="/use-cases" className="pb-3 hover:text-black/70">
              Any Use Case
            </Link>
          </nav>
        </div>
      </div> */}
    </header>
  );
}
