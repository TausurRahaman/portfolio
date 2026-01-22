"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="px-6 py-20">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-14 items-center
        "
      >
        {/* ---------- LEFT : TEXT ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h1>

          <p className="text-violet-400 font-medium">
            AI & ML–Focused Engineer · Physics Enthusiast
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I’m a developer with a strong interest in artificial intelligence,
            machine learning, and engineering-driven problem solving. My journey
            started with curiosity about how systems work — from code and
            algorithms to physical phenomena.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Over time, I’ve combined modern web technologies with AI tools to
            build performant, scalable, and visually refined applications. I
            enjoy working on projects that sit at the intersection of software,
            mathematics, and physics.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            When I’m not coding, you’ll usually find me exploring physics
            concepts, sharpening my problem-solving skills, or enjoying a good
            cup of espresso ☕.
          </p>

          {/* Accent line */}
          <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full" />
        </motion.div>

        {/* ---------- RIGHT : IMAGE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-3xl" />

          {/* Image container */}
          <div
            className="
      relative overflow-hidden
      rounded-3xl border border-violet-900/40
      max-h-[420px] w-full max-w-sm
    "
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
