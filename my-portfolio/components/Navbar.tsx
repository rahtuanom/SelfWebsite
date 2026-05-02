"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-full transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] dark:shadow-2xl dark:backdrop-blur-xl dark:bg-black/30 dark:border dark:border-white/10">
      <ul className="flex items-center gap-6 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? "text-royal-blue dark:text-sky-blue" 
                    : "text-slate-600 dark:text-slate-300 hover:text-royal-blue dark:hover:text-sky-blue"
                }`}
              >
                {item.label}
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-royal-blue dark:bg-sky-blue rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Indicator */}
                {hoveredPath === item.path && !isActive && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-300 dark:bg-slate-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
        <li className="ml-2 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
