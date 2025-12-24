import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// NOTE: This demo uses an in-memory user check.
// In production, replace with DB calls (Supabase/Postgres).
const users: { email: string; passwordHash: string }[] = [];

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        mode: { label: "mode", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim();
        const password = credentials?.password ?? "";
        const mode = credentials?.mode ?? "login";

        if (!email || !password) return null;

        if (mode === "signup") {
          const exists = users.find(u => u.email === email);
          if (exists) return null;

          const passwordHash = await bcrypt.hash(password, 10);
          users.push({ email, passwordHash });
          return { id: email, email };
        }

        const user = users.find(u => u.email === email);
        if (!user) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return { id: email, email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
