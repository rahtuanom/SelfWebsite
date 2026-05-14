"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Fresh Graduate & Tech Enthusiast",
    company: "Freelance / Open to Work",
    date: "Sekarang (Present)",
    description: "Siap berkontribusi di bidang AI, Data Science, atau Web Development. Menggabungkan logika engineering dengan sentuhan estetika desain grafis untuk menciptakan solusi yang berdampak.",
  },
  {
    id: 2,
    role: "Penyusun Skripsi: Indonesian News Topic Modeling",
    company: "Universitas Udayana",
    date: "2024 - 2026",
    description: "Merancang end-to-end NLP pipeline untuk memproses 100.000+ judul berita. Mengimplementasikan custom domain-based stopwords dan model Agglomerative Hierarchical Clustering untuk visualisasi taksonomi teks yang optimal.",
  },
  {
    id: 3,
    role: "MSIB Batch 5 (Data & Software Engineering)",
    company: "RevoU",
    date: "Agu 2023 - Des 2023",
    description: "Lulus dengan nilai 92/100. Di Capstone Data Analysis, berfokus pada data cleaning & preprocessing. Di Capstone Software Engineering, berperan sebagai Team Leader yang memandu pengembangan aplikasi web secara full-stack.",
  },
  {
    id: 4,
    role: "S1 Teknologi Informasi (Konsentrasi Data Science)",
    company: "Fakultas Teknik, Universitas Udayana",
    date: "Angkatan 2021 - Lulus Apr 2026",
    description: "Mempelajari esensi pemrosesan data (Statistika, Data Mining, Machine Learning, Deep Learning, Computer Vision) hingga rekayasa perangkat lunak dengan IPK 3.67.",
  }
];

export default function Experience() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      
      {/* Doodle Pattern for Light Mode (Grid/Lined Paper) */}
      <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-royal-blue dark:text-sky-blue mb-2">Experience Logs</h2>
        <div className="w-20 h-1 bg-royal-blue dark:bg-sky-blue rounded-full"></div>
      </motion.div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-10 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-sky-300 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a] dark:bg-sky-blue dark:border-4 dark:border-background dark:shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
            
            {/* Dual-Style Card */}
            <div className="p-6 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl">
              <span className="text-sm font-bold text-slate-900 dark:text-sky-blue tracking-wider uppercase mb-1 block">
                {exp.date}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
              <h4 className="text-md font-medium text-slate-500 dark:text-slate-400 mb-4">{exp.company}</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
