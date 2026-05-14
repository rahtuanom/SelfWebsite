"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { galleryImages } from "./images";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-6 bg-transparent text-foreground overflow-hidden">
        
        {/* Doodle Pattern for Light Mode (Diagonal Lines) */}
        <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-20 justify-center items-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal" width="20" height="20" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
          </svg>
        </div>

        <div className="w-full max-w-6xl z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue dark:text-sky-blue mb-4 text-center">
            Visual Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of moments, achievements, and behind-the-scenes glimpses into my life and career.
          </p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl dark:shadow-black/50 border border-slate-200 dark:border-white/10"
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image} 
                  alt={`Gallery Photo ${index + 1}`} 
                  placeholder="blur"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-royal-blue/0 group-hover:bg-royal-blue/20 dark:group-hover:bg-sky-blue/20 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full rounded-lg overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Full-size Photo"
                placeholder="blur"
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
