"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Download, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  thumb: string;
  width: number;
  height: number;
  aspectRatio: number;
  name: string;
}

// Number of images to render on initial load
const INITIAL_BATCH = 8;
// Number of images to load per scroll batch
const BATCH_SIZE = 8;

export default function GalleryGrid({ initialImages }: { initialImages: ImageItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Progressive lazy loading: IntersectionObserver loads more images as user scrolls
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < initialImages.length) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, initialImages.length));
        }
      },
      { rootMargin: "400px" } // Start loading before user reaches the bottom
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount, initialImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < initialImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : initialImages.length - 1));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, initialImages.length]);

  const selectedImage = selectedIndex !== null ? initialImages[selectedIndex] : null;

  // Clean filename formatter (e.g. "pic12.jpg" -> "Pic12", "my-awesome-photo.png" -> "My Awesome Photo")
  const formatName = useCallback((filename: string) => {
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;
    const cleanName = nameWithoutExt.replace(/[-_.]/g, " ");
    return cleanName.replace(/\b\w/g, (c) => c.toUpperCase());
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : initialImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < initialImages.length - 1 ? prev + 1 : 0));
  };

  // Only render up to visibleCount images
  const visibleImages = initialImages.slice(0, visibleCount);

  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-4 sm:px-6 bg-transparent text-foreground overflow-hidden">

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

        <div className="w-full max-w-7xl z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue dark:text-sky-blue mb-4 text-center">
            Visual Gallery
          </h1>

          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-slate-600 dark:text-slate-400">
              A collection of moments, achievements, and behind-the-scenes glimpses into my life and career.
            </p>
          </div>

          {/* Google Photos / Flickr style Justified Flexbox Layout */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
            {visibleImages.map((image, index) => {
              // Base height for each row
              const baseHeight = 220;
              const widthRatio = image.aspectRatio;

              return (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.8) }}
                  style={{
                    flexGrow: widthRatio,
                    flexBasis: `${widthRatio * baseHeight}px`,
                    width: `${widthRatio * baseHeight}px`,
                  }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100 dark:bg-slate-900/60 backdrop-blur-sm"
                  onClick={() => setSelectedIndex(initialImages.indexOf(image))}
                >
                  {/* Padding-bottom hack matching original image aspect ratio to avoid layout shift */}
                  <div style={{ paddingBottom: `${(1 / widthRatio) * 100}%` }} />

                  {/* Use THUMBNAIL in grid for fast loading */}
                  <Image
                    src={image.thumb}
                    alt={`Gallery photo: ${formatName(image.name)} — dokumentasi kegiatan I Gusti Ngurah Anom Hariyadi`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Premium Hover Overlay & Micro-interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-semibold truncate mb-1">
                      {formatName(image.name)}
                    </p>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs text-slate-300">
                      <span>{image.width} × {image.height} px</span>
                      <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Maximize2 size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Google Photos Dummy element to keep the last row from stretching to full width */}
            <div className="flex-grow-[999999999] h-[220px]" style={{ flexBasis: "999999px" }} />
          </div>

          {/* IntersectionObserver sentinel — triggers loading more images */}
          {visibleCount < initialImages.length && (
            <div ref={sentinelRef} className="w-full h-16 flex items-center justify-center mt-4">
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Memuat gambar lainnya...
              </div>
            </div>
          )}

          {initialImages.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
              <p className="text-slate-500">No images found in your gallery.</p>
              <p className="text-slate-400 text-sm mt-2">
                Add images directly to the <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">public/gallery/</code> folder in your project.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Premium Lightbox Modal with Neo-Brutalism & Blurred Background elements */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button - Premium Neo-Brutalist Border */}
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[130] p-2.5 sm:p-3 bg-white text-slate-900 border-[2.5px] border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#0f172a] rounded-xl transition-all flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              <X size={20} className="stroke-[2.5]" />
            </button>

            {/* Prev Image Button */}
            <button
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-[130] p-2.5 sm:p-3 bg-white text-slate-900 border-[2.5px] border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#0f172a] rounded-xl transition-all flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} className="stroke-[2.5]" />
            </button>

            {/* Next Image Button */}
            <button
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-[130] p-2.5 sm:p-3 bg-white text-slate-900 border-[2.5px] border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#0f172a] rounded-xl transition-all flex items-center justify-center cursor-pointer"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={22} className="stroke-[2.5]" />
            </button>

            {/* Downloader Button */}
            <a
              href={selectedImage.src}
              download={selectedImage.name}
              className="absolute bottom-4 right-4 z-[130] p-3 bg-white text-slate-900 border-[2.5px] border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#0f172a] rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-sm cursor-pointer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Download Image"
            >
              <Download size={18} className="stroke-[2.5]" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Modal Box Frame with spring dynamics */}
            <motion.div
              key={selectedImage.src}
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden flex flex-col items-center justify-center border-[3px] border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] bg-slate-950 p-2 sm:p-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Blurred background copy — uses the thumbnail for fast load instead of re-downloading full-size */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src={selectedImage.thumb}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover blur-2xl opacity-25 scale-110"
                />
              </div>

              <div className="relative w-full h-full flex flex-col justify-center items-center z-10">
                {/* Full-resolution image — only loaded when lightbox is open */}
                <img
                  src={selectedImage.src}
                  alt={`${formatName(selectedImage.name)} — foto dokumentasi oleh I Gusti Ngurah Anom Hariyadi`}
                  className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />

                {/* Meta details bar */}
                <div className="w-full mt-4 px-4 py-2.5 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-2">
                  <span className="font-semibold text-white truncate max-w-xs sm:max-w-md">
                    {formatName(selectedImage.name)}
                  </span>
                  <div className="flex gap-4 font-mono text-[10px] text-slate-400">
                    <span>{selectedImage.width} × {selectedImage.height} px</span>
                    <span>Ratio: {selectedImage.aspectRatio.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
