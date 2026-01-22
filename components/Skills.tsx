"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

const skills: Skill[] = [
    { name: "AI/ML", percentage: 90, color: "#22c55e" }, // green
    { name: "Frontend", percentage: 75, color: "#a855f7" }, // purple
    { name: "Backend", percentage: 85, color: "#f43f5e" }, // pink
    { name: "Tools", percentage: 85, color: "#facc15" }, // yellow
    { name: "DevOps", percentage: 80, color: "#3b82f6" }, // blue
{ name: "Databases", percentage: 65, color: "#f97316" }, // orange
];

export const Skills: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-background flex items-center justify-center py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-16">
        {/* Left side: Text */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical Arsenal
          </h2>
          <p className="text-foreground/70 mb-8 text-md md:text-md">
            I specialize in AI & ML, leveraging Python, C++, and modern web technologies like Next.js. I’m passionate about learning new tools and building intelligent, impactful digital solutions.
          </p>

          <div className="bg-card p-6 rounded-2xl border border-border shadow-lg w-full md:max-w-2xl">
            <h3 className="text-2xl font-semibold mb-3">Why work with me?</h3>
            <ul className="list-disc list-inside space-y-3 text-foreground/80 text-lg text-foreground/30">
              <li>High-quality, maintainable code.</li>
              <li>Pixel-perfect implementation</li>
              <li>Focus on performance and scalability.</li>
              <li>Creative solutions with attention to detail.</li>
            </ul>
          </div>
        </motion.div>

        {/* Right side: Horizontal bar chart */}
        <motion.div
          className="flex-1 flex flex-col gap-6 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-1 w-full">
              <div className="flex justify-between mb-1">
                <span className="text-foreground font-medium">
                  {skill.name}
                </span>
                <span className="text-foreground/60 font-medium">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-foreground/10 rounded-full h-5 overflow-hidden">
                <motion.div
                  className="h-5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
