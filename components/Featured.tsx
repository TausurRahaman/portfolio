"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Github } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  siteUrl: string;
  githubUrl: string;
  imgUrl?: string;
  techs: string[]; // technologies used
};

export const Featured: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio to showcase my projects and skills.",
      siteUrl: "https://your-site.com",
      githubUrl: "https://github.com/your-username/portfolio",
      imgUrl: "/image.pdf",
      techs: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      title: "AI Chatbot",
      desc: "A smart chatbot built with OpenAI API and React.",
      siteUrl: "https://chatbot-demo.com",
      githubUrl: "https://github.com/your-username/ai-chatbot",
      imgUrl: "/projects/chatbot.png",
      techs: ["React", "OpenAI API", "Node.js", "TailwindCSS"],
    },
    {
      title: "E-commerce Store",
      desc: "A full-stack online store built with Next.js and Stripe.",
      siteUrl: "https://store-demo.com",
      githubUrl: "https://github.com/your-username/ecommerce",
      imgUrl: "/projects/ecommerce.png",
      techs: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-center">
          Featured Work
        </h2>

        <Link
          href="/projects"
          className="flex items-center justify-end gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-7"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-2xl flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image */}
              {project.imgUrl && (
                <motion.div
                  className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.imgUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <motion.h3
                  className="text-xl font-heading font-bold mb-2 transition-colors"
                  whileHover={{ color: "#a855f7" }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-foreground/70 mb-4 flex-1">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-violet-900/30 text-violet-300
                border border-violet-800/40 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Button with GitHub */}
                <div className="mt-auto flex items-center gap-3">
                  {/* Visit Site Button */}
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors flex-1 bg-white"
                  >
                    Visit Site
                    {/* Right arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 border border-white rounded-full text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
