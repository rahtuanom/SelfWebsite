"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/content";
import PremiumProjectCard from "./PremiumProjectCard";
import LogoLoop from "./LogoLoop";

export default function PortfolioPreview() {
  const router = useRouter();
  
  // Ambil project yang ditandai featured dan diurutkan berdasarkan featuredOrder, batasi maksimal 3 project saja untuk estetika grid
  const topProjects = projectsData
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
    .slice(0, 3);

  const handleOpenDetails = () => {
    router.push("/projects");
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

        {/* Spot Atas: Tech Stack LogoLoop (Scrolling Kiri) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/30 dark:bg-slate-950/20 backdrop-blur-sm"
        >
          <LogoLoop direction="left" speed={35} />
        </motion.div>

        {/* 3 Grid Layout yang telah di-upgrade dengan Premium3D Card & Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <PremiumProjectCard
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            </motion.div>
          ))}
        </div>

        {/* Spot Bawah: Tech Stack LogoLoop (Scrolling Kanan) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/5 bg-slate-50/30 dark:bg-slate-950/20 backdrop-blur-sm"
        >
          <LogoLoop direction="right" speed={35} />
        </motion.div>
      </div>
    </section>
  );
}
