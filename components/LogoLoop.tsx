"use client";

import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiPytorch, SiLinux, SiGit, SiDocker, SiFigma, SiDjango, SiKotlin } from "react-icons/si";

interface LogoItem {
  name: string;
  icon: React.ReactNode;
}

interface LogoLoopProps {
  direction?: "left" | "right";
  speed?: number; // Duration in seconds
  className?: string;
}

export default function LogoLoop({
  direction = "left",
  speed = 30,
  className = "",
}: LogoLoopProps) {
  // Curated premium tech stack icons using clean, precise SVGs from react-icons
  const techLogos: LogoItem[] = [
    { name: "React", icon: <SiReact className="w-6 h-6 text-[#61dafb]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178c6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#06b6d4]" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6 text-[#3776AB]" /> },
    { name: "PyTorch", icon: <SiPytorch className="w-6 h-6 text-[#EE4C2C]" /> },
    { name: "Linux", icon: <SiLinux className="w-6 h-6 text-black dark:text-white" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
    { name: "Docker", icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
    { name: "Django", icon: <SiDjango className="w-6 h-6 text-[#092e20] dark:text-[#44B78B]" /> },
    { name: "Kotlin", icon: <SiKotlin className="w-6 h-6 text-[#7F52FF]" /> },
  ];

  // Duplicate the list of logos to make a seamless loop
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className={`relative w-full overflow-hidden py-5 flex items-center select-none ${className}`}>
      {/* Soft edge blur layers for ultra premium feeling */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10 pointer-events-none" />

      {/* Marquee track */}
      <div
        className="flex w-max items-center gap-6 animate-marquee shrink-0"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicatedLogos.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-royal-blue/30 hover:shadow-md transition-all duration-300 dark:bg-slate-900/50 dark:border-white/5 dark:hover:border-sky-blue/30 dark:hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] group"
          >
            <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <span className="text-sm font-black text-slate-700 dark:text-slate-300 group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
