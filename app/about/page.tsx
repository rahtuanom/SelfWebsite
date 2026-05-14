import PageTransition from "@/components/PageTransition";
import ExperienceBento from "@/components/ExperienceBento";

export default function About() {
  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-6 bg-transparent text-foreground overflow-hidden">
        
        {/* Doodle Pattern for Light Mode (Crosses and Squiggles) */}
        <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-center items-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="crosses" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 30 20 L 30 40 M 20 30 L 40 30" stroke="currentColor" strokeWidth="2" className="text-slate-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crosses)" />
          </svg>
        </div>

        <div className="w-full max-w-6xl z-40 relative">
          <h1 className="text-4xl md:text-5xl font-black text-royal-blue dark:text-sky-blue mb-12 text-center tracking-tight pt-8">
            Tentang Saya
          </h1>
          
          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            
            {/* Bio Card - Spans 2 columns on desktop */}
            <div className="md:col-span-2 p-8 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[6px_6px_0_0_#0f172a] hover:shadow-[8px_8px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl dark:hover:border-sky-blue/30 group">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-royal-blue dark:text-sky-blue">👋</span> Profil & Vibe
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                Saya adalah mahasiswa tingkat akhir program studi Teknologi Informasi di Universitas Udayana. Saya memiliki minat mendalam pada pengembangan perangkat lunak modern, pemodelan kecerdasan buatan (AI), serta seni menyampaikan informasi berbasis data (<strong className="text-royal-blue dark:text-sky-blue">Visual Data Storytelling</strong>).
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                Di luar ranah teknikal, saya gemar mengeksplorasi dunia fotografi dan desain grafis. Kemampuan saya dalam mengelola dan memecahkan masalah sistem operasi Linux tumbuh dari proses belajar otodidak, yang melatih saya untuk selalu adaptif dan mampu mengoptimalkan sumber daya teknologi dalam kondisi apa pun.
              </p>
            </div>

            {/* Skills Card - 1 column */}
            <div className="p-8 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[6px_6px_0_0_#0f172a] hover:shadow-[8px_8px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl dark:hover:border-royal-blue/30 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-royal-blue dark:text-sky-blue">⚡</span> Core Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Data Science", "Machine Learning", "NLP", "Clustering", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Adobe CC", "Linux OS"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl transition-all duration-300 bg-sky-100 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a] text-xs font-bold text-slate-900 dark:bg-royal-blue/20 dark:border-sky-blue/30 dark:shadow-none dark:text-sky-100 dark:rounded-full hover:bg-royal-blue hover:text-white dark:hover:bg-sky-blue dark:hover:text-slate-900 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Pengalaman Organisasi & Kepanitiaan (Interactive Bento Component) */}
            <ExperienceBento />

          </div>
        </div>
      </main>
    </PageTransition>
  );
}
