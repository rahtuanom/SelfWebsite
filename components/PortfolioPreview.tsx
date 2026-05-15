"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/content";

export default function PortfolioPreview() {
  // Ambil 3 project teratas untuk preview
  const topProjects = projectsData.slice(0, 3);

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

  return (
    <section className="relative w-full py-16 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-between items-center px-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="text-royal-blue absolute top-10 left-10 animate-pulse">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-black text-royal-blue dark:text-sky-blue mb-3 tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-4">
              Sekilas karya terbaik saya. Dari arsitektur web hingga analisis big data, dirancang dengan presisi dan fokus pada solusi.
            </p>
            <div className="w-20 h-1.5 bg-royal-blue dark:bg-sky-blue rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/projects" 
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 bg-royal-blue border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 text-white dark:bg-sky-blue dark:border-transparent dark:text-slate-900 dark:shadow-[0_0_15px_rgba(135,206,235,0.4)] dark:hover:shadow-[0_0_25px_rgba(135,206,235,0.6)]"
            >
              Lihat Semua Koleksi
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="dark:stroke-[2px]" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* 3 Grid Layout sama seperti halaman /projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProjects.map((project, index) => {
            const mappedCategory = getFilterCategory(project.category);
            const imageSrc = project.image || getPlaceholderImage(mappedCategory);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col h-full bg-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 transition-all duration-300 overflow-hidden dark:bg-black/30 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-md dark:hover:shadow-xl dark:hover:border-sky-blue/50"
              >
                <figure className="w-full h-40 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-b-2 border-slate-900 dark:border-white/10">
                  <Image 
                    src={imageSrc} 
                    alt={`Ilustrasi project ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </figure>
                
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-royal-blue dark:text-sky-blue bg-royal-blue/10 dark:bg-sky-blue/10 px-3 py-1 rounded-full w-max mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white line-clamp-2 leading-tight group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
