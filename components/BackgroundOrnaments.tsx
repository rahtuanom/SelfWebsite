"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundOrnaments() {
  // Seamless sine wave paths covering 2000 viewBox width (2 full cycles)
  // Center is at Y=100.
  const wave1 = "M 0 100 Q 250 200 500 100 T 1000 100 Q 1250 200 1500 100 T 2000 100";
  const wave2 = "M 0 100 Q 250 0 500 100 T 1000 100 Q 1250 0 1500 100 T 2000 100";
  const wave3 = "M 0 100 Q 250 150 500 100 T 1000 100 Q 1250 150 1500 100 T 2000 100";
  const wave4 = "M 0 100 Q 250 50 500 100 T 1000 100 Q 1250 50 1500 100 T 2000 100";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-transparent flex items-end opacity-0 dark:opacity-100 transition-opacity duration-500">

      {/* Wave Layer 1 */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200vw] h-[50vh] opacity-40 dark:opacity-30 filter blur-[4px] will-change-transform transform-gpu"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <svg viewBox="0 0 2000 200" preserveAspectRatio="none" className="w-full h-full">
          <path d={wave1} fill="none" className="stroke-royal-blue" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d={wave2} fill="none" className="stroke-sky-blue" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* Wave Layer 2 - Opposite direction */}
      <motion.div
        className="absolute bottom-[5%] left-0 w-[200vw] h-[60vh] opacity-50 dark:opacity-40 filter blur-[6px] will-change-transform transform-gpu"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <svg viewBox="0 0 2000 200" preserveAspectRatio="none" className="w-full h-full">
          <path d={wave3} fill="none" className="stroke-sky-blue" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          <path d={wave4} fill="none" className="stroke-royal-blue" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* Wave Layer 3 - Faster */}
      <motion.div
        className="absolute bottom-[10%] left-0 w-[200vw] h-[40vh] opacity-60 dark:opacity-50 filter blur-[3px] will-change-transform transform-gpu"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <svg viewBox="0 0 2000 200" preserveAspectRatio="none" className="w-full h-full">
          <path d={wave2} fill="none" className="stroke-royal-blue" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* Wave Layer 4 - Taller */}
      <motion.div
        className="absolute bottom-[-10%] left-0 w-[200vw] h-[80vh] opacity-30 dark:opacity-20 filter blur-[8px] will-change-transform transform-gpu"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <svg viewBox="0 0 2000 200" preserveAspectRatio="none" className="w-full h-full">
          <path d={wave1} fill="none" className="stroke-sky-blue" strokeWidth="4" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* Blend glow at the bottom to make the lines emerge smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background via-background/10 to-transparent z-10"></div>
    </div>
  );
}