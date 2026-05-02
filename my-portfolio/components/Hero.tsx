"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  text?: string;
  imageSrc?: string;
}

export default function Hero({
  text = "MAYBE THERE IS SOMETHING INTERESTING HERE, DONT BE SHY TO LOOK AROUND• ",
  imageSrc = "/SelfPotrait.png" // User's profile photo
}: HeroProps) {

  const characters = text.split("");
  // Radius for the 3D text orbit
  const radius = 120;

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
      
      {/* Doodle Pattern for Light Mode (Concentric Dashed Circles) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none dark:hidden opacity-30">
        <svg viewBox="0 0 400 400" className="w-full h-full max-w-2xl max-h-2xl animate-[spin_60s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="200" cy="200" r="100" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="150" strokeDasharray="15 15" />
          <circle cx="200" cy="200" r="200" strokeDasharray="20 20" />
          <circle cx="200" cy="200" r="250" strokeDasharray="5 25" />
          <path d="M 200 0 L 200 400 M 0 200 L 400 200" strokeDasharray="5 5" className="opacity-50" />
        </svg>
      </div>

      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 pt-10">

        {/* Introductory Text (Left aligned on Desktop) */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/40 shadow-sm text-sm font-bold text-royal-blue dark:text-sky-blue">
            📍 Gianyar, Bali
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-royal-blue to-sky-blue mb-4">
            Hi, I'm Rahtu Anom
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Visual Data Storyteller.
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-8 max-w-2xl">
            Lulusan Teknologi Informasi Universitas Udayana yang sangat antusias dengan AI, Data, dan Web Development. Mulai dari melatih model *Machine Learning* hingga ngoprek OS Linux di "laptop kentang" demi bisa *survive* ngoding. Di luar layar, saya juga hobi menangkap momen lewat lensa fotografi.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-4">
            <button className="px-8 py-4 rounded-xl font-bold transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 text-slate-900 dark:bg-royal-blue dark:border-transparent dark:text-white dark:shadow-lg dark:hover:shadow-xl dark:hover:bg-royal-blue/90 dark:rounded-full">
              Lihat Project
            </button>
            <button className="px-8 py-4 rounded-xl font-bold transition-all duration-300 bg-sky-200 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 text-slate-900 dark:bg-white/20 dark:backdrop-blur-md dark:border-white/40 dark:text-foreground dark:shadow-lg dark:hover:shadow-xl dark:hover:bg-white/30 dark:rounded-full">
              Hubungi Saya
            </button>
          </div>
        </motion.div>

        {/* Profile Image with 3D Text (Right aligned on Desktop) */}
        <motion.div
          className="relative flex items-center justify-center h-72 w-72 md:h-96 md:w-96 flex-shrink-0 perspective-[1000px]"
          style={{ transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* 3D Halo Text Effect */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(-5deg) rotateZ(10deg) translateY(-25px) scale(1)", // Tilt slightly
            }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: -360 }} // Orbit counter-clockwise
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {characters.map((char, i) => {
                const angle = (i * 360) / characters.length;
                return (
                  <span
                    key={i}
                    className="absolute text-sm font-bold tracking-widest text-royal-blue dark:text-sky-blue drop-shadow-md"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      transformStyle: "preserve-3d",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* Image without border circles */}
          <div
            className="absolute inset-0 overflow-visible flex items-end justify-center"
            style={{ transform: "translateZ(0px)" }}
          >
            <Image
              src={imageSrc}
              alt="Profile Photo"
              width={400}
              height={400}
              className="object-contain scale-130 drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
