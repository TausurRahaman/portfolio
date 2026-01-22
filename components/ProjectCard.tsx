"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "lucide-react";

export default function ProjectCard({ project, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="
        group relative overflow-hidden rounded-2xl
        bg-black border border-violet-900/40
        shadow-lg shadow-violet-900/10
      "
    >
      {/* ---------- IMAGE AREA ---------- */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition duration-300
            group-hover:brightness-75
          "
        />

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-300
          "
        />

        {/* Buttons (appear on hover) */}
        <div
          className="
            absolute bottom-4 left-4 right-4
            flex items-center justify-between
            opacity-0 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition duration-300
          "
        >
          {/* Visit Site */}
          <button
            className="
              flex items-center gap-2
              text-sm font-medium text-white
              bg-violet-600/90 hover:bg-violet-500
              px-4 py-2 rounded-full
              shadow-md shadow-violet-900/40 cursor-pointer
            "
          >
            Visit Site
            <ArrowRight size={16} />
          </button>

          {/* GitHub */}
          <button
            className="
              p-2 rounded-full
              bg-neutral-900/80 hover:bg-neutral-800
              text-white
              border border-neutral-700 cursor-pointer
            "
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </button>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="
                text-xs px-2 py-1 rounded-full
                bg-violet-900/30 text-violet-300
                border border-violet-800/40
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
