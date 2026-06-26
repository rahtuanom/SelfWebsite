"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import PillNav from "./PillNav";
import Dock, { DockItemData } from "./Dock";
import { Home, User, Briefcase, Image as ImageIcon, Sun, Moon } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", href: "/" },
  { path: "/about", label: "About", href: "/about" },
  { path: "/projects", label: "Projects", href: "/projects" },
  { path: "/gallery", label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Normalisasi pathname agar kompatibel dengan trailingSlash: true di hosting statis
  const normalizedPathname = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const router = useRouter();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
      if (latest > 100) {
        timeoutRef.current = setTimeout(() => {
          setHidden(true);
        }, 3000);
      }
    }
  });

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  // PillNav dark mode color config
  const baseColor = "#ffffff";
  const pillColor = "rgba(15, 23, 42, 0.45)";
  const pillTextColor = "#ffffff";
  const hoveredPillTextColor = "#000000";

  const dockItems: DockItemData[] = [
    { 
      icon: <Home size={20} />, 
      label: "Home", 
      onClick: () => router.push("/"),
      isActive: normalizedPathname === "/" 
    },
    { 
      icon: <User size={20} />, 
      label: "About", 
      onClick: () => router.push("/about"),
      isActive: normalizedPathname === "/about" 
    },
    { 
      icon: <Briefcase size={20} />, 
      label: "Projects", 
      onClick: () => router.push("/projects"),
      isActive: normalizedPathname === "/projects" 
    },
    { 
      icon: <ImageIcon size={20} />, 
      label: "Gallery", 
      onClick: () => router.push("/gallery"),
      isActive: normalizedPathname === "/gallery" 
    },
    {
      icon: isDark ? <Sun size={20} /> : <Moon size={20} />,
      label: isDark ? "Light Mode" : "Dark Mode",
      onClick: () => setTheme(isDark ? "light" : "dark"),
      className: "ml-2 sm:ml-4"
    }
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════
          DESKTOP NAVBAR (hidden on mobile)
          ═══════════════════════════════════════════════ */}
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4 md:px-0"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="pillnav"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="flex items-center gap-3"
            >
              <PillNav
                items={navItems}
                activeHref={normalizedPathname}
                ease="power3.easeOut"
                baseColor={baseColor}
                pillColor={pillColor}
                pillTextColor={pillTextColor}
                hoveredPillTextColor={hoveredPillTextColor}
                initialLoadAnimation={true}
                themeToggleSlot={<ThemeToggle />}
              />
            </motion.div>
          ) : (
            <motion.nav
              key="brutnav"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="px-8 py-3 rounded-none bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000]"
            >
              <ul className="flex items-center gap-6 relative">
                {navItems.map((item) => {
                  const isActive = normalizedPathname === item.path;

                  return (
                    <li key={item.path} className="relative">
                      <Link
                        href={item.path}
                        onMouseEnter={() => setHoveredPath(item.path)}
                        onMouseLeave={() => setHoveredPath(null)}
                        className={`relative px-3 py-2 text-sm font-bold transition-colors duration-300 ${
                          isActive
                            ? "text-black"
                            : "text-slate-600 hover:text-black"
                        }`}
                      >
                        {item.label}

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-active"
                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Hover Indicator */}
                        {hoveredPath === item.path && !isActive && (
                          <motion.div
                            layoutId="navbar-hover"
                            className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li className="ml-2 pl-2 border-l-[3px] border-black">
                  <ThemeToggle />
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ═══════════════════════════════════════════════
          MOBILE NAVBAR (hidden on desktop)
          ═══════════════════════════════════════════════ */}
      <div
        className="block md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4"
      >
        <Dock 
          items={dockItems} 
          panelHeight={64} 
          baseItemSize={48} 
          magnification={64} 
        />
      </div>
    </>
  );
}
