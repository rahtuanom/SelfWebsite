"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web App",
    imagePlaceholder: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "E-Commerce",
    imagePlaceholder: "bg-sky-100 dark:bg-sky-900/20",
  }
];

export default function PortfolioPreview() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      
      {/* Doodle Pattern for Light Mode (Abstract/Stars) */}
      <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-between items-center px-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="text-royal-blue absolute top-10 left-10 animate-pulse">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="text-sky-400 absolute bottom-20 right-20 animate-bounce">
          <circle cx="50" cy="50" r="40" strokeDasharray="10 15" />
        </svg>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-900 absolute top-40 right-40">
          <path d="M10 90 Q 50 10 90 90" strokeDasharray="5 10" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royal-blue dark:text-sky-blue mb-2">Portfolio Showcase</h2>
          <div className="w-20 h-1 bg-royal-blue dark:bg-sky-blue rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 text-slate-900 dark:backdrop-blur-md dark:bg-white/10 dark:border-white/10 dark:text-sky-blue dark:shadow-lg dark:hover:shadow-xl dark:rounded-full dark:hover:scale-105"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="dark:stroke-[2px]" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group block p-4 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl"
          >
            <div className={`w-full h-48 rounded-2xl mb-4 overflow-hidden relative ${project.imagePlaceholder} flex items-center justify-center`}>
              <span className="text-slate-400 dark:text-slate-500 font-medium">[Project Image]</span>
              {/* Add actual Image component when ready */}
            </div>
            <div className="px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-foreground group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
