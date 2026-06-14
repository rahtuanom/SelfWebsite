import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 flex flex-col items-center justify-center z-0 relative">
      <div className="w-full max-w-4xl px-6 flex flex-col items-center justify-center p-6 rounded-none dark:rounded-3xl transition-all duration-300 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] dark:shadow-xl dark:backdrop-blur-md dark:bg-black/20 dark:border dark:border-white/10">
        <p className="text-sm font-bold text-black dark:text-slate-400 dark:font-medium text-center">
          © {currentYear} RahtuAnom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
