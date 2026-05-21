"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/content";

interface PremiumProjectCardProps {
  project: Project;
  onOpenDetails: () => void;
}

// Helper untuk mendapatkan warna custom berdasarkan themeColor proyek
const getThemeStyles = (themeColor?: "blue" | "green" | "purple" | "orange" | "pink") => {
  const color = themeColor || "blue";
  const styles = {
    blue: {
      badge: "text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10",
      titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.85)",
      detailLink: "text-blue-600 dark:text-blue-400",
      hoverEye: "bg-blue-600 text-white dark:bg-blue-400 dark:text-slate-900 border-black dark:border-blue-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(59,130,246,0.4)]",
      hoverTech: "hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-slate-950",
    },
    green: {
      badge: "text-emerald-600 dark:text-emerald-400 bg-emerald-600/10 dark:bg-emerald-400/10",
      titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.85)",
      detailLink: "text-emerald-600 dark:text-emerald-400",
      hoverEye: "bg-emerald-600 text-white dark:bg-emerald-400 dark:text-slate-900 border-black dark:border-emerald-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(16,185,129,0.4)]",
      hoverTech: "hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-950",
    },
    purple: {
      badge: "text-purple-600 dark:text-purple-400 bg-purple-600/10 dark:bg-purple-400/10",
      titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.85)",
      detailLink: "text-purple-600 dark:text-purple-400",
      hoverEye: "bg-purple-600 text-white dark:bg-purple-400 dark:text-slate-900 border-black dark:border-purple-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(168,85,247,0.4)]",
      hoverTech: "hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-slate-950",
    },
    orange: {
      badge: "text-amber-600 dark:text-amber-400 bg-amber-600/10 dark:bg-amber-400/10",
      titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      glowColor: "rgba(245, 158, 11, 0.85)",
      detailLink: "text-amber-600 dark:text-amber-400",
      hoverEye: "bg-amber-600 text-white dark:bg-amber-400 dark:text-slate-900 border-black dark:border-amber-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(245,158,11,0.4)]",
      hoverTech: "hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-950",
    },
    pink: {
      badge: "text-pink-600 dark:text-pink-400 bg-pink-600/10 dark:bg-pink-400/10",
      titleHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
      glowColor: "rgba(236, 72, 153, 0.85)",
      detailLink: "text-pink-600 dark:text-pink-400",
      hoverEye: "bg-pink-600 text-white dark:bg-pink-400 dark:text-slate-900 border-black dark:border-pink-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(236,72,153,0.4)]",
      hoverTech: "hover:bg-pink-600 dark:hover:bg-pink-400 hover:text-white dark:hover:text-slate-950",
    }
  };
  return styles[color];
};

const getFilterCategory = (category: string) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes("web") || lowerCat.includes("mobile") || lowerCat.includes("software")) return "Web & App";
  if (lowerCat.includes("data") || lowerCat.includes("ai") || lowerCat.includes("artificial")) return "Data & AI";
  if (lowerCat.includes("design") || lowerCat.includes("ui/ux")) return "UI/UX & Design";
  return "Lainnya";
};

const getPlaceholderImage = (filterCategory: string) => {
  switch (filterCategory) {
    case "Data & AI": return "/projects/data_science.png";
    case "UI/UX & Design": return "/projects/ui_design.png";
    default: return "/projects/web_dev.png";
  }
};

export default function PremiumProjectCard({ project, onOpenDetails }: PremiumProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const theme = getThemeStyles(project.themeColor);
  const mappedCategory = getFilterCategory(project.category);
  const imageSrc = project.image || getPlaceholderImage(mappedCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Hitung koordinat cursor relatif ke card wrapper
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Hitung kemiringan 3D relatif terhadap titik tengah [-0.5, 0.5]
    const relativeX = (x / rect.width) - 0.5;
    const relativeY = (y / rect.height) - 0.5;

    // Sumbu X rotasi dikendalikan Y mouse, Sumbu Y rotasi dikendalikan X mouse
    // Batasi rotasi maksimum 8 derajat agar kesan compact & rapi tetap terjaga
    setRotateX(-relativeY * 8);
    setRotateY(relativeX * 8);

    // Hitung persentase posisi glare cahaya reflektif
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
          : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), background 0.3s ease, box-shadow 0.3s ease",
        background: isHovered
          ? `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, ${theme.glowColor}, transparent 85%)`
          : "rgba(148, 163, 184, 0.15)", // fallback border tipis di light/dark mode
        boxShadow: isHovered ? `0 0 35px 5px ${theme.glowColor}, 0 0 12px 1px ${theme.glowColor}` : "none",
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`,
      } as React.CSSProperties}
      className="group relative p-[3.5px] rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-shadow duration-300 flex flex-col h-full cursor-default"
    >
      {/* Glare Sheet Overlay (Cahaya Refleksi di Atas Kaca Card) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 50%)`,
        }}
      />

      {/* Bagian Dalam Card: Solid Background dengan Rounded Inherit */}
      <div className="bg-white dark:bg-slate-950/90 rounded-[21.5px] overflow-hidden flex flex-col flex-grow h-full relative z-10 transition-colors duration-300">
        
        {/* Gambar Proyek Compact (Tinggi dikurangi ke h-36 untuk compactness) */}
        <figure
          onClick={onOpenDetails}
          className="w-full h-36 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 cursor-pointer group/img"
        >
          <Image
            src={imageSrc}
            alt={`Ilustrasi project ${project.title}`}
            fill
            className="object-cover group-hover/img:scale-[1.04] transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.featured}
          />
          {/* Subtle Dark Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 group-hover/img:opacity-20 transition-opacity duration-300" />
          
          {/* Interactive Hint Indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className={`text-[10px] font-extrabold px-3 py-1.5 rounded-lg border flex items-center gap-1 transform translate-y-1.5 group-hover/img:translate-y-0 transition-all duration-300 pointer-events-auto ${theme.hoverEye}`}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Detail Proyek
            </div>
          </div>
        </figure>

        {/* Card Content Padat */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          
          {/* Category Badge Ringkas */}
          <div className="flex justify-between items-start mb-2">
            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${theme.badge}`}>
              {project.category}
            </span>
          </div>

          {/* Judul Proyek Rapat */}
          <h3
            onClick={onOpenDetails}
            className={`text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug line-clamp-2 ${theme.titleHover} transition-colors duration-200 cursor-pointer`}
          >
            {project.title}
          </h3>

          {/* Deskripsi Proyek Ringkas (2 baris max untuk visual konsistensi tinggi) */}
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed flex-grow font-medium">
            {project.description}
          </p>

          {/* Tech Stack Pills Padat */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-extrabold px-2 py-0.5 bg-slate-50 text-slate-500 rounded-md border border-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] font-bold px-1 py-0.5 text-slate-400 dark:text-slate-500">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Mini Footer Card */}
          <div className="mt-auto pt-3 border-t border-dashed border-slate-100 dark:border-white/5 flex items-center justify-between">
            {/* Status Role */}
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              {project.role}
            </span>

            {/* Tombol Detail Tipis */}
            <button
              onClick={onOpenDetails}
              className={`inline-flex items-center gap-1 ${theme.detailLink} text-[11px] font-extrabold hover:underline group/link cursor-pointer bg-transparent border-0`}
            >
              Detail
              <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}
