"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Freelance Developer & AI Enthusiast",
    company: "Open to Work / Available for Hire",
    date: "Sekarang (Present)",
    description: "Membawa kombinasi unik antara logika rekayasa perangkat lunak (Software Engineering) dan estetika antarmuka (UI/UX) untuk membangun solusi digital fungsional. Aktif mengeksplorasi ekosistem AI terapan dan arsitektur web modern.",
    highlight: "Ready to impact your team from Day 1."
  },
  {
    id: 2,
    role: "NLP Engineer / Data Scientist (Skripsi)",
    company: "Universitas Udayana",
    date: "2024 - 2026",
    description: "Merancang dan mengeksekusi pipeline pemrosesan bahasa alami (NLP) end-to-end untuk memetakan taksonomi dari 100.000+ data teks. Mengoptimalkan noise reduction menggunakan custom stopwords dan Machine Learning clustering tingkat lanjut.",
    highlight: "Mendemonstrasikan keahlian analitis pada dataset berskala besar."
  },
  {
    id: 3,
    role: "Data & Software Engineering Trainee",
    company: "RevoU Academy (MSIB Kampus Merdeka)",
    date: "Agu 2023 - Des 2023",
    description: "Lulus dengan predikat memuaskan (92/100). Berperan ganda sebagai analis data yang menangani pembersihan data kotor (Data Cleaning), sekaligus Team Leader dalam pengembangan produk web (Full-stack) dengan metodologi Agile.",
    highlight: "Kemampuan memimpin lintas disiplin (Data & Web)."
  },
  {
    id: 4,
    role: "S1 Teknologi Informasi",
    company: "Universitas Udayana",
    date: "Angkatan 2021 (Target Lulus 2026)",
    description: "Mendalami arsitektur sistem informasi, penambangan data (Data Mining), hingga Computer Vision. Membangun fondasi algoritma yang kuat untuk pemecahan masalah teknikal kompleks secara sistematis.",
    highlight: "IPK: 3.67 / 4.00"
  }
];

export default function Experience() {
  return (
    <section className="relative w-full py-16 px-6 overflow-hidden">
      
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
          className="mb-12 md:text-center flex flex-col md:items-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-royal-blue dark:text-sky-blue mb-3 tracking-tight">
            Professional Trajectory
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base mb-5">
            Kombinasi antara kecerdasan analitikal dan keahlian teknikal. Berikut adalah rekam jejak evolusi profesional saya sejauh ini.
          </p>
          <div className="w-20 h-1.5 bg-royal-blue dark:bg-sky-blue rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-[3px] border-slate-300 dark:border-white/10 pl-8 ml-4 md:ml-10">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mb-8 relative group"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-white dark:bg-slate-900 border-[4px] border-royal-blue dark:border-sky-blue shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(15,23,42,1)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-royal-blue dark:group-hover:bg-sky-blue"></div>
              
              {/* Timeline Content Card */}
              <div className="p-6 rounded-2xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] group-hover:shadow-[6px_6px_0_0_#4169E1] group-hover:-translate-y-1 dark:bg-black/30 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-md dark:group-hover:shadow-xl dark:group-hover:border-sky-blue/50">
                <header className="mb-3">
                  <time className="inline-block px-3 py-1 mb-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-white bg-slate-900 dark:bg-sky-blue/20 dark:text-sky-blue rounded-full">
                    {exp.date}
                  </time>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-base md:text-lg font-bold text-royal-blue dark:text-sky-blue/80 mt-1">
                    {exp.company}
                  </h4>
                </header>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                  {exp.description}
                </p>
                
                <div className="pt-4 border-t-2 border-dashed border-slate-200 dark:border-white/10">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    {exp.highlight}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
