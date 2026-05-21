"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { projectsData, Project } from "@/data/content";
import Image from "next/image";
import PremiumProjectCard from "@/components/PremiumProjectCard";
import DotField from "@/components/DotField";

// Kategori Filter yang diperhalus (Digabungkan)
const CATEGORIES = ["Semua", "Web & App", "Data & AI", "UI/UX & Design", "Lainnya"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenProjectImage, setFullscreenProjectImage] = useState<string | null>(null);

  // Fungsi untuk memetakan kategori project (string) ke Tab Filter
  const getFilterCategory = (category: string) => {
    const lowerCat = category.toLowerCase();
    if (lowerCat.includes("web") || lowerCat.includes("mobile") || lowerCat.includes("software")) return "Web & App";
    if (lowerCat.includes("data") || lowerCat.includes("ai") || lowerCat.includes("artificial")) return "Data & AI";
    if (lowerCat.includes("design") || lowerCat.includes("ui/ux")) return "UI/UX & Design";
    return "Lainnya"; // IoT, dll
  };

  // Fungsi untuk memilih gambar AI otomatis berdasarkan kategori
  const getPlaceholderImage = (filterCategory: string) => {
    switch (filterCategory) {
      case "Data & AI": return "/projects/data_science.png";
      case "UI/UX & Design": return "/projects/ui_design.png";
      default: return "/projects/web_dev.png";
    }
  };

  // Helper untuk mendapatkan warna custom berdasarkan themeColor proyek
  const getThemeStyles = (themeColor?: "blue" | "green" | "purple" | "orange" | "pink") => {
    const color = themeColor || "blue";
    const styles = {
      blue: {
        badge: "text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10",
        titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
        hoverShadowPage: "hover:shadow-[8px_8px_0_0_#3b82f6]",
        darkHoverBorder: "dark:hover:border-blue-500/50",
        darkHoverShadow: "dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
        modalDot: "bg-blue-500",
        modalBadge: "text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10",
        modalHighlight: "bg-blue-600/10 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-blue-600/20 dark:border-blue-400/20",
        detailLink: "text-blue-600 dark:text-blue-400",
        hoverEye: "bg-blue-600 text-white dark:bg-blue-400 dark:text-slate-900 border-black dark:border-blue-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(59,130,246,0.4)]",
        hoverTech: "hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-slate-950",
        thumbnailActive: "border-blue-600 dark:border-blue-400 scale-105 ring-2 ring-blue-600/20 dark:ring-blue-400/20"
      },
      green: {
        badge: "text-emerald-600 dark:text-emerald-400 bg-emerald-600/10 dark:bg-emerald-400/10",
        titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
        hoverShadowPage: "hover:shadow-[8px_8px_0_0_#10b981]",
        darkHoverBorder: "dark:hover:border-emerald-500/50",
        darkHoverShadow: "dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
        modalDot: "bg-emerald-500",
        modalBadge: "text-emerald-600 dark:text-emerald-400 bg-emerald-600/10 dark:bg-emerald-400/10",
        modalHighlight: "bg-emerald-600/10 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 border-emerald-600/20 dark:border-emerald-400/20",
        detailLink: "text-emerald-600 dark:text-emerald-400",
        hoverEye: "bg-emerald-600 text-white dark:bg-emerald-400 dark:text-slate-900 border-black dark:border-emerald-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(16,185,129,0.4)]",
        hoverTech: "hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-950",
        thumbnailActive: "border-emerald-600 dark:border-emerald-400 scale-105 ring-2 ring-emerald-600/20 dark:ring-emerald-400/20"
      },
      purple: {
        badge: "text-purple-600 dark:text-purple-400 bg-purple-600/10 dark:bg-purple-400/10",
        titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
        hoverShadowPage: "hover:shadow-[8px_8px_0_0_#a855f7]",
        darkHoverBorder: "dark:hover:border-purple-500/50",
        darkHoverShadow: "dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
        modalDot: "bg-purple-500",
        modalBadge: "text-purple-600 dark:text-purple-400 bg-purple-600/10 dark:bg-purple-400/10",
        modalHighlight: "bg-purple-600/10 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 border-purple-600/20 dark:border-purple-400/20",
        detailLink: "text-purple-600 dark:text-purple-400",
        hoverEye: "bg-purple-600 text-white dark:bg-purple-400 dark:text-slate-900 border-black dark:border-purple-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(168,85,247,0.4)]",
        hoverTech: "hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-slate-950",
        thumbnailActive: "border-purple-600 dark:border-purple-400 scale-105 ring-2 ring-purple-600/20 dark:ring-purple-400/20"
      },
      orange: {
        badge: "text-amber-600 dark:text-amber-400 bg-amber-600/10 dark:bg-amber-400/10",
        titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
        hoverShadowPage: "hover:shadow-[8px_8px_0_0_#f59e0b]",
        darkHoverBorder: "dark:hover:border-amber-500/50",
        darkHoverShadow: "dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
        modalDot: "bg-amber-500",
        modalBadge: "text-amber-600 dark:text-amber-400 bg-amber-600/10 dark:bg-amber-400/10",
        modalHighlight: "bg-amber-600/10 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 border-amber-600/20 dark:border-amber-400/20",
        detailLink: "text-amber-600 dark:text-amber-400",
        hoverEye: "bg-amber-600 text-white dark:bg-amber-400 dark:text-slate-900 border-black dark:border-amber-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(245,158,11,0.4)]",
        hoverTech: "hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-slate-950",
        thumbnailActive: "border-amber-600 dark:border-amber-400 scale-105 ring-2 ring-amber-600/20 dark:ring-amber-400/20"
      },
      pink: {
        badge: "text-pink-600 dark:text-pink-400 bg-pink-600/10 dark:bg-pink-400/10",
        titleHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
        hoverShadowPage: "hover:shadow-[8px_8px_0_0_#ec4899]",
        darkHoverBorder: "dark:hover:border-pink-500/50",
        darkHoverShadow: "dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
        modalDot: "bg-pink-500",
        modalBadge: "text-pink-600 dark:text-pink-400 bg-pink-600/10 dark:bg-pink-400/10",
        modalHighlight: "bg-pink-600/10 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 border-pink-600/20 dark:border-pink-400/20",
        detailLink: "text-pink-600 dark:text-pink-400",
        hoverEye: "bg-pink-600 text-white dark:bg-pink-400 dark:text-slate-900 border-black dark:border-pink-300 shadow-[2px_2px_0_0_#000] dark:shadow-[0_0_10px_rgba(236,72,153,0.4)]",
        hoverTech: "hover:bg-pink-600 dark:hover:bg-pink-400 hover:text-white dark:hover:text-slate-950",
        thumbnailActive: "border-pink-600 dark:border-pink-400 scale-105 ring-2 ring-pink-600/20 dark:ring-pink-400/20"
      }
    };
    return styles[color];
  };

  // Filter project yang ditampilkan
  const filteredProjects = activeFilter === "Semua" 
    ? projectsData 
    : projectsData.filter(p => getFilterCategory(p.category) === activeFilter);

  const modalTheme = selectedProject ? getThemeStyles(selectedProject.themeColor) : null;

  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-6 bg-transparent text-foreground overflow-hidden">
        
        {/* Doodle Pattern for Light Mode - Dynamic Interactive DotField */}
        <div className="absolute inset-0 z-0 pointer-events-none dark:hidden opacity-70">
          <DotField 
            dotSpacing={32} 
            dotRadius={2.0} 
            cursorRadius={100} 
            cursorForce={15} 
            springEasing={0.07}
            dotColor="rgba(148, 163, 184, 0.45)"
          />
        </div>

        <div className="w-full max-w-7xl z-10 relative">
          <header className="text-center mb-8 pt-4">
            <h1 className="text-3xl md:text-4xl font-black text-royal-blue dark:text-sky-blue mb-3 tracking-tight">
              Koleksi Karya & Riset
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
              Kumpulan proyek, riset akademik, dan publikasi yang pernah saya kerjakan. Menjangkau mulai dari rekayasa perangkat lunak hingga analisis data tingkat lanjut.
            </p>
          </header>

          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border-2 ${
                  activeFilter === cat
                    ? "bg-royal-blue text-white border-black dark:bg-sky-blue dark:text-slate-900 dark:border-sky-300 shadow-[3px_3px_0_0_#000] dark:shadow-[0_0_15px_rgba(135,206,235,0.4)] translate-y-[-2px]"
                    : "bg-white text-slate-600 border-transparent hover:border-black dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-white/30 dark:border-white/5 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID PORTFOLIO (3 Columns SEO Friendly) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="h-full"
                >
                  <PremiumProjectCard
                    project={project}
                    onOpenDetails={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 dark:text-slate-400 text-lg">Belum ada project di kategori ini.</p>
            </div>
          )}
        </div>
      </main>

      {/* Detail Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
            />

            {/* Modal Card Centered (Flexible width max-w-6xl for premium landscape aspect ratio) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-6xl max-h-[85vh] bg-white dark:bg-slate-950 border-[3px] border-slate-900 dark:border-white/10 shadow-[8px_8px_0px_0px_#0f172a] dark:shadow-2xl rounded-3xl overflow-hidden z-[101] flex flex-col md:flex-row"
            >
              {/* Close Button absolute top corner */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-[105] p-2.5 bg-slate-100 hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:hover:bg-red-950/40 dark:hover:text-red-400 rounded-full border border-slate-200 dark:border-slate-700 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                aria-label="Tutup Detail"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* SISI KIRI: Galeri Gambar / Carousel (Dibuat adaptif untuk foto non-1:1 / landscape, lebih lebar 60%) */}
              <div className="w-full md:w-[60%] bg-slate-50 dark:bg-slate-900 border-b-[3px] md:border-b-0 md:border-r-[3px] border-slate-900 dark:border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-auto md:min-h-[500px] flex-shrink-0">
                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-black group shadow-md flex items-center justify-center">
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {/* Efek blurred background yang mewah untuk mengisi sisi kosong landscape */}
                        <div className="absolute inset-0 filter blur-xl scale-110 opacity-30 select-none pointer-events-none">
                          <Image
                            src={selectedProject.gallery[currentImageIndex]}
                            alt="Blurred background"
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Foto utama dipasang dengan object-contain agar utuh, tanpa cropping */}
                        <Image
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={`${selectedProject.title} Gambar ${currentImageIndex + 1}`}
                          fill
                          className="object-contain relative z-10 cursor-zoom-in transition-transform hover:scale-[1.01]"
                          sizes="(max-width: 768px) 100vw, 800px"
                          onClick={() => setFullscreenProjectImage(selectedProject.gallery![currentImageIndex])}
                        />

                        {/* Hover Overlay Zoom Indicator */}
                        <div 
                          onClick={() => setFullscreenProjectImage(selectedProject.gallery![currentImageIndex])}
                          className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-zoom-in"
                        >
                          <div className="bg-slate-900/90 text-white dark:bg-sky-blue dark:text-slate-900 text-xs font-black px-4 py-2 rounded-xl border-2 border-black dark:border-sky-300 shadow-[3px_3px_0_0_#000] dark:shadow-none flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-auto">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                            Klik untuk memperbesar
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Carousel Navigations */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow cursor-pointer transition-all hover:scale-105 active:scale-95 z-20"
                          aria-label="Previous Image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery!.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow cursor-pointer transition-all hover:scale-105 active:scale-95 z-20"
                          aria-label="Next Image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Indicators (Instagram Style) */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                          {selectedProject.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-2 rounded-full border border-slate-950 dark:border-white transition-all duration-300 cursor-pointer ${
                                idx === currentImageIndex ? `w-5 ${modalTheme?.modalDot}` : "w-2 bg-white/60 hover:bg-white"
                              }`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Fallback Single Image
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-black shadow-md flex items-center justify-center group">
                    {/* Blurred background */}
                    <div className="absolute inset-0 filter blur-xl scale-110 opacity-30 select-none pointer-events-none">
                      <Image
                        src={selectedProject.image || getPlaceholderImage(getFilterCategory(selectedProject.category))}
                        alt="Blurred background"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Image
                      src={selectedProject.image || getPlaceholderImage(getFilterCategory(selectedProject.category))}
                      alt={selectedProject.title}
                      fill
                      className="object-contain relative z-10 cursor-zoom-in transition-transform hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, 800px"
                      onClick={() => setFullscreenProjectImage(selectedProject.image || getPlaceholderImage(getFilterCategory(selectedProject.category)))}
                    />

                    {/* Hover Overlay Zoom Indicator */}
                    <div 
                      onClick={() => setFullscreenProjectImage(selectedProject.image || getPlaceholderImage(getFilterCategory(selectedProject.category)))}
                      className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-zoom-in"
                    >
                      <div className="bg-slate-900/90 text-white dark:bg-sky-blue dark:text-slate-900 text-xs font-black px-4 py-2 rounded-xl border-2 border-black dark:border-sky-300 shadow-[3px_3px_0_0_#000] dark:shadow-none flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-auto">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        Klik untuk memperbesar
                      </div>
                    </div>
                  </div>
                )}

                {/* Thumbnails strip bawah (jika lebih dari 1 gambar) */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto w-full max-w-full pb-1 scrollbar-thin justify-start md:justify-center">
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-16 h-12 rounded-lg relative overflow-hidden border-2 transition-all cursor-pointer ${
                          idx === currentImageIndex
                            ? `${modalTheme?.thumbnailActive}`
                            : "border-slate-300 dark:border-slate-800 hover:border-slate-900 dark:hover:border-slate-500 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt="Mini Thumbnail"
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* SISI KANAN: Detail Informasi (Lebih ramping 40% untuk mengimbangi gambar landscape yang lebar) */}
              <div className="w-full md:w-[40%] p-6 md:p-8 flex flex-col justify-start overflow-y-auto bg-white dark:bg-slate-950 pr-4 md:pr-8">
                <span className={`inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-3 mt-2 md:mt-0 ${modalTheme?.modalBadge}`}>
                  {selectedProject.category}
                </span>

                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-col gap-2 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200">
                    <span className="w-24 text-slate-400 dark:text-slate-500 font-medium">Peran:</span>
                    <span>{selectedProject.role}</span>
                  </div>
                  <div className="flex items-center text-sm font-bold text-slate-800 dark:text-slate-200">
                    <span className="w-24 text-slate-400 dark:text-slate-500 font-medium">Status:</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      Completed
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 border-b pb-1 dark:border-slate-800">
                  Deskripsi Proyek
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 border-b pb-1 dark:border-slate-800">
                      Poin Penting & Kontribusi
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs mt-0.5 border ${modalTheme?.modalHighlight}`}>
                            {idx + 1}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 border-b pb-1 dark:border-slate-800">
                    Teknologi yang Digunakan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className={`text-xs font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700/80 ${modalTheme?.hoverTech} transition-colors duration-200 cursor-default`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox Resolusi Penuh Gambar Proyek (Poped-up) */}
      <AnimatePresence>
        {fullscreenProjectImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 md:p-8"
            onClick={() => setFullscreenProjectImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-[130] p-3 bg-white/10 hover:bg-white/20 hover:text-red-400 text-white rounded-full backdrop-blur-md transition-all cursor-pointer hover:scale-105 active:scale-95"
              onClick={() => setFullscreenProjectImage(null)}
              aria-label="Tutup resolusi penuh"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-[85vh] rounded-2xl overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fullscreenProjectImage}
                alt="Selected Project Full-size Photo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
