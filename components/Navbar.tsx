"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg
                          bg-gradient-to-br from-violet-500 to-purple-800
                          shadow-lg shadow-violet-500/30 text-lg">
            {"</>"}
          </div>
          <span className="text-lg font-semibold tracking-wide">
            Tausur Rahaman.
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} prefetch={false}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`relative text-sm font-semibold cursor-pointer transition
                    ${isActive ? "text-violet-400" : "text-white/80 hover:text-white"}
                  `}
                >
                  {item.name}

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[2px]
                                 bg-gradient-to-r from-violet-400 to-purple-600
                                 rounded-full"
                    />
                  )}
                </motion.span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;

                return (
                  <Link key={item.name} href={item.href} prefetch={false}>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setOpen(false)}
                      className={`cursor-pointer transition
                        ${isActive ? "text-violet-400" : "text-white/80 hover:text-white"}
                      `}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
