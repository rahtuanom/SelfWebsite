"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { projectsData } from "@/data/content";
import Image from "next/image";

// Kategori Filter yang diperhalus (Digabungkan)
const CATEGORIES = ["Semua", "Web & App", "Data & AI", "UI/UX & Design", "Lainnya"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Semua");

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

  // Filter project yang ditampilkan
  const filteredProjects = activeFilter === "Semua" 
    ? projectsData 
    : projectsData.filter(p => getFilterCategory(p.category) === activeFilter);

  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-6 bg-transparent text-foreground overflow-hidden">
        
        {/* Doodle Pattern for Light Mode */}
        <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-center items-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-slate-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="w-full max-w-7xl z-10 relative">
          <header className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-black text-royal-blue dark:text-sky-blue mb-4 tracking-tight">
              Koleksi Karya & Riset
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Kumpulan proyek, riset akademik, dan publikasi yang pernah saya kerjakan. Menjangkau mulai dari rekayasa perangkat lunak hingga analisis data tingkat lanjut.
            </p>
          </header>

          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                  activeFilter === cat
                    ? "bg-royal-blue text-white border-black dark:bg-sky-blue dark:text-slate-900 dark:border-sky-300 shadow-[4px_4px_0_0_#000] dark:shadow-[0_0_15px_rgba(135,206,235,0.4)] translate-y-[-2px]"
                    : "bg-white text-slate-600 border-transparent hover:border-black dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-white/30 dark:border-white/5 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID PORTFOLIO (3 Columns SEO Friendly) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const mappedCategory = getFilterCategory(project.category);
                const imageSrc = project.image || getPlaceholderImage(mappedCategory);

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex flex-col h-full bg-white rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0_0_#0f172a] hover:shadow-[8px_8px_0_0_#0f172a] hover:-translate-y-1 transition-all duration-300 overflow-hidden dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl dark:hover:border-sky-blue/50"
                  >
                    {/* Gambar AI Placeholder */}
                    <figure className="w-full h-52 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b-2 border-slate-900 dark:border-white/10">
                      <Image 
                        src={imageSrc} 
                        alt={`Ilustrasi project ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay Glow Effect in Dark Mode */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </figure>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-royal-blue dark:text-sky-blue bg-royal-blue/10 dark:bg-sky-blue/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
                        {project.title}
                      </h2>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills (Limit to 3 so it doesn't overflow) */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs font-bold px-2 py-1 text-slate-400">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-auto pt-4 border-t-2 border-dashed border-slate-200 dark:border-white/10 flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                          {project.role}
                        </span>
                        
                        <Link href="#" className="inline-flex items-center gap-1 text-royal-blue dark:text-sky-blue font-bold hover:underline group/link">
                          Detail
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 dark:text-slate-400 text-lg">Belum ada project di kategori ini.</p>
            </div>
          )}

        </div>
      </main>
    </PageTransition>
  );
}
