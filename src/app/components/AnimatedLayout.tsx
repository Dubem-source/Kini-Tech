"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const pageVariants: Variants = {
  initial: { opacity: 0, y: 12, scale: 0.998 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
  exit: { opacity: 0, y: -8, scale: 0.998, transition: { duration: 0.35 } },
};

export default function AnimatedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="flex-1"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
