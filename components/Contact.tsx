"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import MagicCard from "./MagicCard";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto py-12 px-6 mb-12 overflow-visible">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-center items-center">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="4" className="text-sky-300 absolute -top-10 -left-10 transform -rotate-12">
          <path d="M 0 50 Q 25 100 50 50 T 100 50 T 150 50 T 200 50" strokeLinecap="round" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-black text-royal-blue dark:text-sky-blue mb-3 tracking-tight">
          Let's Connect & Collaborate
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
          Tertarik untuk bekerja sama, berdiskusi mengenai teknologi, atau sekadar bertukar sapa? Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
        </p>
      </motion.div>

      {/* Bento Grid Contact Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 relative z-10"
      >

        {/* Email Card (Span 3 cols on MD, span 4 cols on LG) */}
        <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 h-full">
          <MagicCard
            glowColor="rgba(239, 68, 68, 0.15)"
            borderColor="rgba(239, 68, 68, 0.5)"
            neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#ea4335]"
            className="h-full"
          >
            <Link href="mailto:rahtuanom@gmail.com" className="group flex flex-col justify-between h-full p-6 transition-all duration-300 dark:bg-black/20">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-red-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Kirim Pesan Profesional</p>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-red-500 transition-colors">rahtuanom@gmail.com</h3>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </MagicCard>
        </motion.div>

        {/* WhatsApp Card (Span 3 cols on MD, span 2 cols on LG) */}
        <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-2 h-full">
          <MagicCard
            glowColor="rgba(37, 211, 102, 0.15)"
            borderColor="rgba(37, 211, 102, 0.5)"
            neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#25D366]"
            className="h-full"
          >
            <Link href="https://wa.me/62895367473629" target="_blank" className="group flex flex-col justify-between h-full p-6 transition-all duration-300 dark:bg-black/20">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-[#25D366]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Respon Cepat</p>
                <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
              </div>
            </Link>
          </MagicCard>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div variants={itemVariants} className="md:col-span-2 h-full">
          <MagicCard
            glowColor="rgba(10, 102, 194, 0.15)"
            borderColor="rgba(10, 102, 194, 0.5)"
            neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#0A66C2]"
            className="h-full"
          >
            <Link href="https://linkedin.com/in/rahtuanomhariyadi" target="_blank" className="group flex flex-col justify-between h-full p-6 transition-all duration-300 dark:bg-black/20">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0A66C2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-[#0A66C2]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Jaringan</p>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</h3>
              </div>
            </Link>
          </MagicCard>
        </motion.div>

        {/* GitHub Card */}
        <motion.div variants={itemVariants} className="md:col-span-2 h-full">
          <Link href="https://github.com/rahtuanom" target="_blank" className="group flex flex-col justify-between h-full p-6 rounded-2xl transition-all duration-300 bg-slate-900 border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#333] hover:-translate-y-1 dark:bg-slate-900 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-md dark:hover:shadow-xl dark:hover:border-slate-500">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Repositori</p>
              <h3 className="text-lg font-black text-white group-hover:text-slate-300 transition-colors">GitHub</h3>
            </div>
          </Link>
        </motion.div>

        {/* Instagram Card */}
        <motion.div variants={itemVariants} className="md:col-span-2 h-full">
          <MagicCard
            glowColor="rgba(225, 48, 108, 0.15)"
            borderColor="rgba(225, 48, 108, 0.5)"
            neobrutalistHoverShadow="hover:shadow-[6px_6px_0_0_#E1306C]"
            className="h-full"
          >
            <Link href="https://instagram.com/rah2anom" target="_blank" className="group flex flex-col justify-between h-full p-6 transition-all duration-300 dark:bg-black/20">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-[#E1306C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 dark:bg-[#E1306C]/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Sosial</p>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#E1306C] transition-colors">Instagram</h3>
              </div>
            </Link>
          </MagicCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
