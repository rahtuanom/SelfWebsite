"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
import Link from "next/link";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// Lazy load komponen berat (WebGL/OGL) agar tidak memblokir render utama
const Aurora = dynamic(() => import("./Aurora"), { ssr: false });

// 1. Static Import of the Images to bypass GitHub Pages basePath issues
import profilePic from "@/public/SelfPotrait.png";
import doodleSvg from "@/public/Doodle.svg";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Ref untuk mendeteksi apakah Hero Section sedang terlihat di layar
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { margin: "0px 0px 200px 0px" }); // Beri margin 200px agar tidak kaget saat scroll

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const characters = "MAYBE THERE IS SOMETHING INTERESTING HERE, PLEASE TAKE A LOOK AROUND • ".split("");
  const radius = 190;

  // Hover states (separated carefully)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden px-6 pt-24 pb-0 -mt-24">

      {/* Dark Mode Aurora Background - Hanya render saat Hero terlihat (isInView) */}
      {mounted && theme === "dark" && isInView && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 will-change-transform">
          <Aurora
            colorStops={["#0ea5e9", "#7c3aed", "#10b981"]}
            blend={0.6}
            amplitude={1.0}
            speed={0.4}
          />
        </div>
      )}

      {/* Light Mode Background: Pure CSS dot grid + static concentric rings
          No animation = near-zero CPU/GPU impact vs the old spinning SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none dark:hidden">
        {/* Dot grid layer */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Static concentric rings (brutalist geometric feel without animation overhead) */}
        <svg
          viewBox="0 0 400 400"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl opacity-[0.1]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="200" cy="200" r="80" strokeDasharray="8 6" />
          <circle cx="200" cy="200" r="130" strokeDasharray="12 8" />
          <circle cx="200" cy="200" r="180" strokeDasharray="16 10" />
        </svg>
        {/* Radial fade vignette for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,0.7) 100%)",
          }}
        />
      </div>

      {/* 1. TOP CENTER: Main Text & Badge */}
      <motion.div
        className="relative text-center flex flex-col items-center z-10 mt-8 md:mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Badge Module */}
        <div className="relative inline-flex items-center px-5 py-2 mb-6 rounded-none dark:rounded-full bg-yellow-400 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] dark:bg-white/10 dark:border-0 dark:shadow-lg dark:backdrop-blur-md text-sm font-bold text-black dark:text-slate-200">
          📍 Gianyar, Bali
          {/* Orange Accent Doodles */}
          <svg className="absolute -top-6 -right-5 w-8 h-8 text-black dark:text-orange-400" fill="none" stroke="orange" strokeWidth="4" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 0l-2-2m2 2l2-2" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
          I'm <span className="text-blue-500 dark:text-sky-blue">Rahtu Anom,</span>
        </h1>

        {/* Orange Curve Doodles (Complimentary color) */}
        <svg className="absolute -left-12 -bottom-10 w-20 h-20 text-black dark:text-orange-400 opacity-100 dark:opacity-80" viewBox="0 0 100 100" fill="none" stroke="orange" strokeWidth="5">
          <path d="M 20 20 Q 50 80 80 20" strokeLinecap="round" />
          <path d="M 30 10 Q 50 60 70 10" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* 2. MIDDLE (ABSOLUTE): Left Description & Right Typewriter */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between z-10 max-w-7xl mx-auto w-full px-6 pointer-events-none mt-40 md:mt-0">

        {/* Left Side: Description */}
        <motion.div
          className="flex justify-start items-center text-left pointer-events-auto w-full md:w-auto mt-32 md:mt-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-xs relative pl-6 md:pl-0">
            <div className="text-5xl text-slate-400 dark:text-slate-500 mb-1 font-serif leading-none opacity-50 absolute -top-6 left-0 md:-left-6">“</div>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed relative z-10">
              Data Scientist lulusan TI Udayana yang dinamis dengan keahlian Linux otodidak yang lahir dari adaptabilitas perangkat keras (<em>laptop kentang</em>). Berpengalaman nyata dalam Web Dev, Desain Grafis, dan Fotografi.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Typewriter */}
        <motion.div
          className="flex justify-end items-center pointer-events-auto w-full md:w-auto mt-8 md:mt-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypewriterEffect />
        </motion.div>

      </div>

      {/* HERO IMAGE */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex items-end justify-center pointer-events-none">
        <motion.div
          className="relative flex items-center justify-center h-72 w-72 md:h-[450px] md:w-[450px] pointer-events-auto"
          style={{ perspective: "1000px", transformStyle: "preserve-3d", willChange: "auto" }}
          animate={{ scale: isPhotoHovered ? 1.05 : 1, y: isPhotoHovered ? -10 : 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          onMouseEnter={() => setIsPhotoHovered(true)}
          onMouseLeave={() => setIsPhotoHovered(false)}
        >
          {/* Dark Mode Glow Effect */}
          <div
            className={`absolute inset-10 rounded-full bg-white/30 blur-3xl transition-opacity duration-500 pointer-events-none hidden dark:block ${isPhotoHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: "translateZ(-50px)" }}
          ></div>

          {/* Light Mode Pop-up Doodles */}
          <AnimatePresence>
            {isPhotoHovered && (
              <motion.div
                key="doodle-pop"
                initial={{ opacity: 0, scale: 0.5, rotate: -20, z: -100 }}
                animate={{ opacity: 1, scale: 1.3, rotate: 0, z: -100 }}
                exit={{ opacity: 0, scale: 1.5, rotate: 20, z: -100 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute -inset-20 dark:hidden pointer-events-none"
              >
                <Image
                  src={doodleSvg}
                  alt="Lightmode Doodle"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Hero Image (Placed exactly at Z=0 to intersect the 3D space) */}
          <div className="absolute bottom-0 flex items-end justify-center pointer-events-none" style={{ transform: "translateZ(-50px)" }}>
            <Image
              src={profilePic}
              alt="Profile Photo"
              width={450}
              height={450}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 3D Halo Text Effect */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(-10deg) rotateZ(5deg) translateY(-30px)",
              willChange: "transform"
            }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              animate={isInView ? { rotateY: -360 } : { rotateY: 0 }}
              transition={isInView ? { duration: 15, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            >
              {characters.map((char, i) => {
                const angle = (i * 360) / characters.length;
                return (
                  <span
                    key={i}
                    className="absolute text-[11px] md:text-xs font-mono font-bold uppercase tracking-widest text-sky-500 dark:text-sky-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] dark:drop-shadow-md"
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

        </motion.div>
      </div>

      {/* BUTTON GROUP (Placed at absolute bottom, overlapping the chest of the photo) */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center p-2 rounded-none dark:rounded-full border-[3px] border-black dark:border-white/10 bg-white dark:bg-black/60 dark:backdrop-blur-md shadow-[8px_8px_0px_0px_#000] dark:shadow-2xl z-40 pointer-events-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="/CV_I Gusti Ngurah Anom Hariyadi.pdf"
          download
          className="px-6 py-3 md:px-8 md:py-3 rounded-none dark:rounded-full font-bold transition-all duration-200 bg-cyan-400 dark:bg-sky-400 text-black dark:text-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] dark:shadow-md dark:hover:shadow-lg dark:hover:-translate-y-1 dark:hover:translate-x-0 flex items-center gap-2 border-[3px] border-black dark:border-transparent z-50 relative"
        >
          Download CV
          <svg
            className="w-4.5 h-4.5"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>

        <Link href="/projects" className="px-6 py-3 md:px-8 md:py-3 rounded-none dark:rounded-full font-bold transition-all duration-200 text-black dark:text-slate-300 hover:bg-pink-400 border-[3px] border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 dark:hover:bg-transparent dark:hover:border-transparent dark:hover:shadow-none dark:hover:-translate-y-0 dark:hover:text-white">
          Portfolio ↗
        </Link>
      </motion.div>

    </section>
  );
}
