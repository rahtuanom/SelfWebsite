"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { organizationsData, committeesData } from "@/data/content";
import MagicCard from "./MagicCard";

// Kombinasikan semua pengalaman untuk dirender dalam sidebar
const allExperiences = [...organizationsData, ...committeesData];

export default function ExperienceBento() {
  const [activeItemId, setActiveItemId] = useState<number | string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mencegah scroll pada body saat sidebar terbuka
  useEffect(() => {
    if (activeItemId !== null) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0); // Reset carousel when opening new item
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

  const nextImage = () => {
    if (activeItem?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeItem.gallery!.length);
    }
  };

  const prevImage = () => {
    if (activeItem?.gallery) {
      setCurrentImageIndex((prev) => (prev === 0 ? activeItem.gallery!.length - 1 : prev - 1));
    }
  };

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
                  className="w-full list-none"
                >
                  <MagicCard
                    glowColor="rgba(65, 105, 225, 0.12)"
                    borderColor="rgba(65, 105, 225, 0.4)"
                    neobrutalistShadow="shadow-sm"
                    neobrutalistHoverShadow="hover:shadow-[4px_4px_0_0_#4169e1]"
                    neobrutalistBorderColor="border-slate-200 dark:border-white/10"
                    innerClassName="bg-slate-50 dark:bg-slate-900/50"
                  >
                    <div
                      onClick={() => setActiveItemId(`${org.organization}-${org.id}`)}
                      className="group relative p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 w-full"
                      role="button"
                      tabIndex={0}
                      aria-label={`Lihat detail peran ${org.role} di ${org.organization}`}
                    >
                      {/* Logo Slot 1:1 */}
                      {org.logo ? (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-700 bg-white">
                          <Image src={org.logo} alt={`Logo ${org.organization}`} fill className="object-cover" sizes="48px" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400">
                          <span className="text-xs font-bold">{org.organization.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      
                      <div className="flex-grow pr-6">
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
                    </div>
                  </MagicCard>
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
                  className="w-full list-none"
                >
                  <MagicCard
                    glowColor="rgba(14, 165, 233, 0.12)"
                    borderColor="rgba(14, 165, 233, 0.4)"
                    neobrutalistShadow="shadow-sm"
                    neobrutalistHoverShadow="hover:shadow-[4px_4px_0_0_#0ea5e9]"
                    neobrutalistBorderColor="border-slate-200 dark:border-white/10"
                    innerClassName="bg-slate-50 dark:bg-slate-900/50"
                  >
                    <div
                      onClick={() => setActiveItemId(`${com.organization}-${com.id}`)}
                      className="group relative p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 w-full"
                      role="button"
                      tabIndex={0}
                      aria-label={`Lihat detail peran ${com.role} di ${com.organization}`}
                    >
                      {/* Logo Slot 1:1 */}
                      {com.logo ? (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-700 bg-white">
                          <Image src={com.logo} alt={`Logo ${com.organization}`} fill className="object-cover" sizes="48px" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400">
                          <span className="text-xs font-bold">{com.organization.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}

                      <div className="flex-grow pr-6">
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
                    </div>
                  </MagicCard>
                </motion.li>
              ))}
            </ul>
          </section>
          
        </div>
      </div>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {activeItemId && activeItem && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
              aria-hidden="true"
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-2 sm:p-4 md:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                className="w-[98vw] md:w-[95vw] max-w-7xl h-[95vh] bg-white dark:bg-slate-950 border-[3px] border-slate-900 dark:border-white/10 shadow-[8px_8px_0px_0px_#0f172a] dark:shadow-2xl overflow-hidden rounded-2xl md:rounded-3xl pointer-events-auto flex flex-col md:flex-row relative"
                role="dialog"
                aria-modal="true"
              >
                {/* Left Side: Instagram-style Carousel Area (with Projects styling) */}
                {activeItem.gallery && activeItem.gallery.length > 0 && (
                  <div className="w-full h-[40vh] md:h-full md:w-[65%] lg:w-[70%] flex-shrink-0 border-b-[3px] md:border-b-0 md:border-r-[3px] border-slate-900 dark:border-white/10 bg-slate-50 dark:bg-slate-900 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    
                    {/* Close Button for Mobile (Floating over image if gallery exists on mobile) */}
                    <button 
                      onClick={() => setActiveItemId(null)}
                      className="absolute top-4 right-4 z-[105] p-2.5 md:hidden bg-slate-100/90 text-slate-900 hover:bg-red-100 hover:text-red-600 rounded-full border-2 border-slate-900 backdrop-blur-md shadow-[2px_2px_0px_0px_#0f172a] transition-all active:scale-95"
                      aria-label="Tutup modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 bg-white dark:bg-black group shadow-md flex items-center justify-center touch-pan-y">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.2}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipe = offset.x;
                            if (swipe < -50) nextImage();
                            else if (swipe > 50) prevImage();
                          }}
                        >
                          {/* Efek blurred background yang mewah */}
                          <div className="absolute inset-0 filter blur-xl scale-110 opacity-30 select-none pointer-events-none">
                            <Image 
                              src={activeItem.gallery[currentImageIndex]}
                              alt="Blurred background"
                              fill
                              className="object-cover"
                            />
                          </div>

                          <Image 
                            src={activeItem.gallery[currentImageIndex]}
                            alt={`Dokumentasi ${activeItem.organization} ${currentImageIndex + 1}`}
                            fill
                            className="object-contain relative z-10 pointer-events-none"
                            sizes="(max-width: 768px) 100vw, 1000px"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {activeItem.gallery.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow-[2px_2px_0px_0px_#0f172a] dark:shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95 z-20"
                            aria-label="Gambar sebelumnya"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 19l-7-7 7-7"/></svg>
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white dark:bg-black/80 dark:hover:bg-black border-2 border-slate-900 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white shadow-[2px_2px_0px_0px_#0f172a] dark:shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95 z-20"
                            aria-label="Gambar selanjutnya"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 5l7 7-7 7"/></svg>
                          </button>
                          
                          {/* Instagram-style Dots Indicator */}
                          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-20">
                            {activeItem.gallery.map((_, idx) => (
                              <button 
                                key={idx} 
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                className={`h-2.5 rounded-full border border-slate-950 dark:border-white transition-all duration-300 cursor-pointer ${
                                  idx === currentImageIndex ? "w-6 bg-slate-900 dark:bg-white" : "w-2.5 bg-white/80 hover:bg-white"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Right Side: Header + Descriptions and Responsibilities */}
                <div className={`h-full flex flex-col ${!activeItem.gallery?.length ? 'w-full' : 'w-full md:w-[35%] lg:w-[30%]'} bg-white dark:bg-slate-950 relative`}>
                  
                  {/* Header Sticky Content (Logo, Title, Close Button) */}
                  <div className="p-5 border-b-[3px] border-slate-900/10 dark:border-white/5 sticky top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-20 flex justify-between items-start flex-shrink-0">
                    <div className="flex gap-4 items-center">
                      {/* Logo Profile Picture Style */}
                      {activeItem.logo ? (
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden relative border-[2.5px] border-slate-900 dark:border-slate-800 bg-white shadow-sm">
                          <Image src={activeItem.logo} alt={`Logo ${activeItem.organization}`} fill className="object-cover" sizes="56px" />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-[2.5px] border-slate-900 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 shadow-sm">
                          <span className="text-sm font-black">{activeItem.organization.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      
                      <div className="flex-1 pr-2">
                        <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white leading-tight">
                          {activeItem.role}
                        </h2>
                        <p className="text-sm md:text-base text-royal-blue dark:text-sky-blue font-bold mt-0.5">
                          {activeItem.organization}
                        </p>
                        <p className="text-xs md:text-sm font-bold text-slate-500 mt-0.5">{activeItem.period}</p>
                      </div>
                    </div>
                    
                    {/* Desktop Close Button (Neo-Brutalist) */}
                    <button 
                      onClick={() => setActiveItemId(null)}
                      className={`p-2 bg-slate-100 hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 dark:hover:bg-red-950/40 dark:hover:text-red-400 rounded-full border-[2px] border-slate-900 dark:border-slate-700 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#0f172a] hover:scale-105 active:scale-95 flex-shrink-0 ${activeItem.gallery?.length ? 'hidden md:flex' : 'flex'}`}
                      aria-label="Tutup modal"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable Body Content */}
                  <div className="p-6 md:p-8 overflow-y-auto flex-1">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-[1.05rem] mb-8 font-medium">
                      {activeItem.description}
                    </p>

                    {activeItem.responsibilities && activeItem.responsibilities.length > 0 && (
                      <>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-5 flex items-center gap-2 border-b-2 border-slate-100 dark:border-slate-800 pb-2">
                          <span className="text-royal-blue dark:text-sky-blue">🎯</span> Tanggung Jawab Utama
                        </h3>
                        <ul className="space-y-4">
                          {activeItem.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-4 items-start bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 shadow-sm transition-transform hover:-translate-y-0.5">
                              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-royal-blue text-white dark:bg-sky-blue dark:text-slate-900 flex items-center justify-center font-black text-xs mt-0.5 shadow-md">
                                {idx + 1}
                              </span>
                              <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-[0.95rem] md:text-base font-medium">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
