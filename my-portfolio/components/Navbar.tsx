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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 rounded-none dark:rounded-full transition-all duration-300 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] dark:shadow-2xl dark:backdrop-blur-xl dark:bg-black/30 dark:border dark:border-white/10">
      <ul className="flex items-center gap-6 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-3 py-2 text-sm font-bold dark:font-medium transition-colors duration-300 ${
                  isActive 
                    ? "text-black dark:text-sky-blue" 
                    : "text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-sky-blue"
                }`}
              >
                {item.label}
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-black dark:h-[2px] dark:bg-sky-blue dark:rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Indicator */}
                {hoveredPath === item.path && !isActive && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-300 dark:h-[2px] dark:bg-slate-600 dark:rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
        <li className="ml-2 pl-2 border-l-[3px] border-black dark:border-l-2 dark:border-slate-700">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
