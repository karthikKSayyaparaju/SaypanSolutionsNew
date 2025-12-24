'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      {/* LEFT: Logo / Site name */}
      <div className="text-lg font-bold text-slate-900">
        Saypan Solutions
      </div>

      {/* RIGHT: Auth button */}
      <div>
        {status === "loading" ? null : !session ? (
          <button
            onClick={() => signIn("google")}
            className="rounded-md bg-[#356DB5] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="rounded-md border px-4 py-2 text-sm font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
