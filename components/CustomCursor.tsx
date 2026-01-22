"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const addHoverEvents = () => {
      // all buttons, links, and elements with class .hover-cursor
      const hoverables = document.querySelectorAll("a, button, .hover-cursor");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          // if element has the manual "cursor-light" class, set dark cursor
          setIsOverLight(el.classList.contains("cursor-light"));
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setIsOverLight(false);
        });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // zoom effect for hover or press
  const zoomed = isHovering || isPressed;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed pointer-events-none z-9999 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: position.x - (zoomed ? 24 : 10),
          y: position.y - (zoomed ? 24 : 10),
          width: zoomed ? 48 : 20,
          height: zoomed ? 48 : 20,
          borderWidth: zoomed ? 3 : 2,
          borderStyle: "solid",
          borderColor: isOverLight ? "#000000" : "#ffffff",
          backgroundColor: isOverLight
            ? zoomed
              ? "rgba(0,0,0,0.2)"
              : "rgba(0,0,0,0.1)"
            : zoomed
            ? "rgba(255,255,255,0.2)"
            : "rgba(255,255,255,0.1)",
          boxShadow: zoomed
            ? isOverLight
              ? "0 0 8px rgba(0,0,0,0.5)"
              : "0 0 8px rgba(255,255,255,0.5)"
            : isOverLight
            ? "0 0 4px rgba(0,0,0,0.2)"
            : "0 0 4px rgba(255,255,255,0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </AnimatePresence>
  );
};
