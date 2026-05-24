"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type SocialItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

const socialItems: SocialItem[] = [
  {
    href: "http://www.youtube.com/@dubemCodes",
    label: "YouTube",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.linkedin.com/in/emmanuel-chidubem-m-663851377/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIcg97LSoQ9GUoqDhobWjXg%3D%3D",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/Dubem-source",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://instagram.com/CodeWithDubem",
    label: "Instagram",
    icon: <FaInstagram />,
  },

  {
    href: "https://x.com/Miracle1576420",
    label: "X",
    icon: <FaXTwitter />,
  },
];

const colorMap: Record<string, string> = {
  YouTube: "#FF0000",
  LinkedIn: "#0A66C2",
  GitHub: "#FFFFFF",
  Instagram: "#E1306C",

  X: "#21C7E6",
};

const dockVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 22,
    },
  },
  // hover handled per-item via whileHover so we can animate to brand colors
} as const;

export default function GlassDock() {
  const mobileCentered = socialItems.length <= 5;

  return (
    <>
      {/* Desktop / md+ dock */}
      <motion.div
        className="mb-8 hidden justify-center md:flex"
        initial="hidden"
        animate="show"
        variants={dockVariants}
      >
        <div className="rounded-[28px] border border-white/12 bg-white/6 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
          <div className="flex items-center gap-3">
            {socialItems.map((item) => {
              const colorMap: Record<string, string> = {
                YouTube: "#FF0000",
                LinkedIn: "#0A66C2",
                GitHub: "#FFFFFF",
                Instagram: "#E1306C",
                TikTok: "#69C9D0",
                X: "#21C7E6",
              };
              const hoverColor = colorMap[item.label] ?? "#FFFFFF";

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -7, scale: 1.08, color: hoverColor }}
                  whileTap={{ scale: 0.94 }}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-white/20 hover:bg-white/10"
                  style={{ color: undefined }}
                >
                  <span className="text-[1.25rem] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile compact dock: visible only on small screens */}
      <motion.div
        className="mb-6 flex w-full justify-center md:hidden"
        initial="hidden"
        animate="show"
        variants={dockVariants}
      >
        <div className="mx-4 w-full max-w-160 rounded-lg border border-white/10 bg-white/4 px-3 py-2 backdrop-blur-md">
          <div
            className={`flex items-center ${mobileCentered ? "justify-center" : "justify-start"} gap-3 overflow-x-auto no-scrollbar px-3`}
          >
            {socialItems.map((item) => {
              const itemClass = `${mobileCentered ? "flex-none" : "shrink-0"} flex h-10 w-10 min-w-10 items-center justify-center rounded-md border border-white/8 bg-white/3 text-white/80 transition-all hover:bg-white/8`;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className={itemClass}
                >
                  <span className="text-lg ">{item.icon}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
