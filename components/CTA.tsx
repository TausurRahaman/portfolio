"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CTAProps = {
  className?: string;
};

export function CTA({ className = "" }: CTAProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-500/30 filter blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/20 filter blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-foreground">
          Ready to start your next project?
        </h2>
        <p className="text-foreground/70 mb-8 text-lg md:text-xl">
          I’m here to turn your ideas into reality. Let’s build something
          amazing together.
        </p>

        <Link href="/contact" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full text-lg md:text-xl shadow-lg hover:bg-primary/90 transition-colors cursor-pointer cursor-light"
          >
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};
