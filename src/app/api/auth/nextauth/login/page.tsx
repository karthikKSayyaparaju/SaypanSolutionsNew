"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">Sign in</h1>
      <p className="mt-2 text-slate-600">Access your Saypan Solutions account.</p>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="mt-8 w-full rounded-lg bg-[#356DB5] px-4 py-3 text-white font-semibold hover:opacity-90"
      >
        Continue with Google
      </button>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-500">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-3">
        <input
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              mode,
              callbackUrl: "/dashboard",
            })
          }
          className="w-full rounded-lg border border-slate-900 px-4 py-3 font-semibold"
        >
          {mode === "login" ? "Sign in" : "Create account"}
        </button>

        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="w-full text-sm text-[#356DB5] underline underline-offset-4"
        >
          {mode === "login"
            ? "New here? Create an account"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
