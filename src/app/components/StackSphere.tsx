"use client";

import { type ComponentType, type CSSProperties } from "react";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type StackItem = {
  Icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
    "aria-hidden"?: boolean;
  }>;
  name: string;
  color: string;
  glow: string;
};

const STACK_ITEMS: StackItem[] = [
  {
    Icon: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    glow: "rgba(247, 223, 30, 0.28)",
  },
  {
    Icon: SiReact,
    name: "React",
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.26)",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.14)",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.24)",
  },
  {
    Icon: SiPython,
    name: "Python",
    color: "#3776AB",
    glow: "rgba(55, 118, 171, 0.26)",
  },
  {
    Icon: SiSupabase,
    name: "Supabase",
    color: "#3ECF8E",
    glow: "rgba(62, 207, 142, 0.26)",
  },
  {
    Icon: SiNodedotjs,
    name: "Node.js",
    color: "#5FA04E",
    glow: "rgba(95, 160, 78, 0.26)",
  },
  {
    Icon: SiExpress,
    name: "Express",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.12)",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
    glow: "rgba(49, 120, 198, 0.26)",
  },
  {
    Icon: SiGit,
    name: "Git",
    color: "#F05032",
    glow: "rgba(240, 80, 50, 0.28)",
  },
  {
    Icon: SiGithub,
    name: "GitHub",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.18)",
  },
];

export default function StackSphere() {
  const loopItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-16"
      aria-label="My stacks"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_55%_40%,rgba(255,140,0,0.08),transparent_60%)]" />

      <div className="relative z-10 w-full text-center font-[poppins]">
        <h2 className="text-3xl font-semibold tracking-[0.2em] text-orange-400 md:text-5xl">
          MY STACKS
        </h2>
      </div>

      <div className="relative z-10 mt-10 overflow-hidden">
        <div className="stack-track flex w-max items-center gap-5 px-4 md:gap-7 md:px-8">
          {loopItems.map((item, index) => (
            <div
              key={index}
              className="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-2 py-3 text-center shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-md md:h-32 md:w-32"
              style={{
                boxShadow: `0 0 24px ${item.glow}`,
                borderColor:
                  item.color === "#FFFFFF"
                    ? "rgba(255,255,255,0.22)"
                    : `${item.color}66`,
              }}
            >
              <item.Icon
                className="text-[2rem] md:text-[2.2rem]"
                style={{
                  color: item.color,
                  filter: `drop-shadow(0 0 10px ${item.glow})`,
                }}
                aria-hidden={true}
              />
              <span className="text-xs font-semibold tracking-wide text-white/80 md:text-sm">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stack-track {
          animation: horizontal-scroll 24s linear infinite;
        }

        .stack-track:hover {
          animation-play-state: paused;
        }

        @keyframes horizontal-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
