import PageTransition from "@/components/PageTransition";

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

        <div className="w-full max-w-4xl z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue dark:text-sky-blue mb-12 text-center">Tentang Saya</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bio Card */}
            <div className="p-8 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">Profil & Vibe</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Saya adalah lulusan Teknologi Informasi Universitas Udayana (April 2026). Dengan tinggi 177 cm dan berat 72 kg, keseharian saya dipenuhi dengan kecintaan terhadap *Visual Data Storytelling*.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Selain aktif mendevelop aplikasi dan melatih model AI, saya memiliki hobi di bidang fotografi dan *design graphic*. Saya juga terbiasa mengotak-atik sistem operasi Linux, *skill* yang lahir karena harus *survive* di dunia IT menggunakan "laptop kentang".
              </p>
            </div>

            {/* Skills Card */}
            <div className="p-8 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Core Skills</h2>
              <div className="flex flex-wrap gap-3">
                {["Data Science", "Machine Learning", "NLP", "Clustering & Text Mining", "Software Engineering", "Next.js", "Fotografi & Desain (Adobe CC)", "Linux OS"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl transition-all duration-300 bg-sky-100 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a] text-sm font-bold text-slate-900 dark:bg-black/40 dark:border-white/10 dark:shadow-sm dark:text-sky-blue dark:rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Organisasi Card */}
            <div className="p-8 rounded-3xl transition-all duration-300 bg-white border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 md:col-span-2 mt-4 dark:bg-black/20 dark:backdrop-blur-md dark:border-white/10 dark:shadow-xl dark:hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Pengalaman Organisasi & Aktivitas Kampus</h2>
              <div className="flex flex-col gap-6">
                
                <div className="border-l-4 border-royal-blue pl-4">
                  <h3 className="text-xl font-bold">Kepala Bidang Jurnalis dan Bursa</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">PAKSI Udayana • Jan 2023 - Des 2023</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    Mengelola publikasi dan branding digital organisasi. Merancang feed & story Instagram, membuat video pengenalan fungsionaris, dan memanajemen kalender konten serta analitik interaksi.
                  </p>
                </div>
                
                <div className="border-l-4 border-sky-blue pl-4">
                  <h3 className="text-xl font-bold">Sekretaris II & Anggota Aktif</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Kelompok Studi Jurnalistik MAESTRO • Jan 2023 - Des 2023</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    Melakukan perekaman dokumen, memfasilitasi komunikasi internal/eksternal, serta terlibat dalam pembuatan *event report*, buletin, dan pelatihan jurnalistik.
                  </p>
                </div>

                <div className="border-l-4 border-royal-blue pl-4">
                  <h3 className="text-xl font-bold">Anggota Bidang Pemrograman</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">UKM Robotec (Kontes Robot SAR Indonesia)</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    Berperan aktif dalam tim kontes Robot SAR dan memberikan materi pemrograman untuk anggota baru divisi.
                  </p>
                </div>

                <div className="border-l-4 border-sky-blue pl-4">
                  <h3 className="text-xl font-bold">Anggota Bidang Spiritual</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">HMTI Universitas Udayana • Jan 2023 - Des 2023</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    Memfasilitasi dan mengkoordinasikan kegiatan keagamaan guna mendukung kelancaran aktivitas organisasi.
                  </p>
                </div>
                
                <div className="border-l-4 border-royal-blue pl-4">
                  <h3 className="text-xl font-bold">Wakil Ketua & Ketua Seksi Bidang 3</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">OSIS SMA N 1 Gianyar • 2018 - 2021</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">
                    Aktif di Pramuka Bantara dan OSIS. Bertanggung jawab atas acara sekolah, upacara, pengadaan sound system, serta melatih kepemimpinan dan manajemen tim.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
