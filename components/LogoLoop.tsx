"use client";

import React from "react";

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
  // Curated premium tech stack icons using clean, precise SVGs
  const techLogos: LogoItem[] = [
    {
      name: "React",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 fill-none stroke-[#61dafb]" strokeWidth="1">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" stroke="none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 180 180" className="w-6 h-6 fill-none stroke-current text-slate-900 dark:text-white" strokeWidth="4">
          <circle cx="90" cy="90" r="85" strokeWidth="6" />
          <path d="M140 142 L72 50 L64 50 L64 130 L74 130 L74 68 L133 145 Z" fill="currentColor" stroke="none" />
          <path d="M120 50 L130 50 L130 115 L120 115 Z" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#3178c6]">
          <rect width="100" height="100" rx="10" />
          <path d="M35 70 C35 55, 45 45, 55 45 M65 45 L65 75 M55 55 L75 55" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" className="hidden" />
          {/* Official clean TS text path */}
          <text x="50" y="80" fill="white" fontSize="42" fontFamily="Inter, sans-serif" fontWeight="900" textAnchor="middle">TS</text>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 33 20" className="w-6 h-6 fill-[#06b6d4]">
          <path d="M16.5 0C11.5 0 8.5 2.5 7.5 7.5c2.5-3.5 5.5-4.5 9-3 2 1 3.5 2.5 5 4 2.5 2.5 5.5 5.5 11.5 5.5 5 0 8-2.5 9-7.5-2.5 3.5-5.5 4.5-9 3-2-1-3.5-2.5-5-4C25.5 3 22.5 0 16.5 0zm-9 10C2.5 10-.5 12.5-1.5 17.5c2.5-3.5 5.5-4.5 9-3 2 1 3.5 2.5 5 4 2.5 2.5 5.5 5.5 11.5 5.5 5 0 8-2.5 9-7.5-2.5 3.5-5.5 4.5-9 3-2-1-3.5-2.5-5-4C18 13 15 10 7.5 10z" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 110 110" className="w-6 h-6">
          <path d="M52.3 3c-15.6 0-24.6 1.4-24.6 9.4v10.4h25.1v3.5H23.5c-9.1 0-16.1 5.3-16.1 16.1v17.4c0 9.1 6.1 16.1 15.2 16.1h9.1v-12.7c0-10 8.2-18.2 18.2-18.2h28.1c8.2 0 15.2-6.1 15.2-15.2V22.8c0-8.2-6.9-16.1-15.2-16.1l-25.7-.5zm-11.7 8.3c2.7 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8-4.8-2.1-4.8-4.8 2.1-4.8 4.8-4.8z" fill="#3776AB" />
          <path d="M57.7 107c15.6 0 24.6-1.4 24.6-9.4V87.2H57.2v-3.5h29.2c9.1 0 16.1-5.3 16.1-16.1V50.2c0-9.1-6.1-16.1-15.2-16.1h-9.1v12.7c0 10-8.2 18.2-18.2 18.2H31.9c-8.2 0-15.2 6.1-15.2 15.2v17.4c0 8.2 6.9 16.1 15.2 16.1l25.8.5zm11.7-8.3c-2.7 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8 4.8 2.1 4.8 4.8-2.1 4.8-4.8 4.8z" fill="#FFE873" />
        </svg>
      ),
    },
    {
      name: "PyTorch",
      icon: (
        <svg viewBox="0 0 230 230" className="w-6 h-6 fill-[#EE4C2C]">
          <path d="M115 0C51.5 0 0 51.5 0 115s51.5 115 115 115 115-51.5 115-115S178.5 0 115 0zm19 167.3h-38v-9.5h8.9c5.2 0 6.6-2.1 6.6-6.6V99c0-4.5-1.4-6.6-6.6-6.6h-8.9v-9.5H115c26.2 0 42.4 12.8 42.4 33.1 0 17.6-12.1 28.6-29.3 30.7v.7c15.2 1.4 22.8 10 22.8 24.8v10.3c0 4.5 1.4 6.6 6.6 6.6h8.9v9.5zm-19-45.5c7.9 0 13.1-4.8 13.1-11.7s-5.2-11.7-13.1-11.7h-3V122h3z" />
        </svg>
      ),
    },
    {
      name: "Linux",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-slate-800 dark:text-slate-200">
          <path d="M16 1.5C11.5 1.5 8 5 8 9.5c0 2 1 3.5 2 4.5C9 15.5 7 18 7 21c0 4.5 4 8 9 8s9-3.5 9-8c0-3-2-5.5-3-7 1-1 2-2.5 2-4.5 0-4.5-3.5-8-8-8zm0 2.5c3.3 0 6 2.7 6 6 0 1.2-.4 2.3-1.1 3.2-.8-.6-1.8-1-2.9-1H14c-1.1 0-2.1.4-2.9 1-.7-.9-1.1-2-1.1-3.2 0-3.3 2.7-6 6-6zm-4.5 12.3c.7-.5 1.6-.8 2.5-.8h4c.9 0 1.8.3 2.5.8.5.8 1 1.9 1 3.2 0 3.3-2.5 5.7-5.5 5.7S10.5 22.8 10.5 19.5c0-1.3.5-2.4 1-3.2z" />
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#F05032]">
          <path d="M91.9 44.5L55.5 8.1c-3-3-7.9-3-10.9 0L35.9 16.8l11.4 11.4c2.6-.9 5.7-.3 7.8 1.8 2.2 2.2 2.7 5.3 1.8 7.9L68.3 49.3c2.6-.9 5.7-.3 7.8 1.8 3 3 3 7.9 0 10.9-3 3-7.9 3-10.9 0-2.2-2.2-2.7-5.3-1.8-7.8L52.1 42.8v22.6c.9.3 1.8.9 2.5 1.6 3 3 3 7.9 0 10.9-3 3-7.9 3-10.9 0-2.2-2.2-2.7-5.3-1.8-7.8V42.5c-.9-.3-1.8-.9-2.5-1.6-2.2-2.2-2.7-5.3-1.8-7.8L26.3 21.7 8.1 39.9c-3 3-3 7.9 0 10.9l36.4 36.4c3 3 7.9 3 10.9 0l36.5-36.5c2.9-3 2.9-7.9 0-11.2z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#2496ED]">
          <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.902c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.95.078h2.119c.102 0 .185-.083.185-.185V8.902c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.95 0h2.118c.103 0 .187-.083.187-.185V8.902c0-.102-.084-.186-.187-.186H8.083c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.95 0h2.119c.102 0 .185-.083.185-.185V8.902c0-.102-.083-.186-.185-.186H5.133c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-2.95 0h2.119c.103 0 .186-.083.186-.185V8.902c0-.102-.083-.186-.186-.186H2.184c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm2.95-2.946h2.119c.102 0 .185-.083.185-.185V5.956c0-.102-.083-.186-.185-.186H5.133c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm2.95 0h2.118c.103 0 .187-.083.187-.185V5.956c0-.102-.084-.186-.187-.186H8.083c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm2.95 0h2.119c.102 0 .185-.083.185-.185V5.956c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.186.084-.186.186v1.99c0 .103.083.186.186.186zm-5.899-2.946h2.118c.103 0 .187-.083.187-.185V3.01c0-.103-.084-.186-.187-.186H8.083c-.103 0-.186.083-.186.186v1.99c0 .102.083.185.186.185zm13.75 4.542c-.442 0-.803.04-.803.04a5.811 5.811 0 00-.776-2.585l.008-.008c.162-.31.258-.66.258-1.03 0-1.25-.975-2.27-2.184-2.27-.478 0-.912.16-1.272.433a6.186 6.186 0 00-3.327-1.077V13.82c.017.008.025.025.042.033A8.423 8.423 0 0118.8 15.534c1.84.442 3.197 1.83 3.655 3.653.076.305.153.628.187.95v.008c.11.83.178 1.62.178 2.306 0 .093-.076.17-.17.17h-3.085c-.093 0-.17-.077-.17-.17v-.008a4.9 4.9 0 00-.865-2.315 4.7 4.7 0 00-2.128-1.747 4.958 4.958 0 00-1.806-.347h-1.025v2.85c0 .102-.083.185-.185.185H1.054c-.102 0-.185-.083-.185-.185v-.44c0-3.52 2.764-6.41 6.18-6.41h13.98c.102 0 .186.084.186.186v1.27c0 .034-.008.077-.025.11z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 100 150" className="w-4 h-6">
          <path d="M25 0h50v25H25z" fill="#F24E1E" />
          <path d="M25 25h25v25H25z" fill="#A259FF" />
          <path d="M50 25h25v25H50z" fill="#5551FF" />
          <path d="M25 50h25v25H25z" fill="#1ABCFE" />
          <path d="M25 75a25 25 0 0 1 25-25V75H25z" fill="#0ACF83" />
        </svg>
      ),
    },
    {
      name: "Django",
      icon: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#092e20]">
          <rect width="100" height="100" rx="10" />
          <text x="50" y="70" fill="white" fontSize="48" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle">d</text>
        </svg>
      ),
    },
    {
      name: "Kotlin",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M24 24H0V0h24L12 12Z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="24" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E44857" />
              <stop offset="0.468" stopColor="#C711E1" />
              <stop offset="1" stopColor="#0095D5" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
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
