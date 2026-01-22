"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
  "AI Engineer",
  "Deep Learner",
  "Web developer",
  "Problem Solver",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const current = skills[index];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-heading tracking-tight leading-tight">
            Crafting{" "}
            <span className="text-violet-400 font-inter gradient-text">
              Experience as a
            </span>
            <br />
          </h1>

          {/* Animated skill line */}
          <div className="mt-6 text-3xl md:text-4xl font-medium h-12">
            <span className="font-space-grotesk">{text}</span>
            <span className="text-violet-400 animate-pulse ml-1">|</span>
          </div>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            I’m <span className="text-white font-medium">Tausur Rahaman</span>,
            an AI engineer focused on building intelligent models, scalable
            systems, and modern user experiences that feel fast, precise, and
            human.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex gap-5 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href="/projects"
              className="px-8 py-4 rounded-3xl bg-violet-600 hover:bg-violet-700
                 transition shadow-xl shadow-violet-600/30 text-lg font-medium border-white/70"
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href="/contact"
              className="px-8 py-4 rounded-3xl border border-white/20
                 hover:border-violet-400 transition text-lg font-medium"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center w-full h-full">
          {/* Profile Image */}
          <div className="relative z-30 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
            <Image
              src="/profile.png"
              alt="Tausur Rahaman"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Shapes Around Profile */}
          {/* Cube Top-Left */}
          <motion.div
            className="absolute rounded-md bg-violet-500/70"
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{
              top: "5%",
              left: "5%",
              width: 24,
              height: 24,
              rotateX: 45,
              rotateY: 30,
            }}
          />

          {/* Cube Bottom-Left */}
          <motion.div
            className="absolute rounded-md bg-pink-400/60"
            animate={{ rotate: 360, y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{
              bottom: "5%",
              left: "5%",
              width: 32,
              height: 32,
              rotateX: 20,
              rotateY: 60,
            }}
          />

          {/* Cube Top-Right */}
          <motion.div
            className="absolute rounded-md bg-purple-400/70"
            animate={{ rotate: 360, y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            style={{
              top: "5%",
              right: "5%",
              width: 28,
              height: 28,
              rotateX: 30,
              rotateY: 45,
            }}
          />

          {/* Sphere Top-Center */}
          <motion.div
            className="absolute rounded-full bg-violet-300/70 shadow-lg shadow-violet-300/50"
            animate={{ y: [0, -18, 0], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{
              top: "0%",
              left: "50%",
              width: 24,
              height: 24,
              translateX: "-50%",
            }}
          />

          {/* Sphere Bottom-Center */}
          <motion.div
            className="absolute rounded-full bg-pink-400/70 shadow-lg shadow-pink-400/40"
            animate={{ y: [0, -12, 0], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              bottom: "0%",
              left: "50%",
              width: 20,
              height: 20,
              translateX: "-50%",
            }}
          />

          {/* Triangle Top-Left */}
          <motion.div
            className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-b-pink-400 border-l-transparent border-r-transparent"
            animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            style={{ top: "10%", left: "20%" }}
          />

          {/* Triangle Bottom-Right */}
          <motion.div
            className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-b-purple-400 border-l-transparent border-r-transparent"
            animate={{ y: [0, -10, 0], rotate: [0, 120, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{ bottom: "10%", right: "15%" }}
          />

          {/* Small Cube Right-Center */}
          <motion.div
            className="absolute rounded-md bg-violet-400/60"
            animate={{ rotate: 360, y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              top: "50%",
              right: "10%",
              width: 20,
              height: 20,
              translateY: "-50%",
            }}
          />

          {/* Small Sphere Left-Center */}
          <motion.div
            className="absolute rounded-full bg-purple-300/70 shadow-lg shadow-purple-300/40"
            animate={{ y: [0, -10, 0], rotate: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{
              top: "50%",
              left: "10%",
              width: 18,
              height: 18,
              translateY: "-50%",
            }}
          />

          {/* Triangle Top-Center */}
          <motion.div
            className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-b-pink-400 border-l-transparent border-r-transparent"
            animate={{ y: [0, -12, 0], rotate: [0, 100, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ top: "-20px", left: "50%", translateX: "-50%" }}
          />
        </div>
      </div>
      {/* Mouse Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-4 h-8 border-2 border-white rounded-full flex justify-center items-start p-0.5">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
        </div>
        <span className="text-white/70 text-xs">Scroll</span>
      </motion.div>
    </section>
  );
}
