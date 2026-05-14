"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-20 px-6 mb-20 overflow-visible">
      
      {/* Doodle Pattern for Light Mode (Squiggles) */}
      <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-40 justify-center items-center">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="4" className="text-sky-300 absolute -top-10 -left-10 transform -rotate-12">
          <path d="M 0 50 Q 25 100 50 50 T 100 50 T 150 50 T 200 50" strokeLinecap="round"/>
          <path d="M 0 80 Q 25 130 50 80 T 100 80 T 150 80 T 200 80" strokeLinecap="round"/>
        </svg>
        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="5" className="text-royal-blue absolute -bottom-10 -right-10 transform rotate-12">
          <path d="M 50 0 L 50 200 M 80 0 L 80 200 M 110 0 L 110 200" strokeDasharray="10 20" strokeLinecap="round"/>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-royal-blue dark:text-sky-blue mb-4">Let's Work Together</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have an exciting project you need help with? Send me an email or contact me via instant message!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto p-8 md:p-10 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[8px_8px_0_0_#0f172a] dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-2xl"
      >
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name"
              className="px-6 py-4 rounded-xl bg-sky-50 border-2 border-slate-900 shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.1)] focus:shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.15)] outline-none text-slate-900 font-medium transition-all dark:bg-black/50 dark:backdrop-blur-md dark:border-white/20 dark:shadow-inner dark:focus:ring-2 dark:focus:ring-sky-blue/50 dark:text-foreground dark:rounded-2xl"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="your@email.com"
              className="px-6 py-4 rounded-xl bg-sky-50 border-2 border-slate-900 shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.1)] focus:shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.15)] outline-none text-slate-900 font-medium transition-all dark:bg-black/50 dark:backdrop-blur-md dark:border-white/20 dark:shadow-inner dark:focus:ring-2 dark:focus:ring-sky-blue/50 dark:text-foreground dark:rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2">Message</label>
            <textarea 
              id="message" 
              rows={4}
              placeholder="How can I help you?"
              className="px-6 py-4 rounded-xl bg-sky-50 border-2 border-slate-900 shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.1)] focus:shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.15)] outline-none text-slate-900 font-medium transition-all resize-none dark:bg-black/50 dark:backdrop-blur-md dark:border-white/20 dark:shadow-inner dark:focus:ring-2 dark:focus:ring-sky-blue/50 dark:text-foreground dark:rounded-2xl"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="mt-4 px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 bg-royal-blue border-2 border-slate-900 text-white shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:bg-royal-blue/90 dark:border-transparent dark:rounded-2xl dark:shadow-lg dark:hover:shadow-xl dark:hover:bg-royal-blue"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
