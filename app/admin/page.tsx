"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminDashboard from "@/components/adminDashboard";

const ADMIN_PASSKEY = "asdf"; // hardcoded password for now

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSKEY) {
      setIsLoggedIn(true);
    } else {
      setShowError(true);
      setPassword("");
      setTimeout(() => setShowError(false), 2000); // hide error after 2s
    }
  };

  if (isLoggedIn) {
    // Dashboard view
    return (
      <AdminDashboard />
    );
  }

  // Login form view
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm bg-black/70 backdrop-blur-xl border border-violet-500/50 rounded-2xl p-8 shadow-lg shadow-violet-700/30">
        <h2 className="text-5xl font-semibold text-white mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Enter Admin Passkey"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black/30 text-white placeholder-neutral-400 px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <button
            type="submit"
            className="bg-violet-600/70 text-white font-bold py-3 rounded-xl shadow-lg shadow-violet-900/30 hover:scale-105 transition-transform cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Error popup */}
        <AnimatePresence>
          {showError && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 bg-red-600 text-white px-4 py-2 rounded-md shadow-md shadow-red-800 text-center"
            >
              Wrong passkey!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
