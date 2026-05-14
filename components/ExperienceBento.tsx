"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { organizationsData, committeesData } from "@/data/content";

// Kombinasikan semua pengalaman untuk dirender dalam sidebar
const allExperiences = [...organizationsData, ...committeesData];

export default function ExperienceBento() {
  const [activeItemId, setActiveItemId] = useState<number | string | null>(null);
  
  // Mencegah scroll pada body saat sidebar terbuka
  useEffect(() => {
    if (activeItemId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeItemId]);

  const activeItem = allExperiences.find(
    (item) => `${item.organization}-${item.id}` === activeItemId
  );

  return (
    <>
      {/* Container Bento Experience Utama */}
      <div className="md:col-span-1 lg:col-span-3 p-8 md:p-10 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[6px_6px_0_0_#0f172a] dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-xl relative w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-slate-100 dark:border-white/10">
          <div>
            <h2 className="text-3xl font-black text-foreground flex items-center gap-3">
              <span className="text-royal-blue dark:text-sky-blue">🚀</span> Perjalanan & Aktivitas
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Sebuah rangkuman dedikasi. Klik item untuk melihat detail tanggung jawab.
            </p>
          </div>
        </div>

        {/* SEO-Friendly Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* Kolom 1: Organisasi */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-5 flex items-center gap-2">
              <span className="text-royal-blue dark:text-sky-blue">🏛️</span> Organisasi
            </h3>
            <ul className="flex flex-col gap-3">
              {organizationsData.map((org, i) => (
                <motion.li
                  key={`${org.organization}-${org.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveItemId(`${org.organization}-${org.id}`)}
                  className="group relative bg-slate-50 border-2 border-transparent hover:border-royal-blue hover:bg-white p-4 rounded-2xl cursor-pointer transition-all duration-300 dark:bg-slate-900/50 dark:hover:border-sky-blue dark:hover:bg-slate-800/80 shadow-sm hover:shadow-[4px_4px_0_0_#4169e1] dark:hover:shadow-[0_0_15px_rgba(135,206,235,0.2)]"
                  role="button"
                  tabIndex={0}
                  aria-label={`Lihat detail peran ${org.role} di ${org.organization}`}
                >
                  <div className="pr-8">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
                      {org.role}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {org.organization} <span className="mx-1">•</span> {org.period}
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-blue dark:text-sky-blue">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Kolom 2: Kepanitiaan */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-5 flex items-center gap-2">
              <span className="text-sky-500 dark:text-sky-400">🎤</span> Kepanitiaan (Event)
            </h3>
            <ul className="flex flex-col gap-3">
              {committeesData.map((com, i) => (
                <motion.li
                  key={`${com.organization}-${com.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setActiveItemId(`${com.organization}-${com.id}`)}
                  className="group relative bg-royal-blue/5 border-2 border-transparent hover:border-royal-blue/30 p-4 rounded-2xl cursor-pointer transition-all duration-300 dark:bg-sky-900/10 dark:hover:border-sky-500/30 dark:hover:bg-sky-900/20 shadow-sm"
                  role="button"
                  tabIndex={0}
                  aria-label={`Lihat detail peran ${com.role} di ${com.organization}`}
                >
                  <div className="pr-8">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-royal-blue dark:group-hover:text-sky-blue transition-colors">
                      {com.role}
                    </h4>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                      {com.organization} <span className="mx-1">•</span> {com.period}
                    </p>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-blue dark:text-sky-blue">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>
          
        </div>
      </div>

      {/* SIDEBAR / DRAWER OVERLAY */}
      <AnimatePresence>
        {activeItemId && activeItem && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              aria-hidden="true"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-white dark:bg-slate-950 z-[101] shadow-2xl overflow-y-auto border-l-4 border-black dark:border-slate-800"
              role="dialog"
              aria-modal="true"
            >
              {/* Header Sidebar */}
              <div className="p-8 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-10 flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {activeItem.role}
                  </h2>
                  <p className="text-royal-blue dark:text-sky-blue font-bold mt-2">
                    {activeItem.organization}
                  </p>
                  <p className="text-sm font-medium text-slate-500 mt-1">{activeItem.period}</p>
                </div>
                
                <button 
                  onClick={() => setActiveItemId(null)}
                  className="p-2 bg-slate-100 hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:hover:bg-red-900/30 rounded-full transition-colors flex-shrink-0 ml-4"
                  aria-label="Tutup sidebar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Body Sidebar */}
              <div className="p-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Deskripsi</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-8">
                  {activeItem.description}
                </p>

                {activeItem.responsibilities && activeItem.responsibilities.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tanggung Jawab Utama</h3>
                    <ul className="space-y-4">
                      {activeItem.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-royal-blue/10 dark:bg-sky-900/50 flex items-center justify-center text-royal-blue dark:text-sky-blue font-bold text-sm mt-0.5 border border-royal-blue/20 dark:border-sky-blue/20">
                            {idx + 1}
                          </span>
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
