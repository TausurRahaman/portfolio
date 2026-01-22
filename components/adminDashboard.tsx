"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminDashboard() {
  const [selected, setSelected] = useState("Post Work");

  const sidebarItems = [
    "Change Profile Pic",
    "About Page Pic",
    "Post Work",
    "Messages",
    "Settings",
  ];

  const stats = [
    { title: "Total Visits Today", value: "1,234" },
    { title: "This Month", value: "12,345" },
    { title: "This Year", value: "123,456" },
  ];

  return (
    <section className="min-h-screen flex text-white overflow-hidden">
      {/* ----------------- LEFT SIDEBAR ----------------- */}
      <aside className="w-1/5 backdrop-blur-lg border-r border-violet-500/50 p-6 flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Admin Panel
        </motion.h2>

        <nav className="flex flex-col gap-4">
          {sidebarItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.05 }}
              animate={{
                backgroundColor:
                  selected === item
                    ? "rgba(139, 92, 246, 0.7)" // violet-600/70
                    : "transparent",
                boxShadow:
                  selected === item
                    ? "0 0 10px rgba(139, 92, 246, 0.4)"
                    : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`text-left px-4 py-2 rounded-lg transition-colors cursor-pointer`}
            >
              {item}
            </motion.button>
          ))}
        </nav>
      </aside>

      {/* ----------------- MIDDLE MAIN AREA ----------------- */}
      <main className="w-3/5 p-6 flex flex-col gap-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold">{selected}</h2>

            {selected === "Post Work" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=" backdrop-blur-lg border border-violet-500/40 rounded-xl p-6 shadow-md shadow-violet-700/20 flex flex-col gap-4"
              >
                <input
                  type="text"
                  placeholder="Work Title"
                  className=" px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400"
                />
                <textarea
                  rows={5}
                  placeholder="Work Description"
                  className="px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-neutral-400 resize-none"
                />
                <button className="bg-violet-600/70 text-white font-bold py-3 rounded-xl shadow-lg shadow-violet-900/30 hover:scale-105 transition-transform">
                  Post Work
                </button>
              </motion.div>
            )}

            {selected !== "Post Work" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=" backdrop-blur-lg border border-violet-500/40 rounded-xl p-6 shadow-md shadow-violet-700/20 text-neutral-300"
              >
                Content area for <strong>{selected}</strong> goes here.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ----------------- RIGHT STATS PANEL ----------------- */}
      <aside className="w-1/5  backdrop-blur-lg border-l border-violet-500/50 p-6 flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-4 text-center"
        >
          Stats
        </motion.h2>

        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className=" rounded-lg p-4 shadow-md shadow-violet-700/20 text-center"
          >
            <p className="text-neutral-400">{stat.title}</p>
            <p className="text-3xl font-bold text-violet-400">{stat.value}</p>
          </motion.div>
        ))}
      </aside>
    </section>
  );
}
