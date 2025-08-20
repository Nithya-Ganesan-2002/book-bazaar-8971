"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { theme } from "@/lib/theme";

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        active ? "text-white" : "text-gray-700 border"
      }`}
      style={
        active
          ? { backgroundColor: theme.colors.accent }
          : { borderColor: theme.colors.border }
      }
    >
      {children}
    </button>
  );
}

// PUBLIC_INTERFACE
export default function AuthPage() {
  const params = useSearchParams();
  const initial = (params.get("tab") || "signin") as "signin" | "signup";
  const [tab, setTab] = useState<"signin" | "signup">(initial);

  useEffect(() => {
    setTab(initial);
  }, [initial]);

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Welcome to BookBazaar</h1>
      <div className="flex gap-2 mb-6">
        <TabButton active={tab === "signin"} onClick={() => setTab("signin")}>
          Sign in
        </TabButton>
        <TabButton active={tab === "signup"} onClick={() => setTab("signup")}>
          Create account
        </TabButton>
      </div>

      <form
        className="space-y-4 rounded-md border p-4 bg-white"
        style={{ borderColor: theme.colors.border }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("This is a placeholder. Integrate with your auth provider.");
        }}
      >
        {tab === "signup" && (
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              className="w-full rounded-md border px-3 py-2"
              style={{ borderColor: theme.colors.border }}
              placeholder="Jane Doe"
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-md border px-3 py-2"
            style={{ borderColor: theme.colors.border }}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full rounded-md border px-3 py-2"
            style={{ borderColor: theme.colors.border }}
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md py-2 text-white font-medium"
          style={{ backgroundColor: theme.colors.accent }}
        >
          {tab === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="text-xs text-gray-600 mt-3">
        Note: Authentication is not yet wired up. This page is prepared for future integration
        with your chosen provider (e.g., REST API, OAuth, or Supabase).
      </p>
    </div>
  );
}
