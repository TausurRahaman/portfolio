"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen px-6 py-20 overflow-hidden bg-black">
      {/* ---------- Subtle violet-purple overlay ---------- */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/90 via-violet-900/20 to-black/90 pointer-events-none" />

      {/* ---------- Main content ---------- */}
      <div className="relative max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 z-10">
        {/* ---------- LEFT: Contact Info ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="text-neutral-300">
            I’d love to hear from you! Whether it’s a collaboration, a project idea, or just a hello, reach out using any of the options below or the contact form.
          </p>

          {/* Contact cards */}
          <div className="space-y-4">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative flex items-center gap-4 p-5 bg-black/40 border border-violet-500/50 backdrop-blur-md rounded-xl shadow-lg shadow-violet-700/20 cursor-pointer overflow-hidden"
            >
              <Mail className="text-violet-400 w-6 h-6 z-10" />
              <span className="text-white font-medium z-10">tausur@example.com</span>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative flex items-center gap-4 p-5 bg-black/40 border border-violet-500/50 backdrop-blur-md rounded-xl shadow-lg shadow-violet-700/20 cursor-pointer overflow-hidden"
            >
              <MapPin className="text-violet-400 w-6 h-6 z-10" />
              <span className="text-white font-medium z-10">Dhaka, Bangladesh</span>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------- RIGHT: Contact Form ---------- */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 bg-black/30 backdrop-blur-xl border border-violet-500/50 rounded-2xl shadow-xl shadow-violet-700/30 flex flex-col gap-5 overflow-hidden"
        >
          <h2 className="text-2xl font-semibold text-white mb-4 z-10 relative">
            Send me a message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/30 backdrop-blur-md text-white placeholder-neutral-400 px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition z-10 relative"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/30 backdrop-blur-md text-white placeholder-neutral-400 px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition z-10 relative"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-black/30 backdrop-blur-md text-white placeholder-neutral-400 px-4 py-3 rounded-lg border border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none z-10 relative"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden bg-violet-600/70 text-white font-bold py-3 rounded-xl shadow-lg shadow-violet-900/30 mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
