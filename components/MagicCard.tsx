"use client";

import React, { useState, useRef } from "react";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string; // Custom background/styling for inner card content
  glowColor?: string; // Spotlight color behind the glass card content (e.g. rgba(59, 130, 246, 0.15))
  borderColor?: string; // Border glow color (e.g. rgba(59, 130, 246, 0.6))
  size?: number; // Size of spotlight circle (default: 200px)
  neobrutalistShadow?: string; // Custom shadow for Neobrutalist design (e.g. shadow-[4px_4px_0_0_#0f172a])
  neobrutalistHoverShadow?: string; // Custom hover shadow (e.g. hover:shadow-[6px_6px_0_0_#ea4335])
  neobrutalistBorderColor?: string; // Border color for light mode (e.g. border-slate-900)
}

export default function MagicCard({
  children,
  className = "",
  innerClassName = "",
  glowColor = "rgba(65, 105, 225, 0.25)", // thicker and more prominent spotlight
  borderColor = "rgba(65, 105, 225, 0.85)", // intense border glow
  size = 220,
  neobrutalistShadow = "shadow-[4px_4px_0_0_#0f172a]",
  neobrutalistHoverShadow = "hover:shadow-[6px_6px_0_0_#0f172a]",
  neobrutalistBorderColor = "border-slate-900",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `radial-gradient(${size}px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 80%)`
          : "rgba(148, 163, 184, 0.15)", // Slate fallback border style
        transition: "box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s ease",
        // Combine glow with neobrutalist shadows for a hybrid cyberpunk-neobrutalist premium aesthetic
        boxShadow: isHovered 
          ? `0 0 30px 4px ${glowColor}, 0 0 10px 1px ${borderColor}` 
          : "none",
      } as React.CSSProperties}
      className={`group relative p-[3.5px] rounded-2xl overflow-hidden transition-all duration-300 border-2 ${neobrutalistBorderColor} ${neobrutalistShadow} ${neobrutalistHoverShadow} hover:-translate-y-0.5 dark:border-white/10 dark:shadow-md dark:hover:shadow-2xl ${className}`}
    >
      {/* Spotlight Glow Overlay Inside the Card */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size * 1.2}px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Internal Content Area: Transparent to let spotlight glow through */}
      <div className={`relative z-10 w-full h-full rounded-[12px] overflow-hidden bg-white/95 dark:bg-slate-950/90 transition-colors duration-300 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
