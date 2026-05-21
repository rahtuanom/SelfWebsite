"use client";

import React, { useState, useEffect } from "react";

export default function TypewriterEffect() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  
  const [phase, setPhase] = useState<number>(0);
  
  const targetLines1 = ["Data Science", "Web", "Graphic"];
  const targetLines2 = ["Developer", "Developer", "Design"];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (phase) {
      case 0: // Type "Data Science" on line 1
        setLine2("Developer"); // line 2 is static for now
        if (line1.length < targetLines1[0].length) {
          timeout = setTimeout(() => setLine1(targetLines1[0].slice(0, line1.length + 1)), 100);
        } else {
          timeout = setTimeout(() => setPhase(1), 2000);
        }
        break;
      case 1: // Pause
        timeout = setTimeout(() => setPhase(2), 500);
        break;
      case 2: // Erase "Data Science" from line 1
        if (line1.length > 0) {
          timeout = setTimeout(() => setLine1(line1.slice(0, -1)), 50);
        } else {
          timeout = setTimeout(() => setPhase(3), 500);
        }
        break;
      case 3: // Type "Web" on line 1
        if (line1.length < targetLines1[1].length) {
          timeout = setTimeout(() => setLine1(targetLines1[1].slice(0, line1.length + 1)), 100);
        } else {
          timeout = setTimeout(() => setPhase(4), 2000);
        }
        break;
      case 4: // Pause
        timeout = setTimeout(() => setPhase(5), 500);
        break;
      case 5: // Erase "Web" on line 1 and "Developer" on line 2
        if (line1.length > 0) {
          timeout = setTimeout(() => setLine1(line1.slice(0, -1)), 50);
        } else if (line2.length > 0) {
          timeout = setTimeout(() => setLine2(line2.slice(0, -1)), 50);
        } else {
          timeout = setTimeout(() => setPhase(6), 500);
        }
        break;
      case 6: // Type "Graphic" on line 1
        if (line1.length < targetLines1[2].length) {
          timeout = setTimeout(() => setLine1(targetLines1[2].slice(0, line1.length + 1)), 100);
        } else if (line2.length < targetLines2[2].length) {
          timeout = setTimeout(() => setLine2(targetLines2[2].slice(0, line2.length + 1)), 100);
        } else {
          timeout = setTimeout(() => setPhase(7), 2000);
        }
        break;
      case 7: // Pause
        timeout = setTimeout(() => setPhase(8), 500);
        break;
      case 8: // Erase "Graphic Design"
        if (line2.length > 0) {
          timeout = setTimeout(() => setLine2(line2.slice(0, -1)), 50);
        } else if (line1.length > 0) {
          timeout = setTimeout(() => setLine1(line1.slice(0, -1)), 50);
        } else {
          timeout = setTimeout(() => setPhase(0), 500);
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [line1, line2, phase]);

  // Dynamic color selection based on active phase
  const getLine1Color = () => {
    if (phase === 0 || phase === 1 || phase === 2) return "text-indigo-600 dark:text-indigo-400"; // Data Science
    if (phase === 3 || phase === 4 || phase === 5) return "text-royal-blue dark:text-sky-blue"; // Web
    return "text-pink-600 dark:text-pink-400"; // Graphic
  };

  const getLine2Color = () => {
    if (phase === 6 || phase === 7 || phase === 8) return "text-pink-600 dark:text-pink-400"; // Design
    return "text-slate-800 dark:text-slate-200"; // Developer
  };

  return (
    <div className="flex flex-col items-start leading-[1.15] font-mono tracking-tight select-none">
      <span className={`text-4xl md:text-5xl font-black ${getLine1Color()} transition-colors duration-300`}>
        {line1}
        {phase !== 0 && phase !== 1 && phase !== 2 && phase !== 3 && phase !== 4 && (
          <span className="animate-pulse text-royal-blue dark:text-sky-blue ml-0.5">_</span>
        )}
      </span>
      <span className={`text-4xl md:text-5xl font-black ${getLine2Color()} transition-colors duration-300`}>
        {line2}
        {(phase === 0 || phase === 1 || phase === 2 || phase === 3 || phase === 4) && (
          <span className="animate-pulse text-royal-blue dark:text-sky-blue ml-0.5">_</span>
        )}
      </span>
    </div>
  );
}
