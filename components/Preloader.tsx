"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Cek sessionStorage untuk membatasi tampilan preloader sekali per sesi
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded === "true") {
      setIsLoading(false);
      return;
    }

    // Simulasi loading progress acak yang cepat dan alami (sekitar 1.6 detik total)
    let start = 0;
    const duration = 1600;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    const stepIncrement = 100 / steps;

    const timer = setInterval(() => {
      // Menambah variasi acak agar tidak kaku
      start += stepIncrement + (Math.random() * 3 - 0.5);
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasLoaded", "true");
        }, 350); // Jeda sedikit di angka 100% agar user sempat melihatnya selesai
      }
      setProgress(Math.min(Math.floor(start), 100));
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Kunci scroll pada halaman utama selama loading aktif
  useEffect(() => {
    if (isLoading && isMounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isMounted]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-12 bg-zinc-950 text-white font-sans select-none pointer-events-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-[10px] md:text-xs tracking-[0.25em] text-zinc-500 uppercase font-mono">
            <div>I Gusti Ngurah Anom Hariyadi</div>
            <div>Portfolio &copy; {new Date().getFullYear()}</div>
          </div>

          {/* Konten Tengah: Persentase Pemuatan */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-6"
            >
              <h1 className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Initializing Experience
              </h1>
            </motion.div>
            
            <div className="relative overflow-hidden h-28 md:h-40 flex items-center justify-center">
              <span className="text-8xl md:text-[11rem] font-black tracking-tighter text-zinc-100 tabular-nums leading-none">
                {progress}%
              </span>
            </div>
          </div>

          {/* Footer: Progress Bar Tipis */}
          <div className="w-full space-y-4 max-w-4xl mx-auto">
            <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] md:text-xs text-zinc-500 font-mono tracking-wider">
              <span>SYSTEMS ACTIVE</span>
              <span>CREATIVE PORTFOLIO v1.0</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
