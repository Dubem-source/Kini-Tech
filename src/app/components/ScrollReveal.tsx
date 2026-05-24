"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

type Origin = "up" | "down" | "left" | "right";

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.15,
  origin = "up",
  distance = 28,
  delay = 0,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  origin?: Origin;
  distance?: number;
  delay?: number;
}>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  const getOffset = () => {
    switch (origin) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: distance };
    }
  };

  const offset = getOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.992,
      filter: "blur(18px) saturate(0.85)",
      clipPath: "inset(0 0 12% 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px) saturate(1)",
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ willChange: "transform, opacity, filter, clip-path" }}
    >
      {children}
    </motion.div>
  );
}
