"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-xl rounded-lg bg-white/5 p-6">
        <h1 className="mb-4 text-3xl font-bold">Week 9</h1>

        {!user ? (
          <div className="space-y-4">
            <p>Please log in with GitHub to access your shopping list.</p>
            <button
              onClick={handleSignIn}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
            >
              Login with GitHub
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>

            <div className="flex gap-3">
              <Link
                href="/week-9/shopping-list"
                className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleSignOut}
                className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}