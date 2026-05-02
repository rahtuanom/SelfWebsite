import PageTransition from "@/components/PageTransition";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { id: 1, title: "Indonesian News Topic Modeling", category: "Data Science / NLP", desc: "Proyek skripsi: merancang end-to-end NLP pipeline untuk memproses 100.000+ judul berita dengan model Agglomerative Hierarchical Clustering." },
    { id: 2, title: "HaloHati (Microsoft Elevate Hackathon)", category: "Front-End Web", desc: "Mendesain dan mengimplementasikan antarmuka front-end responsif serta user-friendly, berkolaborasi penuh dalam integrasi sistem web." },
    { id: 3, title: "RevoU Capstone: Software Engineering", category: "Full-Stack Web", desc: "Berperan sebagai Team Leader yang mengelola project timeline dan memandu pengembangan aplikasi web secara end-to-end (Front-end & Back-end)." },
    { id: 4, title: "RevoU Capstone: Data Analysis", category: "Data Analysis", desc: "Berfokus secara mendalam pada tahap data cleaning dan preprocessing. Mengkoordinasikan tugas analisis tim demi efisiensi workflow yang optimal." },
  ];

  return (
    <PageTransition>
      <main className="relative flex flex-col items-center justify-start min-h-screen py-20 px-6 bg-transparent text-foreground overflow-hidden">
        
        {/* Doodle Pattern for Light Mode (Dots/Speckles) */}
        <div className="absolute inset-0 z-0 flex pointer-events-none dark:hidden opacity-30 justify-center items-center">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="text-slate-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="w-full max-w-5xl z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue dark:text-sky-blue mb-4 text-center">Project Portfolio</h1>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Here are some of the selected projects I've worked on recently. They range from frontend interfaces to complex backend systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group p-6 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 flex flex-col h-full dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl">
                {/* Image Placeholder */}
                <div className="w-full h-56 rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                   <span className="text-slate-400 dark:text-slate-500 font-medium">[Project Screenshot]</span>
                </div>
                
                <span className="text-xs font-bold uppercase tracking-widest text-sky-blue mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                  {project.desc}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-royal-blue dark:text-sky-blue font-bold hover:underline w-max">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
