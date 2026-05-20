"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { projectsData, Project } from "@/data/content";
import Image from "next/image";

// Kategori Filter yang diperhalus (Digabungkan)
const CATEGORIES = ["Semua", "Web & App", "Data & AI", "UI/UX & Design", "Lainnya"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                    {/* Gambar Proyek / Kategori */}
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
                        
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setCurrentImageIndex(0);
                          }}
                          className="inline-flex items-center gap-1 text-royal-blue dark:text-sky-blue font-bold hover:underline group/link cursor-pointer bg-transparent border-0"
                        >
                          Detail
                          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
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

            {/* Modal Card Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-5xl h-[85vh] md:h-[80vh] bg-white dark:bg-slate-950 border-[3px] border-slate-900 dark:border-white/10 shadow-[8px_8px_0px_0px_#0f172a] dark:shadow-2xl rounded-3xl overflow-hidden z-[101] flex flex-col md:flex-row"
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

              {/* SISI KIRI: Galeri Gambar / Carousel */}
              <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-900 border-b-[3px] md:border-b-0 md:border-r-[3px] border-slate-900 dark:border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden h-[40%] md:h-full">
                {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                  <div className="relative w-full h-[80%] md:h-[70%] rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-black group shadow-md flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={`${selectedProject.title} Gambar ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Carousel Navigations */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow cursor-pointer transition-all hover:scale-105 active:scale-95"
                          aria-label="Previous Image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery!.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow cursor-pointer transition-all hover:scale-105 active:scale-95"
                          aria-label="Next Image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Indicators (Instagram Style) */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                          {selectedProject.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-2 rounded-full border border-slate-950 dark:border-white transition-all duration-300 cursor-pointer ${
                                idx === currentImageIndex ? "w-5 bg-royal-blue dark:bg-sky-blue" : "w-2 bg-white/60 hover:bg-white"
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
                  <div className="relative w-full h-[85%] rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-black shadow-md flex items-center justify-center">
                    <Image
                      src={selectedProject.image || getPlaceholderImage(getFilterCategory(selectedProject.category))}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
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
                            ? "border-royal-blue dark:border-sky-blue scale-105 ring-2 ring-royal-blue/20 dark:ring-sky-blue/20"
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

              {/* SISI KANAN: Detail Informasi */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-start overflow-y-auto h-[60%] md:h-full bg-white dark:bg-slate-950 pr-4 md:pr-8">
                <span className="inline-block text-xs font-black uppercase tracking-wider text-royal-blue dark:text-sky-blue bg-royal-blue/10 dark:bg-sky-blue/10 px-3 py-1 rounded-full w-fit mb-3 mt-2 md:mt-0">
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
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-royal-blue/10 dark:bg-sky-900/50 flex items-center justify-center text-royal-blue dark:text-sky-blue font-black text-xs mt-0.5 border border-royal-blue/20 dark:border-sky-blue/20">
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
                      <span key={tech} className="text-xs font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700/80 hover:bg-royal-blue hover:text-white dark:hover:bg-sky-blue dark:hover:text-slate-950 transition-colors duration-200 cursor-default">
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
    </PageTransition>
  );
}
