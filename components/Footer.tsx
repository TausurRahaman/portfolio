"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-username",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-username",
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="w-full bg-card border-t border-border py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Center: Year */}
        <p className="text-foreground/70 text-sm md:text-base text-center md:text-left">
          &copy; {year} <span className="gradient-text">Tausur Rahaman</span>. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/70 hover:text-foreground cursor-pointer p-2 rounded-full transition-colors"
              >
                {link.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
