import PageTransition from "@/components/PageTransition";

export default function Gallery() {
  // Creating a dummy array for the gallery
  const photos = Array.from({ length: 6 }).map((_, i) => i + 1);

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

        <div className="w-full max-w-5xl z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue dark:text-sky-blue mb-4 text-center">Visual Gallery</h1>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            A collection of moments, achievements, and behind-the-scenes glimpses into my life and career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div 
                key={photo} 
                className="group relative aspect-square rounded-3xl overflow-hidden flex items-center justify-center transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl"
              >
                {/* Photo Placeholder */}
                <div className="absolute inset-0 m-4 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">[Photo {photo}]</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-royal-blue/0 group-hover:bg-royal-blue/20 dark:group-hover:bg-sky-blue/20 transition-colors duration-300 pointer-events-none rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
